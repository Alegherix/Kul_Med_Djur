import React, { createContext, useContext } from 'react';
import { useImmerReducer } from 'use-immer';
import { EventPeriod, EventType } from '../utils/eventUtils';

interface IEventDispatchContext {
  dispatch: React.Dispatch<IEventAction> | null;
}

interface IEventStateContext {
  state: IEventState;
}

interface IEventAction {
  period: EventPeriod;
  type: EventType;
  summary: string;
}

interface IEventState {
  first: {
    type: EventType;
    summary: string;
  };
  second: {
    type: EventType;
    summary: string;
  };
  third: {
    type: EventType;
    summary: string;
  };
  fourth: {
    type: EventType;
    summary: string;
  };
}

const initialState: IEventState = {
  first: {
    type: '',
    summary: '',
  },
  second: {
    type: '',
    summary: '',
  },
  third: {
    type: '',
    summary: '',
  },
  fourth: {
    type: '',
    summary: '',
  },
};

// Not happy, but unsure how to further abstract this...
const eventReducer = (draft: IEventState, action: IEventAction) => {
  switch (action.period) {
    case 'first': {
      if (draft.first.type === action.type) {
        draft.first.type = '';
        draft.first.summary = '';
      } else {
        draft.first.type = action.type;
        draft.first.summary = action.summary;
      }
      return;
    }
    case 'second': {
      if (draft.second.type === action.type) {
        draft.second.type = '';
        draft.second.summary = '';
      } else {
        draft.second.type = action.type;
        draft.second.summary = action.summary;
      }
    }
    case 'third': {
      draft.third.type === action.type
        ? (draft.third.type = '')
        : (draft.third.type = action.type);
      return;
    }
    case 'fourth': {
      draft.fourth.type === action.type
        ? (draft.fourth.type = '')
        : (draft.fourth.type = action.type);
      return;
    }

    default:
      return;
  }
};

// Separate Contexts, if just want to subscribe to dispatch and not state and viceversa
export const EventDispatchContext = createContext<IEventDispatchContext>({
  dispatch: null,
});
export const EventStateContext = createContext<IEventStateContext>({
  state: initialState,
});

const EventProvider = ({ children }) => {
  const [state, dispatch] = useImmerReducer(eventReducer, initialState);

  return (
    <EventDispatchContext.Provider value={{ dispatch }}>
      <EventStateContext.Provider value={{ state }}>
        {children}
      </EventStateContext.Provider>
    </EventDispatchContext.Provider>
  );
};

// Unified interface for acessing Event dispatch from within app
export const useEventDispatch = () => {
  return useContext(EventDispatchContext);
};

// Unified interface for acessing Event state from within app
export const useEventState = () => {
  return useContext(EventStateContext);
};

export default EventProvider;

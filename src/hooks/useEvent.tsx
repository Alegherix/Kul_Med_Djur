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
}

interface IEventState {
  first: {
    type: EventType;
  };
  second: {
    type: EventType;
  };
  third: {
    type: EventType;
  };
  fourth: {
    type: EventType;
  };
}

const initialState: IEventState = {
  first: {
    type: '',
  },
  second: {
    type: '',
  },
  third: {
    type: '',
  },
  fourth: {
    type: '',
  },
};

// Not happy, but unsure how to further abstract this...
const eventReducer = (draft: IEventState, action: IEventAction) => {
  switch (action.period) {
    case 'first': {
      draft.first.type === action.type
        ? (draft.first.type = '')
        : (draft.first.type = action.type);
      return;
    }
    case 'second': {
      draft.second.type === action.type
        ? (draft.second.type = '')
        : (draft.second.type = action.type);
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

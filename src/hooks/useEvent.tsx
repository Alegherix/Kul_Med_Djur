import React, { createContext, useContext } from 'react';
import produce from 'immer';
import { useImmerReducer } from 'use-immer';

interface IEventState {
  firstEvent: string;
  secondEvent: string;
  thirdEvent: string;
  fourthEvent: string;
  payload: string;
}

interface IEventAction {
  type: 'firstEvent' | 'secondEvent' | 'thirdEvent';
}

interface IEventDispatchContext {
  dispatch: React.Dispatch<IEventAction> | null;
}

interface IEventStateContext {
  state: IEventState;
}

const initialState: IEventState = {
  firstEvent: '',
  secondEvent: '',
  thirdEvent: '',
  fourthEvent: '',
  payload: '',
};

const eventReducer = (draft: IEventState, action: IEventAction) => {
  switch (action.type) {
    case 'firstEvent': {
      draft.firstEvent = draft.payload;
      return;
    }
    case 'secondEvent': {
      draft.secondEvent = draft.payload;
      return;
    }
    case 'thirdEvent': {
      draft.secondEvent = draft.payload;
      return;
    }
  }
};

const EventDispatchContext = createContext<IEventDispatchContext>({
  dispatch: null,
});

const EventStateContext = createContext<IEventStateContext>({
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

export default EventProvider;

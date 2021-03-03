import React, { createContext, useContext, useReducer } from 'react';
import produce from 'immer';

interface IEventState {
  firstEvent: string;
  secondEvent: string;
  thirdEvent: string;
  fourthEvent: string;
  payload: string;
}

interface IEventAction {
  type: string;
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
  }
};

const curriedEventReducer = produce(eventReducer);

const EventUseReducer = () => {
  const [state, dispatch] = useReducer(curriedEventReducer, initialState);
};

const EventDispatchContext = createContext({});
const EventStateContext = createContext({});

const EventProvider = ({ children }) => {
  <EventDispatchContext.Provider value={{}}>
    <EventStateContext.Provider value={{}}>
      {children}
    </EventStateContext.Provider>
  </EventDispatchContext.Provider>;
};

export default EventProvider;

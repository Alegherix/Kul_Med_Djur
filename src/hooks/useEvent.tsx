import React, { createContext, useContext } from 'react';
import { useImmerReducer } from 'use-immer';

interface IEventState {
  firstEvent: string;
  secondEvent: string;
  thirdEvent: string;
  fourthEvent: string;
  payload: string;
}

interface IEventAction {
  type: 'firstEvent' | 'secondEvent' | 'thirdEvent' | 'fourthEvent';
  payload: 'dogEvent' | 'catEvent' | 'horseEvent';
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
      draft[action.type] === action.payload
        ? (draft[action.type] = '')
        : (draft[action.type] = action.payload);
      return;
    }
    // case 'secondEvent': {
    //   state.secondEvent = state.payload;
    //   return;
    // }
    // case 'thirdEvent': {
    //   state.secondEvent = state.payload;
    //   return;
    // }
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

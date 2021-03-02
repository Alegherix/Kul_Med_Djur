import React, { createContext, useContext } from 'react';

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

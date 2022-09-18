import React, { useContext, useEffect, useState, useRef } from "react";

const IntersectionObserverContext = React.createContext();

const callback = (next) => {
  return (entries, obv) => {
    entries.forEach((entry, i) => {
      const state = {};
      if (entry.isIntersecting) {
        state.isIntersecting = true;
        state.intersectionRatio = entry.intersectionRatio;
      } else {
        state.isIntersecting = false;
        state.intersectionRatio = entry.intersectionRatio;
      }
      next(entry, state);
    });
  };
};

const IntersectionManager = ({
  children,
  threshold = [0],
  root = null,
  rootMargin = "0px 0px 0px 0px",
}) => {
  const observers = useRef(new Map());

  const next = (reference, state) => {
    const handler = observers.current.get(reference.target);
    if (handler?.action) {
      const prevState = handler?.state;
      const currState = { ...state };
      if (
        prevState &&
        currState.intersectionRatio < prevState?.intersectionRatio
      ) {
        currState.increasingRatio = false;
      } else {
        currState.increasingRatio = true;
      }
      observers.current.set(reference.target, {
        ...handler,
        state: currState,
      });
      handler.action(currState);
    }
  };

  const intersectionInstance = useRef(
    new IntersectionObserver(callback(next), {
      threshold,
      root,
      rootMargin,
    })
  );

  const registerObserver = (reference, action) => {
    observers.current.set(reference, { action });
    intersectionInstance.current.observe(reference);
  };

  useEffect(() => {
    return () => {
      intersectionInstance.current.disconnect();
      observers.current.clear();
    };
  }, []);

  return (
    <IntersectionObserverContext.Provider value={{ registerObserver }}>
      {children}
    </IntersectionObserverContext.Provider>
  );
};

const useIntersection = () => {
  return useContext(IntersectionObserverContext);
};

export { IntersectionManager, useIntersection };

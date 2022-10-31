import React, { useContext, useEffect, useRef } from "react";

interface IObservers {
  [index: string]: IntersectionObserver;
}
type TObserverTargetHandler = (state: IntersectionObserverEntry) => void;

interface contextProps {
  createObserver(id: string, root: HTMLElement): void;
  setObserverTarget(
    id: string,
    reference: HTMLElement,
    action: TObserverTargetHandler
  ): void;
}

const IntersectionObserverContext =
  React.createContext<contextProps | null>(null);

const callback = (
  next: (s: IntersectionObserverEntry, o: IntersectionObserver) => void
) => {
  return (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    entries.forEach((entry, _) => {
      next(entry, observer);
    });
  };
};

const IntersectionObserverManager = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const observerTargets = useRef(
    new Map<string, WeakMap<Element, TObserverTargetHandler>>()
  );
  const observers = useRef<IObservers>({});

  const next = (
    state: IntersectionObserverEntry,
    observer: IntersectionObserver
  ) => {
    let id = "";
    for (const i in observers) {
      if (observers.current[i] == observer) {
        id = i;
      }
    }

    const handler = observerTargets.current.get(id)?.get(state.target);
    if (handler) handler(state);
  };

  function createObserver(
    id: string,
    root: HTMLElement,
    rootMargin: string = "0",
    threshold: number[] = [1]
  ) {
    if (Object.hasOwn(observers.current, id)) {
      console.error("observer id should be unique");
      return;
    }

    observers.current[id] = new IntersectionObserver(callback(next), {
      root,
      threshold,
      rootMargin,
    });
  }

  const setObserverTarget = (
    id: string,
    reference: HTMLElement,
    action: TObserverTargetHandler
  ) => {
    if (!Object.hasOwn(observers.current, id)) {
      console.error("observer id not found");
      return;
    }

    observers.current[id].observe(reference);
    let idTargets = observerTargets.current.get(id);

    if (!idTargets) {
      observerTargets.current.set(id, new WeakMap());
      idTargets = observerTargets.current.get(id);
    }

    idTargets?.set(reference, action);
  };

  useEffect(() => {
    return () => {
      Object.values(observers.current).forEach((o) => o.disconnect());
    };
  }, []);

  return (
    <IntersectionObserverContext.Provider
      value={{ createObserver, setObserverTarget }}
    >
      {children}
    </IntersectionObserverContext.Provider>
  );
};

const useIntersection = () => {
  return useContext(IntersectionObserverContext);
};

export { IntersectionObserverManager, useIntersection };

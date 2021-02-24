import { Action, Reducer } from "redux";
import { AppThunkAction } from "./";

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface RouterState {
  isLoading: boolean;
  routers: Router[];
}

export interface Router {
  id: string;
  title: string;
  vehicle: string;
  comment: string;
  locations: any;
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface ReceiveRouterAction {
  type: "RECEIVE_ROUTER";
  routers: Router[];
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = ReceiveRouterAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
  requestRouters: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
    // Only load data if it's something we don't already have (and are not already loading)
    const appState = getState();
    if (appState && appState.routers) {
      fetch(`https://localhost:44348/api/router`)
        .then((response) => response.json() as Promise<Router[]>)
        .then((data) => {
          dispatch({ type: "RECEIVE_ROUTER", routers: data });
        });
    }
  },
  saveRouter: (obj: any): AppThunkAction<KnownAction> => (
    dispatch,
    getState
  ) => {
    // Only load data if it's something we don't already have (and are not already loading)
    const appState = getState();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    };
    if (appState && appState.groups) {
      fetch(`https://localhost:44348/api/routers`, requestOptions)
        .then((response) => response.json() as Promise<Router[]>)
        .then((data) => {
          console.log("data", data);
          fetch(`https://localhost:44348/api/routers`)
            .then((response) => response.json() as Promise<Router[]>)
            .then((data1) => {
              dispatch({ type: "RECEIVE_ROUTER", routers: data1 });
            });
        });
    }
  },
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

const unloadedState: RouterState = { routers: [], isLoading: false };

export const reducer: Reducer<RouterState> = (
  state: RouterState | undefined,
  incomingAction: Action
): RouterState => {
  if (state === undefined) {
    return unloadedState;
  }

  const action = incomingAction as KnownAction;
  switch (action.type) {
    case "RECEIVE_ROUTER":
      return {
        routers: action.routers,
        isLoading: true,
      };
  }

  return state;
};

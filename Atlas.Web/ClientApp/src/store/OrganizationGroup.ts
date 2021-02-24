import { Action, Reducer } from "redux";
import { AppThunkAction } from "./";

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface OrganizationGroupState {
  isLoading: boolean;
  groups: OrganizationGroup[];
}

export interface OrganizationGroup {
  id: string;
  title: string;
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface ReceiveOrganizationGroupAction {
  type: "RECEIVE_GROUPS";
  groups: OrganizationGroup[];
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = ReceiveOrganizationGroupAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
  requestGroups: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
    // Only load data if it's something we don't already have (and are not already loading)
    const appState = getState();
    if (appState && appState.groups) {
      fetch(`https://localhost:44348/api/groups`)
        .then((response) => response.json() as Promise<OrganizationGroup[]>)
        .then((data) => {
          dispatch({ type: "RECEIVE_GROUPS", groups: data });
        });
    }
  },
  saveGroup: (obj: any): AppThunkAction<KnownAction> => (
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
      fetch(`https://localhost:44348/api/groups`, requestOptions)
        .then((response) => response.json() as Promise<OrganizationGroup[]>)
        .then((data) => {
          console.log("data", data);
          fetch(`https://localhost:44348/api/groups`)
            .then((response) => response.json() as Promise<OrganizationGroup[]>)
            .then((data1) => {
              dispatch({ type: "RECEIVE_GROUPS", groups: data1 });
            });
        });
    }
  },
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

const unloadedState: OrganizationGroupState = { groups: [], isLoading: false };

export const reducer: Reducer<OrganizationGroupState> = (
  state: OrganizationGroupState | undefined,
  incomingAction: Action
): OrganizationGroupState => {
  if (state === undefined) {
    return unloadedState;
  }

  const action = incomingAction as KnownAction;
  switch (action.type) {
    case "RECEIVE_GROUPS":
      return {
        groups: action.groups,
        isLoading: true,
      };
  }

  return state;
};

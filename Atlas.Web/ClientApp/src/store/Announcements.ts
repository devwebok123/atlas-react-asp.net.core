import { Action, Reducer } from "redux";
import { AppThunkAction } from "./";

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface AnnouncementsState {
  isLoading: boolean;
  announcements: Announcement[];
}

export interface Announcement {
  id: string;
  title: string;
  bodyText: string;
  createdDateTime: string;
  modifiedDateTime: string;
  createdBy: string;
  organizationId: string;
  selectedGroups: [
    {
      id: string;
      title: string;
      members: [
        {
          id: string;
          displayTitle: string;
          umbracoMemberId: string;
          groups: string;
        }
      ];
    }
  ];
  selectedMembers: [
    {
      id: string;
      displayTitle: string;
      umbracoMemberId: string;
      groups: string;
    }
  ];
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface ReceiveAnnouncementsAction {
  type: "RECEIVE_ANNOUNCEMENTS";
  announcements: Announcement[];
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = ReceiveAnnouncementsAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
  requestAnnouncements: (): AppThunkAction<KnownAction> => (
    dispatch,
    getState
  ) => {
    // Only load data if it's something we don't already have (and are not already loading)
    const appState = getState();
    if (appState && appState.announcements) {
      fetch(`https://localhost:44348/api/announcements`)
        .then((response) => response.json() as Promise<Announcement[]>)
        .then((data) => {
          dispatch({ type: "RECEIVE_ANNOUNCEMENTS", announcements: data });
        });
    }
  },
  saveAnnouncements: (obj: any): AppThunkAction<KnownAction> => (
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
    if (appState && appState.announcements) {
      fetch(`https://localhost:44348/api/announcements`, requestOptions)
        .then((response) => response.json() as Promise<Announcement[]>)
        .then((data) => {
          console.log("data", data);
          fetch(`https://localhost:44348/api/announcements`)
            .then((response) => response.json() as Promise<Announcement[]>)
            .then((data1) => {
              dispatch({ type: "RECEIVE_ANNOUNCEMENTS", announcements: data1 });
            });
        });
    }
  },
  removeAnnouncement: (id: string): AppThunkAction<KnownAction> => (
    dispatch,
    getState
  ) => {
    // Only load data if it's something we don't already have (and are not already loading)
    const appState = getState();
    const requestOptions = {
      method: "DELETE",
    };
    if (appState && appState.announcements) {
      fetch(`https://localhost:44348/api/announcements/` + id, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          fetch(`https://localhost:44348/api/announcements`)
            .then((response) => response.json() as Promise<Announcement[]>)
            .then((data1) => {
              dispatch({ type: "RECEIVE_ANNOUNCEMENTS", announcements: data1 });
            });
        });
    }
  },
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

const unloadedState: AnnouncementsState = {
  announcements: [],
  isLoading: false,
};

export const reducer: Reducer<AnnouncementsState> = (
  state: AnnouncementsState | undefined,
  incomingAction: Action
): AnnouncementsState => {
  if (state === undefined) {
    return unloadedState;
  }

  const action = incomingAction as KnownAction;
  switch (action.type) {
    case "RECEIVE_ANNOUNCEMENTS":
      return {
        announcements: action.announcements,
        isLoading: true,
      };
  }

  return state;
};

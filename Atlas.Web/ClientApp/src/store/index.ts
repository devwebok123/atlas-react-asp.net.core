import * as Announcements from "./Announcements";
import * as Groups from "./OrganizationGroup";
import * as Routers from "./Router";
import * as Staffs from "./OrganizationMember";
import * as Counter from "./Counter";

// The top-level state object
export interface ApplicationState {
  counter: Counter.CounterState | undefined;
  announcements: Announcements.AnnouncementsState | undefined;
  groups: Groups.OrganizationGroupState | undefined;
  staffs: Staffs.OrganizationMemberState | undefined;
  routers: Routers.RouterState | undefined;
}

// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
export const reducers = {
  counter: Counter.reducer,
  announcements: Announcements.reducer,
  groups: Groups.reducer,
  staffs: Staffs.reducer,
  routers: Routers.reducer,
};

// This type can be used as a hint on action creators so that its 'dispatch' and 'getState' params are
// correctly typed to match your store.
export interface AppThunkAction<TAction> {
  (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}

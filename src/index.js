// import store from "./store";
// import * as actions from './actionTypes';
// import { bugAdded, bugResolved } from "./actions";

// console.log(store); // check out what properties are in the store

// const unsubscribe = store.subscribe(() => {
//     console.log("Store changed!", store.getState());
// });
// // This runs every time the store is changed. If the store changes, we want to refresh the UI. UI components should subscribe to the store so that they get notified when the state of the store changes.

// // store.dispatch({
// //     type: actions.BUG_ADDED,
// //     payload: {
// //         description: "Bug 1"
// //     }
// // });
// // When we dispatch this action, our store is going to call our reducer, it's going to give it the current state and the action that we dispatched. Based on the type of action, we're going to get the new state. Then it's going to notify the subscribers.

// // Refactor dispatch code for BUG_ADDED for cleaner code than the one above. Must have action creators and import them.
// store.dispatch(bugAdded("Bug 1"));

// store.dispatch(bugResolved(1));

// unsubscribe(); // If you call this function here, we won't get notified on the bugRemoved action below. 

// store.dispatch({
//     type: actions.BUG_REMOVED,
//     payload: {
//         id: 1
//     }
// });

// console.log(store.getState());

import store from "./customStore";
import * as actions from "./actions";

store.subscribe(() => {
    console.log("Store changed!")
});

store.dispatch(actions.bugAdded("Bug 1"));

console.log(store.getState());
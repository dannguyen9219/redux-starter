// Dispatching an action is not easy, just take a look at index.js when dispatching the action for bugAdded and bugRemoved. You have to type the entire structure of this object. What if there are multiple places where we want to dispatch the same action, when we have to repeat all this structure in multiple places.
// To improve this, we can create a function that would create this action object for us. We call it an action creator. Then we will just update this function here only once.

import * as actions from "./actionTypes";

// export function bugAdded(description) {
//     return {
//         type: actions.BUG_ADDED,
//         payload: {
//             description: "Bug 1"
//         }
//     }
// };

export const bugAdded = description => ({
    type: actions.BUG_ADDED,
    payload: {
        description: description
    }
});
// Using arrow functions is more discrete.


export const bugResolved = id => ({
    type: actions.BUG_RESOLVED,
    payload: {
        id: id
    }
});
import { createAction, createReducer } from "@reduxjs/toolkit";

// Action Creators
export const bugAdded = createAction("bugAdded");

export const bugResolved = createAction("bugResolved");

export const bugRemoved = createAction("bugRemoved");

// Dispatching an action is not easy, just take a look at index.js when dispatching the action for bugAdded and bugRemoved. You have to type the entire structure of this object. What if there are multiple places where we want to dispatch the same action, when we have to repeat all this structure in multiple places.
// To improve this, we can create a function that would create this action object for us. We call it an action creator. Then we will just update this function here only once.

// Reducer
let lastId = 0;

export default createReducer([], {
    // key: value
    // actions: functions (event => event handler)
    [bugAdded.type]: (bugs, action) => {
        bugs.push(
            {
                id: ++lastId,
                description: action.payload.description,
                resolved: false,
            }
        )
    },

    [bugResolved.type]: (bugs, action) => {
        const index = bugs.findIndex(bug => bug.id === action.payload.id);
        bugs[index].resolved = true;
    }
});
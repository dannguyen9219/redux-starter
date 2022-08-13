import { createAction } from "@reduxjs/toolkit";

// Action Creators
export const bugAdded = createAction("bugAdded");

export const bugResolved = createAction("bugResolved");

export const bugRemoved = createAction("bugRemoved");

// Dispatching an action is not easy, just take a look at index.js when dispatching the action for bugAdded and bugRemoved. You have to type the entire structure of this object. What if there are multiple places where we want to dispatch the same action, when we have to repeat all this structure in multiple places.
// To improve this, we can create a function that would create this action object for us. We call it an action creator. Then we will just update this function here only once.

// Reducer
let lastId = 0;

export default function reducer(state = [], action) {

    // Using switch and case
    switch (action.type) {
        case bugAdded.type:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false,
                }
            ];
        
        case bugRemoved.type:
            return state.filter(bug => bug.id !== action.payload.id);
        
        case bugResolved.type:
            return state.map(bug => 
                bug.id !== action.payload.id ? bug : {...bug, resolved: true});
                // takes a bug, if the id of the bug does not equal the action.payload.id, then we just want to return the bug as is. Otherwise, we want to take a copy of this bug with all of its properties, and updating the resolved to true
        default:
            return state;
    }
};
// This reducer function is called from index.js, which called store.js where this reducer lies. 
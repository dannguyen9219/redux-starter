// Action types
const BUG_ADDED = "bugAdded";
const BUG_REMOVED = "bugRemoved";
const BUG_RESOLVED = "bugResolved";

// Action Creators
export const bugAdded = description => ({
    type: BUG_ADDED,
    payload: {
        description: description
    }
});
// Using arrow functions is more discrete.


export const bugResolved = id => ({
    type: BUG_RESOLVED,
    payload: {
        id: id
    }
});
// Dispatching an action is not easy, just take a look at index.js when dispatching the action for bugAdded and bugRemoved. You have to type the entire structure of this object. What if there are multiple places where we want to dispatch the same action, when we have to repeat all this structure in multiple places.
// To improve this, we can create a function that would create this action object for us. We call it an action creator. Then we will just update this function here only once.

// Reducer
let lastId = 0;

export default function reducer(state = [], action) {
    // if (action.type === 'bugAdded')
    //     return [
    //         ...state,
    //         {
    //             id: ++lastId,
    //             description: action.payload.description,
    //             resolved: false
    //         }
    //     ]
    // else if (action.type === 'bugRemoved')
    //     return state.filter(bug => bug.id !== action.payload.id);
    
    // return state;

    // Using switch and case
    switch (action.type) {
        case BUG_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false,
                }
            ];
        
        case BUG_REMOVED:
            return state.filter(bug => bug.id !== action.payload.id);
        
        case BUG_RESOLVED:
            return state.map(bug => 
                bug.id !== action.payload.id ? bug : {...bug, resolved: true});
                // takes a bug, if the id of the bug does not equal the action.payload.id, then we just want to return the bug as is. Otherwise, we want to take a copy of this bug with all of its properties, and updating the resolved to true
        default:
            return state;
    }
};
// This reducer function is called from index.js, which called store.js where this reducer lies. 
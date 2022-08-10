// Assume that there's an empty array for bugs
// import { BUG_ADDED, BUG_REMOVE} from './actionTypes';
import * as actions from './actionTypes';

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
        case actions.BUG_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false,
                }
            ];
        case actions.BUG_REMOVED:
            return state.filter(bug => bug.id !== action.payload.id);
        default:
            return state;
    }
};
// This reducer function is called from index.js, which called store.js where this reducer lies. 
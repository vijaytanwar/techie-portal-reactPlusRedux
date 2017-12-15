import actionTypes from "../actions/types";
import { combineReducers } from "redux";

function techies(state = [], action) {
    switch (action.type) {
        case actionTypes.GET_ALL_TECHIES: {
            return Array.from(state);
        }
        case actionTypes.ADD_NEW_TECHIE:
            action.techie.id = state.length + 1;
            return [
                ...state,
                action.techie
            ];
        case actionTypes.UPDATE_EXISTING_TECHIE:
            var techies = Array.from(state);
            let techie = techies.filter(t => t.id === action.techie.id)[0];
            let index = state.indexOf(techie);
            techies[index] = action.techie;
            return techies
        case actionTypes.APPROVE_TECHIE: {
            let techies = Array.from(state);
            let techie = techies.filter(t => t.id === action.techie.id)[0];
            let index = state.indexOf(techie);
            techies[index] = action.techie;
            techies[index].approved = !techies[index].approved;
            return techies
        }
        default:
            return state;
    }
}

function isTechieFormVisible(state = false, action) {
    switch (action.type) {
        case actionTypes.TOGGLE_ADD_EDIT_FORM:
            return !state;
        case actionTypes.ADD_NEW_TECHIE:
        case actionTypes.UPDATE_EXISTING_TECHIE: {
            return !state;
        }
        default: return state;
    }
}

function techieToEdit(state = null, action) {
    switch (action.type) {
        case actionTypes.TOGGLE_ADD_EDIT_FORM: {
            if (action.techie) {
                return action.techie;
            } else {
                return null;
            }
        }
        case actionTypes.UPDATE_EXISTING_TECHIE:
            return state;
        default: return state;
    }
}

const readCombinedReducers = combineReducers({
    techies,
    isTechieFormVisible,
    techieToEdit
});

export default readCombinedReducers;
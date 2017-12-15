import actionTypes from "./types";

const actions = Object.freeze({
    getTechies: () => {
        return {
            type: actionTypes.GET_TECHIES
        }
    },
    toggleAddEditTechieForm: (techie) => {
        return {
            type: actionTypes.TOGGLE_ADD_EDIT_FORM,
            techie
        }
    },
    saveTechie: (techie) => {
        return {
            type: actionTypes.ADD_NEW_TECHIE,
            techie
        }
    },
    updateTechie: (techie) => {
        return {
            type: actionTypes.UPDATE_EXISTING_TECHIE,
            techie
        }
    },
    approveTechie: (techie) => {
        return {
            type: actionTypes.APPROVE_TECHIE,
            techie
        }
    }
});

export default actions;
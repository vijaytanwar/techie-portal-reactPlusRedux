import React from "react";
import PropTypes from "prop-types";
import actions from "../actions/index";

const Techie = ({ techie, dispatch, showActions }) => (
    <li>
        <div>{techie.firstName}</div>
        <div>{techie.lastName}</div>
        <div>{techie.email}</div>
        {showActions &&
            <div>
                <input type="button" value="edit" onClick={e => {
                    dispatch(actions.toggleAddEditTechieForm(techie));
                }} />
                <input type="button" value={techie.approved ? "un-approve" : "approve"} onClick={e => {
                    dispatch(actions.approveTechie(techie));
                }} />
            </div>
        }
    </li>
);
Techie.propTypes = {
    techie: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    showActions: PropTypes.bool
};

export default Techie;
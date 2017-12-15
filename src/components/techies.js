import React from "react";
import PropTypes from "prop-types";
import Techie from "./techie";

const TechiesList = ({ techies, dispatch, showActions }) => (
    <ul>
        {
            techies.map((t, index) => {
                return <Techie key={index} techie={t} dispatch={dispatch} showActions={showActions} />
            })
        }
    </ul>
);


TechiesList.propTypes = {
    techies: PropTypes.arrayOf(
        PropTypes.shape({
            firstName: PropTypes.string.isRequired,
            lastName: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            briefIntro: PropTypes.string.isRequired,
            approved: PropTypes.bool.isRequired
        }).isRequired
    ).isRequired,
    dispatch: PropTypes.func.isRequired,
    showActions: PropTypes.bool
};

export default TechiesList;
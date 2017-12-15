import React from "react";
import PropTypes from "prop-types";
import TechiesList from "../components/techies";
import actions from "../actions/index";

const TechiesContainer = ({ techies, dispatch }) => (
    <div className={"techies-container"}>
        <div>
            <input type="button" className="add-new-techie" value="Add new Techie" onClick={e => dispatch(actions.toggleAddEditTechieForm())} />
        </div>
        <table>
            <thead>
                <tr>
                    <th>All Techies</th>
                    <th>Approved Techies</th>
                    <th>Un-approved Techies</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <TechiesList techies={techies} dispatch={dispatch} showActions={true}  />
                    </td>
                    <td>
                        <TechiesList techies={techies.filter(t => t.approved)} dispatch={dispatch} />
                    </td>
                    <td>
                        <TechiesList techies={techies.filter(t => !t.approved)} dispatch={dispatch} />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
);

TechiesContainer.propTypes = {
    techies: PropTypes.arrayOf(
        PropTypes.shape({
            firstName: PropTypes.string.isRequired,
            lastName: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            briefIntro: PropTypes.string.isRequired,
            approved: PropTypes.bool.isRequired
        }).isRequired
    ).isRequired,
    dispatch: PropTypes.func.isRequired
};
export default TechiesContainer;
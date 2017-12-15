import { connect } from "react-redux";
import NewTechieForm from "../components/newTechieForm";
import actions from "../actions/index";

const mapStateToProps = state => {
    return {
        techie: state.techieToEdit,
        isTechieFormVisible: state.isTechieFormVisible
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onClick: (techie) => {
            if (techie.id) {
                dispatch(actions.updateTechie(techie));
            } else {
                dispatch(actions.saveTechie(techie));
            }
        }
    }
}

const TechieFormConnector = connect(
    mapStateToProps,
    mapDispatchToProps
)(NewTechieForm);

export default TechieFormConnector;
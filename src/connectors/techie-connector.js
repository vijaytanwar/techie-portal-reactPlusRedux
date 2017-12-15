import { connect } from "react-redux";
import techiesContainer from "../containers/techiesContainer";

const mapStateToProps = state => {
    return {
        techies: state.techies
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch: dispatch
    }
}
const TechieConnector = connect(
    mapStateToProps,
    mapDispatchToProps
)(techiesContainer);
export default TechieConnector;
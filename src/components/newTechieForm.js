import React from "react";
import PropTypes from "prop-types"

class NewTechieForm extends React.Component {
    constructor({ techie, isTechieFormVisible, onClick }) {
        super();
        this.onClick = onClick;
    }
    render() {
        var self = this;
        self.techie = this.props.techie ? this.props.techie : { firstName: "", email: "", lastName: "", briefIntro: "" };
        return (
            <div style={{ display: this.props.isTechieFormVisible ? "block" : "none" }} className="techie-form-container">
                <h2>Techie Form</h2>
                <form onSubmit={e => {
                    e.preventDefault();
                    if (!self.techie.id) { self.techie.approved = false; }
                    self.onClick(self.techie);
                    e.target.reset();
                }}>
                    <div className="input-field">
                        <label htmlFor="firstName">
                            First Name
                </label>
                        <input type="text" name="firstName" defaultValue={this.techie.firstName} onChange={(e) => { self.techie.firstName = e.target.value; }} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="last-name">
                            Last Name
                    </label>
                        <input type="text" name="lastName" defaultValue={this.techie.lastName} onChange={(e) => { self.techie.lastName = e.target.value; }} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">
                            Email
                    </label>
                        <input type="text" name="email" defaultValue={this.techie.email} onChange={(e) => { self.techie.email = e.target.value; }} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="briefIntro">
                            Brief Intro
                        </label>
                        <textarea type="text" name="briefIntro" defaultValue={this.techie.briefIntro} onChange={(e) => { self.techie.briefIntro = e.target.value; }}></textarea>
                    </div>
                    <div className="input-field">
                        <input type="submit" />
                    </div>
                </form>
            </div>
        )
    }
}

NewTechieForm.protoTypes = {
    techie: PropTypes.object
}

export default NewTechieForm;
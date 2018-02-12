
import React from 'react';
import { Link } from 'react-router-dom';

export default class AuthPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { username: "", password: "", orgName: "", recoveryEmail: "", publicUsername: "", publicPassword: "", adminUsername: "", adminPassword: "" };

        this.handleSignupSubmit = this.handleSignupSubmit.bind(this);
        this.handleSignupFormChange = this.handleSignupFormChange.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleLoginFormChange = this.handleLoginFormChange.bind(this);
    }

    handleSignupSubmit(event) {
        this.setState({ username: "", password: "" });
        console.log(event, this.state);
        event.preventDefault();
    }

    handleSignupFormChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleLoginSubmit(event) {
        this.setState({ orgName: "", recoveryEmail: "", publicUsername: "", publicPassword: "", adminUsername: "", adminPassword: "" });
        console.log(event, this.state);
        event.preventDefault();
    }

    handleLoginFormChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return <div>
            <h2>Remember the face, but not the name?</h2>
            <h4>Our free, password-protected picture directory will help you find who you were looking for</h4>
            <br />
            {/* <a href="/demo"></a> */}
            <Link to="/demo">Check out the demo</Link>
            <br />
            <br />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <h4>Sign up your organization</h4>
                        <div className="form-group text-align-left">
                            <form onSubmit={this.handleSignupSubmit}>
                                <label for="orgName">Organization name </label>
                                <input className="form-control" type="text" value={this.state.orgName} onChange={this.handleSignupFormChange} name="orgName" id="orgName" />

                                <label for="recoveryEmail">Recovery email </label>
                                <input className="form-control" type="email" value={this.state.recoveryEmail} onChange={this.handleSignupFormChange} name="recoveryEmail" id="recoveryEmail" />

                                <br />
                                <label for="publicUsername">Public username </label>
                                <input className="form-control" type="text" value={this.state.publicUsername} onChange={this.handleSignupFormChange} name="publicUsername" id="publicUsername" />
                                <small>This public username and password can be shared publicly in your org</small>

                                <label for="publicPassword">Public password</label>
                                <input className="form-control" type="password" value={this.state.publicPassword} onChange={this.handleSignupFormChange} name="publicPassword" id="publicPassword" />

                                <br />
                                <label for="privateUsername">Admin username </label>
                                <input className="form-control" type="text" value={this.state.adminUsername} onChange={this.handleSignupFormChange} name="adminUsername" id="adminUsername" />
                                <small>This admin username and password should <i className="text-primary">not</i> be shared publicly in your org</small>

                                <label for="adminPassword">Admin password</label>
                                <input className="form-control" type="password" value={this.state.adminPassword} onChange={this.handleSignupFormChange} name="adminPassword" id="adminPassword" />

                                <br />
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-5 offset-md-2">
                        <h4>Login</h4>
                        <div className="form-group text-align-left">
                            <form onSubmit={this.handleLoginSubmit}>
                                <label for="username">Username</label>
                                <input className="form-control" type="text" value={this.state.username} onChange={this.handleLoginFormChange} name="username" id="username" />

                                <label for="password">Password</label>
                                <input className="form-control" type="password" value={this.state.password} onChange={this.handleLoginFormChange} name="password" id="password" />
                                <br />
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
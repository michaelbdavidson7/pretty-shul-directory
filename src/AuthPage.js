
import React from 'react';
import { Link } from 'react-router-dom';

export default class AuthPage extends React.Component {
    render() {
        return <div>
            <h2>Remember the face, but not the name?</h2>
            <h4>Our free, password-protected picture directory will help you find the name of the person you were looking for</h4>
            <br />
            {/* <a href="/demo"></a> */}
            <Link to="/demo">Check out the demo</Link>
            <br />
            <br />
            <br />
            <div class="container">
                <div class="row">
                    <div class="col-md-5">
                        <h4>Sign up your organization</h4>
                        <div class="form-group text-align-left">
                            <label for="orgName">Organization name </label>
                            <input class="form-control" type="text" id="orgName" />

                            <label for="recoveryEmail">Recovery email </label>
                            <input class="form-control" type="email" id="recoveryEmail" />

                            <br />
                            <label for="publicUsername">Public username </label>
                            <input class="form-control" type="text" id="publicUsername" />
                            <small>This public username and password can be shared publicly in your org</small>

                            <label for="publicPassword">Public password</label>
                            <input class="form-control" type="password" id="publicPassword" />

                            <br />
                            <label for="privateUsername">Admin username </label>
                            <input class="form-control" type="text" id="adminUsername" />
                            <small>This admin username and password should <i class="text-primary">not</i> be shared publicly in your org</small>

                            <label for="adminPassword">Admin password</label>
                            <input class="form-control" type="password" id="adminPassword" />

                            <br />
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                    <div class="col-md-5 offset-md-2">
                        <h4>Login</h4>
                        <div class="form-group text-align-left">
                            <label for="username">Username</label>
                            <input class="form-control" type="text" id="username" />

                            <label for="password">Password</label>
                            <input class="form-control" type="password" id="password" />
                            <br />
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
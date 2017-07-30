import React from 'react';
import PropTypes from 'prop-types';
import {Link, NavLink} from 'react-router-dom';
import {Card, CardTitle, CardText, RaisedButton, TextField} from 'material-ui';

import './App.css';

export const HomePage = () => (
    <Card className="container">
        <CardTitle title="React Application" subtitle="This is the home page."/>
    </Card>
);

const SignUpForm = ({
    onSubmit,
    onChange,
    errors,
    user,
}) => (
    <Card className="container">
        <form action="/" onSubmit={onSubmit}>
            <h2 className="card-heading">Sign Up</h2>

            {errors.summary && <p className="error-message">{errors.summary}</p>}

            <div className="field-line">
                <TextField
                    floatingLabelText="Name"
                    name="name"
                    errorText={errors.name}
                    onChange={onChange}
                    value={user.name}
                />
            </div>

            <div className="field-line">
                <TextField
                    floatingLabelText="Email"
                    name="email"
                    errorText={errors.email}
                    onChange={onChange}
                    value={user.email}
                />
            </div>

            <div className="field-line">
                <TextField
                    floatingLabelText="Password"
                    type="password"
                    name="password"
                    onChange={onChange}
                    errorText={errors.password}
                    value={user.password}
                />
            </div>

            <div className="button-line">
                <RaisedButton type="submit" label="Create New Account" primary/>
            </div>

            {/*<CardText>Already have an account? <Link to={'/login'}>Log in</Link></CardText>*/}
            {/*<CardText>Already have an account? <Link to={'/login'}>Log in</Link></CardText>*/}
        </form>
    </Card>
);

SignUpForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};


const LoginForm = ({
    onSubmit,
    onChange,
    errors,
    user
}) => (
    <Card className="container">
        <form action="/" onSubmit={onSubmit}>
            <h2 className="card-heading">Login</h2>

            {errors.summary && <p className="error-message">{errors.summary}</p>}

            <div className="field-line">
                <TextField
                    floatingLabelText="Email"
                    name="email"
                    errorText={errors.email}
                    onChange={onChange}
                    value={user.email}
                />
            </div>

            <div className="field-line">
                <TextField
                    floatingLabelText="Password"
                    type="password"
                    name="password"
                    onChange={onChange}
                    errorText={errors.password}
                    value={user.password}
                />
            </div>

            <div className="button-line">
                <RaisedButton type="submit" label="Log in" primary/>
            </div>

            {/*<CardText>Don't have an account? <Link to={'/signup'}>Create one</Link>.</CardText>*/}
        </form>
    </Card>
);

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};

export const Base = ({children}) => (
    <div>
        <div className="top-bar">
            <div className="top-bar-left">
                {/*<NavLink to="/">React App</NavLink>*/}
            </div>

            <div className="top-bar-right">
                {/*<NavLink to="/login">Log in</NavLink>*/}
                {/*<NavLink to="/signup">Sign up</NavLink>*/}
            </div>

        </div>

        {children}

    </div>
);

Base.propTypes = {
    children: PropTypes.object.isRequired
};

export class SignUpPage extends React.Component {

    /**
     * Class constructor.
     */
    constructor(props) {
        super(props);

        // set the initial component state
        this.state = {
            errors: {},
            user: {
                email: '',
                name: '',
                password: ''
            }
        };

        this.processForm = this.processForm.bind(this);
        this.changeUser = this.changeUser.bind(this);
    }

    /**
     * Change the user object.
     *
     * @param {object} event - the JavaScript event object
     */
    changeUser(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;

        this.setState({
            user
        });
    }

    /**
     * Process the form.
     *
     * @param {object} event - the JavaScript event object
     */
    processForm(event) {
        // prevent default action. in this case, action is the form submission event
        event.preventDefault();

        console.log('name:', this.state.user.name);
        console.log('email:', this.state.user.email);
        console.log('password:', this.state.user.password);
    }

    /**
     * Render the component.
     */
    render() {
        return (
            <SignUpForm
                onSubmit={this.processForm}
                onChange={this.changeUser}
                errors={this.state.errors}
                user={this.state.user}
            />
        );
    }

}


export class LoginPage extends React.Component {

    /**
     * Class constructor.
     */
    constructor(props) {
        super(props);

        // set the initial component state
        this.state = {
            errors: {},
            user: {
                email: '',
                password: ''
            }
        };

        this.processForm = this.processForm.bind(this);
        this.changeUser = this.changeUser.bind(this);
    }

    /**
     * Process the form.
     *
     * @param {object} event - the JavaScript event object
     */
    processForm(event) {
        // prevent default action. in this case, action is the form submission event
        event.preventDefault();

        console.log('email:', this.state.user.email);
        console.log('password:', this.state.user.password);
    }

    /**
     * Change the user object.
     *
     * @param {object} event - the JavaScript event object
     */
    changeUser(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;

        this.setState({
            user
        });
    }

    /**
     * Render the component.
     */
    render() {
        return (
            <LoginForm
                onSubmit={this.processForm}
                onChange={this.changeUser}
                errors={this.state.errors}
                user={this.state.user}
            />
        );
    }

}

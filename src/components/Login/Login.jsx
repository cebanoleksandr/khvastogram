import React from "react";

import './Login.css';

class Login extends React.Component {
    state = {
        login: '',
        password: '',
        loginError: '',
        passwordError: '',
        rememberMe: false,
    };

    handleSubmit = (event) => {
        event.preventDefault();
        // onSubmit(this.state);
        let loginForm = {
            login: this.state.login,
            password: this.state.password,
            rememberMe: this.state.rememberMe,
        }
        console.log(loginForm);

        this.setState({
            login: '',
            password: '',
            loginError: '',
            passwordError: '',
            rememberMe: false,
        })
    }

    render() {
        let {
            login,
            password,
            loginError,
            passwordError,
        } = this.state;

        return (
            <>
                <h1 className="loginTitle">Log in</h1>
                <div className='form'>
                    <form onSubmit={this.handleSubmit}>
                        <div className='form__input'>
                            <label>
                                Login:
                                <input
                                    name={'email'}
                                    type="text"
                                    className={`login ${loginError ? 'is_danger' : ''}`}
                                    value={login}
                                    placeholder='Login'
                                    onChange={(event) => {
                                        this.setState({ login: event.target.value });
                                        if (login.search(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/) !== -1) {
                                            this.setState({ loginError: '' });
                                        } else {
                                            this.setState({ loginError: 'Please, enter the correct login' });
                                        }
                                    }}
                                    onBlur={() => {
                                        if (!login) {
                                            this.setState({ loginError: 'Login is required' });
                                        } else if (login.search(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/) !== -1) {
                                            this.setState({ loginError: '' });
                                        } else {
                                            this.setState({ loginError: 'Please, enter the correct login' });
                                        }
                                    }}
                                />
                            </label>
                            <p className='error'>{loginError}</p>
                        </div>

                        <div className='form__input'>
                            <label>
                                Password:
                                <input
                                    name={'password'}
                                    type="password"
                                    className={`password ${passwordError ? 'is_danger' : ''}`}
                                    value={password}
                                    placeholder='Password'
                                    onChange={(event) => {
                                        this.setState({ password: event.target.value });
                                        if (password.length < 5 || password.length > 20) {
                                            this.setState({ passwordError: 'Password must be between 5 and 12 characters' });
                                        } else {
                                            this.setState({ passwordError: '' });
                                        }
                                    }}
                                    onBlur={() => {
                                        if (!password) {
                                            this.setState({ passwordError: 'Password is required' });
                                        } else if (password.length < 5 || password.length > 20) {
                                            this.setState({ passwordError: 'Password must be between 5 and 12 characters' });
                                        } else {
                                            this.setState({ passwordError: '' });
                                        }
                                    }}
                                />
                            </label>
                            <p className='error'>{passwordError}</p>
                        </div>

                        <div className='form__input form__checkbox'>
                            <label>
                                <input type="checkbox" className="loginChecked" name={'rememberMe'} onChange={() => {
                                    let chacked = document.querySelector('.loginChecked');
                                    if (chacked.checked === true) {
                                        this.setState({rememberMe: true});
                                    } else {
                                        this.setState({rememberMe: false});
                                    }
                                }} />
                                remember me
                            </label>
                        </div>

                        <button
                            type='submit'
                            className='auth__button'
                            disabled={!login || !password || passwordError || loginError ? true : false}
                        >
                            Log in
                        </button>
                    </form>
                </div>
            </>
        )
    }
}

export default Login;

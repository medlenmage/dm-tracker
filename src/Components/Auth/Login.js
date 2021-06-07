import React from 'react';
import { Link } from 'react-router-dom';

export const Login = (props) => {
    const email = React.createRef();
    const password = React.createRef();
    const invalidDialog = React.createRef();

    const handleLogin = (e) => {
        e.preventDefault();

        return fetch('http://127.0.0.1:8000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                username: email.current.value,
                password: password.current.value,
            }),
        })
        .then((res) => res.json())
        .then((res) => {
            if ('valid' in res && res.valid && 'token' in res) {
                localStorage.setItem('dm_user_id', res.token);
                localStorage.setItem('user_id', res.id);
                props.history.push('/home');
            } else {
                invalidDialog.current.showModal();
            }
        });
    };

    return (
        <main className="container--login ">
            <dialog className="dialog dialog--auth" ref={invalidDialog}>
                <div>Email or password was not valid.</div>
                <button className="button--close" onClick={(e) => invalidDialog.current.close()}>Close</button>
            </dialog>
            <section>
                <form className="form--login text-center" onSubmit={handleLogin}>
                    <h1 className="mt-5 mb-3 loginHeader">Dungeoneer's Guide</h1>
                    <h2 className="loginHeader">Please sign in</h2>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input ref={email} type="email" id="email" className="form-control m-auto" placeholder="Email address" required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputPassword"> Password </label>
                        <input ref={password} type="password" id="password" className="form-control m-auto" placeholder="Password" required />
                    </fieldset>
                    <fieldset style={{
                      textAlign: 'center',
                    }}>
                        <button className="btn btn-danger btn-sep icon-send" type="submit">Sign In</button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Register</Link>
            </section>
        </main>
    )

}
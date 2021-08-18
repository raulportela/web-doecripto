import '../styles/login.scss';

function Login() {
    return (
        <main className="box-login">
            <h2>Login - Doe Cripto</h2>
            <form action="">
                <div className="input-field">
                    <input type="text" name="username" id="username" placeholder="Enter Your Username" />
                    <div className="underline"></div>
                </div>
                <div className="input-field">
                    <input type="password" name="password" id="password" placeholder="Enter Your Password" />
                    <div className="underline"></div>
                </div>

                <input type="submit" value="Continue" />
            </form>

        </main>
    );
}
export default Login;
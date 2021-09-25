import '../../../styles/login.scss';
import { useForm } from 'react-hook-form'
import { useContext } from 'react';
import { Context } from '../../../Context/AuthContext'

 type Data = {
     email: string;
     password: string;
 }
function Login() {
    const { register, handleSubmit } = useForm();
    const { authenticated, handleLogin } = useContext(Context);
    
    async function handleSignIn(data: Data){
        console.log(data);
        await handleLogin(data);
    }

    console.log(authenticated);
  

    return (
        <div className="classbody">
        <main className="box-login">
            <h2>Login - Doe Cripto</h2>
            <form action="" onSubmit={handleSubmit(handleSignIn)}>
                <div className="input-field">
                    <input {...register('email')} type="text" name="email" id="email" placeholder="Enter Your Username" />
                    <div className="underline"></div>
                </div>
                <div className="input-field">
                    <input {...register('password')} type="password" name="password" id="password" placeholder="Enter Your Password" />
                    <div className="underline"></div>
                </div>

                <input type="submit" value="Continue" />
            </form>

        </main>
        </div>
    );
}
export default Login;
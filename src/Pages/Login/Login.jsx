import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);

    const [loginError, setLoginError] = useState('');

    const [loginUserEmail, setLoginUserEmail] = useState('')
    const [token] = useToken(loginUserEmail);

    //After Login Navigation
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.form?.pathname || '/';

    if(token){
        navigate(from, { replace: true });
    }

    const handleLogin = data => {
        console.log(data);
        setLoginError('')
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email)
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message)
            })
    }

    return (
        <div className='py-20 max-w-[450px] mx-auto'>
            <div className='shadow-lg  p-10 rounded-lg'>
                <h1 className='text-4xl text-accent font-bold text-center'>Login</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full mx-auto">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Email</span>
                        </label>
                        <input type="email"
                            {...register("email", {
                                required: 'Email Address Is Required',
                            })}
                            className="input input-bordered w-full"
                        />
                        {errors.email && <p className='text-red-600 font-semibold text-sm' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full mx-auto">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Password</span>
                        </label>
                        <input type="password"
                            {...register("password", {
                                required: 'PassWord is required',
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full"
                        />
                        <label className="label">
                            <span className="label-text  font-semibold">Forget Password</span>
                        </label>
                        {errors.password && <p className='text-red-600 font-semibold text-sm' role="alert">{errors.password?.message}</p>}
                    </div>

                    <input className='btn btn-accent w-full mt-3' type="submit" value="Login" />
                    <div>
                        {
                            loginError && <p className='text-red-500'>{loginError}</p>
                        }
                    </div>
                </form>

                <p className='text-sm text-center mt-3'>New to Doctors Portal? <Link to='/signup' className='text-secondary font-bold'>Create new account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;
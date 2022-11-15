import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const { register, formState: { errors }, handleSubmit } = useForm()

    const handleSignUp = data => {
        console.log(data);
    }

    return (
        <div className='py-20 max-w-[450px] mx-auto'>
            <div className='shadow-lg  p-10 rounded-lg'>
                <h1 className='text-4xl text-accent font-bold text-center'>Sign Up</h1>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full mx-auto">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Name</span>
                        </label>
                        <input {...register("name", {
                            required: "Name is Required"
                        })} type="text" className="input input-bordered w-full" />
                        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                    </div>

                    <div className="form-control w-full mx-auto">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Email</span>
                        </label>
                        <input type="email"{...register("email", {
                            required: true
                        })} className="input input-bordered w-full" />
                        {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                    </div>

                    <div className="form-control w-full mx-auto">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Password</span>
                        </label>
                        <input type="password"
                            {...register("password", {
                                required: 'Password is required',
                                minLength: { value: 6, message: 'Password must be 6 character or long' },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password Must be Strong" }

                            })} className="input input-bordered w-full" />
                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                    </div>

                    <input className='btn btn-accent w-full mt-3' type="submit" value="Sign Up" />
                </form>

                <p className='text-sm text-center mt-3'>Already have an account?<Link to='/login'
                    className='text-secondary font-bold'>Login Now</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;
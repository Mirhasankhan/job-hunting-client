import { useContext, useEffect } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const Login = () => {
    const { signIn,googleSignIn } = useContext(AuthContext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleGoogleSignIn = ()=>{
        googleSignIn()
        .then(() => {          
            toast.success('SignIn successfully', {
                position: 'top-right',
                style: { backgroundColor: 'blue', color: 'white', padding: '10px', fontWeight: 'bold' }
            });
        })
        .catch((error) => {
            toast.error(error.message, {
                position: 'top-right',
                style: { backgroundColor: 'black', color: 'white', fontWeight: 'semibold' }
            })
        })
    }

    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(() => {
                toast.success('SignIn successfully', {
                    position: 'top-right',
                    style: { backgroundColor: 'blue', color: 'white', padding: '10px', fontWeight: 'bold' }
                });
            })
            .catch((error) => {
                toast.error(error.message, {
                    position: 'top-right',
                    style: { backgroundColor: 'black', color: 'white', fontWeight: 'semibold' }
                })
            })
            reset()     
    }

    return (
        <div className="mb-4">
            <h1 className="text-center text-xl md:text-3xl font-semibold py-6">SignIn To Job<span className="text-sky-500">Hunting</span></h1>
            <div className="md:w-1/3 md:mx-auto mx-3">
                <div className="border border-gray-500 rounded-md p-5">
                    <button onClick={handleGoogleSignIn} className="btn text-white btn-warning w-full">Sign IN With Google</button>
                    <h1 className="divider">Or</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium text-gray-500">Email</span>
                            </label>
                            <input {...register("email", { required: true })} type="email" placeholder="Type Your Email" className=" rounded-md border border-gray-500 p-2 outline-green-600" />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium text-gray-500">Password</span>
                            </label>
                            <input {...register("password", { required: true, minLength: 6, })} type="password" placeholder="Type Your Password" className=" rounded-md border border-gray-500 p-2 outline-green-600" />
                            {errors.password && <span className="text-red-600">Password is required</span>}
                        </div>
                        <div className="flex gap-2 items-center">
                            <h1 className="font-medium link text-sky-500">Forgot Password?</h1>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign In" />
                        </div>
                        <h1 className="text-center">Don't have an account?<Link className="text-sky-500" to="/signUp">SignUp</Link></h1>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
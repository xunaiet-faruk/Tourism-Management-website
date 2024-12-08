import { useContext } from "react";
import { FaHome } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Component/Provider/Authprovider";
import Swal from "sweetalert2";


const Login = () => {
    const { signIn, googleSignIn  } =useContext(AuthContext)
    const navigate = useNavigate();
    const hadleSubmit =async(e)=>{ 
        e.preventDefault();
        const form =e.target;
        const email =form.email.value;
        const passWord = form.passWord.value;
        const LoginInfo ={email,passWord}
        console.log(LoginInfo);
        signIn(email,passWord)
        .then(res => {
            const user =res.user;
            console.log(user);
            Swal.fire({
                icon: 'success',
                text: 'Successfully login!',
            });
            navigate('/');
            
        })
        
      
    }

    const handleGoogleSignIn = async () => {
        try {
            const result = await googleSignIn();
            Swal.fire({
                icon: 'success',
                text: 'Google login successful!',
            });
            navigate('/');
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                text: 'Google login failed!',
            });
        }
    };

    return (
        <div>
            <div className="mx-auto mt-16 w-full max-w-md space-y-4 rounded-lg border bg-white p-10 shadow-lg dark:border-zinc-700 dark:bg-zinc-900">
                <h1 className="text-3xl font-semibold">Login</h1>
                <form onSubmit={hadleSubmit} className="space-y-6">
                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <label htmlFor="username_2" className="block font-medium">
                            Useremail
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                            id="username_2"
                            placeholder="Enter username"
                            name="email"
                            type="email"
                        />
                    </div>
                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <label htmlFor="password_2" className="block font-medium">
                            Password
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                            id="password_2"
                            placeholder="Enter password"
                            name="passWord"
                            type="password"
                        />
                       
                    </div>
                    <button className="w- rounded-md bg-[#FB8E26]  px-4 py-2 text-white transition-colors hover:bg-[#eeae73] ">Submit</button>
                </form>
                <p className="text-center text-sm text-zinc-700 dark:text-zinc-300">
                    Already have an account?
                   <Link to={'/register'}>
                        Register
                   </Link>
                </p>
                <div className="my-8 flex items-center">
                    <hr className="flex-1 border-gray-400" />
                    <div className="mx-4 text-gray-400">OR</div>
                    <hr className="flex-1 border-gray-400" />
                </div>
                {/* Social icons */}
                <div className="flex justify-center items-center space-x-4 *:border hover:*:bg-zinc-400/20 *:dark:border-zinc-700">
                    <button onClick={handleGoogleSignIn} aria-label="Log in with Google" className="rounded-full p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                    </button>

                    <Link to={'/'}>
                        <FaHome className="text-2xl hover:text-red-500 cursor-pointer" />
                    </Link>
                   
                </div>
            </div>
        </div>
    );
};

export default Login;
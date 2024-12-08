import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";


const Register = () => {
    const [showName, setShowName] = useState({});
    return (
        <div>
            <div className="mx-auto mt-16 mb-12 w-full max-w-md space-y-4 rounded-lg border bg-white p-10 shadow-lg dark:border-zinc-700 dark:bg-zinc-900">
                <h1 className="text-3xl font-semibold">Register</h1>
                <form action="#" className="space-y-6">
                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <label htmlFor="username_2" className="block font-medium">
                            Username
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                            id="username_2"
                            placeholder="Enter username"
                            name="username"
                            type="text"
                        />
                    </div>
                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <label htmlFor="username_2" className="block font-medium">
                            Email
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                            id="username_2"
                            placeholder="Enter username"
                            name="username"
                            type="text"
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
                            name="password"
                            type="password"
                        />

                    </div>

                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <label htmlFor="password_2" className="block font-medium">
                            Image
                        </label>
                        <div>
                            <label htmlFor="type2-1" className="flex max-w-[380px] md:w-[380px]">
                                <div className="w-fit whitespace-nowrap  bg-[#FB8E26]  px-2 py-1 text-sm text-white">Choose File</div>
                                <div className=" flex w-full max-w-[380px] items-center  border-b-[2px] border-[#FB8E26]  px-2 text-sm font-medium text-gray-400">{showName.name ? showName.name : 'No File Chosen'}</div>
                            </label>
                            <input
                                onChange={(e) => {
                                    if (e.target.files && e.target.files[0]) {
                                        const imageFile = e.target.files[0]; setShowName(imageFile);
                                    }
                                }} className="hidden" type="file" name="" id="type2-1"
                            />
                        </div>

                    </div>

                    <button className="w- rounded-md bg-[#FB8E26]  px-4 py-2 text-white transition-colors hover:bg-[#eeae73] ">Submit</button>
                </form>
                <p className="text-center text-sm text-zinc-700 dark:text-zinc-300">
                    Don&apos;t have an account?
                    <Link to={'/login'}>
                       Login
                    </Link>
                </p>
                <div className="my-8 flex items-center">
                    <hr className="flex-1 border-gray-400" />
                    <div className="mx-4 text-gray-400">OR</div>
                    <hr className="flex-1 border-gray-400" />
                </div>
                {/* Social icons */}
                <div className="flex justify-center items-center space-x-4 *:border hover:*:bg-zinc-400/20 *:dark:border-zinc-700">
                    <button aria-label="Log in with Google" className="rounded-full p-3">
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

export default Register;
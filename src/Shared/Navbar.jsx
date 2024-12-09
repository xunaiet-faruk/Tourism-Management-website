import { useContext, useState } from "react";
import { MdCancel } from "react-icons/md";
import logo from "../../public/image-removebg-preview - 2024-12-07T185231.653.png";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Component/Provider/Authprovider";

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { user, logout } = useContext(AuthContext);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleLogout = () => {
        logout()
            .then(() => {
                console.log("Logged out successfully");
            })
            .catch((error) => console.error("Error during logout:", error));
    };

    return (
        <div className="">
            <div className="absolute top-0 right-16 left-0 z-20 flex items-center justify-end p-5 max-w-screen-xl mx-auto">
                {/* Sidebar Toggle Button */}
                <button onClick={toggleSidebar}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="cursor-pointer hover:text-rose-600 text-white"
                    >
                        <line x1="4" x2="20" y1="12" y2="12" />
                        <line x1="4" x2="20" y1="6" y2="6" />
                        <line x1="4" x2="20" y1="18" y2="18" />
                    </svg>
                </button>

                {/* Background Overlay */}
                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-10"
                        onClick={toggleSidebar}
                    ></div>
                )}

                {/* Sidebar */}
                <div
                    className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform z-20 ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
                        } transition-transform duration-300 ease-in-out`}
                >
                    <div className="flex justify-between items-center">
                        <img className="w-24" src={logo} alt="logo" />
                        <button
                            onClick={toggleSidebar}
                            className="absolute top-7 right-4 text-gray-600 hover:text-gray-800"
                        >
                            <MdCancel className="text-rose-600 text-4xl" />
                        </button>
                    </div>
                    <hr className="border-[#FB8E26] border-1" />
                    <nav className="mt-16 space-y-7 px-6 flex flex-col">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "border-b-2 text-2xl text-center text-[#FB8E26] py-2 border-red-400"
                                    : "text-2xl text-center"
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/addspots"
                            className={({ isActive }) =>
                                isActive
                                    ? "border-b-2 text-2xl text-center text-[#FB8E26] py-2 border-red-400"
                                    : "text-2xl text-center"
                            }
                        >
                            Add Tourists Spot
                        </NavLink>
                        <NavLink
                            to="/AllTouristsSpot"
                            className={({ isActive }) =>
                                isActive
                                    ? "border-b-2 text-2xl text-center text-[#FB8E26] py-2 border-red-400"
                                    : "text-2xl text-center"
                            }
                        >
                            All Tourists Spot
                        </NavLink>
                        <NavLink
                            to="/mylist"
                            className={({ isActive }) =>
                                isActive
                                    ? "border-b-2 text-2xl text-center text-[#FB8E26] py-2 border-red-400"
                                    : "text-2xl text-center"
                            }
                        >
                            My List
                        </NavLink>

                        {user ? (
                            <NavLink
                                onClick={handleLogout}
                                className="text-2xl text-center text-red-500 cursor-pointer"
                            >
                                Logout
                               
                            </NavLink>
                        ) : (
                            <NavLink
                                to="/login"
                                className={({ isActive }) =>
                                    isActive
                                        ? "border-b-2 text-2xl text-center text-[#FB8E26] py-2 border-red-400"
                                        : "text-2xl text-center"
                                }
                            >
                                Login
                            </NavLink>
                        )}
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

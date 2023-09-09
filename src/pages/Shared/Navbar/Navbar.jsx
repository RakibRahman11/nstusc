import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navOptions = <>
        <li><Link to="/"><a>About Us</a></Link></li>
        <li><Link to="/"><a>Committee</a></Link></li>
        <li><Link to="/"><a>Home</a></Link></li>
        <li><Link to="/gallery"><a>Gallery</a></Link></li>
        <li><Link to="/"><a>Events</a></Link></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <Link to="/"><a className="md:text-xl normal-case btn btn-ghost">NSTU Science Club</a></Link>

                </div>
                <div className="hidden navbar-center lg:flex">
                    <ul className="px-1 menu menu-horizontal">
                        {navOptions}
                    </ul>
                </div>
                {
                    user ?
                        <div className="navbar-end">
                            <button onClick={handleLogOut} className="btn btn-ghost navbar-end">
                                LogOut
                            </button>
                        </div>
                        :
                        <div className="navbar-end">
                            <Link to="/login">Login</Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Logout successfully done',
                showConfirmButton: false,
                timer: 1500
            })
            .catch(error => console.log(error))
    }

    const navOptions = <>
        <li><Link to="/about"><a>About Us</a></Link></li>
        <li className="w-1/4"><details>
            <summary>Team</summary>
            <ul>
                <li><Link to="/firstCommittee">1st Steering Committee</Link></li>
                <li><Link to="/secondCommittee">2nd Steering Committee</Link></li>
                <li><Link to="/firstCommittee">3rd Steering Committee</Link></li>
            </ul>
        </details></li>
        <li><Link to="/"><a>Home</a></Link></li>
        <li><Link to="/gallery"><a>Gallery</a></Link></li>
        <li><Link to="/prevEvents"><a>Events</a></Link></li>
    </>
    return (
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
                <img src="https://i.ibb.co/m5HG8CM/logo.png" className="w-12 h-12 lg:w-20 lg:h-20" />
                <Link to="/"><a className="normal-case md:text-xl btn btn-ghost">NSTU Science Club</a></Link>
            </div>
            <div className="hidden navbar-end md:flex">
                <ul className="px-1 menu menu-horizontal" style={{ flexWrap: 'nowrap' }}>
                    {navOptions}
                </ul>
            </div>
            {
                user ?
                    <div className="w-1/2 bg-white md:w-32 navbar-end row-reverse">
                        <button onClick={handleLogOut} className="btn btn-sm md:btn-md">
                            LogOut
                        </button>
                    </div>
                    :
                    <div className="w-1/2 bg-white md:w-32 navbar-end row-reverse">
                        <Link className="bg-white btn btn-sm md:btn-md" to="/login">Login</Link>
                    </div>
            }
        </div>
    );
};

export default Navbar;
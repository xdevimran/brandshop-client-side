import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navigation = () => {
  const { user, logOut } = useContext(AuthContext);
  const avatar = user?.photoURL;
  const name = user?.displayName;
  const handleSignOut = () => {
    logOut().then(() => {
      console.log("sign out successfully");
    });
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/add">Add Product</NavLink>
      </li>
      <li>
        <NavLink to="/cart">My Cart</NavLink>
      </li>
      <li>
        <NavLink to="/signin">Sign In</NavLink>
      </li>
      <li>
        <NavLink to="/signup">Sign Up</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="font-semibold normal-case text-xl">
          <img src="https://i.ibb.co/fQVcWRD/Frame-1.png" alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">{navLinks}</ul>
      </div>
      <div className="navbar-end gap-5">
        {user ? (
          <>
            <p className="text-lg font-semibold">{name}</p>
            <button onClick={handleSignOut} className="btn btn-ghost">
              Sign Out
            </button>

            <div className="avatar placeholder">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                <span>
                  <img src={avatar} alt="" />
                </span>
              </div>
            </div>
          </>
        ) : (
          <NavLink to="/signin" className="">
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navigation;

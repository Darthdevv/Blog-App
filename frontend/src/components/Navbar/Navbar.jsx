import { Link } from 'react-router-dom'
import Logo from '../../images/logoipsum-249.svg'

const Navbar = () => {
  return (
    <nav className="navbar bg-[#0E1217] border border-[#2D323C]">
      <div className="navbar-start">
        <Link to={"/"} className="btn btn-ghost text-xl">
          <img src={Logo} alt="logo" />
        </Link>
      </div>

      <div className="navbar-end max-md:hidden">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/profile"}>Yousef Elgohary</Link>
          </li>
          <li>
            <Link to={"/create"}>Create Post</Link>
          </li>
          <li>
            <Link to={"/authors"}>Authors</Link>
          </li>
          <li>
            <Link to={"/logout"}>Logout</Link>
          </li>
        </ul>
      </div>

      <div dir="rtl" className="navbar-end hidden max-md:block">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
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
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/profile"}>Yousef Elgohary</Link>
            </li>
            <li>
              <Link to={"/create"}>Create Post</Link>
            </li>
            <li>
              <Link to={"/authors"}>Authors</Link>
            </li>
            <li>
              <Link to={"/logout"}>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
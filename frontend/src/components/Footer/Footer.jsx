import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <footer className="footer footer-center p-10 bg-[#0E1217] border border-[#2D323C] text-neutral-content">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/posts/categories/Agriculture"}>Agriculture</Link>
          </li>
          <li>
            <Link to={"/posts/categories/Business"}>Business</Link>
          </li>
          <li>
            <Link to={"/posts/categories/Education"}>Education</Link>
          </li>
          <li>
            <Link to={"/posts/categories/Entertainment"}>Entertainment</Link>
          </li>
          <li>
            <Link to={"/posts/categories/Art"}>Art</Link>
          </li>
          <li>
            <Link to={"/posts/categories/Investment"}>Investment</Link>
          </li>
          <li>
            <Link to={"/posts/categories/Uncategorized"}>Uncategorized</Link>
          </li>
          <li>
            <Link to={"/posts/categories/Weather"}>Weather</Link>
          </li>
        </ul>
      </footer>
      <footer className="footer-center items-center p-4 bg-[#0E1217] text-neutral-content border border-[#2D323C]">
        <div className="items-center">
          <small>Copyright © 2024 - All right reserved - Darthdevv</small>
        </div>
      </footer>
    </footer>
  );
}

export default Footer
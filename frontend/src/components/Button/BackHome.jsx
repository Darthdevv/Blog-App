import { Link } from "react-router-dom"
import { MdKeyboardBackspace } from "react-icons/md";

const BackTo = ({children, to}) => {
  return (
    <Link
      to={to}
      className="btn btn-ghost z-50 border border-[#2D323C] bg-transparent"
    >
      <button className="z-50 flex items-center justify-center py-2 px-5">
        { to === '/' ? <MdKeyboardBackspace size={20} className="mr-3" /> : ''}
        {children}
      </button>
    </Link>
  );
}

export default BackTo
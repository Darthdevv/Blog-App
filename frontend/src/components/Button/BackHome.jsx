import { Link } from "react-router-dom"
import { MdKeyboardBackspace } from "react-icons/md";

const BackHome = () => {
  return (
    <Link
      to={"/"}
      className="btn btn-ghost border border-[#2D323C] bg-transparent"
    >
      <button className=" flex items-center justify-center py-2 px-5">
        <MdKeyboardBackspace size={20} className="mr-3" />
        Go Back Home
      </button>
    </Link>
  );
}

export default BackHome
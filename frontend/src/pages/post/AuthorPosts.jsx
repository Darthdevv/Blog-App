import { Link } from 'react-router-dom';
import Avatar from '../../images/avatar3.jpg'

const AuthorPosts = () => {
  return (
    <Link to={"/posts/users/dd"}>
      <div className=" c gap-3">
        <figure className="w-[30px]">
          <img src={Avatar} alt="avatar" className=" rounded-md" />
        </figure>
        <div>
          <h5 className="text-[12px] text-nowrap -mb-1">By: Yousef Elgohary</h5>
          <small className="text-[10px] text-nowrap">Just Now</small>
        </div>
      </div>
    </Link>
  );
}

export default AuthorPosts
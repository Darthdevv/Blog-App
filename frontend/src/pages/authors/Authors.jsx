import { useState } from "react"
import { authorData } from "../../utilities/data"
import {Link} from 'react-router-dom'

const Authors = () => {

  const [authors, setAuthors] = useState(authorData)
  return (
    <div className="hero min-h-screen bg-[#0E1217]">
      <div className="hero-content max-w-full">
        <div className="max-w-full">
          {authors.length > 0 ? (
            authors.map(({ id, avatar, name, posts }) => (
              <Link key={id} to={`/posts/users/${id}`}>
                <div className="stats bg-[#1d1f26] border border-[#2D323C] hover:border-[#545A69] lg:ml-20 md:ml-10 sm:ml-20 m-5 shadow text-center">
                  <div className="stat w-[300px]">
                    <div className="stat-figure text-secondary">
                      <div className="avatar">
                        <div className="w-16 rounded-full">
                          <img src={avatar} className="w-full" />
                        </div>
                      </div>
                    </div>
                    <div className="stat-title text-white">{name}</div>
                    <div className=" text-md ">{posts}</div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p>No Users Found 🤦🏻‍♂️</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Authors
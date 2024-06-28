import { useState, useEffect } from "react"
import axios from "axios"
import ClipLoader from "react-spinners/ClipLoader"
import AuthorItem from "./AuthorItem"


const Authors = () => {

  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/users`)

        setAuthors(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getUsers();
  }, [])

  if (loading) {
    return (
      <div className="hero min-h-screen bg-[#0E1217]">
        <div className="hero-content max-w-full">
          <div className="max-w-full">
            <ClipLoader color="#4F45E4" size={55} />
          </div>
        </div>
      </div>
    );
  }

  return (
        <div className="hero min-h-screen bg-[#0E1217]">
          <div className="hero-content max-w-full">
            <div className="max-w-full">
              {authors.length > 0 ? (
                authors.map((author) => (
                  <AuthorItem key={author._id} author={author } />
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
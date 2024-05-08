

const Error = () => {
  return (
    <div className="hero min-h-screen bg-[#0E1217]">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <button className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-[#404552]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <p className="py-6 text-2xl text-white">No results found</p>
          <p className="text-[#CFD6E5]">
            We cannot find the posts you are searching for. 🤷🏻‍♂️
          </p>
        </div>
      </div>
    </div>
  );
}

export default Error
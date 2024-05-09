import Posts from "../../components/Posts/Posts";


const Home = () => {
  return (
    <div className="container w-full grid place-items-center min-h-screen bg-[#0E1217]">
      <div>
        <div >
          <Posts/>
        </div>
      </div>
    </div>
  );
}

export default Home
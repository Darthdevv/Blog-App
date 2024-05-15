import Thumbnail from '../../images/blog17.jpg'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import PostAuthor from '../../components/Posts/PostAuthor';
import { AiOutlineClose } from "react-icons/ai";


const PostDetails = () => {
  const navigate = useNavigate();
  return (
    <div onClick={()=> navigate('/')} className=" py-20 hero min-h-screen bg-[#5045e42d]">
      <div className="hero-content text-start text-neutral-content">
        <div className="max-w-full">
          <div className="card max-w-[800px]  bg-[#0E1217] border border-[#545A69] hover:border-[#545A69] shadow-xl">
            <div className=" py-5 px-10 flex items-start justify-between">
              <PostAuthor/>
              <div className='flex items-center justify-between gap-2'>
                <Link to={'/posts/werwer/edit'}><button className='btn btn-ghost'>Edit</button></Link>
                <Link to={'/posts/werwer/delete'}><button className='btn btn-ghost'>Delete</button></Link>
                <Link to={"/"}>
                  <button className="btn btn-circle btn-ghost">
                    <AiOutlineClose />
                  </button>
                </Link>
              </div>
            </div>
            <figure className="px-10 pt-10">
              <img src={Thumbnail} alt="thumbnail" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-start">
              <h2 className="card-title">This is the post title</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                incidunt ex optio voluptate illum veniam, sit vitae, cumque ut
                laudantium necessitatibus? Adipisci ullam, architecto
                exercitationem ex ipsum temporibus ab modi. Ipsum porro tenetur
                veritatis magni quo delectus, aliquid optio harum deserunt eius
                blanditiis ab voluptatem repudiandae, natus temporibus similique
                nisi, placeat est maiores eos amet repellat vero! Modi,
                aspernatur adipisci.
              </p>
              <p>
                Est reprehenderit, quibusdam illo nisi praesentium laborum
                maxime excepturi porro quasi deserunt impedit, eius illum
                dolorem voluptatum distinctio autem, nulla fugiat voluptates?
                Numquam totam magnam iste labore laboriosam natus mollitia!
                Officiis repellat quos impedit unde pariatur, cum excepturi
                soluta! Inventore, id amet. Nesciunt doloremque unde sunt atque
                provident autem optio impedit, voluptas, aperiam, molestiae
                tenetur quidem beatae excepturi suscipit laborum.
              </p>
              <p>
                Id dolore, odio quaerat eius asperiores minus voluptas inventore
                recusandae, doloremque architecto enim voluptate itaque nostrum
                optio magnam culpa quae cumque iure quibusdam nesciunt illum
                laborum fugit? Placeat, fuga ad. Quo hic aliquid doloremque
                aliquam. Neque, eaque commodi! Accusantium, ab blanditiis est
                molestiae quam facere voluptas culpa magni eius eveniet ut, et
                fuga commodi voluptate ipsam ullam harum eum similique! Qui
                vitae fuga voluptatem est nam, dicta nemo repellendus, et rerum
                iste porro nisi hic quas pariatur minus. A facere similique ea,
                repudiandae nemo voluptatibus? Velit qui omnis architecto cum.
                Aut natus, porro ullam corporis quaerat aspernatur non quod quis
                reprehenderit obcaecati officia, ea possimus quae, veniam
                voluptatibus nihil culpa tempora! Vel, sit? Laborum quasi
                tempora, deserunt nisi ab iste.
              </p>
              <p>
                Ea maiores numquam mollitia distinctio, corporis autem enim
                culpa! Vel ut nostrum aut quos veniam assumenda, delectus
                suscipit deleniti odio eos laboriosam dicta aliquid maxime
                perspiciatis eaque, illo eveniet natus! Quis nesciunt rerum
                eveniet maxime consequuntur ad eius odit quidem architecto,
                beatae explicabo rem nostrum modi, ex necessitatibus eligendi
                reiciendis nulla fuga voluptates consequatur dolore. Natus
                laborum ullam reiciendis nemo?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetails
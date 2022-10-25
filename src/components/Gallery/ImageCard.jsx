import React from 'react'
import { format } from "date-fns";
import { f} from '../../assets/index';
const ImageCard = ({ id, userImageURL, user, webformatURL, likes }) => {
  
  return (
    <>
    <div className="p-5 rounded-3xl shadow-md bg-white ">
      <article key={id} className="rounded-3xl">
        <img
          src={webformatURL}
          alt={user}
          className="h-52 object-fit object-cover w-full lg:h-80 
          transition duration-200 ease-in hover:opacity-80
          rounded-3xl"
        />

        <div className="p-5 pb-0 flex flex-col md:flex-row items-start md:items-center justify-between
        
        ">
          <article className="flex items-center w-10 justify-start font-poppins">
            <img
              src={userImageURL? userImageURL : f}
              alt={""}
              className="rounded-full mr-2 w-10 md:w-auto "
            />
            <ul>
              <li className="text-slate-800 font-bold">{user.name}</li>
              <li className="text-sm text-slate-800 opacity-75">
                {format(new Date(), "dd MMMM yyyy")}
              </li>
            </ul>
          </article>

          <article className="mt-5 md:mt-0">
            <a
              href={`https://instagram.com/${user.instagram_username}`}
              className="text-sm text-slate-800 opacity-75 underline font-poppins"
              target="_blank"
              rel="noreferrer"
            >
              {user.instagram_username}
            </a>
            <small className="text-slate-800 opacity-75 block font-poppins">
              {likes} Likes
            </small>
          </article>
        </div>
      </article>
    </div>
  </>
  )
}

export default ImageCard

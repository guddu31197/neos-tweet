import React, { useState } from "react";
import { InsertPhotoOutlinedIcon, GifBoxOutlinedIcon, EmojiEmotionsOutlinedIcon } from "../../icons/Icons";
import { Avatar } from "../avatar/Avatar";
import { createPost } from "../../redux/slices/postSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { defaultuser } from "../../assets";

export const NewPost = () => {
  const [text , setText] =useState("")
  const {encodedToken, user} = useSelector((state)=> state.auth)
  const dispatch = useDispatch()
  const postHandler = ()=>{
    if (encodedToken){
      dispatch(createPost({encodedToken, text}));
      setText("")
      toast.success("post added successfully")
    }
    else{
      console.log("some error occured ")
    }
  }
  return (
    <>
      <div className="rounded w-full p-4 bg-white flex flex-col ">
        <div className="flex items-start">
          <Avatar img={user.userphoto? user.userphoto: defaultuser}/>
          <input type="text" placeholder="type your thought" value={text} onInput={(e)=>setText(e.target.value)} className="outline-none border p-1 w-full  m-2" />
        </div>

        <div className="flex mb-2 ">
          <div className="flex gap-5 ml-16 self-center text-slate-700">

           {/* -------------> code for future use */}
          {/* <div>
            <InsertPhotoOutlinedIcon sx={{ fontSize: 32 }} />
          </div>
          <div>
            <GifBoxOutlinedIcon sx={{ fontSize: 32 }} />
          </div>
          <div>
            <EmojiEmotionsOutlinedIcon sx={{ fontSize: 32 }} />
          </div> */}
          </div>
          
          <button disabled={text.length === 0 || text === "<p><br></p>"} className=" rounded ml-auto border-4 border-blue-600 bg-blue-600 text-white
         p-1 px-4 mr-2 hover:opacity-75 disabled:cursor-not-allowed" onClick={postHandler} >Post</button>
        </div>
      </div>
    </>
  );
};

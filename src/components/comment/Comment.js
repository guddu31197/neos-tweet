import React from "react";
import { useSelector } from "react-redux";
import { SmallAvatar } from "../avatar/SmallAvatar";
import { Link } from "react-router-dom";

export const Comment = ({ firstName, lastName,  username, userphoto, text }) => {
  return (
    <>
      <div className="w-full my-4">
        <div className="flex ">
          <SmallAvatar img={userphoto} />
          <div className="flex flex-col ml-8">
            <Link to="">
              <div className="flex gap-2 ">
                <p>{`${firstName} ${lastName}`}</p>
                <p className="text-slate-700">{"@"+username}</p>
              </div>
            </Link>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../redux/slices/authSlice";
import { defaultuser } from "../../assets";

export const UserProfile = ({ userphoto, firstName, lastName, username }) => {
  return (
    <>
      <Link to={`/profile/${username}`}>
        <div className="flex gap-3 hover:bg-slate-300 p-2 rounded">
          <img className="h-16 w-16 rounded" src={userphoto ? userphoto: defaultuser} alt="user-image" />
          <div className="flex flex-col">
            <div className="flex gap-1 font-bold">
              <p>{firstName}</p>
              <p>{lastName}</p>
            </div>
            <p className="mt-1 text-slate-600">{"@ " + username}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export const UserSuggestion = () => {
  const { allUsers } = useSelector((state) => state.user);
 
  return (
    <>
      <div>
        <p className="text-xl mt-2 mb-4 font-bold">Users You can follow</p>
        <div className="flex flex-col">
          {allUsers?.map((item) => (
            <UserProfile
              key={item.firstName}
              firstName={item.firstName}
              lastName={item.lastName}
              username={item.username}
              userphoto={item.userphoto}
            />
          ))}
        </div>
      </div>
    </>
  );
};

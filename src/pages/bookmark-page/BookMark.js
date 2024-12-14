import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Posts,
  Sidebar,
  SidebarBottom,
  UserSuggestion,
} from "../../components";

export const BookMark = () => {
  const { bookmarks } = useSelector((state) => state.bookmark);

  return (
    <>
      <div className="flex">
        <div className="hidden sm:block md:w-[25%] flex  ">
          <Sidebar />
        </div>
        <div className="w-full md:w-[90%] flex flex flex-col m-2 sm:m-4">
          <h1 className="text-xl mt-2 font-bold">Bookmarked Posts</h1>

          {bookmarks?.length > 0 ? (
            bookmarks?.map((item) => (
              <Posts
                key={item._id}
                _id={item._id}
                content={item.content}
                username={item.username}
                firstName={item.firstName}
                lastName={item.lastName}
                userphoto={item.userphoto}
              />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center">
              <p className="m-2 text-xl text-center text-black">
                No bookmarked post here :(
              </p>{" "}
              <p className="m-2 text-m text-center text-black">
                Don’t let the good ones fly away! Bookmark Tweets to easily find
                them again in the future.
              </p> 
              <button className="w-64 rounded border-2 border-blue-600 bg-blue-600 text-white 
     mt-2 px-8 py-4 hover:opacity-75 "><Link to='/feed'> Let's Bookmark </Link></button> 
            </div>
          )}
          
        
        </div>
        
        <div className="w-[28%] hidden lg:block flex  ">
          <UserSuggestion />
        </div>
      </div>
      <div className="fixed bottom-0  sm:hidden w-full">
        <SidebarBottom />
      </div>
    </>
  );
};

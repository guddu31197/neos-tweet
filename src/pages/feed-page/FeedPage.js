import React, { useState } from "react";
import {
  NewPost,
  Posts,
  Sidebar,
  SidebarBottom,
  UserSuggestion,
} from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPost } from "../../redux/slices/postSlice";

export const FeedPage = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.auth);


  useEffect(() => {
    dispatch(fetchPost());
  }, []);

  return (
    <>
      <div className="flex relative">
        <div className="hidden sm:block md:w-[25%] flex  ">
          <Sidebar />
        </div>
        <div className="w-full md:w-[90%] flex flex flex-col m-2 sm:m-4">
          <NewPost />
          <h1 className="text-xl mt-2 font-bold">Your Posts</h1>

          {posts
            ?.filter((post) => post.username === user.username)
            .map(
              ({
                _id,
                content,
                username,
                firstName,
                lastName,
                comments,
                userphoto,
              }) => (
                <Posts
                  key={_id}
                  _id={_id}
                  content={content}
                  username={username}
                  firstName={firstName}
                  lastName={lastName}
                  userphoto={userphoto}
                />
              )
            )}

          {posts?.filter((post) => post.username === user.username).length ===
            0 && (
            <p className="m-2 text-xl text-center text-black">
              You do not have any posts.
            </p>
          )}
        </div>
        <div className="w-[28%] hidden lg:block flex">
          <UserSuggestion />
        </div>
      </div>
      <div className="fixed bottom-0  sm:hidden w-full">
        <SidebarBottom />
      </div>
    </>
  );
};

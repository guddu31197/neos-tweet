import React, { useEffect } from "react";
import {
  Posts,
  Sidebar,
  SidebarBottom,
  UserSuggestion,
} from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { fetchPost } from "../../redux/slices/postSlice";

export const ExplorePage = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);

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
          <h1 className="text-xl mt-2 font-bold">
            Explore Posts by other users
          </h1>
          {posts?.map(
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

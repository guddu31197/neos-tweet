import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Posts,
  Sidebar,
  SidebarBottom,
  UserSuggestion,
} from "../../components";
import { defaultuser, democover } from "../../assets";
import { logout } from "../../redux/slices/authSlice";
import { fetchPost } from "../../redux/slices/postSlice";
import { followUser, unFollowUser } from "../../redux/slices/userSlice";
import { useParams } from "react-router-dom";

export const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);
  const { user, encodedToken } = useSelector((state) => state.auth);
  const { allUsers } = useSelector((state) => state.user);

  const [profileUser, setProfileUser] = useState({});
  const [isFollowed, setIsFollowed] = useState(false);
  const [totalPostOfUser, setTotalPostofUser] = useState(0);

  const { profileId } = useParams();

  useEffect(() => {
    const totalPost = posts?.filter(
      (item) => item.username === profileUser.username
    );
    setTotalPostofUser(totalPost);
  }, [posts, profileUser]);

  useEffect(() => {
    dispatch(fetchPost());
  }, []);

  useEffect(() => {
    const profileUser = allUsers?.filter((user) => user.username === profileId);
    setProfileUser(profileUser[0]);
  }, [profileId, allUsers]);

  useEffect(() => {
    const followed = allUsers
      ?.find((it) => it.username === user.username)
      ?.following?.some((item) => item.username === profileId);
    setIsFollowed(followed);
  }, [allUsers, profileId]);

  const followUserHandler = () => {
    dispatch(followUser({ userId: profileId, token: encodedToken }));
  };

  const unfollowUserHandler = () => {
    dispatch(unFollowUser({ userId: profileId, token: encodedToken }));
  };

  const logoutHandler = () => {
    dispatch(logout());
    toast.error("Logged out successfully");
    navigate("/");
  };
  return (
    <>
      <div>
        <div className="flex">
          <div className="hidden sm:block md:w-[25%] flex  ">
            <Sidebar />
          </div>
          <div className="flex flex-col w-full md:w-[90%]  m-2 sm:m-4 rounded ">
            <div className="flex flex flex-col p-4 bg-white">
              <div className="relative flex justify-center">
                <img
                  src={profileUser.coverphoto? profileUser.coverphoto : democover}
                  alt="user background image"
                  className="w-full h-[12rem]"
                />
                <div className="absolute bottom-0 -my-16">
                  <img
                    src={
                      profileUser.userphoto
                        ? profileUser.userphoto
                        : defaultuser
                    }
                    alt=" user profile pic"
                    className="border-8 border-white h-32 w-32 rounded-full"
                  />
                </div>
              </div>

              {profileUser.username === user.username ? (
                <div className="flex justify-end gap-1 mt-2 -mb-8">
                  <button
                    onClick={logoutHandler}
                    className="flex items-center rounded border-2 border-blue-600 bg-blue-600 text-white px-4 py-2"
                  >
                    Logout
                  </button>{" "}
                </div>
              ) : (
                <div className=" px-4 py-2 "></div>
              )}

              <div className="flex flex-col text-lg items-center mt-8">
                <p className="mt-2 font-bold text-2xl">
                  {`${profileUser.firstName} ${profileUser.lastName}`}
                </p>
                <p className="text-slate-600">{profileUser.username}</p>
                <p className="text-center ">{profileUser.bio}</p>
                {profileUser.username !== user.username && (
                  <>
                    {isFollowed ? (
                      <button
                        onClick={unfollowUserHandler}
                        className="rounded border-2 border-blue-600 bg-blue-600 text-white 
     mt-2 px-4 hover:opacity-75 disabled:cursor-not-allowed"
                      >
                        Unfollow
                      </button>
                    ) : (
                      <button
                        onClick={followUserHandler}
                        className="rounded border-2 border-blue-600 bg-blue-600 text-white 
     mt-2 px-4 hover:opacity-75 disabled:cursor-not-allowed"
                      >
                        Follow
                      </button>
                    )}
                  </>
                )}

                <div className="w-[90%] rounded h-20 mt-4 flex justify-around bg-slate-100 items-center">
                  <div className="flex flex-col items-center">
                    <p className="font-bold">{profileUser.following?.length}</p>
                    <p>Following</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="font-bold">{totalPostOfUser?.length}</p>
                    <p>posts</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <p className="font-bold">{profileUser.followers?.length}</p>
                    <p>Followers</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xl mt-2 font-bold">User posts</p>
            {posts
              ?.filter((item) => item.username === profileUser.username)
              .map((item) => (
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
              .reverse()}
            {totalPostOfUser?.length === 0 && <p className="m-2 text-xl text-center text-black">
             Currently there is no post to show .
            </p>}

            {/* --------------> code is for future use   */}
            {/* {posts
              ?.filter((item) => item.username === profileUser.username).length===0 &&  <p className="m-2 text-xl text-center text-black">
              You have doesn't any posts.
            </p>} */}
           
          </div>
          <div className="w-[28%] hidden lg:block flex">
            <UserSuggestion />
          </div>
          <div className="fixed bottom-0  sm:hidden w-full">
            <SidebarBottom />
          </div>
        </div>
      </div>
    </>
  );
};

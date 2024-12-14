import React, { useEffect } from "react";
import {
  FavoriteBorderOutlinedIcon,
  FavoriteIcon,
  BookmarkBorderOutlinedIcon,
  EditOutlinedIcon,
  ModeCommentOutlinedIcon,
  DeleteOutlinedIcon,
  MoreVertOutlinedIcon,
  CloseOutlinedIcon,
  FlagOutlinedIcon,
  SendIcon,
  BookmarkIcon,
} from "../../icons/Icons";
import { Avatar, SmallAvatar, Comment, EditModal } from "../../components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./posts.css";
import {
  deletePost,
  dislikePost,
  likePost,
} from "../../redux/slices/postSlice";
import { getCommentOnPost, postComment } from "../../redux/slices/commentSlice";
import {
  addToBookMark,
  removefromBookMark,
} from "../../redux/slices/bookmarkSlice";
import { toast } from "react-toastify";
import { defaultuser } from "../../assets";

export const Posts = ({
  content = "",
  comments = [],
  username = "",
  firstName = "",
  lastName = "",
  userphoto = "",
  _id,
}) => {
  const [menuOn, setMenuOn] = useState(false);
  const [isPostLiked, setIsPostLiked] = useState(false);
  const [editmodal, setEditModal] = useState(false);
  const [displayComment, setDisplayComment] = useState(false);
  const [isPostBookmarked, setIsPostBookmarked] = useState(false);
  const [commentText, setCommentText] = useState("");
  const { encodedToken, user } = useSelector((state) => state.auth);
  const { posts } = useSelector((state) => state.post);
  const { commentList } = useSelector((state) => state.comment);
  const { bookmarks } = useSelector((state) => state.bookmark);
  const dispatch = useDispatch();


  // ----->code for future use
  // const portalHandler = () => {
  //   setMenuOn(!menuOn);
  // };
  const deletePostHandler = () => {
    dispatch(deletePost({ token: encodedToken, postId: _id }));
  };
  const likePostHandler = () => {
    setIsPostLiked(!isPostLiked);
    dispatch(likePost({ postId: _id, token: encodedToken }));
  };
  const disLikePostHandler = () => {
    dispatch(dislikePost({ postId: _id, token: encodedToken }));
    setIsPostLiked(!isPostLiked);
  };

  const getCommentHandler = () => {
    dispatch(getCommentOnPost({ token: encodedToken, postId: _id }));
    setDisplayComment(!displayComment);
  };

  const postCommentHandler = () => {
    dispatch(
      postComment({ text: commentText, token: encodedToken, postId: _id })
    );
    setCommentText("");
  };

  const AddToBookMarkHandler = () => {
    dispatch(addToBookMark({ token: encodedToken, postId: _id }));
    // setIsPostBookmarked(!isPostBookmarked);
  };
  const removefromBookMarkHandler = () => {
    dispatch(removefromBookMark({ token: encodedToken, postId: _id }));
    // setIsPostBookmarked(!isPostBookmarked);
  };


  // useEffect(() => {
  //   const present = bookmarks.some((id) => id === _id);
  //   setisBookmarked(present);
  // }, [bookmarks]); 
  useEffect(() => {
    setIsPostBookmarked(bookmarks?.some((item) => item._id === _id));
  }, [bookmarks]);
  useEffect(() => {
    const post = posts?.find((post) => post._id === _id);
    const liked = post?.likes.likedBy.some((item) => item.id === user.id);
    setIsPostLiked(liked);
  }, [posts]);

  useEffect(() => {
    window.onclick = (e) => {
      if (e.target.className === "modal-wrapper") {
        setEditModal(false);
      }
    };
  });

  const reportPostHandler = () => {
    toast.error("Post reported");
    setMenuOn(!menuOn);
  };
  return (
    <>
      <div className=" my-4 bg-white p-4 rounded w-full">
        <div className="flex">
          <Avatar img={userphoto? userphoto: defaultuser } />

          <div className="flex  flex-col ml-4 w-full">
            <Link to={`/profile/${username}`}>
              <div className="flex gap-2">
                <p className="font-semibold">{`${firstName} ${lastName}`}</p>
                <p className="text-slate-600">{username}</p>
              </div>
            </Link>

            <div className="mt-2 max-w-full">{content}</div>

            <div className="w-full relative flex justify-around mt-3 text-slate-600">
              {isPostLiked ? (
                <button onClick={disLikePostHandler}>
                  <FavoriteIcon className="text-red-500" />
                </button>
              ) : (
                <button onClick={likePostHandler}>
                  <FavoriteBorderOutlinedIcon />
                </button>
              )}
              {isPostBookmarked ? (
                <button onClick={removefromBookMarkHandler}>
                  <BookmarkIcon />
                </button>
              ) : (
                <button onClick={AddToBookMarkHandler}>
                  <BookmarkBorderOutlinedIcon className="text-slate-700" />
                </button>
              )}

              <button onClick={getCommentHandler}>
                <ModeCommentOutlinedIcon />
              </button>
              <button
                className="disabled:cursor-not-allowed disabled:text-slate-400"
                onClick={() => setEditModal(!editmodal)}
                disabled={user.username !== username}
              >
                <EditOutlinedIcon />
              </button>
              {menuOn ? (
                <button onClick={() => setMenuOn(!menuOn)}>
                  <CloseOutlinedIcon />
                </button>
              ) : (
                <button onClick={() => setMenuOn(!menuOn)}>
                  <MoreVertOutlinedIcon />
                </button>
              )}

              {/* ===============
        modal for delete the post
        =============== */}
              <div
                style={{ display: menuOn ? "block" : "none" }}
                className="absolute right-28 bottom-10 bg-blue-200 flex flex-col p-2 rounded"
              >
                {user.username === username ? (
                  <div>
                    <button
                      className="flex p-2 rounded hover:bg-white"
                      onClick={deletePostHandler}
                    >
                      <DeleteOutlinedIcon />
                      <span className="ml-1">Delete</span>
                    </button>
                    <button
                      className="flex p-2 rounded text-red-500 hover:bg-white"
                      onClick={reportPostHandler}
                    >
                      <FlagOutlinedIcon />
                      <span className="ml-1">Report</span>
                    </button>
                  </div>
                ) : (
                  <button className="flex p-2 rounded hover:bg-white">
                    <span className="ml-1">Follow</span>
                  </button>
                )}
              </div>
              {/* ===============
        modal for delete the post
        =============== */}
            </div>
          </div>
        </div>

        {/* ===============
        comment input section 
        =============== */}
        <div
          className="w-full"
          style={{ display: displayComment ? "block" : "none" }}
        >
          <div className="flex py-4 rounded w-full">
            <SmallAvatar img={user.userphoto} />
            <input
              placeholder="reply your thought"
              className="border-2 outline-none pl-2 pr-12 ml-8 w-[100%]"
              value={commentText}
              onInput={(e) => setCommentText(e.target.value)}
            />
            <button
              className=" relative right-10 text-blue-600 disabled:text-slate-500 disabled:cursor-not-allowed"
              onClick={postCommentHandler}
              disabled={commentText.length === 0}
            >
              <SendIcon />
            </button>
          </div>
          <div>
            {commentList?.map((item) => (
              <Comment
                key={item._id}
                _id={item._id}
                firstName={item.firstName}
                lastName={item.lastName}
                text={item.text}
                userphoto={item.userphoto}
                username={item.username}
              />
            ))}
          </div>
        </div>

        {/* ===============
        comment input section
        =============== */}

        {/* ===============
        modal for edit the post
        =============== */}

        <div
          className="edit-modal"
          style={{ display: editmodal ? "flex" : "none " }}
        >
          <div className="modal-wrapper">
            <EditModal
              editmodal={editmodal}
              setEditModal={setEditModal}
              _id={_id}
              postText={content}
            />
          </div>
        </div>
        {/* ===============
        modal for edit the post
        =============== */}
      </div>
    </>
  );
};

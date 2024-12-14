import React, { useState } from "react";
import { Avatar } from "../avatar/Avatar";
import { GifBoxOutlinedIcon, InsertEmoticonIcon, InsertPhotoOutlinedIcon} from "../../icons/Icons";
import { useSelector, useDispatch } from "react-redux";
import { editPost } from "../../redux/slices/postSlice";

export const EditModal = ({setEditModal,postText= "",_id, postId }) => {
  const { encodedToken, user } = useSelector((state) => state.auth);
  const [editedText, setEditedText] = useState(postText);
  const dispatch = useDispatch();
  const editPostHandler = () => {
    dispatch(
      editPost({ token: encodedToken, editedText: editedText, postId: _id })
    );
  };

  return (
    <>
      <div className="flex justify-center h-auto items-center">
        <div className="max-h-[90%] w-[52%]  sm:w-[60%] md:w-[80%] lg:w-[100%] rounded p-4 bg-white">
          <div className="flex items-start">
            <Avatar img={user.userphoto} />
            <textarea
              className="p-2 h-auto w-auto w-full m-2 outline-none border-2 resize-none"
              aria-label="maximum height"
              placeholder="Maximum 4 rows"
              style={{ width: 700, height: 300 }}
              value={editedText}
              onInput={(e) => setEditedText(e.target.value)}
            />
          </div>
          <div className="flex mb-2">
            <div className="flex gap-5 ml-16 self-center text-slate-700">
              <button>
                <div>
                  <GifBoxOutlinedIcon sx={{ fontSize: 32 }} />
                </div>
              </button>
              <button>
                <div>
                  <InsertEmoticonIcon sx={{ fontSize: 32 }} />
                </div>
              </button>
              <button>
                <div>
                  <InsertPhotoOutlinedIcon sx={{ fontSize: 32 }} />
                </div>
              </button>
            </div>

            <button
              className=" rounded ml-auto p-1 px-4 hover:opacity-75 disabled:cursor-not-allowed  border-4 border-blue-600 bg-blue-600 text-white"
              onClick={() => setEditModal(false)}
            >
              Close
            </button>
            <button
              className=" rounded ml-4 mr-2 p-1 px-4 hover:opacity-75 border-4 border-blue-600 bg-blue-600 text-white"
              onClick={editPostHandler}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

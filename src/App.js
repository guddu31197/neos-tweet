import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Footer, Header, PrivateRoute } from "./components";
import {LoginPage, SignupPage, Profile, HomePage, FeedPage, ExplorePage, BookMark} from "./pages"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllUser } from "./redux/slices/userSlice";
import { fetchBookMark } from "./redux/slices/bookmarkSlice";


function App() {
  const {user, encodedToken} = useSelector((state)=> state.auth)
  const dispatch = useDispatch();
  useEffect(()=>{
    if(encodedToken){
      dispatch(fetchBookMark({token: encodedToken }))
    }
  },[encodedToken])

  useEffect(() => {
    dispatch(getAllUser());
  }, [user]);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="app">
        <Header />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          <Route element={<PrivateRoute />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/feed" element={<FeedPage />} />
            {/* <Route path="/profile" element={<Profile />} /> */}
            <Route path="/profile/:profileId" element={<Profile />} />
            <Route path="/explore" element={<ExplorePage/>} />
            <Route path="/bookmark" element={<BookMark/>} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

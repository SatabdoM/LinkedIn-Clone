import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOptions from "./InputOptions";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
import { db } from "../firebase";
import firebase from "firebase/compat/app";

// import firebase from "firebase";
// import { useSelector } from "react-redux";
// import { selectUser } from "./userSlice";
// import FlipMove from "react-flip-move";

// const Feed = () => {
//   const { user } = useSelector(selectUser);
//   const [input, setInput] = useState("");
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     db.collection("posts")
//       .orderBy("timestamp", "desc")
//       .onSnapshot((snapshot) =>
//         setPosts(
//           snapshot.docs.map((doc) => ({
//             id: doc.id,
//             data: doc.data(),
//           }))
//         )
//       );
//   }, []);

//   const sendPost = (e) => {
//     e.preventDefault();

//     db.collection("posts").add({
//       name: user.displayName,
//       description: user.email,
//       message: input,
//       photoUrl: user.photoUrl || "",
//       timestamp: firebase.firestore.FieldValue.serverTimestamp(),
//     });

//     setInput("");
//   };

//   return (
//     <div className="feed">
//       <div className="feed__inputContainer">
//         <div className="feed__input">
//           <CreateIcon />
//           <form>
//             <input
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//             />
//             <button onClick={sendPost} type="submit">
//               Send
//             </button>
//           </form>
//         </div>

//         <div className="feed__inputOptions">
//           <InputOptions title="Photo" Icon={ImageIcon} color="#70B5F9" />
//           <InputOptions title="Video" Icon={SubscriptionsIcon} color="#E7A33E" />
//           <InputOptions title="Event" Icon={EventNoteIcon} color="#C0CBCD" />
//           <InputOptions
//             title="Write article"
//             Icon={CalendarViewDayIcon}
//             color="#7FC15E"
//           />
//         </div>
//       </div>

//       <FlipMove>
//         {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
//           <Post
//             key={id}
//             name={name}
//             description={description}
//             message={message}
//             photoUrl={photoUrl}
//           />
//         ))}
//       </FlipMove>
//     </div>
//   );
// };

// export default Feed;

const Feed = () => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

    useEffect(() => {
      db.collection("posts")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setPosts(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    }, []);

  //Adding the data in the databse
  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: "Satabdo Majumder",
      description: "This is a text",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOptions Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOptions
            Icon={SubscriptionsIcon}
            title="Video"
            color="#E7A33A"
          />
          <InputOptions Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOptions
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>

      {/* Posts */}

      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
};

export default Feed;

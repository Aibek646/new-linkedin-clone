import React, { useState, useEffect } from "react";
import "./Feed.css";
import InputOption from "./InputOption";
import Post from "./Post";
import CreareIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewIcon from "@material-ui/icons/CalendarViewDay";
import { db } from "./firebase";
import firebase from "firebase";

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
  });

  const sendPost = (event) => {
    event.preventDefault();
    db.collection("posts").add({
      name: "Sony Sangha",
      description: "this is a test",
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
          <CreareIcon />
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
          <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
          <InputOption Icon={SubscriptionIcon} title="Video" color="#e7a33e" />
          <InputOption Icon={EventNoteIcon} title="Photo" color="#c0cbcd" />
          <InputOption Icon={CalendarViewIcon} title="Photo" color="#7fc15e" />
        </div>
      </div>
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => {
        return (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        );
      })}
    </div>
  );
};

export default Feed;

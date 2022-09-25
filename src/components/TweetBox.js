import { Avatar, Button } from "@mui/material";
import React from "react";
import "./TweetBox.css";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="" />
          <input placeholder="What's happening?" type="text"></input>
        </div>
        <input
          className="tweetBox__input--img"
          placeholder="Optional: Enter image URL"
          type="text"
        ></input>
        <Button className="tweetBox__btn">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;

import { ChatBubbleOutline, FavoriteBorderOutlined, Publish, Repeat, VerifiedUser } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { getDisplayName } from "@mui/utils";
import React from "react";
import "./Post.css";

function Post({ getDisplayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar />
      </div>
      <div className="post__body">
        <div className="post__body--header">
          <div className="post__body--text">
            <h3>
              Leonardo{" "}
              <span className="post__user">
                <VerifiedUser className="post__badge" /> @Leoomaii
              </span>
            </h3>
          </div>
          <div className="post__body--description">
            <p>Twitter clone</p>
          </div>
        </div>
        <img src="https://cdn-1.motorsport.com/images/amp/0oODaa70/s1000/charles-leclerc-ferrari-f1-75-.webp" />
        <div className="post__footer">
            <ChatBubbleOutline fontSize="small"/>
            <Repeat fontSize="small" />
            <FavoriteBorderOutlined fontSize="small" />
            <Publish fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;

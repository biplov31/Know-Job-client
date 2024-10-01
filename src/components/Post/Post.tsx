import React from 'react'
import PostStyles from "./Post.module.css";
import { Link } from 'react-router-dom';
import { BiLike, BiDislike, BiCommentDetail } from "react-icons/bi";

function Post({ title, content, category, likeCount, dislikeCount }) {
  return (
    <div className={PostStyles.card}>
      <Link to='#' className={PostStyles.category}>{category}</Link>
      <h3>{title}</h3>
      <p>{content.length > 120 ? `${content.slice(0, 120)}...` : content}</p>

      <div className={PostStyles['extra-info']}>
        <span>{likeCount} <BiLike /></span>
        <span>{dislikeCount} <BiDislike /></span>
        <span><BiCommentDetail /></span>
      </div>
    </div>
  )
}

export default Post
import React from 'react'

import { Link } from 'react-router-dom';
import { BiSolidStar, BiLike, BiDislike, BiCommentDetail } from "react-icons/bi";
import ReviewStyles from "./Review.module.css";

export const Review = ({ company, title, content, rating, department, likeCount, dislikeCount }) => {
  return (
    <div className={ReviewStyles.card}>
      <div className={ReviewStyles['first-row']}>
        <span className={ReviewStyles.company}>{company}</span>
        <Link to='#' className={ReviewStyles.department}>{department}</Link>
        <span className={ReviewStyles.rating}>{rating} <BiSolidStar /></span>
      </div>
      <h3>{title}</h3>
      <p>{content.length > 200 ? `${content.slice(0, 200)}...` : content}</p>

      <div className={ReviewStyles['extra-info']}>
        <span>{likeCount} <BiLike /></span>
        <span>{dislikeCount} <BiDislike /></span>
        <span><BiCommentDetail /></span>
      </div>
    </div>
  )
}

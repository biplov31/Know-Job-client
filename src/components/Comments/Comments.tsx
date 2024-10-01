import React from 'react'
import CommentsStyles from "./Comments.module.css";
import { BiLike, BiDislike } from "react-icons/bi";


const Comment = ({author, content, isAnonymous, likeCount, dislikeCount}) => {

  return (
    <div className={CommentsStyles.comment}>
      <span className={CommentsStyles.author}>
        {isAnonymous ? author : "Anonymous"}
      </span>
      <p>{content}</p>
      <div className={CommentsStyles['extra-info']}>
        <span>{likeCount} <BiLike /></span>
        <span>{dislikeCount} <BiDislike /></span>
      </div>
    </div>
  )
}

export const Comments = () => {

  const comments = [
    {
      "author": "John",
      "content": "This post is very informative and provides great insights on the topic!",
      "isAnonymous": false,
      "likeCount": 25,
      "dislikeCount": 2
    },
    {
      "author": "Jane",
      "content": "Can anyone explain this section more clearly?",
      "isAnonymous": false,
      "likeCount": 10,
      "dislikeCount": 1
    },
    {
      "author": "Jim",
      "content": "This helped me a lot, thank you for sharing!",
      "isAnonymous": false,
      "likeCount": 40,
      "dislikeCount": 0
    },
    {
      "author": "Juliet",
      "content": "Great post, but I think some points could be elaborated further.",
      "isAnonymous": true,
      "likeCount": 18,
      "dislikeCount": 4
    }
  ]
  
  return (
    <section className={CommentsStyles.container}>
      <h3>Comments</h3>
      <div className={CommentsStyles.comments}>
        {comments.map((comment, index) => (
          <Comment 
            key={index}
            author={comment.author}
            content={comment.content}   
            isAnonymous={comment.isAnonymous}
            likeCount={comment.likeCount}
            dislikeCount={comment.dislikeCount}
          />
        ))}
      </div>
    </section>
  )
}

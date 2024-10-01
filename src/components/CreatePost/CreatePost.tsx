import React from 'react'
import CreatePostStyles from "./CreatePost.module.css";
import { Link } from 'react-router-dom';
import { FaPenFancy } from "react-icons/fa6";

export const CreatePost = ({ containerClass, elementClass }) => {
  return (
    <section className={`${CreatePostStyles.container} ${containerClass}`}>
      <h2>Have something you'd like to share?</h2>

      <div className={`${CreatePostStyles.options} ${elementClass}`}>
        <div className={CreatePostStyles.card}>
          <h3>Help job seekers out</h3>
          <p>Share honest opinions and insights about your current job or company.</p>
          <Link to='#'>Write a review <FaPenFancy /></Link>
        </div>

        <div className={CreatePostStyles.card}>
          <h3>Guide people who are starting out</h3>
          <p>Write about your experience and journey so others can learn from your wisdom.</p>
          <Link to='#'>Create a post <FaPenFancy /></Link>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import ReviewPageStyles from "./ReviewPage.module.css";
import { BiLike, BiDislike, BiCommentDetail, BiCalendar, BiSolidStar } from "react-icons/bi";
import { Comments } from '../../components/Comments/Comments';
import { CompanyInfo } from '../../components/CompanyInfo/CompanyInfo';

export const ReviewPage = () => {
  
  const review = {
    "id": 1,
    "title": "Great Place for Innovation and Growth",
    "content": "Working at Aadim Innovation has been an incredible experience. The company fosters creativity and encourages employees to explore new ideas. The team is highly collaborative, and management is supportive. The work environment is positive, and there are plenty of opportunities for personal and professional growth.",
    "rating": 4.8,
    "email": "john.doe@example.com",
    "createdAt": "2024-09-29",
    "department": "Research and Development",
    "isAnonymous": false,
    "likeCount": 52,
    "dislikeCount": 3
  }

  return (
    <main className={ReviewPageStyles.container}>
      <section>
        <article className={ReviewPageStyles.review}>
          <h2>{review.title}</h2>
          <div className={ReviewPageStyles['meta-info']}>
            <span className={ReviewPageStyles.rating}>{review.rating} <BiSolidStar /></span>
            <span className={ReviewPageStyles.department}>{review.department}</span>
            <span className={ReviewPageStyles.createdAt}><BiCalendar /> {review.createdAt}</span>
          </div>

          {review.content.split('\n\n').map((paragraph, index) => (
            <React.Fragment key={index}>
              <p>{paragraph}</p>
            </React.Fragment>
          ))}

          <div className={ReviewPageStyles['extra-info']}>
            <span>{review.likeCount} <BiLike /></span>
            <span>{review.dislikeCount} <BiDislike /></span>
            <span><BiCommentDetail /></span>
          </div>
        </article>
        <Comments />
      </section>
      
      <div className={ReviewPageStyles['company-info-container']}>
        <CompanyInfo />
      </div>
    </main>
  )
}

import React from 'react'
import ReviewsStyles from "./Reviews.module.css";
import { Review } from '../../components/Review/Review';
import { CreatePost } from '../../components/CreatePost/CreatePost';
import { Link } from 'react-router-dom';

export const Reviews = () => {

  const reviews = [
    {
      company: 'Aadim Innovation',
      title: 'Great place to grow!',
      content: 'Aadim Innovation has given me a lot of opportunities to grow professionally. The work culture is supportive, and management encourages continuous learning.',
      rating: 4.5,
      department: 'Engineering',
      likeCount: 120,
      dislikeCount: 3,
    },
    {
      company: 'Softech Foundation',
      title: 'Collaborative environment but heavy workload',
      content: 'The company provides excellent exposure to new technologies and collaborative projects. However, the workload can be overwhelming at times, especially during product launches.',
      rating: 3.8,
      department: 'Product Management',
      likeCount: 95,
      dislikeCount: 10,
    },
    {
      company: 'Grow By Data',
      title: 'Innovative but needs work-life balance',
      content: 'A very innovative company with cutting-edge projects, but it’s easy to get burned out. The team is passionate, but there’s a need for better work-life balance.',
      rating: 4.0,
      department: 'Data Science',
      likeCount: 150,
      dislikeCount: 20,
    },
    {
      company: 'Whitestroke Inc.',
      title: 'A designer\'s dream job',
      content: 'Working at Whitestroke Inc. has been a great experience. I get to work on creative projects with a team of talented individuals. The design process is seamless and collaborative.',
      rating: 4.7,
      department: 'Design',
      likeCount: 200,
      dislikeCount: 2,
    },
  ];

  return (
    <main className={ReviewsStyles.container}>
      <section>
        <h2>Latest reviews</h2>
        <div className={ReviewsStyles.reviews}>
          {reviews.map((review, index) => (
            <Link to={`/reviews/${index}`}>
              <Review key={index} company={review.company} title={review.title} content={review.content} rating={review.rating} department={review.department} likeCount={review.likeCount} dislikeCount={review.dislikeCount} />
            </Link>
          ))}
        </div>
      </section>

      <aside className={ReviewsStyles['aside']}>
        <CreatePost containerClass={ReviewsStyles['aside-container']} elementClass={ReviewsStyles['aside-create-post']} />
      </aside>
    </main>
  )
}

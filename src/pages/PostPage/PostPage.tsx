import React from 'react'
import PostPageStyles from "./PostPage.module.css";
import { BiLike, BiDislike, BiCommentDetail, BiCalendar } from "react-icons/bi";
import { Comments } from '../../components/Comments/Comments';

export const PostPage = () => {
  
  const post = {
    "title": "Exploring AI Trends",
    "content": "Artificial intelligence (AI) continues to evolve at an unprecedented pace, shaping industries and influencing how we interact with technology on a daily basis. One of the most significant trends is the rise of generative AI, which has revolutionized content creation, coding, and even art. With AI-powered tools like GPT and image-generation models, businesses and individuals are now able to automate tasks that previously required human creativity, opening up new possibilities across various fields. From healthcare to finance, AI is enabling faster, more efficient workflows and transforming how decisions are made.\n\nAnother major development is the push for ethical AI. As AI systems become more powerful, questions surrounding privacy, bias, and accountability have gained traction. There is an increasing focus on ensuring that AI algorithms are transparent and fair, and many companies are investing in research to minimize the potential for harm. Additionally, explainable AI (XAI) is gaining attention, as it aims to make AI decision-making more understandable to humans, fostering trust in these complex systems. Overall, the future of AI looks promising, but it also calls for a careful balance between innovation and responsibility.",
    "category": "Technology",
    "createdAt": "2024-09-30",
    "likeCount": 120,
    "dislikeCount": 5
  }

  return (
    <main className={PostPageStyles.container}>
      <article className={PostPageStyles.post}>
        <h2>{post.title}</h2>
        <span className={PostPageStyles.createdAt}><BiCalendar /> {post.createdAt}</span>
        <span className={PostPageStyles.category}>{post.category}</span>

        {post.content.split('\n\n').map((paragraph, index) => (
          <React.Fragment key={index}>
            <p>{paragraph}</p>
          </React.Fragment>
        ))}

        <div className={PostPageStyles['extra-info']}>
          <span>{post.likeCount} <BiLike /></span>
          <span>{post.dislikeCount} <BiDislike /></span>
          <span><BiCommentDetail /></span>
        </div>
      </article>
      <Comments />
    </main>
  )
}

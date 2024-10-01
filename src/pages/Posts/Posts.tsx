import React, { useState } from 'react'
import PostsStyles from "./Posts.module.css";
import Post from '../../components/Post/Post';
import { CreatePost } from '../../components/CreatePost/CreatePost';
import { Spinner } from '../../components/Spinner';
import { Link } from 'react-router-dom';
import { PostPage } from '../PostPage/PostPage';

const Posts = () => {
  const [actualPosts, setActualPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useState(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/post');
        const data = await res.json();
        setActualPosts(data);

      } catch (error) {
        console.log("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    
    }
  }, []);

  const posts = [
    {
      title: 'Exploring AI Trends',
      content: 'A quick dive into the latest trends shaping artificial intelligence and its future.',
      category: 'Technology',
      likeCount: 120,
      dislikeCount: 5,
    },
    {
      title: 'Healthy Eating Habits',
      content: 'Learn how to improve your eating habits with these easy tips.',
      category: 'Health',
      likeCount: 95,
      dislikeCount: 2,
    },
    {
      title: 'Travel on a Budget',
      content: 'Discover how to travel the world without breaking the bank!',
      category: 'Travel',
      likeCount: 85,
      dislikeCount: 7,
    },
    {
      title: 'The Future of Remote Work',
      content: 'An analysis of how remote work is changing the professional landscape.',
      category: 'Business',
      likeCount: 150,
      dislikeCount: 10,
    },
  ]

  return (
    <main className={PostsStyles.container}>
      <section>
        <h2>Latest posts</h2>
        <div className={PostsStyles.posts}>
          {loading ? (
            <Spinner loading={loading} />
          ) : (
            posts.map((post, index) => (
              <Link to={`/posts/${index}`} key={index}>
                <Post 
                  title={post.title} 
                  content={post.content} 
                  category={post.category} 
                  likeCount={post.likeCount} 
                  dislikeCount={post.dislikeCount} 
                />
              </Link>
            ))            
          )}
        </div>
      </section>

      <aside className={PostsStyles['aside']}>
        <CreatePost containerClass={PostsStyles['aside-container']} elementClass={PostsStyles['aside-create-post']} />
      </aside>
    </main>
  )
}

export default Posts
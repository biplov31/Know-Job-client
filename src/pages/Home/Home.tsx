import React from 'react'
import HeroStyles from "./Home.module.css";
import { CompanyList } from '../../components/CompanyList/CompanyList';
import { CreatePost } from '../../components/CreatePost/CreatePost';

const Home = () => {
  return (
    <main>
      <section className={HeroStyles.hero}>
        <h1>Make an informed decision!</h1>
        <p>We'll to help you know everything about your dream job or company.</p>
      </section>

      <CompanyList />

      <CreatePost containerClass={""} elementClass={""}  />
    </main>
  )
}

export default Home
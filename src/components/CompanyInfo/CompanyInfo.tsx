import React from 'react'
import CompanyInfoStyles from "./CompanyInfo.module.css";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { FaLocationDot, FaPenFancy } from "react-icons/fa6";
import { BiSolidStar } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export const CompanyInfo = () => {

  const company = {
    "name": "Aadim Innovation",
    "description": "Aadim Innovation is a dynamic company at the forefront of technological advancement. We are committed to creating innovative solutions that push the boundaries of technology. Our team thrives on creativity and collaboration, delivering top-tier products that cater to the evolving needs of the global market. From software development to AI integration, Aadim Innovation is dedicated to shaping the future of technology.",
    "averageRating": 4.7,
    "address": "Kathmandu"
  }

  return (
    <aside className={CompanyInfoStyles.container}>
      <PiBuildingApartmentFill />
      <h4 className={CompanyInfoStyles.company}>{company.name}</h4>
      <p>{company.description}</p>
      <span className={CompanyInfoStyles.rating}><BiSolidStar /> {company.averageRating}</span>
      <span className={CompanyInfoStyles.location}><FaLocationDot /> {company.address}</span>

      <Link to='#' className={CompanyInfoStyles['review-btn']}>Write a review <FaPenFancy /></Link>
    </aside>
  )
}

import React from 'react'
import CompanyStyles from "./Company.module.css";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";

export const Company = ({name, address}) => {
  return (
    <div className={CompanyStyles.card}>
      <div >
        <PiBuildingApartmentFill className={CompanyStyles.icon} />
        <h3>{name}</h3>
      </div>
      <span className={CompanyStyles.location}><FaLocationDot /> {address}</span>
    </div>
  )
}

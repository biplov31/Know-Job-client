import React from 'react'
import FooterStyles from "./Footer.module.css";
import { FaMagnifyingGlassChart } from "react-icons/fa6";


export const Footer = () => {
  return (
    <footer>
      <div className={FooterStyles.logo}>
        <span>KnowJob</span><FaMagnifyingGlassChart />
      </div>
      <p>Promoting transparency in the tech industry.</p>
    </footer>
  )
}

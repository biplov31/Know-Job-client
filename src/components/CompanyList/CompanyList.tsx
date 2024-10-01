import React from 'react'
import CompanyListStyles from "./CompanyList.module.css";
import { Company } from '../Company/Company';
import { Link } from 'react-router-dom';

export const CompanyList = () => {

  const companies = [
    { name: 'Aadim Innovation', address: 'Kathmandu' },
    { name: 'Softech Foundation', address: 'Kathmandu' },
    { name: 'Grow By Data', address: 'Lalitpur' },
    { name: 'Whitestroke Inc.', address: 'Bhaktapur' }
  ];

  return (
    <section className={CompanyListStyles['list-container']}>
      <h2>Need some insider information on these companies?</h2>
      <div className={CompanyListStyles.cards}>
        {companies.map((company, index) => (
          <Company key={index} name={company.name} address={company.address} />
        ))}
      </div>
      <Link to="#" className={CompanyListStyles['view-more-btn']}>View more</Link>
    </section>
  )
}

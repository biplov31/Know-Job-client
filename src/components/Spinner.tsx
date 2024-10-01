import React from 'react'
import { ClipLoader } from 'react-spinners';

const override = {
  display: 'block',
  margin: '4rem auto'
}

export const Spinner = ({ loading }) => {
  return (
    <ClipLoader 
      color='var(--accent-color)'
      loading={loading}
      cssOverride={override}
      size={60}
    />
  )
}

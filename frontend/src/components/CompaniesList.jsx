import React from 'react'
import { companiesList } from '@/data/companies-list'
import { CompanyLogo } from './shared'

export const CompaniesList = () => {
  return (
    <div className="px-14 mt-7 mb-7 
    grid grid-cols-6">
      {companiesList.map((company) => (
        <CompanyLogo 
        key={company.id}
        imageSrc={company.imageUrl}
        imageAlt={company.alt}
        href={company.href} 
      />
      ))}
    </div>
  )
}


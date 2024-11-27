import React from 'react'
import Filters from './Filters'
import CardMain from './Card/CardMain'

function Main() {
  return (
    <div className='flex-1 pr-10'>
      <Filters/>
      <CardMain/>
    </div>
  )
}

export default Main
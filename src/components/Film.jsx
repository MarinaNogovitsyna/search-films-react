import React from 'react'

export default function Film({ poster, name, year }) {
  return (
    <div className='film'>
        <img src={poster} alt={name} className='film__poster'/>
        <span className='film__name'>{name}</span>
        <span className='film__year'>{year}</span>
    </div>
  )
}

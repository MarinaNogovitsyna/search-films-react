import React from 'react'

export default function Category({ name, hendleGenreName }) {
  return (
    <span className='category' onClick={() => hendleGenreName(name)}>{name}</span>
  )
}

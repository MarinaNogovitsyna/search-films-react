import React from 'react'

export default function Category({ name, hendleGenreName, active }) {
  return (
    <span className={`category ${active ? 'category__active' : ''}`} onClick={() => hendleGenreName(name)}>{name}</span>
  )
}
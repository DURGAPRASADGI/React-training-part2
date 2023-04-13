import React from 'react'

const R2 = ({list,k,k1}) => {
  return (
    <div>
      {list.map((i,index) => (
        <li key={index}>
          <h1>{i.text}</h1>
          <button onClick={() => k(i.id)}>edit</button>
          <button onClick={() => k1(i.id)}>delte</button>
        </li>
      ))}
    </div>
  )
}

export default R2

import React from 'react'

const R1 = ({h,item,setitem}) => {
  return (
    <form onSubmit={h}>
    <input
      type="text"
      value={item}
      onChange={(e) => setitem(e.target.value)}
    />
    <button>ADD</button>
  </form>
  )
}

export default R1

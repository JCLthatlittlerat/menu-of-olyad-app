import React from 'react'

function MenuButtons({category, filterData}) {
  
  return (
    <div>
      {/* <button className="allBtn">All</button> */}
      <button onClick={()=>filterData(category)}>{
      // category.charAt(0).toUpperCase() + category.slice(1)
      category
      .trim()
      .split(/\s+/)
      .map(part=>part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ')
      }</button>
    </div>
  )
}

export default MenuButtons
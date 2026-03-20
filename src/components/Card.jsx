import React from 'react'

function Card({title, description, image, price}) {
  return (
    <article>
        <img src={image} alt={title} />
        <div className="quickBar">
            <h2>{
            title
                  .trim()
                  .split(/\s+/)
                  .map(part=>part.charAt(0).toUpperCase() + part.slice(1))
                  .join(' ')
            }</h2>
            <div>
              <h3>{`$${price}`}</h3>
            </div>
        </div>
        <p>{description}</p>
    </article>
  )
}

export default Card
import React from 'react'

export default function DinoSection({title, description, imageSrc}) {
  return (
    <section className='dino_section murapper container'>
      <div className='dino_info'>
      <h1 className='dino_title'>{title}</h1>
      <p className='dino_description'>{description}</p>
      </div>
      <img className='dino_picture' src={imageSrc} alt='dino-picture'></img>
    </section>
  )
}

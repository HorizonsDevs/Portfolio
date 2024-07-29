import React from 'react'
import "./css/styles.css"

export default function Hero() {
  return (
    
    <div className='flex h_full w_full wrap justify_center align_center reverse_rep' id='home'>
      <div className="w_50">
        <h1 className="title">Horizon Devs</h1>
        <p className='hero_text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, delectus eum. Tempore esse totam recusandae quos rem repellendus culpa, quisquam, nostrum libero vero sunt tempora maxime deserunt dolore reiciendis dolorum! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores reprehenderit nesciunt sit fugit ut voluptatem mollitia, voluptatibus ipsa, temporibus, at velit? Fugiat, necessitatibus. Quis in saepe ullam reprehenderit laborum doloremque!</p>
        <a href="#contact" className='button'>Get In Touch!</a>
      </div>
      <div className="w_50">
        <img src='/assets/working.svg' alt='mono' style={{width:'100%', borderRadius: '50%'}}/>
      </div>
    </div>
  )
}

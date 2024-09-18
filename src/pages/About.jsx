import React from 'react'
import './About.css'
import chefImg1 from '../utils/utils/img/chef1.jpg'
import chefImg2 from '../utils/utils/img/chef2.jpg'
import chefImg3 from '../utils/utils/img/chef3.jpg'
import ImageGallery from '../components/ImageGallery'
import { Reviews } from '../components/Reviews'
 
export default function About() {
  return (
    <div className='about-page'>
      <header className='mt-5'>
        <div className='container h-100 d-flex align-items-center justify-content-center'>
          <h1 className='text-light text-uppercase'>About</h1>
        </div>
      </header>   

      <div className='container my-5'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita iure qui omnis, earum repudiandae commodi optio eos error, fugit laboriosam animi consequatur exercitationem inventore recusandae enim sed aperiam temporibus deleniti minus aut. Modi nisi quae voluptate dolores officiis necessitatibus dolor debitis eum nemo dolore alias iusto aliquid numquam, incidunt culpa in, dolorum enim nam animi adipisci voluptatum quos. Enim assumenda quas nemo esse! Aut iusto architecto corporis sunt, repudiandae dolor enim aliquid blanditiis quo nisi soluta est aliquam corrupti mollitia culpa maxime, assumenda earum excepturi qui dolorum saepe minus, sed laborum! Maiores eos reiciendis exercitationem voluptatum nostrum corporis doloribus ipsa! Beatae, eaque libero veritatis quam nostrum animi necessitatibus minima consectetur. Quos iusto fuga inventore sed aut error dolorem, pariatur in nam architecto et officiis debitis alias ipsum exercitationem incidunt! Sapiente iusto delectus beatae facere, omnis optio. Architecto quidem nobis cupiditate, deserunt neque eum, totam repudiandae consequatur laboriosam ex quisquam itaque?</p>
        <div className='row'>
          <div className='col-lg-4'>
            <img src={chefImg1} className='img-fluid my-4' alt='' />
          </div>
          <div className='col-lg-4'>
            <img src={chefImg2} className='img-fluid my-4' alt='' />
          </div>
          <div className='col-lg-4'>
            <img src={chefImg3} className='img-fluid my-4' alt="" />
          </div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas expedita molestias at doloribus soluta laboriosam fuga inventore. Nulla distinctio voluptate ipsa officiis nostrum, consectetur dolore voluptatum a delectus magnam consequatur saepe culpa beatae quibusdam harum omnis possimus obcaecati, suscipit corporis laborum amet praesentium eligendi qui odio! Dicta perferendis commodi unde enim totam, provident veritatis rerum eaque, corrupti beatae minima eveniet minus accusantium, nesciunt quaerat saepe asperiores? Pariatur accusantium alias eveniet aspernatur omnis doloribus sequi repudiandae voluptatem commodi illum dicta at consequuntur id quibusdam, magnam aperiam praesentium provident odio inventore architecto!</p>

      </div>
      <div className='bg-dark text-light'>
        <ImageGallery />
      </div>
      <div className='my-5'>
        <Reviews />
      </div>
    </div>
  )
}

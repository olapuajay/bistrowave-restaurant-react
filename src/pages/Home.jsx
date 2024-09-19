import React from 'react'
import './Home.css'
import MenuBtn from '../components/MenuBtn'
import { Link } from 'react-router-dom'
import AboutImg from '../utils/utils/img/about.jpg'
import ImageGallery from '../components/ImageGallery'
import ContactInfo from '../components/ContactInfo'
import ContactImg from '../utils/utils/img/contact.jpg'

export default function Home() {
  return (
    <div className='home-page'>
      <header className='h-100 min-vh-100 d-flex align-items-center text-light shadow'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-6 d-flex d-sm-block flex-column align-items-center'>
                <h2 className='mb-0 text-black fw-normal'>Welcome To</h2>
                <h1 className='mb-5 text-black fw-bold text-center text-sm-start'>React Restaurant</h1>
                <MenuBtn />
              </div>
            </div>
          </div>
      </header>

      <div className='container my-5'>
        <div className='row'>
          <div className='col-lg-6 d-flex justify-content-center d-none d-lg-flex'>
            <img src={AboutImg} className='img-fluid w-100 shadow' alt='about img' />
          </div>
          <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center'>
            <h2 className='fs-1 mb-5 text-uppercase fw-bold'>About Us</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et at eius aspernatur! Sed itaque ratione eius eveniet odit esse tempora, eaque iste illo, beatae voluptate quis perspiciatis aliquam id voluptatem.</p>
            <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nesciunt enim dolorum pariatur reiciendis cum quidem numquam temporibus suscipit blanditiis dicta, alias ipsum quasi consectetur! Et quibusdam perferendis nobis error!</p>
            <Link to='/about'>
              <button type='button' className='btn btn-outline-danger btn-lg'>More About Us</button>
            </Link>
          </div>
        </div>
      </div>

      <div className='menu-section py-5 text-light shadow'>
        <div className='container d-flex flex-column align-items-center'>
          <h2 className='fs-1 mb-5 text-uppercase fs-bold'>Our Favorites</h2>
          <div className='row mb-5 w-100'>
            <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
              <h3 className='fs-2 mb-5'>Food</h3>
              <ul className='px-0'>
                <li className='d-flex justify-content-between'>
                  <p className='fs-3 mx-2'>Item</p>
                  <p className='fs-3 mx-2 text-success fw-bold'>${'price'}</p>
                </li>
                <li className='d-flex justify-content-between'>
                  <p className='fs-3 mx-2'>Item</p>
                  <p className='fs-3 mx-2 text-success fw-bold'>${'price'}</p>
                </li>
                <li className='d-flex justify-content-between'>
                  <p className='fs-3 mx-2'>Item</p>
                  <p className='fs-3 mx-2 text-success fw-bold'>${'price'}</p>
                </li>
              </ul>
            </div>

            <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
              <h3 className='fs-2 mb-5'>Drinks</h3>
              <ul className='px-0'>
                <li className='d-flex justify-content-between'>
                  <p className='fs-3 mx-2'>Item</p>
                  <p className='fs-3 mx-2 text-success fw-bold'>${'price'}</p>
                </li>
                <li className='d-flex justify-content-between'>
                  <p className='fs-3 mx-2'>Item</p>
                  <p className='fs-3 mx-2 text-success fw-bold'>${'price'}</p>
                </li>
                <li className='d-flex justify-content-between'>
                  <p className='fs-3 mx-2'>Item</p>
                  <p className='fs-3 mx-2 text-success fw-bold'>${'price'}</p>
                </li>
              </ul>
            </div>
          </div>
          <MenuBtn />
        </div>
      </div>
      <ImageGallery />

      <div className='bg-dark text-light py-5 shadow'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0'>
              <ContactInfo />
            </div>
            <div className='col-lg-6 d-flex justify-content-center'>
              <img src={ContactImg} className='img-fluid w-50' alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

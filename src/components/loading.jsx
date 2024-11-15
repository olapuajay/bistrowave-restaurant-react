import React from 'react'
import './loading.css'
import LoadingImg from '../utils/utils/img/loading-img.png'

function loading() {
  return (
    <div className='loading'>
      <img src={LoadingImg} alt="loading.." className='spinner' />
    </div>
  )
}

export default loading

import React from 'react'
import './Loading.css'
import LoadingImg from '../utils/utils/img/loading-img.png'

function Loading() {
  return (
    <div className='loading'>
      <img src={LoadingImg} alt="loading.." className='spinner' />
    </div>
  )
}

export default Loading
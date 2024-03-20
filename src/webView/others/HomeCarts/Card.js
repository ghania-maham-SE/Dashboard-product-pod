import React from 'react'
import '../../../assets/CSS/webCSS/index.css'
const Card = (props) => {
  return (
    <div className='col-11 col-md-5 col-lg-3 d-flex justify-content-center'>
    <div class="card row mb-5 mt-2 hotdealCard-2" >
        <div className='ms-0 ps-0 row '>
            <div className='m-0 p-0 col-6'>
                <img className='img-fluid cardHotdealWidth' src={props.img} />
            </div>
            <div className='m-0 p-0 col-6 d-flex align-items-center'>
                <p className='mt-2'>{props.paraContent}</p>
            </div>

        </div>
    </div>
</div>
  )
}

export default Card

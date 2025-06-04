import React from 'react'

export default function Footer() {
  return <>

    <div className='container-fluid '>
      <div className='row  color text-white  '>


        <div className='col-sm-6 mt-sm-3 col-md-4'>
          <h2>LOCATION</h2>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>


        <div className='col-sm-6 mt-sm-3 col-md-4 d-flex flex-column align-items-center' >
          <h2>AROUND THE WEB</h2>
          <div className='d-flex mt-3'>
            <div className='border d-flex justify-content-center align-items-center me-4'><i class="fa-solid fa-circle-user "></i> </div>
            <div className='border d-flex justify-content-center align-items-center me-4'><i class="fa-solid fa-headphones " ></i></div>
            <div className='border d-flex justify-content-center align-items-center me-4'><i class="fa-solid fa-thumbs-up "></i></div>
            <div className='border d-flex justify-content-center align-items-center me-4'><i class="fa-solid fa-house "></i> </div>
          </div>
        </div>


        <div className='col-sm-12 mt-sm-3 col-md-4'>
          <h2>ABOUT FREELANCER</h2>
          <p className='mt-4'>Freelance is a free to use, licensed Bootstrap theme <br></br> created by Route</p>
        </div>


        <div className='footerColor w-100  text-white' >
          <p className='m-1'>Copyright © Your Website 2021</p>
        </div>

      </div>

    </div>

  </>
}


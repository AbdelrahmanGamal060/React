import React from 'react'
import avatar from '../assets/avataaars.svg'
export default function Home() {
    return <>
        <div className='container-fluid  colorBody he d-flex justify-content-center align-items-center text-white'>
            <div className='row px-5  mb-sm-5'>

                <div>
                    <img src={avatar} className='w-100' alt="avatar" />

                    <h1>start Framework</h1>
                   
                <div className='d-flex justify-content-center align-items-center'>
                    <div className='First-Line1 me-3'></div>
                    <i class="fa-solid fa-star"></i>
                    <div className='Sco-Line1 ms-3' ></div>
                </div>
                    <p>Graphic Artist - Web Designer - Illustrator</p>
                </div>


            </div>
        </div>


    </>
}

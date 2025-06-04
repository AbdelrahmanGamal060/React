import React from 'react'

export default function Contact() {
    return <>

        <div className='container '>
            <h1>conatct section</h1>
           
                <div className='d-flex justify-content-center align-items-center'>
                    <div className='First-Line me-3'></div>
                    <i class="fa-solid fa-star"></i>
                    <div className='Sco-Line ms-3' ></div>
                </div>
            <div className='row '>
                <form className='w-100 d-flex flex-column justify-content-center align-items-center'>
                    <input className='w-75 mt-5 border-top-0 border-end-0 border-start-0 ' type="text" placeholder='UserName' />
                    <input className='w-75 mt-5 border-top-0 border-end-0 border-start-0' type="number" placeholder='userAge' />
                    <input className='w-75 mt-5 border-top-0 border-end-0 border-start-0' type="email" placeholder='userEmail' />
                    <input className='w-75 mt-5 border-top-0 border-end-0 border-start-0' type="number" placeholder='UserPassword' />
                    <button className='btn btn-success w-25 mt-5 mb-5 d-block border-top-0 border-end-0 border-start-0'>Sent message</button>

                </form>
            </div>
        </div>

    </>
}

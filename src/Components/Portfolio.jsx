import React from 'react'
import poert1 from '../assets/portfolio/poert1.png'
import poert2 from '../assets/portfolio/port2.png'
import poert3 from '../assets/portfolio/port3.png'

export default function Portfolio() {
    return <>

        <div className='container  '>
            <h1>portfolio component</h1>

            <div className='d-flex justify-content-center align-items-center mb-4'>
                <div className='First-Line me-3'></div>
                <i class="fa-solid fa-star"></i>
                <div className='Sco-Line ms-3' ></div>
            </div>
            <div className='row g-4 mb-4 d-flex justify-content-center align-items-center'>


                <div className='col-md-4  col-sm-12'>
                    <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex={-1}>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content w-100">
                                <div className="position-relative Div-layout">

                                    <img src= {poert1} className='w-100' alt="poert1" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="position-relative Div-layout" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">

                        <img src={poert1} className='w-100' alt="poert1" />
                        <div className='layout  d-flex justify-content-center align-items-center'><i class="fa-solid text-white  fa-plus icon"></i></div>
                    </div>
                </div>

                <div className='col-md-4  col-sm-12'>
                    <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex={-1}>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content w-100">
                                <div className="position-relative Div-layout">

                                    <img src={poert2} className='w-100' alt="poert2" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="position-relative Div-layout" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">

                        <img src={poert2} className='w-100' alt="poert2" />
                        <div className='layout  d-flex justify-content-center align-items-center'><i class="fa-solid text-white  fa-plus icon"></i></div>
                    </div>
                </div>

                <div className='col-md-4  col-sm-12'>
                    <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex={-1}>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content w-100">
                                <div className="position-relative Div-layout">

                                    <img src={poert3} className='w-100' alt="poert3" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="position-relative Div-layout" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">

                        <img src={poert3} className='w-100' alt="poert3" />
                        <div className='layout  d-flex justify-content-center align-items-center'><i class="fa-solid text-white  fa-plus icon"></i></div>
                    </div>
                </div>

                <div className='col-md-4  col-sm-12'>
                    <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex={-1}>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content w-100">
                                <div className="position-relative Div-layout">

                                    <img src={poert1} className='w-100' alt="poert1" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="position-relative Div-layout" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">

                        <img src={poert1} className='w-100' alt="poert1" />
                        <div className='layout  d-flex justify-content-center align-items-center'><i class="fa-solid text-white  fa-plus icon"></i></div>
                    </div>
                </div>

                <div className='col-md-4  col-sm-12 '>
                    <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex={-1}>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content w-100">
                                <div className="position-relative Div-layout">

                                    <img src={poert2} className='w-100' alt="poert2" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="position-relative Div-layout" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">

                        <img src={poert2} className='w-100' alt="poert2" />
                        <div className='layout  d-flex justify-content-center align-items-center'><i class="fa-solid text-white  fa-plus icon"></i></div>
                    </div>
                </div>

                <div className='col-md-4  col-sm-12 '>
                    <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex={-1}>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content w-100">
                                <div className="position-relative Div-layout">

                                    <img src={poert3} className='w-100' alt="poert3" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="position-relative Div-layout" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">

                        <img src={poert3} className='w-100' alt="poert3" />
                        <div className='layout  d-flex justify-content-center align-items-center'><i class="fa-solid text-white  fa-plus icon"></i></div>
                    </div>
                </div>


            </div>





        </div>
    </>
}

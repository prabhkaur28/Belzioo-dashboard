import React, { Component } from 'react'
import shoes1 from "../../../../../assets/Images/shoes1.png"
import shoes2 from "../../../../../assets/Images/shoes2.png"
import shoes3 from "../../../../../assets/Images/shoes3.png"
import shoes4 from "../../../../../assets/Images/shoes4.png"
import canvas1 from "../../../../../assets/Images/canvas1.png";
import canvas2 from "../../../../../assets/Images/canvas2.png"
export default class Card extends Component {
    render() {
        return (
            <div className='container'>
                <div className="row d-flex gap-2">
                    <div className='col'>
                        <div className="card p-3">
                            <div className="position-relitive">
                                <div className="position-absolute text-light top start">Free Shipping </div>
                            </div>
                            <img src={shoes1} className="w-100 height" alt="shoes1" />

                            <div className="card-text gap-3">
                                <h6 className=" pt-2 fw-semibold">Paarmodelle All Might</h6>
                                <h6>Wanderschuhe</h6>
                                <div className=' d-flex justify-content-between'>
                                    < div className=' d-flex gap-2 pt-2 '>
                                        <button className='p-2 bg-secondary border-0'></button>
                                        <button className='p-2 bg-dark border-0'></button>
                                    </div >
                                    <div>
                                        <span className='fw-bold'>$39.68</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  <div className='col'>
                        <div className="card p-3">
                            <div id="carouselExampleIndicators"
                                className="carousel slide"
                                data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button
                                        type="button"
                                        data-bs-target="#carouselExampleIndicators"
                                        data-bs-slide-to={0}
                                        className="active"
                                        aria-current="true"
                                        aria-label="Slide 1"/>
                                    <button
                                        type="button"
                                        data-bs-target="#carouselExampleIndicators"
                                        data-bs-slide-to={1}
                                        aria-label="Slide 2"/>
                                    <button
                                        type="button"
                                        data-bs-target="#carouselExampleIndicators"
                                        data-bs-slide-to={2}
                                        aria-label="Slide 3"/>
                                </div>
                                <div className="carousel-inner height">
                                    <div className="carousel-item active">
                                        <img src={shoes2} className="d-block w-100" alt="shoes2" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={canvas1} className="d-block w-100" alt="canvas1" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={canvas2} className="d-block w-100" alt="canvas2" />
                                    </div>
                                </div>
                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide="prev"
                                >
                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide="next"
                                >
                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>

                            <div className="card-text gap-3">
                                <h6 className=" pt-2 fw-semibold">Converse All Star</h6>
                                <h6>1970s Hi</h6>
                                <div className=' d-flex justify-content-between'>
                                    < div className=' d-flex gap-2 pt-2 '>
                                        <button className='p-2 bg-dark border-0'></button>
                                        <button className='p-2 bg-light border-0'></button>
                                        <button className='p-2 bg-secondary border-0'></button>

                                    </div >
                                    <div>
                                        <span className='fw-bold'>$89.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div className="card p-3">
                            <div className='position-reletive'>
                                <div className='position-absolute bg-dark p-2 top start'>%</div>
                            </div>
                            <img src={shoes3} className=" w-100 height" alt="shoes3" />
                            <div className="card-text gap-3">
                                <h6 className=" pt-2 fw-semibold">Hoka One One Clifton</h6>
                                <h6>L Suede</h6>
                                <div className=' d-flex justify-content-between'>
                                    < div className=' d-flex gap-2 pt-2 '>
                                        <button className='p-2 bg-secondary border-0'></button>
                                        <button className='p-2 bg-dark border-0'></button>
                                    </div >
                                    <div>
                                        <span className=' me-2 text-decoration-line-through'> $90.00</span>
                                        <span className='fw-bold'>$45.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='col'>
                        <div className="card p-3" >
                            <img src={shoes4} className="w-100 height" alt="..." />
                            <div className="card-text gap-3">
                                <h6 className=" pt-2 fw-semibold">Vans UltraRange</h6>
                                <h6>Exo MTE-1</h6>
                                <div className=' d-flex justify-content-between'>
                                    < div className=' d-flex gap-2 pt-2 '>
                                        <button className='p-2 bg-secondary border-0'></button>
                                        <button className='p-2 bg-primary border-0'></button>
                                    </div >
                                    <div>
                                        <span className='fw-bold'>$65.68</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

import React from 'react'
import '../../../assets/CSS/webCSS/index.css'
const HomeComponent = () => {
  return (
    <div className='container'>
    <div className='row justify-content-center mt-5'>
        <div className='col-11 col-sm-11 col-md-6 col-lg-4 mt-4 d-flex justify-content-center hot-Deal '>
            <div className='row  justify-content-end hotDeailContent'>
                <div className='col-4'>
                    <button type="button" class="btn btn-warning hotDealt-btn mt-4 " id="">Hot Deal</button>
                </div>
            </div>
            <div className='row text-danger justify-content-start hotDeail-Text'>
                <h5>Spring  </h5>
                <h5>Sale</h5>
                <hr className='dealHrLine mt-2 mb-2' />
                <h5>50%  </h5>
                <h6 className='ms-4 text-white'>OFF  </h6>
            </div>

            <img className='img-fluid' src={require(`../../../assets/images/webiamges/hotDeatl.png`)} />
            <div className='row  justify-content-end hotDeailShop'>
                <button type="button" class="me-sm-1  button11" id="">Shop Now</button>
            </div>
        </div>
        <div className='mt-4 col-11 col-sm-11 col-md-6 col-lg-5 '>
            <div className='col-12'>
                <div class="card row mb-5 m-0 p-0 hotdealCard-1" style={{width:"100%"}} >
                    <div className='ms-0 ps-0 row '>
                        <div className='m-0 p-0 col-6'>
                            <img className='img-fluid cardHotdealWidth' src={require(`../../../assets/images/webiamges/hotDealimage.png`)} />
                        </div>
                        <div className=' col-6 hot-DeailBackground'>
                            <div className='row p-0 justify-content-end hotDeailContent1'>
                                <div className='col-7 p-0 m-0 d-flex justify-content-end'>
                                    <button type="button" class="btn btn-warning btn-sm hotDealt-btn  mt-4 " id="">Hot Deal</button>
                                </div>
                            </div>
                            <div className=' justify-content-start  hotDeal-content2 row'>
                                <div className='col-12 mt-2 hotDeal-content2'>
                                    <h5>Spring Sale</h5>
                                    <hr />
                                </div><h5>50%  <span>OFF</span> </h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card row mt-4 m-0 p-0  hotdealCard-1"  style={{width:"100%"}} >
                    <div className='m-0 p-0 row' >

                        <div className=' col-6  hot-DeailBackground'>
                            <div className='row p-0 justify-content-start ms-2 hotDeailContent1'>
                                <div className='col-7 p-0 m-0 d-flex justify-content-start'>
                                    <button type="button" class="btn btn-warning btn-sm hotDealt-btn  mt-4 " id="">Hot Deal</button>
                                </div>
                            </div>
                            <div className=' justify-content-start  hotDeal-content2 row'>
                                <div className='col-12 mt-2 hotDeal-content2'>
                                    <h5>Spring Sale</h5>
                                    <hr />
                                </div>
                                <h5>50%  <span>OFF</span> </h5>
                            </div>
                        </div>
                        <div className='m-0 p-0 col-6'>
                            <img className='img-fluid cardHotdealWidth' src={require(`../../../assets/images/webiamges/hotDeal2.png`)} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div className='col-11 col-sm-11 col-md-6 col-lg-3 mt-4 d-flex justify-content-center hot-Deal '>
            <div className='row  justify-content-end hotDeailContent'>
                <div className='col-6'>
                    <button type="button" class="btn btn-warning hotDealt-btn mt-4 " id="">Hot Deal</button>
                </div>
            </div>
            <div className='row text-danger justify-content-start hotDeail-Text'>
                <h5>Spring  </h5>
                <h5>Sale</h5>
                <hr className='dealHrLine mt-2 mb-2' />
                <h5>50%  </h5>
                <h6 className='ms-4 text-white'>OFF  </h6>
            </div>

            <img className='img-fluid' src={require(`../../../assets/images/webiamges/hotDeatl.png`)} />
            <div className='row  justify-content-end hotDeailShop'>
                <button type="button" class="me-sm-1  button11" id="">Shop Now</button>
            </div>
        </div>

    </div>
</div>
  )
}

export default HomeComponent

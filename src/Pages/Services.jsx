import React from 'react'
import '../index.css'

import img1 from '../assets/image/react.png'
import img2 from '../assets/image/apiDevelopment.jpg'
import img3 from '../assets/image/Auth&Authorization.png'
import img4 from '../assets/image/Develop$host.png'
import img5 from '../assets/image/thirdparty.png'
import img6 from '../assets/image/AdminDashbord.png'

const Services = () => {
  return (
    <>
      <div className="container-fluid services-page">
        <div className="row">
          <div className="col-sm-12">

            <h1 className='display-5 text-center mt-5 text-white fw-bold'>
              My <span className='display-5 fw-bold text-primary'>Services</span>
            </h1>

            <p className='text-center text-white'>
              The services I offer to help clients achieve their digital goals.
            </p>

            <div className="row row-cols-1 mt-5 mx-auto row-cols-md-4 g-3">

              <div className="col">
                <div className="card service-card h-100 text-white rounded-4">
                  <div className="card-body text-center">
                    <img src={img1} alt="react" className=' service-img' />

                    <h5 className="card-title">
                      Frontend <br /> Development <br />(React.js)
                    </h5>

                    <p className='service-text'>
                      Modern, responsive UIs using React, Redux Toolkit, Tailwind CSS, and advanced
                    </p>

                    <p className='service-category'>
                      Category: <span>Frontend</span>
                    </p>

                  </div>

                  <button className='service-btn'>
                    Hire Me for this Services
                  </button>

                </div>
              </div>

              <div className="col">
                <div className="card service-card h-100 text-white rounded-4">
                  <div className="card-body text-center">

                    <img src={img2} alt="api" className='img-fluid service-img' />

                    <h5 className="card-title">API Development</h5>

                    <p className='service-text'>
                      Secure and efficient RESTful APIs using Node.js and Express.js.
                    </p>

                    <p className='service-category'>
                      Category: <span>Backend</span>
                    </p>

                  </div>

                  <button className='service-btn'>
                    Hire Me for this Services
                  </button>

                </div>
              </div>

              <div className="col">
                <div className="card service-card h-100 text-white rounded-4">

                  <div className="card-body text-center">

                    <img src={img3} alt="" className='img-fluid service-img' />

                    <h5 className="card-title">
                      Authentication & <br /> Authorization
                    </h5>

                    <p className='service-text'>
                      Email/password, OAuth, and JWT authentication using Firebase or custom solutions.
                    </p>

                    <p className='service-category'>
                      Category: <span>Other</span>
                    </p>

                  </div>

                  <button className='service-btn'>
                    Hire Me for this Services
                  </button>

                </div>
              </div>

              <div className="col">
                <div className="card service-card h-100 text-white rounded-4">

                  <div className="card-body text-center">

                    <img src={img4} alt="" className='img-fluid service-img' />

                    <h5 className="card-title">
                      Deployment & <br /> Hosting
                    </h5>

                    <p className='service-text'>
                      Deploying full-stack apps to Vercel, Netlify, or Render with CI/CD setup.
                    </p>

                    <p className='service-category'>
                      Category: <span>Tools</span>
                    </p>

                  </div>

                  <button className='service-btn'>
                    Hire Me for this Services
                  </button>

                </div>
              </div>

              <div className="col">
                <div className="card service-card h-100 text-white rounded-4">

                  <div className="card-body text-center">

                    <img src={img5} alt="react" className='img-fluid service-img' />

                    <h5 className="card-title">
                      Third-Party <br /> Integrations
                    </h5>

                    <p className='service-text'>
                      Integrating payment gateways, email services, and cloud storage.
                    </p>

                    <p className='service-category'>
                      Category: <span>Frontend</span>
                    </p>

                  </div>

                  <button className='service-btn'>
                    Hire Me for this Services
                  </button>

                </div>
              </div>

              <div className="col">
                <div className="card service-card h-100 text-white text-center rounded-4">

                  <div className="card-body">

                    <img src={img6} alt="" className='img-fluid service-img' />

                    <h5>
                      Admin Dashboards <br />
                      <span>& Data</span> <br />
                      <span>Visualization</span>
                    </h5>

                    <p className='service-text'>
                      Interactive dashboards with charts and analytics using Recharts or Chart.js.
                    </p>

                    <p className='service-category'>
                      Category: <span>Frontend</span>
                    </p>

                  </div>

                  <button className='service-btn'>
                    Hire Me for this Services
                  </button>

                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Services
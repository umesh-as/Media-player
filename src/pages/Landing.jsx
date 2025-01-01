import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import landingImg from '../assets/music.gif'
import feature1 from '../assets/feature1.jpg'
import feature2 from '../assets/feature2.jpg'
import feature3 from '../assets/feature3.jpg'


const Landing = () => {
  return (
    <div style={{ paddingTop: '100px' }} className='container'>
      {/* landing part */}
      <div className="row align-items-center">
        <div className="col-lg-5">
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{ textAlign: 'justify' }}>Media Player App will allow user to add or remove their uploaded videos from youTube and also allow them to arrange it in different categories by drag and drop. User can also have the provision to manage their watch history as well. What are you waiting for, let starts exploring our site!!!</p>
          <Link to={'/home'} className='btn btn-info'>Get Started</Link>
        </div>
        <div className="col"></div>
        {/* Landing Image */}
        <div className="col-lg-6">
          <img src={landingImg} className='img-fluid' alt="" />
        </div>
      </div>

      {/* feature */}
      <div className='my-5'>
        <h3 className='text-center'>Features</h3>
        <div className="row mt-5">
          <div className="col-lg-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img height='250px' variant="top" src={feature1} />
              <Card.Body>
                <Card.Title>Managing Videos!!</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img height='250px' variant="top" src={feature2} />
              <Card.Body>
                <Card.Title>Managing Videos!!</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img height='250px' variant="top" src={feature3} />
              <Card.Body>
                <Card.Title>Managing Videos!!</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      {/* last */}
      <div className="my-5 row align-tems-center border rounded p-5">
        <div className="col-lg-5">
          <h3 className="text-warning">Simple, Fast and Powerful</h3>
          <p style={{ textAlign: "justify" }}><span className='fs-5 fw-bolder'>Play Everything: </span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere quos dolorem maiores, quia natus iusto similique suscipit ex obcaecati animi non, beatae voluptatem voluptatibus quod magni? Sapiente corrupti fugit provident.</p>

          <p style={{ textAlign: "justify" }}><span className='fs-5 fw-bolder'>Play Everything: </span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere quos dolorem maiores, quia natus iusto similique suscipit ex obcaecati animi non, beatae voluptatem voluptatibus quod magni? Sapiente corrupti fugit provident.</p>

          <p style={{ textAlign: "justify" }}><span className='fs-5 fw-bolder'>Play Everything: </span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere quos dolorem maiores, quia natus iusto similique suscipit ex obcaecati animi non, beatae voluptatem voluptatibus quod magni? Sapiente corrupti fugit provident.</p>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <iframe width="100%" height="360" src="https://www.youtube.com/embed/Po3jStA673E" title="LEO - Official Trailer | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Landing
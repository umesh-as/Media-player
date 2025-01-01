import React, { useState } from 'react'
import { Button, Form, Modal, FloatingLabel } from 'react-bootstrap';
import { saveVideoAPI } from '../services/allAPI';

const Add = ({setAddResponse}) => { 

  const [invalidYoutubeLink, setinvalidYoutubeLink] = useState(false)

  const [videoDetails, setvideoDetails] = useState({
    caption: "", imgUrl: "", youtubeLink: ""
  })

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const extractLinkFromYoutubeLink = (userInputValue) => {
    if (userInputValue.includes("https://www.youtube.com/watch?v=")) {
      const videoId = userInputValue.split("v=")[1].slice(0, 11)
      setinvalidYoutubeLink(false)
      setvideoDetails({ ...videoDetails, youtubeLink: `https://www.youtube.com/embed/${videoId}` })
    } else {
      setinvalidYoutubeLink(true)
      setvideoDetails({ ...videoDetails, youtubeLink: "" })
    }
  }

  const handleUploadVideo = async () => {
    const { caption, imgUrl, youtubeLink } = videoDetails
    if (caption && imgUrl && youtubeLink) {
      try {
        const result = await saveVideoAPI(videoDetails);
        console.log(result);
        if(result.status >= 200 && result.status < 300) {
          alert("Video Uploaded successfully!!");
          handleClose();
          // Pass the result to view component
          setAddResponse(result)
        }
      } catch (err) {
        console.log(err)
      }
    } else alert("Please fill the Form !!!!");
  }

  return (
    <>
      <div className='d-flex align-items-center'>
        <h5>Upload New Video</h5>
        <button onClick={handleShow} className='btn btn-warning ms-3 rounded-circle fw-bolder fs-5'>+</button>
      </div>
      {/* Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Uploading Video Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='border rounded p-3'>
            <FloatingLabel
              controlId="floatingCaption"
              label="Video Caption"
              className="mb-3"
            >
              <Form.Control onChange={e => setvideoDetails({ ...videoDetails, caption: e.target.value })} type="text" placeholder="video Caption" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingUrl"
              label="Video Image Url"
              className="mb-3"
            >
              <Form.Control onChange={e => setvideoDetails({ ...videoDetails, imgUrl: e.target.value })} type="text" placeholder="video image url" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingLink"
              label="Video Youtube Link"
              className="mb-3"
            >
              <Form.Control onChange={e => extractLinkFromYoutubeLink(e.target.value)} type="text" placeholder="Youtube video link" />
            </FloatingLabel>
            {
              <div className='text-warning'>
                {
                  invalidYoutubeLink &&
                  "Invalid Youtube Link...."
                }
              </div>
            }
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUploadVideo}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add 
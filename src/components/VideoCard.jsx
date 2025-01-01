import  { useState } from 'react'
import { Button, Card, Form, Modal, FloatingLabel } from 'react-bootstrap';
import { removeVideoAPI, saveHistoryAPI } from '../services/allAPI';

const VideoCard = ({ video, setDeleteVideo, insideCategory }) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    // display modal
    setShow(true);
    // store history in json
    const {caption, youtubeLink} = video;
    const sysDateTime = new Date()
    console.log(sysDateTime);
    console.log(sysDateTime.toLocaleString('en-US', {timeZoneName:'short'}))
    const timeStamp = sysDateTime.toLocaleString('en-US', {timeZoneName:'short'});
    const historyDetails = {caption, youtubeLink, timeStamp};
    console.log(historyDetails);
    try {
      await saveHistoryAPI(historyDetails);
    } catch (error) {
      console.log(error);
    }
  }

  const handleDeleteVideo = async(id) => {
    try {
      const result = await removeVideoAPI(id);
      setDeleteVideo(result);
    } catch (error) {
      console.log(error)
    }
  }

  const videoCardDragStarted = (e, dragVideoDetaiils) => {
    console.log("Inside VideoCardDragStarted with VideoId: " + dragVideoDetaiils?.id);
    e.dataTransfer.setData("videoDetails", JSON.stringify(dragVideoDetaiils));
  }

  return (
    <>
      <Card draggable={true} onDragStart={e => videoCardDragStarted(e, video)} style={{ width: '14rem', cursor: "pointer" }} >
        <Card.Img onClick={handleShow} width={200} height={250} variant="top" src={video?.imgUrl} />
        <Card.Body>
          <Card.Text className='d-flex justify-content-between'>
            <p>{video?.caption}</p>
            {
              !insideCategory && 
            <td><button className="btn" onClick={() => handleDeleteVideo(video?.id)}><i className="
            fa-solid fa-trash text-danger"></i></button></td>
            }
          </Card.Text>
        </Card.Body>
      </Card>
      {/* Modal */}

      <Modal
        show={show}
        onHide={handleClose}
        centered
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="360" src={`${video?.youtubeLink}?autoplay=1`} title="LEO - Official Trailer | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default VideoCard
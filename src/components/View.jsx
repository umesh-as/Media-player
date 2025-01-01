import { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideosAPI, saveVideoAPI, updateCategoryAPI } from '../services/allAPI'

const View = ({ addResponse, deleteResponseFromCategory, setdeleteResponseFromView }) => {

  const [allVideos, setAllVideos] = useState([]);
  const [deleteVideo, setDeleteVideo] = useState("")

  useEffect(() => {
    getAllVideos();
  }, [addResponse, deleteVideo, deleteResponseFromCategory])

  console.log(allVideos)

  const getAllVideos = async () => {
    try {
      const result = await getAllVideosAPI();
      console.log(result)
      if (result.status >= 200 && result.status < 300) {
        setAllVideos(result.data);
      } else {
        console.log("API call failed");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const dragOverView = (e) => {
    e.preventDefault()
  }

  const categoryVideoDragOverView = async (e) => {
    console.log("Inside categoryVideoDragOverView");
    const { video, categoryDetails } = JSON.parse(e.dataTransfer.getData("dragData"))
    console.log(video, categoryDetails)
    const updatedCategoryVideoList = categoryDetails?.allVideos?.filter(item => item.id != video?.id)
    const updateCategory = { ...categoryDetails, allVideos: updatedCategoryVideoList }
    // updating the category by delete video from category
    const result = await updateCategoryAPI(updateCategory)
    // use state lifting to communicate data from view to category
    setdeleteResponseFromView(result)
    // use api to upload video
    await saveVideoAPI(video)
    // call getAllVideos function
    getAllVideos()
  }

  return (
    <>
      <Row droppable="true" onDragOver={dragOverView} onDrop={e => categoryVideoDragOverView(e)}>
        {
          allVideos?.length > 0 ?
            allVideos.map(video => (
              <Col key={video.id} className='m-4' sm={12} md={6} lg={3}>
                <VideoCard setDeleteVideo={setDeleteVideo} video={video} />
              </Col>
            ))
            : <div className='fw-bolder fs-5 text-warning'>No Videos are Uploaded !!</div>
        }
      </Row>
    </>
  )
}

export default View
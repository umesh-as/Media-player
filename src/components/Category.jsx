import { useEffect, useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { deleteCategoryAPI, getAllCategoryAPI, removeVideoAPI, saveCategoryAPI, updateCategoryAPI } from '../services/allAPI';
import VideoCard from './VideoCard';

const Category = ({ setdeleteResponseFromCategory, deleteResponseFromView }) => {

  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [allCategories, setAllCategories] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getAllCategories();
  }, [deleteResponseFromView])

  const handleAddCategory = async () => {
    if (categoryName) {
      const categoryDetails = { categoryName, allVideos: [] }
      try {
        const result = await saveCategoryAPI(categoryDetails);
        alert("Category Added!")
        setCategoryName(prevCategoryName => "")
        getAllCategories();
        handleClose();
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please Provide a Category Name !!");
    }
  }

  const getAllCategories = async () => {
    try {
      const result = await getAllCategoryAPI();
      if (result.status >= 200 && result.status < 300) {
        setAllCategories(result.data);
      }
    } catch (error) {
      console.log(error)
    }
  }

  const removeCategory = async(id) => {
    try {
      await deleteCategoryAPI(id);
      getAllCategories();
    } catch (error) {
      console.log(error)
    }
  }

  const dragOverCategory = (e) => {
    e.preventDefault()
  }

  const videoCardDropOverCategory = async (e, categoryDetails) => {
    console.log("Inside videoCardDropOverCategory");
    console.log(categoryDetails);
    const videoDetails = JSON.parse(e.dataTransfer.getData("videoDetails"));
    console.log(videoDetails);
    categoryDetails.allVideos.push(videoDetails);
    await updateCategoryAPI(categoryDetails);
    getAllCategories()
    const result = await removeVideoAPI(videoDetails.id)
    setdeleteResponseFromCategory(result);
  }

  const categoryVideoDragStarted = (e, dragVideoDetails, categoryDetails) => {
    let dragData = { video: dragVideoDetails, categoryDetails };
    e.dataTransfer.setData("dragData", JSON.stringify(dragData))
  }

  return (
    <>
      <div className='d-flex justify-content-between align-items-center'>
        <h3>All Categories</h3>
        <button onClick={handleShow} className='btn btn-info ms-3 rounded-circle fw-bolder fs-5'>+</button>
      </div>
      {/* Displaying category videos */}
      {
        allCategories?.length > 0 ?
          allCategories?.map(category => (
            <div droppable='true' onDragOver={dragOverCategory} onDrop={e => videoCardDropOverCategory(e, category)} key={category?.id} className="container-fluid mb-3 mt-3">
              <div className="border rounded p-3 mb-3">
                <div className="d-flex justify-content-between">
                  <h5>{category?.categoryName}</h5>
                  <button className='btn' onClick={() => removeCategory(category?.id)} ><i className="fa-solid fa-trash text-danger"></i></button>
                </div>
                {/* Display category videos */}
                <div className="row mt-2">
                  {
                    category?.allVideos?.length > 0 && 
                    category?.allVideos?.map(video => (
                        <div key={video?.id} className="col-lg-4" draggable={true} onDragStart={e=>categoryVideoDragStarted(e,video,category)}>
                          {/* Video */}
                          <VideoCard video={video} insideCategory={true} />
                         </div>
                      ))
                  }
                </div>
              </div>
            </div>))
          : <div className='fw-bolder text-warning fs-5'>You Haven't add a Category !!</div>
      }
      {/* Modal */}
      <Modal
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingCategory"
            label="Category Name"
            className="mb-3"
          >
            <Form.Control onChange={e => setCategoryName(e.target.value)} type="text" placeholder="category name" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={e => handleAddCategory(categoryName)}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category
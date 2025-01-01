import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'

const Home = () => {

  const [addResponse, setAddResponse] = useState("");
  const [deleteResponseFromCategory, setdeleteResponseFromCategory] = useState("")
  const [deleteResponseFromView, setdeleteResponseFromView] = useState("")

  return (
    <div style={{ paddingTop: "100px" }}>
      <div className='d-flex justify-content-between container mb-5'>
        <Add setAddResponse={setAddResponse} />
        <Link to={'/history'}>Watch History</Link>
      </div>
      <div className="container-fluid my-5 row">
        <div className="col-lg-6">
          <h3>All Videos</h3>
          <View addResponse={addResponse} setdeleteResponseFromView={setdeleteResponseFromView} deleteResponseFromCategory={deleteResponseFromCategory}/>
        </div>
        <div className="col-lg-6">
          <Category deleteResponseFromView={deleteResponseFromView} setdeleteResponseFromCategory={setdeleteResponseFromCategory}/>
        </div>
      </div>
    </div>
  )
}

export default Home
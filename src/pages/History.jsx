import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getHistoryAPI } from '../services/allAPI';

const History = () => {

  const [allVideoHistory, setAllVideoHistory] = useState([]);

  useEffect(() => {
    getAllVideoHistory()
  }, [])

  const getAllVideoHistory = async () => {
    try {
      const result = await getHistoryAPI();
      const reverse = result.data.reverse();
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        setAllVideoHistory(reverse);
      } else {
        console.log(result)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const removeHistory = async (id) => {
    try {
      await deleteHistoryAPI(id);
      getAllVideoHistory();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div style={{ paddingTop: '100px' }}>
      <div className='d-flex justify-content-between container'>
        <h3>Watch History</h3>
        <Link to={'/home'}>Back to Home</Link>
      </div>
      <table className='container table my-5'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption </th>
            <th>Link</th>
            <th>TimeStamp</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          {
            allVideoHistory?.length > 0?
              allVideoHistory?.map((history, index) => (
                <tr key={history?.id}>
                  <td>{index + 1}</td>
                  <td>{history?.caption}</td>
                  <td>{history?.youtubeLink}</td>
                  <td>{history?.timeStamp}</td>
                  <td><button onClick={e => removeHistory(history?.id)} className="btn"><i className="fa-solid fa-trash text-danger"></i></button></td>
                </tr>
              ))
              : <tr><td className='text-center' colSpan={5}>No History!! Watch a Video!</td></tr>
          }
        </tbody>
      </table>
    </div>
  )
}

export default History
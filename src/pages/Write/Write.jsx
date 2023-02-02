import { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../context/UserContext'
import axios from 'axios'

export default function Write() {

  const {userId} = useContext(UserContext)
  const [userData, setUserData] = useState()

  useEffect(()=>{
    axios
    .get(`http://localhost:3001/users/${userId}`)
    .then((json)=>{
      setUserData(json.data)  
    })
  },[])

  function postText(){
    console.log("222")
  }

  return (
    <>
      <div className="banner">
        <div className="max-width">
        </div>
      </div>
      <div className="view">
        <div className="max-width">
          <section className="wrap-box" style={{margin: "0 auto"}}>
            <div className="inner">
  
              <dl className="author-wrap">
                <dt className="a11y-hidden">Author</dt>
                <dt className="a11y-hidden">Created</dt>
                <dd className="created">날짜</dd>
              </dl>
              
              <div className="title-wrap">
                <h2>제목</h2>
              </div>
              <hr />
              <div className="view-contents">
                <textarea></textarea>
              </div>
              <div className="btn-group">
                <Link to="/" onClick = {postText} className="btn-modify">
                  <span className="a11y-hidden">확인</span>
                </Link>
                <button type="button" className="btn-delete">
                  <span className="a11y-hidden">delete</span>
                </button>
              </div>
              <Link to="/" className="btn-back">
                <span className="a11y-hidden">Back</span>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

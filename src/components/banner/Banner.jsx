import { useEffect, useState } from 'react'
import axios from 'axios'
import './banner.css'

export default function Banner() {

  const [blogInfo, setBlogInfo] = useState({})

  useEffect(()=>{
    axios
    .get('http://localhost:3001/blog')
    .then((json)=>{
      setBlogInfo(json.data)  
    })
    .catch(()=>{
      setBlogInfo(null)
    })
  },[])



  return (
    <div className="banner">
			<div className="max-width">
				<div className="banner-contents">
          <p className="sub-text">{blogInfo.subTitle}</p>
          <p className="main-text">{blogInfo.mainTitle}</p>
          <p className="description">
            {blogInfo === undefined ? 
            '로딩 중' : blogInfo === null ? 
            '404' : blogInfo.description}
          </p>
				</div>
			</div>
		</div>
  )
}


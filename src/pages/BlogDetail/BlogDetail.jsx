import { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import axios from 'axios'
import '../wrapbox.css'
import './blogDetail.css'

export default function BlogDetail() {
  const location = useLocation();
  const postNumber = location.pathname.split('/')[2];

  const [post, setPost] = useState(undefined);
  useEffect(()=>{
    axios
    .get(`http://localhost:3001/posts/${postNumber}`)
    .then((json)=>{
      setPost(json.data)  
    })
    .catch(()=>{
      setPost(null)
    })
  },[])


  // 날짜 변환하기
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

  let month;
  let date;

  if(post === undefined) {
    return;
  } else {
    let monthIdx = Number(post.created.slice(5,7)) -1;
    month = monthNames[monthIdx];
    date = post.created.slice(8,10); 
  }

  return (
    <>
      <BannerDetail month={month} date={date} mainBg={post.mainBg} day={post.createdDay} />

      {post === undefined ? <div>로딩 중</div> : 
      post === null ? <div>404</div> : 
      <div className="view">
        <div className="max-width">
          <section className="wrap-box">
            <div className="inner">

              <dl className="author-wrap">
                <dt className="a11y-hidden">Author</dt>
                <dd className="author"><img src={post.profileImg} alt="" /> {post.userName}</dd>
                <dt className="a11y-hidden">Created</dt>
                <dd className="created">{post.created}</dd>
              </dl>
              
              <dl className="category">
                <dt className="a11y-hidden">Category</dt>
                <dd>{post.category[0]}</dd>
                <dd>{post.category[1]}</dd>
              </dl>
              
              <div className="title-wrap">
                <h2>{post.title}</h2>
                <button className="btn-like">Like</button>
              </div>
              <hr />
              <div className="view-contents">
                {post.contents.map((content, idx) => 
                  content.type === "p" ? <p key={idx}>{post.contents[idx].text}</p> : 
                  content.type === "img" ? <img  key={idx} src={post.contents[idx].src} alt="" /> : null
                )}
              </div>
              <div className="btn-group">
                <Link to="/" className="btn-modify">
                  <span className="a11y-hidden">modify</span>
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
      }
    </>
  )
}

export function BannerDetail({month, date, mainBg, day}) {
  return (
    <div className="banner" style={{background: `url(${mainBg}) no-repeat 50% 50% / cover`}}>
      <div className="max-width">
        <div className="banner-contents">
          <p className="today">
            {month} 
            <em>{date}</em>
            {day}
          </p>
        </div>
      </div>
    </div>
  )
}

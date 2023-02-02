import { Link } from 'react-router-dom'
import Category from '../category/Category'
import Author from '../author/Author'
import './posts.css'

export default function Posts({posts}) {
  return (
    <>
      {posts.map(post =>
        <li key={post.id}>
          <Link to={`/blog/${post.id}`} className="post">
          {/* <Link to={`/post/${post.id}`} className="post"> */}
            <article>
              <img src={post.thumbnail} alt="" />
              <div className="contents-wrap">
                <Category 
                  category={post.category} 
                />

                <h3>{post.title}</h3>

                <Author 
                  userName={post.userName} 
                  created={post.created} 
                  profileImg={post.profileImg} 
                />

                <p className="post-description">
                  {post.contents[0].text}
                </p>
              </div>
            </article>
          </Link>
        </li>
      )}
    </>
  )
}

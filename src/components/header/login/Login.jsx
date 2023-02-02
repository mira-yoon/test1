import { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../../context/UserContext'
import imgProfile from '../../../assets/profile.jpg'
import imgIconModifyWhite from '../../../assets/icon-modify-white.svg'
import imgIconLogout from '../../../assets/icon-logout.svg'

export default function Login() {
  const {setIsLogin} = useContext(UserContext);
  return (
    <>
      <li className="profile-img">
        <Link to="#">
          <img src={imgProfile} alt="My Page" />
        </Link>
      </li>
      <li>
        <Link to="/write" className="button">
          <img src={imgIconModifyWhite} alt="" />
          <span>Write</span>
        </Link>
      </li>
      <li>
        <button className="button white" onClick={()=>{setIsLogin(false)}}>
          <img src={imgIconLogout} alt="" />
          <span>Logout</span>
        </button>
      </li> 
    </>
  )
}

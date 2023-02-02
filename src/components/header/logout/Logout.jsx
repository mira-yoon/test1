import { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../../context/UserContext'
import imgIconLogin from '../../../assets/icon-login.svg'
import imgIconRegister from '../../../assets/icon-register.svg'

export default function Logout() {

  const {setIsLogin} = useContext(UserContext);

  return (
    <>
      <li>
        <button className="button gray" onClick={()=>{setIsLogin(true)}}>
          <img src={imgIconLogin} alt="" />
          <span>Login</span>
        </button>
      </li>
      <li className="only-pc">
        <Link to="#" className="button gray">
          <img src={imgIconRegister} alt="" />
          <span>Register</span>
        </Link>
      </li> 
    </>
  )
}

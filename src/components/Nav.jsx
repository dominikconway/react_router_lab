import { Link } from "react-router-dom"
const Nav = () => {
   return (
       <div className="nav">
           <Link to='/about'>
               <div>About</div>
           </Link>
           <Link to='/stocks'>
               <div>Dashboard</div>
           </Link>
       </div>
   )
}

export default Nav
import React from 'react'
import './dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faMessage,faBoxesStacked,faUser,faChartSimple ,faPlus,faGear,faRightFromBracket,faMagnifyingGlass,faBell} from '@fortawesome/free-solid-svg-icons'


const Dashboard = () => {
  return (
    <div className='container '>
      <div className='row'>
        <div className=' col-lg-2 col-sm-12 col-12 '>
          <div className='logo'>
         <img src='https://gingertechnologies.in/images/logo.svg'></img>
         
          </div>
          <div className='side-nav'>
            <ul className='flex' >
              <li className='small'>MAIN</li>
              <li className='dashboard'><span className='mx-1'><FontAwesomeIcon icon={faHouse} /></span>Dashboard</li>
              <li className='small'>MANAGE</li>
              <li><span  className='mx-1'><FontAwesomeIcon icon={faMessage} /></span>inbox</li>
              <li><span className='mx-1'><FontAwesomeIcon icon={faBoxesStacked} /></span>Channels</li>
              <li><span className='mx-1'><FontAwesomeIcon icon={faUser} /></span>Business Profile</li>
              <li><span className='mx-1'><FontAwesomeIcon icon={faChartSimple} /></span>Insights</li>
              <li className='small'>SETTINGS</li>
              <li><span className='mx-1'><FontAwesomeIcon icon={faPlus} /></span>Create Roles</li>
              <li><span className='mx-1'><FontAwesomeIcon icon={faPlus} /></span>Create Users</li>
              <li ><span className='mx-1'><FontAwesomeIcon icon={faGear} /></span>Settings</li>
              <li></li>
              <li></li>
              <li><span className='mx-1'><FontAwesomeIcon icon={faUser} /></span>Profile</li>
              <li><span className='mx-1'><FontAwesomeIcon icon={faRightFromBracket} /></span>Logout</li>
            </ul>
          </div>
        </div>
        <div className=' col-lg-10 grid'> 
         <div className='row px-4 py-1 gap '>
          <div className='col-4 mx-2 spaced ' ><span className='icons-big'><FontAwesomeIcon icon={faUser} /></span ><span>Welcome John Doe!</span></div>
          <div className='col-3  offset-4 space  '>
            <span className='icons'><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
            <span className='icons'><FontAwesomeIcon icon={faMessage} /></span>
            <span className='icons'><FontAwesomeIcon icon={faBell} /></span>
          </div>
          <br></br><br></br>
          <hr></hr>
          <h5 className='px-4'>Dashboard</h5>

            <div className="card rounded-4 " style={{width:'17rem'}}>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>

            <div className="card rounded-4" style={{width:'17rem'}} >
              <div className="card-body ">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>

            <div className="card rounded-4" style={{width:'17rem'}}>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below .</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div className="card rounded-4" style={{width:'17rem'}}>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below .</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div className="card rounded-4" style={{width:'17rem'}}>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below .</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div className="card rounded-4" style={{width:'17rem'}} >
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div className="card rounded-4" style={{width:'17rem'}}>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below .</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div className="card rounded-4" style={{width:'17rem'}}>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below .</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div className="card rounded-4" style={{width:'17rem'}}>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below .</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <hr></hr>
            <div className='footer'>Copyright @ Ginger Technologies ,All Rights Reserved</div>
         </div>   
         </div> 
       </div>  
    </div>
   )
}

export default Dashboard
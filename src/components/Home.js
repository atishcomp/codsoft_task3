import React from 'react'
import './Home.css'

import DeadPool from './deadpool.png'
import MongoDb from './mongodb.png'
import NodeJs from './nodejs.png'
import Atish from './Tajmahal-bg-removed.png'
import Atishprofile from './atishprofile.jpeg'
// import Background from './background.mp4'
import Shield from './Shield.png'
function Home() {
  return (<>
    <div className='home'>
     
       
        {/* <div className='background-semi-circle'></div> */}
        <div className='bubble'></div>
        <div>
        {/* <img className='profile-image' src={Atish} alt='profile-pic'></img> */}
        {/* <div className='background-semi-circle'></div> */}
      

        </div>
      <div className='semi-circle'>
        <div className='hi'>Hi,</div>
        <div className='atish-yadav'>I'm Atish Yadav</div>
      <div className='profile-info-one'>FULL STACK</div>
        <div className='profile-info'>WEB DEVELOPER</div>
        <div className='inner-semi-circle'>
            <div className='second-inner-semi-circle'>
            </div>
        </div>
      </div>
     
       

    </div>

    <div className='home-mobile'>
     
       
        <div className='background-semi-circle'></div>
        <div className='bubble'></div>
        <div>
        <img className='profile-image' src={Atish} alt='profile-pic'></img>
        {/* <div className='background-semi-circle'></div> */}
      

        </div>
      <div className='semi-circle'>
        <div className='hi'>Hi,</div>
        <div className='atish-yadav'>I'm Atish Yadav</div>
      <div className='profile-info-one'>FULL STACK</div>
        <div className='profile-info'>WEB DEVELOPER</div>
        <div className='inner-semi-circle'>
            <div className='second-inner-semi-circle'>
            </div>
        </div>
      </div>
     
       

    </div>
    </>)
}

export default Home

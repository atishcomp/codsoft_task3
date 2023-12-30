import React from 'react'
import './Hobby.css'
import KaunTujhe from './kauntujhe.mp4'
// import Oojaanejaana from './oojaanejaana.mp4'
import Lamp from './lamp.png'
import Guitar from './guitar.png'
import Backgroundimg from './background-img.png'


const Hobby = () => {
  const items=["https://m.media-amazon.com/images/I/41Xh2DgrhvL._SY445_SX342_.jpg","https://m.media-amazon.com/images/I/51zsEUZ5vVL._SY445_SX342_.jpg","https://m.media-amazon.com/images/I/41e+TR4xPDL._SY445_SX342_.jpg"]
  return (<>
    {/* <div className='hobby'>
      <div className='cover-body'>
    
           <h2 style={{marginTop:50,position:'absolute',marginLeft:100,fontWeight:'bold',color:'white'}}>HOBBIES</h2>

           <div style={{marginTop:100,position:'absolute',marginLeft:100,fontSize:20,right:100,color:'white'}}>Beyond my tech endeavors, I find joy in playing the <span style={{fontWeight:'bold'}}>guitar</span> and immersing myself in <span style={{fontWeight:'bold'}}>books</span> . The guitar is my creative escape, and reading fuels my curiosity. These hobbies not only provide balance but also contribute to my overall perspective and creativity.</div>

           <div style={{marginTop:180,position:'absolute',marginLeft:100,fontSize:20,color:'white',fontWeight:'bold'}}>Kaun Tujhe Guitar Fingerstyle and list of my favourite books, The Da Vinci Code, Dark Places and The Alchemist</div>


           <video poster={Guitar} title="Kaun Tujhe Song Fingerstyle" width="400px" height="500px" controls="controls" style={{marginLeft:80,marginTop:250}}>
           <source src={KaunTujhe} type="video/mp4" />
            </video>

          
    
         <img src={"https://m.media-amazon.com/images/I/41Xh2DgrhvL._SY445_SX342_.jpg"} style={{height:300,width:'auto',marginTop:-50,marginLeft:100,boxShadow: "0 0 8px rgb(242, 222, 222)",borderRadius:10}}></img>

         <img src={"https://m.media-amazon.com/images/I/51zsEUZ5vVL._SY445_SX342_.jpg"} style={{height:300,width:'auto',marginTop:-50,marginLeft:70,boxShadow: "0 0 8px rgb(242, 222, 222)",borderRadius:10}}></img>

         <img src={"https://m.media-amazon.com/images/I/41e+TR4xPDL._SY445_SX342_.jpg"} style={{height:300,width:'auto',marginTop:-50,marginLeft:70,boxShadow: "0 0 8px rgb(242, 222, 222)",borderRadius:10}}></img>


         </div> 
    </div> */}

    <div className='hobby'>
      <div style={{background:'linear-gradient(to bottom,orange,orangered)',height:600,width:'40%',borderTopLeftRadius:100,borderBottomRightRadius:100,marginLeft:'5%'}}>

      <video poster={Guitar} title="Kaun Tujhe Song Fingerstyle" width="100%" height="500px" controls="controls" loop style={{marginLeft:'0%',marginTop:50,marginTop:100}}>
           <source src={KaunTujhe} type="video/mp4" />
            </video>
      </div>
      <div style={{background:'none',height:600,width:'50%'}}>

      <h2 style={{marginTop:20,marginLeft:50,fontWeight:'bold',color:'white'}}>HOBBIES</h2>

<div style={{marginLeft:50,fontSize:20,right:10,color:'white',right:25}}>Beyond my tech endeavors, I find joy in playing the <span style={{fontWeight:'bold'}}>guitar</span> and immersing myself in <span style={{fontWeight:'bold'}}>books</span> . The guitar is my creative escape, and reading fuels my curiosity. These hobbies not only provide balance but also contribute to my overall perspective and creativity.</div>

<div style={{marginTop:20,marginLeft:50,fontSize:20,color:'white',fontWeight:'bold',right:10}}>Kaun Tujhe Guitar Fingerstyle and list of my favourite books, The Da Vinci Code, Dark Places and The Alchemist</div>

   <img src={"https://m.media-amazon.com/images/I/41Xh2DgrhvL._SY445_SX342_.jpg"} style={{height:180,width:'auto',marginTop:50,marginLeft:60,boxShadow: "0 0 8px rgb(242, 222, 222)",borderRadius:10}}></img>

         <img src={"https://m.media-amazon.com/images/I/51zsEUZ5vVL._SY445_SX342_.jpg"} style={{height:180,width:'auto',marginTop:50,marginLeft:70,boxShadow: "0 0 8px rgb(242, 222, 222)",borderRadius:10}}></img>

         <img src={"https://m.media-amazon.com/images/I/41e+TR4xPDL._SY445_SX342_.jpg"} style={{height:180,width:'auto',marginTop:50,marginLeft:70,boxShadow: "0 0 8px rgb(242, 222, 222)",borderRadius:10}}></img>

      </div>
    </div>


    <div className='hobby-mobile'>
      <div className='cover-body-mobile'>
    
           <h2 style={{marginTop:0,marginLeft:25,fontWeight:'bold',color:'white'}}>HOBBIES</h2>

           <div style={{marginLeft:25,fontSize:15,right:10,color:'white',right:15}}>Beyond my tech endeavors, I find joy in playing the <span style={{fontWeight:'bold'}}>guitar</span> and immersing myself in <span style={{fontWeight:'bold'}}>books</span> . The guitar is my creative escape, and reading fuels my curiosity. These hobbies not only provide balance but also contribute to my overall perspective and creativity.</div>

           <div style={{marginTop:20,position:'absolute',marginLeft:25,fontSize:15,color:'white',fontWeight:'bold',right:10}}>Kaun Tujhe Guitar Fingerstyle and list of my favourite books, The Da Vinci Code, Dark Places and The Alchemist</div>


           <video poster={Guitar} title="Kaun Tujhe Song Fingerstyle" width="100%" height="500px" controls="controls" loop style={{marginLeft:'0%',marginTop:130}}>
           <source src={KaunTujhe} type="video/mp4" />
            </video>

          
    
         {/* <img src={"https://m.media-amazon.com/images/I/41Xh2DgrhvL._SY445_SX342_.jpg"} style={{height:300,width:'auto',marginTop:-50,marginLeft:100,boxShadow: "0 0 8px rgb(242, 222, 222)",borderRadius:10}}></img>

         <img src={"https://m.media-amazon.com/images/I/51zsEUZ5vVL._SY445_SX342_.jpg"} style={{height:300,width:'auto',marginTop:-50,marginLeft:70,boxShadow: "0 0 8px rgb(242, 222, 222)",borderRadius:10}}></img>

         <img src={"https://m.media-amazon.com/images/I/41e+TR4xPDL._SY445_SX342_.jpg"} style={{height:300,width:'auto',marginTop:-50,marginLeft:70,boxShadow: "0 0 8px rgb(242, 222, 222)",borderRadius:10}}></img> */}


<div style={{display:'inline'}} >
    {items.map((item,index)=>(
       
        <img src={item} style={{height:120,width:'auto',marginLeft:40,borderRadius:5,boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',marginBottom:50}}></img>
    
     
    ))}
    
    </div>

         </div> 
    </div>
    </>)
}

export default Hobby

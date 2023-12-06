import Navbar from './nav'
import "../styles/home.css"
export default function Home() {
    return (
     <>
     <div className='new'>
        <div className='col1'>
   
       <div className='card1'>
        <div className='total'>
       <div className='tmed'><h3>Total Medicine </h3></div>
       <div> <img src='images/noticon.png' className='icorep'/></div>
       </div>
<div className='report'><p className='rep'>Quantity </p>   
 <p className=' number'>4</p> 
 </div>
</div>
<div className='card2'>
        <div className='total'>
       <div className='tmed'><h3>Nearly expiring Medicine </h3></div>
       <div> <img src='images/noticon.png' className='icorep'/></div>
       </div>
<div className='report'><p className='rep'>Quantity </p>   
 <p className=' number'>4</p> 
 </div>
</div>
    
<div className='card3'>
        <div className='total'>
       <div className='tmed'><h3>Expired Medicine </h3></div>
       <div> <img src='images/noticon.png' className='icorep'/>
       </div>
       </div>
<div className='report'><p className='rep'>Quantity </p>   
 <p className=' number'>4</p> 
 </div>
</div>
</div>

<div className='col1'>
   
       <div className='card4'>
        <div className='total'>
       <div className='tmed'><h3>Nearly Done Medicine </h3></div>
       <div> <img src='images/noticon.png' className='icorep'/></div>
       </div>
<div className='report'><p className='rep'>Quantity </p>   
 <p className=' number'>4</p> 
 </div>
</div>
<div className='card5'>
        <div className='total'>
       <div className='tmed'><h3>Total Equipment </h3></div>
       <div> <img src='images/noticon.png' className='icorep'/></div>
       </div>
<div className='report'><p className='rep'>Quantity </p>   
 <p className=' number'>4</p> 
 </div>
</div>
    
<div className='card6'>
        <div className='total'>
       <div className='tmed'><h3>Nearly Done Equipment  </h3></div>
       <div> <img src='images/noticon.png' className='icorep'/></div>
       </div>
<div className='report'><p className='rep'>Quantity </p>   
 <p className=' number'>4</p> 
 </div>
</div>
</div>
</div>

      </>
    )
  }
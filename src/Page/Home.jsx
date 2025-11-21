import React, { useContext } from 'react'
import Contaxtdata from './Contaxtdata';
import Items from './Contaxt';
import { FaRegHeart } from "react-icons/fa";

const Home = () => {

  let {ATC, ATF}=useContext(Items);

  return (
    <>
    <div className='map-list1'>
      {Contaxtdata.map((item)=>{
        return(
          <>
            <div className='map-list2'>

                <h1>{item.id}</h1>
                
                <img src={item.image} alt="" height={120}/>

                <p>{item.title}</p>

                <h2>{item.price} RS.</h2>

                <h2>{item.brand}</h2>

                <p>{item.model}</p>

                <h3>{item.category}</h3>

              <div className='button-container'>
                <button className='button-list'onClick={()=>ATC(item)}>Add To Cart</button>
                  <div className='fav-btn'>
                    <button className='but-list' onClick={()=>ATF(item)}><FaRegHeart/></button>
                  </div>
              </div>
            </div>
            </>
        )
      })}
    </div>
    </>
  )
}

export default Home;

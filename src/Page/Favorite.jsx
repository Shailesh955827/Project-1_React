import React, { useContext } from 'react';
import Items from './Contaxt';
import "../Componates/Navbar.css";

const Favorite = () => {

  let { favorite, RFF}=useContext(Items);

  return (
    <>
      <div className="map-list1">
        {favorite.length == 0 ? <h1 className='fempty-list'>No Favorite Items Added</h1> : ""}

        {favorite.map((item) => {
          return (
            <>
              <div className="map-list2">
                <h1 className="cv">{item.id}</h1>

                <div className="cv">
                  <img src={item.image} alt="" height={120} />
                </div>

                <p className="cv">{item.title}</p>

                <h2 className="cv">{item.price} RS.</h2>

                <h2 className="cv">{item.brand}</h2>

                <p className="cv">{item.model}</p>

                <h3 className="cv">{item.category}</h3>

                {/* <h3 className="cv">
                  Total Price : {item.price * (count[item.id] || 1)}
                </h3> */}

                <button className='but-list' onClick={()=>RFF(item)}>Remove From Favorite</button>
              </div>
            </>
          );
        })
      }
      </div>
    </>
  )
}

export default Favorite

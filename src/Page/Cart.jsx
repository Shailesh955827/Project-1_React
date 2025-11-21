import React, { useContext } from "react";
import Items from "./Contaxt";
import { Link } from "react-router-dom";

const Cart = () => {
  let { time, RFC, count, setCount } = useContext(Items);

  let INC = (id) => {
    setCount((bb) => ({ ...bb, [id]: (bb[id] || 1) + 1 }));
  };

  let DEC = (id) => {
    setCount((bb) => ({ ...bb, [id]: (bb[id] || 1) - 1,}));
  };

  return (
    <>
      <div className="map-list1">
        {time.map((item) => {
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

                <h3 className="cv">
                  Total Price : {item.price * (count[item.id] || 1)}
                </h3>

                <div className="inc-dec">
                  <button className="inc" onClick={() => INC(item.id)}>
                    +
                  </button>
                  <h3 className="h3-list">{count[item.id] || 1}</h3>
                  <button className="dec" onClick={() => DEC(item.id)}>
                    -
                  </button>
                </div>

                <button className="bbt" onClick={() => RFC(item)}>
                  Remove From Cart
                </button>
              </div>
            </>
          );
        })}
      </div>    
      <div className="em-1">
        {time.length == 0 ? (
          <h1 className="empty-list">Your Cart Is Empty</h1>
        ) : (
          <Link to="/by">
            <button type="submit" className="by-list">
              By Now
            </button>
          </Link>
        )}
      </div>
    </>
  );
};

export default Cart;

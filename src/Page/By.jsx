import React, { useContext, useState } from 'react'
import Items from './Contaxt';

const By = () => {
    let {time}=useContext(Items);

    let [submit,setSubmit]=useState(false);

    let Submit = (e) =>
    {
        e.preventDefault();
        setSubmit(true);
    };

    const handleChange = (e) =>
    {
      setFormData({...formData, [e.target.name] : e.target.value });
    };

    return (
    <>
    <div>
        {submit == false && (
          <div  className='div-list1'>
            <form className='form-list' onSubmit={Submit}>
             <h1 className='h1-list'>Login</h1>
             <label htmlFor="">Username</label>
             <input name="username" onChange={handleChange} placeholder='username' required/>
  
             <label htmlFor="">Password</label>
             <input name="password" onChange={handleChange} placeholder='password' required/>
             
             <button className='fobu-list' type='submit'>Submit</button>
            </form>
          </div>
        )}
        {submit == true && (
        <div className='div-list2'>
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Product</th>
                  <th>Qty.</th>
                  <th>Price</th>
                </tr>
              </thead>
              {
                time.map((item)=>{
                  return(
                    <>
                    <tbody>
                      <tr>
                        <td>{item.id}</td>
                        <td className='title-list'>{item.title}</td>
                        <td><img className='imm-list' src={item.image} alt="" height={80} width={60}/></td>
                        <td></td>
                        <td className='pr-list'>{item.price}</td>
                      </tr>
                    </tbody>
                    </>
                  )    
                })
              }
          </table>
          <div className='byfav-list'>
            <h2>Select Payment Mathod</h2>
              <div className='upi'>
            <label>
            <input className='upi' type="radio" name='payment'/> UPI
            </label>
              </div>
            {/* <br/> */}
            <label>
              <div className='dc'>
              <input className='DC-list' type="text" name='payment'/> Debit/Credit Card
              </div>
            </label>
            {/* <br/> */}
            <label>

              <div className='cod'>Cash On Delivery</div> 
              <br/>
              <input className='cod' type="radio" name='payment'/> 
              <div className='yes'>Yes</div> 
              <br/>
              <input className='cod' type="radio" name='payment'/> 
               <div className='yes'>No</div> 
              <br/>
            </label>
            {/* <br/><br/> */}
            <button className='pay-button'>Pay Now</button>
          </div>
        </div>
        )}
    </div>
    </>
  )
}

export default By;

import React, { useState,useRef } from 'react';
import '../whatsappredirection/WhatsAppRedirect.css';

const WhatsAppRedirect = ({ ProductName, ProductPrice,setBuy }) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');
  const vanishbutton=useRef(null)  

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Product: ${ProductName}, Price: ${ProductPrice}, Name: ${name}, Mobile: ${mobile}, Message: ${message}`;
    const whatsappNumber = '7639495042'; 
    const url = `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank'); 
    if(vanishbutton){
      vanishbutton.current.style.display='none'
      setBuy(false)
    }
  };
  const handleCancel=()=>{
    if(vanishbutton){
      vanishbutton.current.style.display='none'
      setBuy(false)
    }
  }

  return (
    <div className="whatsapp-redirect" ref={vanishbutton}>
    <i class="fa-solid fa-x x-icon text-danger"on onClick={handleCancel} style={{cursor:"pointer"}}></i>
      <form className="row g-0 from-container  flex-column" onSubmit={handleSubmit}>
        
      <h3 className='whatsapp-heading  g-3'>Order Via  WatsApp</h3>
        <div className="col-auto g-3">
        <label for="for-name" class="visually">Name</label>
          <input
            type="text"
            className="form-control no-outline"
            id='for-name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="col-auto g-3">
        <label for="for-mobile" class="visually">Mobile</label>
          <input
            type="number"
            className="form-control"
            id="for-mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </div>

        <div className="col-auto g-3">
        <label for="floatingTextarea" class="visually">Message</label>
          <textarea
            type="text"
            className="form-control"
            id="floatingTextarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <div className="col-auto g-3 flex-start" >
          <button type="submit" className="btn btn-success mb-3">
          Submit <i class="fa-solid fa-arrow-up-right-from-square" ></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default WhatsAppRedirect;

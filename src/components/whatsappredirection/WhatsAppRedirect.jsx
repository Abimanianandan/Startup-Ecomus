// import React from 'react'
// import '../whatsappredirection/WhatsAppRedirect.css'
// import { useState } from 'react'

// const WhatsAppRedirect = ({ProductName, ProductPtPrice}) => {
//     const [name,setName]=useState("")
//     const [mobile,setMobile]=useState("")
//     const [message,setMessage]=useState("")

//     const handleSubmit=(e)=>{
// e.preventDefault();
//         console.log('name')
//         console.log('number')
//         console.log('message')

        
//     }


//   return (
//     <>
    
//     <div>WhatsAppRedirect</div>
    
//     <form class="row g-3" onSubmit={handleSubmit}>
//   <div class="col-auto">
//     <input type="text" readonly class="form-control" id="staticEmail2" value={name} onChange={(e)=>setName(e.target.value)}/>
//   </div>

//   <div class="col-auto">
//     <input type="number" readonly class="form-control" id="staticEmail2" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
//   </div>
  
//   <div class="col-auto">
//     <input type="text" class="form-control" id="inputPassword2" placeholder="message" value={message} onChange={(e)=>setMessage(e.target.value)}/>
//   </div>
//   <div class="col-auto">
//     <button type="submit" class="btn btn-primary mb-3">Confirm identity</button>
//   </div>
// </form>
//     </>

//   )
// }

// export default WhatsAppRedirect

import React, { useState } from 'react';
import '../whatsappredirection/WhatsAppRedirect.css';

const WhatsAppRedirect = ({ ProductName, ProductPtPrice }) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Product: ${ProductName}, Price: ${ProductPtPrice}, Name: ${name}, Mobile: ${mobile}, Message: ${message}`;
    const whatsappNumber = '6379414200'; // Updated to your number
    const url = `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank'); // Open WhatsApp chat with pre-filled message
  };

  return (
    <div className="whatsapp-redirect">
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="col-auto">
          <input
            type="number"
            className="form-control"
            placeholder="Enter your mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>

        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Enter message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Confirm Identity
          </button>
        </div>
      </form>
    </div>
  );
};

export default WhatsAppRedirect;

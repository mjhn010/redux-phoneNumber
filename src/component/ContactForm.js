import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import closeIcon from '../../src/asset/images/close.png'

function ContactForm({addInfo}) {
const [name, setName] = useState('')
const [phoneNumber, setPhoneNumber] = useState(0)
const dispatch = useDispatch()
const addContact = () =>{
    dispatch({type:"ADD_CONTACT",payload:{name,phoneNumber}})
}
  return (
    <div className="contact-container">
      <div className="contact-box">
        <img onClick={addInfo} className="close-icon" src={closeIcon}/>
        <p>
          새로운 인연을 추가하고
          <br />
          등록하여 기억해보세요.
        </p>

        <input type="text" className="m-t-3" name="name" placeholder="이름" onChange={(event)=>setName(event.target.value)}/>

        <input type="text" className="m-t-3" name="phone-number" placeholder="폰번호" onChange={(event)=>setPhoneNumber(event.target.value)}/>
        <button className="m-t-3" onClick={addContact}>추가</button>
      </div>
    </div>
  );
}

export default ContactForm;

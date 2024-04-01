import React from 'react'
import {Row,Col, Form} from 'react-bootstrap'
import userIcon from '../asset/images/user.png'


function ContactItem({item}) {
 
  
  return (
    <div className='item-box'>
      <div className='sub-item-box'>
        <div className='img-box'>
        <img className='user-icon' width={40} src={userIcon}/>
        </div>
        <div>
        <div className='item-name'>{item.name}</div>
        <div className='item-num'>{item.phoneNumber}</div>
        </div>
      </div>
    </div>
  )
}

export default ContactItem

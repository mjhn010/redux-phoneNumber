import React, { useEffect, useState } from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import { useSelector } from 'react-redux'

function ContactList({addInfo}) {
    const {contactList,keyword} = useSelector(state => state)
    let [filterList,setFilterList] = useState([])
    useEffect(()=>{
        if(keyword !== ''){
            let list = contactList.filter((item)=> item.name.includes(keyword))
            setFilterList(list) 
        }else{
            setFilterList(contactList)
        }
        
    },[contactList,keyword])
  return (
    <div>
      <SearchBox/>
      <div className='lst-item-box'>
        {filterList.map((item,index)=>(<ContactItem item={item} key={index}/>))}
      </div>
    </div>
  )
}

export default ContactList

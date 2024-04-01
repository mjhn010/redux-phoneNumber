import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

function SearchBox() {
    const [keyword,setKeyword] = useState('')
    const dispatch = useDispatch()
    const search = (event) =>{
        setKeyword(event.target.value)
        dispatch({type:"KEYWORD_NAME",payload:{keyword}})
        console.log(event.target.value)
    }
  return (
    <div className='flex-search'>
      <input className='search-input' type='text' placeholder='연락처 검색' onChange={(event)=>search(event)}/>
      <button onClick={search} className='search-btn'>찾기</button>
    </div>
  )
}

export default SearchBox
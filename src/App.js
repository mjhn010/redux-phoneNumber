import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';
import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import plusIcon from './asset/images/plus.png'




//1. 왼쪽에는 연락처 등록하는 폼이, 오른쪽에는 연락처 리스트와 search창이 있다.
//2. 리스트에 유저 이름과 전화번호를 추가할 수 있다.
//3. 리스트에 아이템이 몇개 있는지 보인다.
//4. 사용자가 유저를 이름검색으로 찾을 수 있다.
function App() {
  let contactList = useSelector(state=>state.contactList)
  const [visible,setVisible] = useState(false)
  const addInfo = () =>{
    setVisible(!visible)
  }
  return (
    <div className="App">
      <div className='title-box'>
      <div className='title-sub'>friends:{contactList.length}</div>
      <h1 className='title'>Your friends</h1>
      <img onClick={addInfo} className='plus-icon' src={plusIcon}/>
      </div>
      
      
      <div className='app-container'>
      
      {visible&&<ContactForm addInfo={addInfo}/>}
      <ContactList/>
      </div>
    </div>
  );
}

export default App;

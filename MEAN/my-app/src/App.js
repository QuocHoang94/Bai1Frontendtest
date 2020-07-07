import React from 'react';
import './App.css';
import Useronline from './components/Useronline';
import Thefirstuser from './components/Thefirst';
import Thelastuser from './components/Thelast';
function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='mytitle'>
          <span className='numbertitle'>179</span>
          <span className='captiontitle'>Applicants</span>
        </div>

        <div className='Alluseronline'>
          <Thefirstuser />
          <div className='formobile'>
            <Useronline />
            <Useronline />
            <Useronline />
            <Useronline />
            <Useronline />
            <Useronline />
            <Useronline />
            <Useronline />
            <Useronline />
          </div>
          <div className='desktop'>
            <Useronline />
            <Thefirstuser />
            <Useronline />
            <Useronline />
            <Thefirstuser />
            <Useronline />
            <Thefirstuser />
            <Useronline />
            <Thefirstuser />
            <Useronline />
            <Thefirstuser />
          </div>
          <Thelastuser />
        </div>
      </div>
    </div>
  );
}

export default App;

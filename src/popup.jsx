import React from 'react';
import { render } from 'react-dom';
import './popup.scss';

function Popup() {
  return (
    <div className='title'>
      <h1>Hello, World!</h1>
    </div>
  )
}

render (<Popup />, document.getElementById('app'));
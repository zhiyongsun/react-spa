import React from 'react';
import {observer} from 'mobx-react';

const Home = observer(({startNum}) => {
  return (
    <div className='Home'>
      <div>ewooeiwo</div>
      <div>{startNum.startNum}</div>
      <div>{startNum.startNum}</div>
      <div className="buttons">
        <button type="primary" className="btn" onClick={() => {
          startNum.inc()
        }}>inc
        </button>

        <button type="primary" className="btn" onClick={() => {
          startNum.dec()
        }}>dec
        </button>

        <button type="primary" className="btn" onClick={() => startNum.reset()}>reset</button>
      </div>
    </div>
  );
});

export default Home




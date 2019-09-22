import React from 'react'

export default (props) => (
    <div>
      <h1 >Car inner component</h1>
      <strong>Car year </strong>
      <button onClick={() => props.onChangeTitle('changeg from Carinner component')}>Click</button>
    </div>
)
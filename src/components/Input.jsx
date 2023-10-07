import React from 'react'
import Send from "../images/send.png"
import Attach from "../images/attach.png"

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type your Message'/>
      <div className='send'>
        <img src={Attach} alt="" />
        <input type="file" style={{display:"none"}} id="file"/>
        <label htmlFor="file">
        <img src={Send} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input

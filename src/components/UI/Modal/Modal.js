import React from 'react'
import classes from './Modal.module.css'
import ReactDOM  from 'react-dom'

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const BackDrop =(props)=>{
  return <div className={classes.backdrop}/>
   
}
function Modal(props) {
  return (
    <div>
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay> ,document.getElementById('overlay'))}
      {ReactDOM.createPortal(<BackDrop/> ,document.getElementById('overlay'))}

    </div>
  )
}

export default Modal
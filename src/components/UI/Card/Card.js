import React from 'react'
import classes from './Card.module.css'

function Card(props) {
  return (
    <div className={classes.div}>
    <div className={classes.card}>
        <div className={classes.div2}>
        <h3 className={classes.title}>{props.name}</h3>
        <h3>{props.price}</h3>
        </div>
        
        <p className={classes.description}>{props.description} </p>
        <div className={classes.div2}>
            Amount:
            <form onSubmit={props.onSubmit}>
            <input 
        onClick={props.amount}
        
        type={'number'}
        min={0}
        max={5}
        defaultValue={0}
        step={1}
        />
        <button>+ADD</button>
            </form>
       
        </div>
    </div>
    </div>
  )
}

export default Card
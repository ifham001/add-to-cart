import React, { useState } from 'react'
import SingleMeal from './SingleMeal/SingleMeal'
import classes from './Meals.module.css'


const mealsArray =[
    {   id:1,
        name:'Pizza',
        price:25,
        description:'The term pizza was first recorded in the 10th century in a Latin manuscript from the Southern Italian town of Gaeta in Lazio,,'

    },
    {   id:2,
        name:'Burgur',
        price:15,
        description:'The term pizza was first recorded in the 10th century in a Latin manuscript from the Southern Italian town of Gaeta in Lazio, '
        
    },
    {   id:3,
        name:'Pasta',
        price:45,
        description:'The term pizza was first recorded in the 10th century in a Latin manuscript from the Southern Italian town of Gaeta in Lazio,'
        
    },
    {   id:4,
        name:'Sushi',
        price:30,
        description:'The term pizza was first recorded in the 10th century in a Latin manuscript from the Southern Italian town of Gaeta in Lazio, '
        
    }
]


function Meals() {
   
    
  return (
    <div className={classes.meals}>
       {mealsArray.map(data=>{
       
       return  <div className={classes.m}>
        <SingleMeal
        id={data.id} 
        name={data.name}
        price={data.price}
        description={data.description}
      

        />
       </div>
       })}
    </div>
  )
}

export default Meals
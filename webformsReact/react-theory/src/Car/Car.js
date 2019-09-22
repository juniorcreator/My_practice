import React from 'react'
import {styles} from '../App'
import CarInner from '../CarInner'
import Radium from 'radium'
// import classes from  './Car.css'
import classes from './Car.scss'

const Car = props => {
  const inputClasses = [classes.input];
  if(props.name !== ''){
    inputClasses.push(classes.green);
  }else{
    inputClasses.push(classes.red);
  }

  if(props.name.length > 4) {
    inputClasses.push(classes.bold);
  }
  const style = {
    border: '1px solid #ccc',
    boxShadow: '0 4px 5px 0 rgba(0,0,0, .14)',
    ':hover': {
      border: '1px solid #aaa',
      boxShadow: '0 4px 15px 0 rgba(0,0,0, .25)'
    }
  };

  return (
      <div className={classes.Car} style={style}>
        <p className='test'>test p</p>
        <h1 style={styles}>Car name {props.name}</h1>
        <strong style={styles}>Car year {props.year}</strong>
        <input
            type="text"
            onChange={props.onChangeName}
            value={props.name}
            className={inputClasses.join(' ')}

        />
        <br/>
        {props.children}
        <button onClick={props.onChangeTitle}>Click</button>
        <button onClick={props.onDelete}>Delete</button>
        {/*<CarInner onChangeTitle={props.onChangeTitle} />*/}
      </div>
  )
};

export default Radium(Car);

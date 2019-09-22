import React, {Component} from 'react'
import {styles} from '../App'
import Radium from 'radium'
import classes from  './Car.css'
import withClass from '../hoc/withClass'
import TagWrap from '../hoc/TagWrap'
import PropTypes from 'prop-types'


class Car extends Component {

  // componentWillReceiveProps(nextProps, nextContext) {
  //   console.log('Car componentWillReceiveProps ', nextProps);
  // }
  //
  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   console.log('Car shouldComponentUpdate ', nextProps, nextState);
  //   return true
  // }
  //
  // componentWillUpdate(nextProps, nextState, nextContext) {
  //   console.log('Car componentWillUpdate ', nextProps, nextState);
  // }
  //
  //
  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   console.log('Car componentDidUpdate ', prevProps, prevState);
  // }
  //
  // componentWillUnmount() {
  //   console.log('Car componentWillUnmount');
  // }

  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  componentDidMount() {
    if(this.props.index === 0) {
      this.inputRef.current.focus();
    }
  }

  render () {
    console.log('Car render');

    // if(Math.random() > 0.7) {
    //   throw new Error('Car random failed');
    // }

    const inputClasses = [classes.input];
    if(this.props.name !== ''){
      inputClasses.push(classes.green);
    }else{
      inputClasses.push(classes.red);
    }

    if(this.props.name.length > 4) {
      inputClasses.push(classes.bold);
    }
    return (
        <TagWrap  clas={classes.Car}>
          <p className='test'>test p</p>
          <h1 style={styles}>Car name {this.props.name}</h1>
          <strong style={styles}>Car year {this.props.year}</strong>
          <input
              ref={this.inputRef}
              type="text"
              onChange={this.props.onChangeName}
              value={this.props.name}
              className={inputClasses.join(' ')}

          />
          <br/>
          {this.props.children}
          <button onClick={this.props.onChangeTitle}>Click</button>
          <button onClick={this.props.onDelete}>Delete</button>
          {/*<CarInner onChangeTitle={props.onChangeTitle} />*/}
        </TagWrap>
    )
  }
}

Car.propTypes = {
  name: PropTypes.string.isRequired,
  year:PropTypes.number.isRequired,
  onChangeName: PropTypes.func,
  onDelete: PropTypes.func,
};
// export default withClass(Car, classes.Car);
export default Car;
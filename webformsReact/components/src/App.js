import React, {Component} from 'react';

//styles
import './App.scss';
//styles

//components
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import Counter from './Counter/Counter'
import Car from './Car/Car'
//components

export let ClickedContext = React.createContext('eny def value');

export const styles = {
  'textAlign': 'center',
  display: 'block'
};

class App extends Component {

  constructor(props) {
    console.log('App constructor');
    super(props);
    this.state = {
      cars: [
        {name:'Ford', year: 2018},
        {name:'Audi', year: 2016},
        {name:'Zapor', year: 1990},
      ],
      pageTitle: 'Hello world from state',
      tryTo: 1,
      showCars: false,
      toggleCreate: false,
      clicked: false
    }
  }

  // state = {
  //
  //
  //
  // }; //end of state




  changeTitleHandler = (newTitle) => {

    console.log('clicked');
    console.log(newTitle);

    this.setState({
      pageTitle: newTitle
    })

  };
  handleInput = (e) => {
    console.log(e.target.value);
    this.setState({
      pageTitle: e.target.value
    })
  };
  tryTo = () => {
    console.log('try to');
    this.setState({
      tryTo: 2
    })
  };
  toggleCars = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  };
  onChangeName(name, index){
    // const car = this.state.cars[index];
    // car.name = name;

    const cars = [...this.state.cars];
    cars[index].name = name;

    this.setState({
      cars
    })
  };
  onDelete(index) {
    console.log(index);
    let cars = [...this.state.cars];
    cars.splice(index, 1);
    this.setState({cars})
  };
  toggleCreateCar = () => {
    this.setState({
      toggleCreate: !this.state.toggleCreate
    })
  };
  createCar = () =>{
    let newCar = {
      name: this.refs.carName.value,
      year: this.refs.carYear.value,
    };
    let cars = [...this.state.cars];
    cars.push(newCar);
    this.setState({
      cars
    });
    this.refs.carName.value = '';
    this.refs.carYear.value = '';
  };
  //live hooks
  componentWillMount() {
    console.log('App componentWillMount');
  }
  componentDidMount() {
    console.log('App componentDidMount');
  }


  render() {
    console.log('App render');
    let cars = null;

    if(this.state.showCars) {
      cars = this.state.cars.map((item, index) => {
        return (
            <ErrorBoundary  key={index} >
              <Car
                  onChangeTitle={() => this.changeTitleHandler(item.name)}
                  name={item.name}
                  year={item.year}
                  index={index}
                  onChangeName={(event) => this.onChangeName(event.target.value, index)}
                  onDelete={this.onDelete.bind(this, index)}
              />
            </ErrorBoundary>

        )
      })
    }
    let createCar = (
        this.state.toggleCreate ?
        <div>
          <h3>Add Car</h3>
          <input ref={'carName'} type="text"/>Name <br/>
          <input ref={'carYear'} type="text"/>Year <br/>
          <button onClick={this.createCar}>Create</button>
        </div>
            : null
    );

    return (
        <div style={styles}>
          <ClickedContext.Provider value={this.state.clicked}>
            <Counter />
          </ClickedContext.Provider>

          <h1 style={styles}>{this.state.pageTitle}</h1>
          <h2>{this.props.title}</h2>
          <input onChange={this.handleInput} type="text"/>
          <button onClick={this.changeTitleHandler.bind(this, 'changed')}>Change title</button>
           <button onClick={this.tryTo}>Try to</button>
           <button onClick={this.toggleCars}>Toggle cars</button>
          <button onClick={() => this.setState({clicked: !this.state.clicked})}>Change clicked</button>
           <button className={'Appbutton'} onClick={this.toggleCreateCar}>Toggle create Car</button>
          {createCar}
          <div style={{
            width: '400px',
            margin: 'auto',
            paddingTop: '20px'
          }}>
            {cars}
          </div>

        </div>
    )
  }
}



export default App;

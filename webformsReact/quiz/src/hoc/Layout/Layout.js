import React, {Component} from 'react'

//styles
import classes from './Layout.css'
//styles

class Layout extends Component {

  render() {
    return (
        <div className={classes.Layout}>

          <main>
            {this.props.children}
          </main>
        </div>
    )
  }

}

export default Layout;
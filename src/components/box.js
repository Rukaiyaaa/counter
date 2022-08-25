import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


// class Component {

//   setState(a) {
//     this.state = a
//       this.render();
//   }

// }


class Box extends Component {

      state = {
          number: 10,
          id: 0,
          className: 'btn btn-success '
      }

      constructor(props) {
        super(props)
      }

      increment = () => {
         this.props.onIncrement(this.props.id)
      }

      decrement = () => {
        this.props.onDecrement(this.props.id)
      }

      delete = () => {
        const { id } = this.props 
        this.props.onDelete(id)
      }

        render() {
          return(
               // <react.Fragment></react.Fragment>
              <div>
                  <button type="button" className={ this.state.className } onClick={this.decrement}>-</button> 
                      <span className= "p-3">{this.props.num}</span> 
                  <button type="button" className="btn btn-primary" onClick={this.increment}>+</button>
                  <button type="button" className="btn btn-danger p-1 ms-2" onClick={ this.delete }>Delete</button>
              </div>
          );
        }
}


 
export default Box;

 //   decrement = () => {
        
 
    //     const number = this.state.number;

    //     if (number === 0) {
    //         const newClassNm = 'btn btn-secondary';
    //         const newState = { number: this.state.number, className: newClassNm };
    //         this.setState(newState)
    //     }
    //     else {
    //         const newNumber = this.state.number - 1;
    //         const newState = { number: newNumber }
    //         this.setState(newState);
    //     }

    //   }

    
import React, { Component } from "react";
import Box from "./box";

import "bootstrap/dist/css/bootstrap.min.css";


// class Component {

//   setState(a) {
//     this.state = a
//       this.render();
//   }

// }


class App extends Component {

    state = {
       boxes: [ ]
    }
  
    createBox = () => {
      const {boxes} = this.state

      this.setState ({boxes: [...boxes, 0]}) // spread operator
    }

    onIncrement = id => {
     // this.state.boxes.find(id)
      const arr = [...this.state.boxes] // spread operator
      arr[id]++

      this.setState ({ boxes: arr })
    }

    onDecrement = id => {
      // this.state.boxes.find(id)
       const arr = [...this.state.boxes] // spread operator
       arr[id]--
 
       this.setState ({ boxes: arr })
     }

     onDelete = id => {
      function filterArray (number, index) {
        if(id === index) return false
        else return true
      }

      const updatedBoxes = this.state.boxes.filter(filterArray)

      this.setState( {boxes: updatedBoxes} )
    }

    
    render() {
      return(    
            // <react.Fragment></react.Fragme nt>
            <div style = { {margin: '10px'} }>
              <button className='btn btn-primary mb-4 ' onClick={this.createBox }>Add New box</button>
              {this.state.boxes.map((number, index) => (
                  <div key={index}>
                      <Box 
                          num={number} 
                          id={index}
                          onDelete={this.onDelete}
                          onIncrement={this.onIncrement}
                          onDecrement={this.onDecrement}
                      />
                      <br />
                  </div> 
              ))}
            </div>
      );
          
    }
}


export default App;

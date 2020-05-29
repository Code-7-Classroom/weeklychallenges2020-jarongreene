import React, { Component } from 'react';
import './App.css';
import Basicinfo from  './Basicinfo'
//import { render } from '@testing-library/react';


    class App extends Component {
      constructor(props) {
        super();

        this.state = {
          person: [
            {
              Name: "JaRon Greene",
              Phone: "314-373-0970",
              DOB: "04/06/1996"

            },
            {
              Name: "JaRon Greene",
              Phone: "314-373-0970",
              DOB: "04/06/1996"

            },
            {
              Name: "JaRon Greene",
              Phone: "314-373-0970",
              DOB: "04/06/1996"

            }



          ]
        }
      }
      render() {
        return <Basicinfo  person={this.state.person} />
          }
    }
   
  
  
  







export default App;

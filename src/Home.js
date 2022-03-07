import React,{Component} from 'react';
import Card from './Card';
import logo from './logo1.png';
import logo2 from './logo2.png';
import './App.css';


class home extends Component {
  render(){
    return (
      <div>
       
        <div className='box'>
          <div>
              <Card name="Playstation 5" price="Rs.50000" desc="qwertyy"> <img src={logo} className="App-logo" alt="logo" /> </Card>
          </div>
          <div>
               <Card name="X BOX Series X" price="Rs.55000" desc="asddasd"> <img src={logo2} className="App-logo" alt="logo" /> </Card>
          </div>
        
        </div>
      </div>
    );
  }
}

export default home;
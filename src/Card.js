import React,{Component} from 'react';
import './App.css';
import {withRouter} from './withRouter';

class Cart extends Component {

    constructor(props){
        super(props);
        this.state = {col:'White'}
        this.yourFunctionHere=this.yourFunctionHere.bind(this);
      }

      updateColor(inputcol){
        this.setState({bgc:inputcol})
      }
 
      yourFunctionHere()
      {
          this.props.navigate('./Product')
      }

  render(){
    return ( 
        <div className="container" style={{backgroundColor:this.state.bgc}}>
          
            {this.props.children}
          
          <div class="text">
            <h3>{this.props.name}</h3>
            <p>{this.props.price}</p>
            <p>{this.props.desc}</p>

            <button  onClick={this.yourFunctionHere}>View Product</button>

            <div>
                <button onClick={() => this.updateColor("White")}>White</button>
                <button onClick={() => this.updateColor("Red")}>Red</button>
                <button onClick={() => this.updateColor("Green")}>Green</button>
                <button onClick={() => this.updateColor("Blue")}>Blue</button>
            </div>
            
          </div>
      </div>
    );
  }
}

export default withRouter(Cart);


import React, {Component} from 'react';

class KeyPadComponent extends Component {

    render() {
        return (
            <div className="button">
                <button name="(" onClick={()=> this.props.onClick("(")}>(</button>
                <button name="CE" onClick={()=> this.props.onClick("CE")}>CE</button>
                <button name=")" onClick={()=> this.props.onClick(")")}>)</button>
                <button name="C" onClick={()=> this.props.onClick("C")}>C</button><br/>
                <button name="1" onClick={()=> this.props.onClick("1")}>1</button>
                <button name="2" onClick={()=> this.props.onClick("2")}>2</button>
                <button name="3" onClick={()=> this.props.onClick("3")}>3</button>
                <button name="+" onClick={()=> this.props.onClick("+")}>+</button><br/>
                <button name="4" onClick={()=> this.props.onClick("4")}>4</button>
                <button name="5" onClick={()=> this.props.onClick("5")}>5</button>
                <button name="6" onClick={()=> this.props.onClick("6")}>6</button>
                <button name="-" onClick={()=> this.props.onClick("-")}>-</button><br/>
                <button name="7" onClick={()=> this.props.onClick("7")}>7</button>
                <button name="8" onClick={()=> this.props.onClick("8")}>8</button>
                <button name="9" onClick={()=> this.props.onClick("9")}>9</button>
                <button name="di" onClick={()=> this.props.onClick("*")}>*</button><br/>
                <button name="." onClick={()=> this.props.onClick(".")}>.</button>
                <button name="0" onClick={()=> this.props.onClick("0")}>0</button>
                <button name="=" onClick={()=> this.props.onClick("=")}>=</button>
                <button name="/" onClick={()=> this.props.onClick("/")}>/</button><br/>
            </div>
        );
    }
}


export default KeyPadComponent;
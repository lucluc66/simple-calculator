import React, { Component } from 'react';
import './App.css';
import Result from './components/Result';
import KeyPad from "./components/KeyPad";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            result:""
        }
    }

    onClick(input){
        if(input === "="){
            this.calculate();
        }else if(input === "C"){
            this.reset();
        }else if(input === "CE"){
            this.backspace();
        }else{
            this.setState((prevState, props) => ({
                result: prevState.result + input
            }))
        }
    };

    reset(){
        this.setState({
            result: ""
        })
    };

    backspace(){
        if(this.state.result === ""){
            return;
        }else{
            this.setState((prevState, props) => ({
                result: prevState.result.slice(0, -1)
            }))
        }  
    };

    calculate(){
        try {
            let exp = this.state.result;
            //4++4 should be valid and now is not
            if(exp[0]==="+" && exp[1]==="+"){
                throw new Error('Error');
            }

            if(exp[0]==="-" && exp[1]==="-"){
                throw new Error('Error');
            }

            let ns = exp.replace(/\+{2}/g, '+');
            ns = ns.replace(/\-{2}/g, '+');
            exp = ns;

            //numbers should come right after decimals
            let res = exp.split(".");
            var i;
            for(i=1; i<res.length; i++){
                let temp = res[i].split("");
                console.log(temp);
                if(isNaN(temp[0])){
                    throw new Error('Number must follow right after decimals');
                }
            }
            //leading zeros are valid, 01+01=2
            let numbers = exp.split(/\D/g);
            numbers = numbers.filter(item => item);
            const op = exp.split(/\d/g).filter(Boolean);


            console.log(numbers);
            console.log(op);

            var x;
            for(x=0; x<numbers.length; x++){
                let no = parseInt(numbers[x], 10);
                numbers[x] = no;
            }

            // console.log(numbers);

            let finalexp = '';
            var j;
            var k = 0;
            var inner, outter;
            var opFirst = false;
            if(numbers.length < op.length || op[0] === "("){
                inner=numbers.length;
                outter=op.length;
                opFirst=true;
            }else{
                inner=op.length;
                outter=numbers.length;
            }

            for(j=0; j<outter; j++){
                if(!opFirst){
                    finalexp = finalexp + numbers[j];
                }else{
                    finalexp = finalexp + op[j];
                }
                
                if(k<inner){
                    if(opFirst){
                        finalexp = finalexp + numbers[j];
                    }else{
                        finalexp = finalexp + op[j];
                    }
                    k++;
                }
            }

            console.log(finalexp);

            exp = finalexp;


            let num = eval(exp);
            num = Math.round((num + Number.EPSILON) * 1000000) / 1000000;

            this.setState({
                result: num
            })
        } catch(e) {
            this.setState({
                result: "Error"
            })
        }
    };

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>Basic Calculator</h1>
                    <Result results={this.state.result}/>
                    <KeyPad onClick={i => this.onClick(i)}/>
                </div>
            </div>
        );
    }
}

export default App;
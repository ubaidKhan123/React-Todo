import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SingleTodo from './SingleTodo';
import SideBar from './components/sidebar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form,Card,Button } from 'react-bootstrap';

class App extends Component{
  constructor(){
    super();
    this.state ={
      count : 0,
      todos : [],
      currentTodo : "",
    };
  }

  onInputChange = o =>{
    //get value from input
    this.setState({currentTodo : o.target.value});
  }

  onClick = () => {
    let copyTodos = this.state.todos.slice(); 
   
    copyTodos.push(this.state.currentTodo); //inserting value of input into list

    this.setState({todos : copyTodos, currentTodo: ""}); //todos:list
    this.setState({count:this.state.count + 1});
  }

  deleteTodo = i => {
    let copyTodos = this.state.todos.slice();
    copyTodos.splice(i,1);

    this.setState({todos: copyTodos});
    this.setState({count:this.state.count - 1});
  }

  render(){
    let bulletedTodos = this.state.todos.map((e,i) => {
      return(
        <SingleTodo todo={e} delete={() => this.deleteTodo(i)}/>
      );
    });
    return(
      <div id="App">
        
      <div className="app_style col-md-8">
         <Row>
           <Col sm="8">
             <Form.Control class="col-md-4" placeholder="Enter todo" value={this.state.currentTodo} onChange={this.onInputChange}  />
           </Col>
              
            <Col sm="4">
              <Button class="col-md-2" variant="primary" onClick={this.onClick}>Add Books</Button>
            </Col>

        </Row>
          {/* <br/>
          <Row>
              <Col sm="8">
                <Form.File id="custom-file" label="Custom file input" custom/>
              </Col>
              <Col></Col>
          </Row> */}
                <br/>
                <h1>List Value: {this.state.count} </h1> 
                <br/>
                {this.state.todos.length === 0 ? "Nothing typed" : <ol>{bulletedTodos}</ol>}
       </div>
      </div>
      
         
       

    );
  }
 
}

export default App;

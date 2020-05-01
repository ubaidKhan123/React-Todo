import React , {Component} from 'react';
import { Card,Button } from 'react-bootstrap';


const SingleTodo = props =>{
    
        return(
            <li><Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>{props.todo}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary" onClick={props.delete}>Delete</Button>
            </Card.Body>
          </Card>
          <br/>
               </li>
            );
    
}

export default SingleTodo;
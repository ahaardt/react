import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';



     function RenderDish({dish}) {
            return (
                <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
                );
    }

     function RenderComments({comments}) {
        if (comments != null) {
        return (
          <div className ="col-12 co-md-5">
          <h4> Comments </h4>
          <ul className="list-unstyled">
            {comments.map((comment) => {
                return (
                    <li key ={comment.id}>
                    <p>{comment.comment}</p>
                    <p> -- {comment.author}</p>
                    </li>
                );
            })}
            </ul>
            </div>
        );}

    else
            return (
                <div></div>
            );
    }




const DishDetail = (props) => {
    if(props.dish != null) {
        return (
            <div class="container">
            <div className ="row">
                <RenderDish dish = {props.dish}/>
                <RenderComments comments = {props.dish.comments} />
            </div>
            </div>
        );}

    else
        return (
            <div> </div>
            );

}



export default DishDetail;


/*
    const DishDetail = (props) => {

        console.log('Dishdetail Component render invoked');

        if (props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <renderDish dish={props.dish} />
                        <renderComments comments={props.dish.comments} />
                    </div>
                </div>

            );
        } else {
            return (
                <div></div>
            );
        }


    }

*/
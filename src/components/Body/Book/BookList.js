import React from "react";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

const BookList = (props) => {
  console.log(props);
  return (
    <div className="col-lg-4 mt-5">
        <Card>
          <CardHeader>{props.name}</CardHeader>
          <CardBody>
            <CardTitle tag="h5">{props.subtitle}</CardTitle>
            <input type="text" onChange={props.changeWithInput} value={props.subtitle}/>
            <CardText>
             {props.details}
            </CardText>
            <a href={props.site} className="btn btn-primary" target="_blank">Website</a>
          </CardBody>
          <CardFooter className="text-center">
            <Button onClick={props.delBook}>Delete Book</Button>
          </CardFooter>
        </Card>
    </div>
  );
};

export default BookList;

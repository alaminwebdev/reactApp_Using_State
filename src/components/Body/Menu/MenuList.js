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

const MenuList = props => {
  return (
    <div className="col-lg-4 mt-5">
      <Card>
        <CardHeader>{props.name}</CardHeader>
        <CardBody>
          <CardTitle tag="h5">{props.title}</CardTitle>
          <CardText>{props.type}</CardText>
          <a href={props.site} className="btn btn-primary" target="_blank">
            Website
          </a>
        </CardBody>
        <CardFooter className="text-center">
          <Button onClick={props.delMenu}>Delete Book</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default MenuList;

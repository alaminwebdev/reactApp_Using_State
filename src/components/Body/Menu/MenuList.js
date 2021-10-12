import React from "react";
import {
    Card,
    Button,
    CardHeader,
    CardFooter,
    CardBody,
    CardTitle,
    CardText,
    CardImg,
    Badge
  } from "reactstrap";

const MenuList = props => {
  return (
    <div className="col-lg-4 mt-5">
      <Card>
        <CardImg top width="100%" src={props.menu.image} alt="Card image cap" />
        <CardHeader>
          {props.menu.subtitle}
          <span className="badge rounded-pill bg-danger ms-2">{props.menu.category}</span>
        </CardHeader>
        <CardBody>
          <CardTitle tag="h5">{props.menu.menuName}</CardTitle>
          <CardText>{props.menu.description}</CardText>
        </CardBody>
        <CardFooter className="text-center">
          <Button onClick={props.delMenu}>Delete Book</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default MenuList;

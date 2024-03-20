import React from 'react';
import { Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import '../../assets/CSS/Dashboard.css';

const DashboardCard = ({ className, cardTitle, cardText, link, icon }) => {
  const cardClassName = `pt-3 text-start ${className}`;

  return (
    <Col className="mt-3" sm={8} lg={3} md={6}>
      <NavLink className="nav-link" to={link}>
        <Card className={cardClassName}>
          <CardBody>
            <CardTitle className="text-secondary text-start" tag="h4">
              {cardTitle}
            </CardTitle>
            <div className ="text-info d-flex align-items-center">
            <CardText className="">
            {icon}
            </CardText>
            <CardText>
            {cardText}
            </CardText>
            </div>
          </CardBody>
        </Card>
      </NavLink>
    </Col>
  );
};

export default DashboardCard;


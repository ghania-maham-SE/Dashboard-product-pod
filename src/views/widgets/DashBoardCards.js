import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketShopping,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { HiShoppingCart } from "react-icons/hi";
import { FaUsers } from "react-icons/fa";
import { TbCategory } from "react-icons/tb";
import { AiOutlineShopping } from "react-icons/ai";
import { BsTags } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { Row } from "reactstrap";
import { Link } from "react-router-dom";
import "../../assets/CSS/sideBar.css";
import DashbooardCard from "./WidgetsBrand";

const WidgetsDropdown = () => {

  // const totalUsers = Users?.length;
  // const totalCategories = category?.length;


  const widgets = [
    {
      classStyle: "card-contentProduct",
      cardTitle: "Total Products",
      link: "/products/productList",
      icon: <HiShoppingCart style={{ marginRight: "10px", fontSize: "44px", color: "" }} />,
    },
    {
      classStyle: "card-contentUsers ",
      cardTitle: "Users",
      link: "/users/usersList",
      icon: <FaUsers style={{ marginRight: "10px", fontSize: "44px", color: "" }} />,
    },
    {
      classStyle: "card-contentCate",
      cardTitle: "Categories",
      link: "/categaries/list",
      icon: <TbCategory style={{ marginRight: "10px", fontSize: "44px", color: "" }} />,
    },
    {
      classStyle: "card-contentOrders ",
      cardTitle: "Total Orders",
      link: "/orders/orderslist",
      icon: <AiOutlineShopping style={{ marginRight: "10px", fontSize: "44px", color: "" }} />,
    },
  ];

  return (
    <>
      <Row className="justify-content-center">
        {widgets.map((widget, index) => (
          <DashbooardCard
            key={index}
            className={widget.classStyle}
            cardTitle={widget.cardTitle}
            cardText={widget.cardText}
            link={widget.link}
            icon={widget.icon}
          />
        ))}
      </Row>
    </>
  );
};

export default WidgetsDropdown;

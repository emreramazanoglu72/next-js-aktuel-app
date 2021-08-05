import Link from "next/link";
import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const Header = ({ title }) => {
  return (
    <Navbar color="light" light expand="md">
      <Link href="/">
        <NavbarBrand href="/">{title ? title : "Aktel Ürünleri"}</NavbarBrand>
      </Link>
    </Navbar>
  );
};

export default Header;

import Image from "next/image";
import React from "react";
import logo from "../../../img/food-logo-png_seeklogo-379050-removebg-preview.png"

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <aside>
          <Image alt="Logo" width={150} height={160} src={logo}></Image>
          <p>
            Foodify Restaurant Ltd.
            <br />
            Providing reliable tech since 2025
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Our Services</h6>
          <a className="link link-hover">Dine-In</a>
          <a className="link link-hover">Home Delivery</a>
          <a className="link link-hover">Online Ordering</a>
          <a className="link link-hover">Table Reservation</a>
          <a className="link link-hover">Catering Service</a>
        </nav>
        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <a className="link link-hover">Food</a>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;

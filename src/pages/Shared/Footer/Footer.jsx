import React from "react";

const Footer = () => {
  return (
    <div className=" p-10 bg-neutral text-neutral-content">
  <footer className="footer">
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Kung Fu Rising</a>
    <a className="link link-hover">Tiger Claw Fist</a>
    <a className="link link-hover">Phoenix Fist Martial Arts</a>
    <a className="link link-hover">Iron Fist Kickboxing</a>
  </div> 
  <div>
    <span className="footer-title">Combat Academy</span> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </div>
  </footer>
  <p className="text-center font-bold">&copy; copyright by Combat Academy</p>
</div>
  );
};

export default Footer;

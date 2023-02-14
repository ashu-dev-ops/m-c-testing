import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
display: flex;
padding: 15px 70px;
justify-content: space-between;
align-items: center;
position: sticky;
top: 0px;
backdrop-filter: blur(2px);


div{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul{
  display: flex;
  list-style: none;

  li{
    margin: 0px 20px;
    padding: 3px 0px;
    position: relative;

    &::after{
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      height: 0px;
      width: 0%;
      border: 0px solid white;
      transition: border-width 0ms, 150ms ease-out;
    }

    &:hover::after{
      // border-color: white;
      border-width: 1px;
      width: 100%;
      left: 0%;
    }

    a{
      color: white;
      font-weight: bold;
      text-decoration: none;
    }
    a:*{
      color: white;
    }
  }
}

button{
  margin: 0px 50px;
}`;

const SlidingButton = styled.button`
display: block;
border-radius: 5px;
overflow: hidden;
height: 40px;
width: 100px;
position: relative;
background: transparent;

&::before{
  content: "${(props)=>props.btn_name}";
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: black;
  background-color: #fbd547;
  position: absolute;
  top: 0px;
  left: 0px;
  transition: 150ms ease;
}

&::after{
  content: "${(props)=>props.btn_name}";
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: #fbd547;
  background-color: black;
  position: absolute;
  left: 0px;
  top: 100%;
  z-index: 1;
  transition: 150ms ease;
  transition-delay: 50ms;
}

&:hover::before{
  top: -100%;
}
&:hover::after{
  top: 0px;
}
`;

const Navbar = () => {
  return (
    <>
    <Nav>
      <div className="logo">
        <Link to="/">
          <svg width="200" viewBox="0 0 456 107.69"><g><rect x="11.01" y="11.01" width="85.67" height="85.67" rx="13.41" ry="13.41" transform="translate(-17.4 80.74) rotate(-65.68)" style={{fill: "rgb(251, 213, 71)"}}></rect><g><rect x="11.01" y="11.01" width="85.67" height="85.67" rx="13.41" ry="13.41" transform="translate(-15.55 22.48) rotate(-20.68)" style={{fill: "rgb(108, 68, 155)"}}></rect><path d="M76.45,39.77l-9.62,29.03h-5.72l-7.17-21.48-7.3,21.48h-5.76l-9.62-29.03h5.6l7.22,22.06,7.51-22.06h4.98l7.34,22.18,7.42-22.18h5.14Z" style={{fill: "rgb(255, 255, 255)"}}></path></g></g><g><path d="M180.02,37.05l-11.23,33.6h-5.04l-9.17-26.83-9.17,26.83h-5.14l-11.23-33.6h4.94l9.07,27.31,9.46-27.31h4.42l9.26,27.46,9.26-27.46h4.56Z" style={{fill: "rgb(255, 255, 255)"}}></path><path d="M206.22,62.25h-17.86l-3.7,8.4h-4.94l15.22-33.6h4.75l15.27,33.6h-5.04l-3.7-8.4Zm-1.68-3.84l-7.25-16.46-7.25,16.46h14.5Z" style={{fill: "rgb(255, 255, 255)"}}></path><path d="M248.85,37.05v33.6h-3.94l-20.16-25.06v25.06h-4.8V37.05h3.94l20.16,25.06v-25.06h4.8Z" style={{fill: "rgb(255, 255, 255)"}}></path><path d="M287.82,37.05v33.6h-3.94l-20.16-25.06v25.06h-4.8V37.05h3.94l20.16,25.06v-25.06h4.8Z" style={{fill: "rgb(255, 255, 255)"}}></path><path d="M319.31,62.25h-17.86l-3.7,8.4h-4.94l15.22-33.6h4.75l15.27,33.6h-5.04l-3.7-8.4Zm-1.68-3.84l-7.25-16.46-7.25,16.46h14.5Z" style={{fill: "rgb(255, 255, 255)"}}></path><path d="M331.79,67.62c0-1.92,1.49-3.26,3.26-3.26s3.17,1.34,3.17,3.26-1.44,3.31-3.17,3.31-3.26-1.39-3.26-3.31Z" style={{fill: "rgb(255, 255, 255)"}}></path><path d="M341.82,53.85c0-9.94,7.58-17.19,17.81-17.19,5.18,0,9.7,1.78,12.77,5.23l-3.12,3.02c-2.59-2.74-5.76-3.98-9.46-3.98-7.58,0-13.2,5.47-13.2,12.91s5.62,12.91,13.2,12.91c3.7,0,6.86-1.3,9.46-4.03l3.12,3.02c-3.07,3.46-7.58,5.28-12.82,5.28-10.18,0-17.76-7.25-17.76-17.19Z" style={{fill: "rgb(255, 255, 255)"}}></path><path d="M375.8,53.85c0-9.84,7.58-17.19,17.91-17.19s17.81,7.3,17.81,17.19-7.58,17.19-17.81,17.19-17.91-7.34-17.91-17.19Zm30.91,0c0-7.44-5.57-12.91-13.01-12.91s-13.11,5.47-13.11,12.91,5.57,12.91,13.11,12.91,13.01-5.47,13.01-12.91Z" style={{fill: "rgb(255, 255, 255)"}}></path><path d="M450.01,70.65l-.05-24.48-12.15,20.4h-2.21l-12.15-20.26v24.34h-4.61V37.05h3.94l14.02,23.62,13.83-23.62h3.94l.05,33.6h-4.61Z" style={{fill: "rgb(255, 255, 255)"}}></path></g></svg>
        </Link>
      </div>
      <div>
        <ul>
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/chat-page">Chat Page</Link>
          </li>
        </ul>
        <SlidingButton btn_name="Sign-Up">
          <Link to="/auth">Sign-Up</Link>
        </SlidingButton>
        <div className="language">
          <svg className="desktop-only" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM7.71 17.667C6.72341 15.5743 6.15187 13.3102 6.027 11H2.062C2.25659 12.5389 2.89392 13.9882 3.89657 15.1717C4.89922 16.3552 6.22401 17.2221 7.71 17.667ZM8.03 11C8.181 13.439 8.878 15.73 10 17.752C11.1523 15.6766 11.8254 13.3695 11.97 11H8.03ZM17.938 11H13.973C13.8481 13.3102 13.2766 15.5743 12.29 17.667C13.776 17.2221 15.1008 16.3552 16.1034 15.1717C17.1061 13.9882 17.7434 12.5389 17.938 11ZM2.062 9H6.027C6.15187 6.68979 6.72341 4.42569 7.71 2.333C6.22401 2.77788 4.89922 3.64475 3.89657 4.8283C2.89392 6.01184 2.25659 7.4611 2.062 9ZM8.031 9H11.969C11.8248 6.6306 11.152 4.32353 10 2.248C8.84768 4.32345 8.17456 6.63052 8.03 9H8.031ZM12.29 2.333C13.2766 4.42569 13.8481 6.68979 13.973 9H17.938C17.7434 7.4611 17.1061 6.01184 16.1034 4.8283C15.1008 3.64475 13.776 2.77788 12.29 2.333Z" fill="white"></path></svg>
        </div>
      </div>
    </Nav>
    </>
  );
};

export default Navbar;

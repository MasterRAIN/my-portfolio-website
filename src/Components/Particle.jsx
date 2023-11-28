import React from "react";
import styled from "styled-components";
function Particle() {
  return (
    <Wrapper className="background gradient">
      <ul className="bg-bubbles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </Wrapper>
  );
}

export default Particle;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  
  .bg-bubbles li {
    background: rgba(0, 0, 0, 0.1);
    position: absolute;
    list-style: none;
    display: block;
    width: 80px;
    height: 80px;
    bottom: -320px;
    animation: square 30s infinite linear;
    border-radius: 10px;
    &:first-child {
      left: 70%;
      width: 120px;
      height: 120px;
      animation-delay: 24s;
    }
    &:nth-child(2) {
      left: 20%;
      width: 120px;
      height: 120px;
      animation-delay: 72s;
      animation-duration: 34s;
    }
    &:nth-child(3) {
      left: 25%;
      animation-duration: 50s;
      animation-delay: 54s;
    }
    &:nth-child(4) {
      left: 80%;
      width: 320px;
      height: 320px;
      animation-duration: 80s;
    }
    &:nth-child(5) {
      left: 10%;
      width: 35px;
      height: 35px;
      animation-duration: 30s;
      animation-delay: 16s;
    }
    &:nth-child(6) {
      left: 60%;
      width: 240px;
      height: 240px;
    }
    &:nth-child(7) {
      left: 32%;
      width: 160px;
      height: 160px;
      animation-delay: 17s;
      animation-duration: 50s;
    }
    &:nth-child(8) {
      left: 55%;
      width: 40px;
      height: 40px;
      animation-delay: 15s;
      animation-duration: 80s;
    }
    &:nth-child(9) {
      left: 5%;
      width: 320px;
      height: 320px;
      animation-delay: 33s;
      animation-duration: 60s;
    }
    &:nth-child(10) {
      left: 15%;
      width: 100px;
      height: 100px;
      animation-duration: 45s;
      animation-delay: 2s;
    }
    &:nth-child(11) {
      left: 50%;
      width: 40px;
      height: 40px;
      animation-delay: 3s;
    }
    &:nth-child(12) {
      left: 12%;
      width: 90px;
      height: 90px;
      bottom: 450px;
      animation: spin 60s infinite linear;
      transform: rotate(100deg);
    }
    &:nth-child(13) {
      left: 60%;
      width: 50px;
      height: 50px;
      bottom: 540px;
      animation: spin 100s infinite linear;
      transform: rotate(600deg);
    }
    &:nth-child(14) {
      left: 73%;
      width: 35px;
      height: 35px;
      bottom: 310px;
      animation: spin 55s infinite linear;
      transform: rotate(600deg);
    }
    &:nth-child(15) {
      left: 59%;
      width: 25px;
      height: 25px;
      bottom: 100px;
      border-radius: 7px;
      animation: spin 25s infinite linear;
      transform: rotate(600deg);
    }
  }

  @keyframes spin {
    0% {
      
    }

    100% {
      transform: rotate(-600deg);
    }
  }

  @keyframes square {
    0% {
      transform: translateY(0);
    }

    100% {
      transform: translateY(-1500px) rotate(600deg);
    }
  }

  @media only screen and (max-width: 768px) {
    .bg-bubbles li {
    width: 20px;
    height: 20px;
    border-radius: 6px;
      &:first-child {
        width: 30px;
        height: 30px;
      }
      &:nth-child(2) {
        width: 30px;
        height: 30px;
      }
      &:nth-child(3) {
        width: 20px;
        height: 20px;
      }
      &:nth-child(4) {
        width: 80px;
        height: 80px;
      }
      &:nth-child(5) {
        width: 60px;
        height: 60px;
      }
      &:nth-child(6) {
        width: 60px;
        height: 60px;
      }
      &:nth-child(7) {
        width: 40px;
        height: 40px;
      }
      &:nth-child(8) {
        width: 25px;
        height: 25px;
      }
      &:nth-child(9) {
        width: 70px;
        height: 70px;
      }
      &:nth-child(10) {
        width: 50px;
        height: 50px;
      }
      &:nth-child(11) {
        width: 55px;
        height: 55px;
      }
    }
  }
`;

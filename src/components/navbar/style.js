import styled from "styled-components";

export const NavbarSection = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  height: 90px;

  body {
    margin: 0;
    padding: 0;
  }
  .nav-Logo {
    width: 150px;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 100%;
  }
  .NavLink-Cont {
    width: 80px;
    
    .NavLink:hover {
      border-bottom: 2px solid #454545;
    }
  }
  .navLinks {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 23px;

    .NavLink:hover {
      border-bottom: 2px solid #454545;
    }
  }

  .navbar {
    // height: 60px;
    background-color: #ffffff !important;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .menu-icon {
    display: none;
  }

  .nav-elements ul {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
  }

  .nav-elements ul li:not(:last-child) {
    margin-right: 60px;
  }

  .nav-elements ul a {
    font-size: 16px;
    font-weight: 400;
    color: #2f234f;
    text-decoration: none;
  }

  .nav-elements ul a.active {
    color: #574c4c;
    font-weight: 500;
    position: relative;
  }

  .nav-elements ul a.active::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #574c4c;
  }

  @media (max-width: 1140px) {
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      gap: 40%;
    }
  }

  @media (max-width: 920px) {
    .menu-icon {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      height: 60px;
      width: 100%;
    }
    .nav-elements ul li:not(:last-child) {
      margin-right: 30px;
    }
    .navbar {
      // height: 60px;
      background-color: #ffffff !important;
      position: relative;
      width: 100%;
      height: 60px;
    }
    .navLinks {
      display: flex;
      padding: 20px;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 25px;
    }
    .nav-Logo {
      width: 150px;
      padding-left: 50px;
    }
    .nav-elements {
      display: flex;
      flex-direction: column !important;
      position: absolute;
      right: 0;
      top: 60px;
      background-color: #ffffff;
      width: 0px;
      height: 100vh;
      transition: all 0.3s ease-in;
      overflow: hidden;
    }

    .nav-elements.active {
      width: 300px;
    }

    .nav-elements ul {
      display: flex;
    }

    .nav-elements ul li {
      margin-right: unset;
      margin-top: 22px;
    }
  }
  @media (max-width: 400px) {
    .container {
      display: flex;
      justify-content: center;
      align-items: center;

      gap: 0px;
    }
    .nav-Logo {
      width: 150px;
      padding-left: 20px;
    }
  }
`;

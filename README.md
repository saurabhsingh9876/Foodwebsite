# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
/* .container {
     margin-left: 1%;
    width: 96%;
    height: 54px;
    display: flex;
    align-items: center;
  
    border-radius: 9px;
    padding: 25px;
    box-shadow: 0 2px 0px 2px rgba(0,0,0,.2);
    background-color: #fff;
  
    position: sticky; /* Make it sticky */
    top: 0; /* Stick to the top of the viewport */
    z-index: 1000; /* Set a high z-index to ensure it's in front of other content */
  }
  
/*  
.leftnav {
    margin-left: 5rem;
    display: flex;
    align-items: center;
}

.map {
    margin-left: 90px;
}
.map .p{
    margin-left: 8px;
}
.container .input {
    margin-left: 21%;
    width: 24rem;
    padding-left: 13px;
    height: 30px;
    border: 1px solid rgba(128, 128, 128, 0.518);
    align-items: center;
    border-radius: 4px;
    outline: none;
    /* box-shadow: 1px 1px 1px #fff; */
  
    /* color: #fff; */
    /* background-color: rgba(128, 128, 128, 0.074);
} */
/*
.leftnav .logo {
    margin-right: 5%;
    height: 36px;
    text-align: center;
    align-items: center;
}

.rightnav {
    margin-left: 7rem;
    display: flex;
    align-items: center;
    padding-left: 20px;
}

.category {
    display: flex;
    align-items: center;
    padding: 20px;
    text-align: center;
}

.cartn {
    width: 100px;
    margin-left: 15px;
    z-index: 0;
    padding-left: 30px;
    height: 40px;
    /* color: black; */
    border: 2px solid crimson;
    display: flex;
    text-align: center;
    align-items: center;
    border-radius: 4px;
} 


/* 
  
@media (max-width: 768px) {
    
    .rightnav {
        display: none;
    }
    .container {
        width: 100%;
        margin: 0 3%;
        /* padding: 10px;  */
        
    }
    .leftnav .logo {
        margin-left: 2%;}
    .leftnav {
        margin-left: 5rem; 
    }

    .container .input {
        margin-left: 10%;
        width: 12rem; 
    padding: 8px;}

    .rightnav {
        margin-left: 5rem; 
    }

    .cartm {
        width: 40px; 
    }
}

@media (max-width: 480px) {
    .container {
        width: 100%; 
        padding: 5px; }

    .leftnav {
        margin-left: 2rem; 
    }

    .container .input {
        margin-left: 5%;
        width: 9rem; 
    }

    .rightnav {
        margin-left: 2rem; 
    }

    .cart {
        width: 30px; 
    }
} */  
/* @import url("https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Jost", sans-serif;
}

html {
  font-size: 86.5%;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

/* 
 

/* navbar style start  */

.main-nav {
  width: 100%;
  height: 8rem;
  display: grid;
  grid-template-columns: 10rem 1fr 2fr 1fr 10rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}
 
.logo {
  display: grid;
  /* background-color: #3b5998; */
  grid-column: 2/3;
  justify-content: start;
  align-items: center;
}

.menu-link {
  grid-column: 3/4;
}
.input {
  margin-left: 21%;
  width: 24rem;
  padding-left: 13px;
  height: 30px;
  border: 1px solid rgba(128, 128, 128, 0.518);
  align-items: center;
  border-radius: 4px;
  outline: none;
}
.menu-link ul {
  height: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15%;

}

/* .social-media {
  grid-column: 4/5;
} */

.social-media ul {
  height: 10rem;
  display: grid;
  grid-template-columns: 2fr repeat(2, 1fr);
  align-items: center;
  justify-content: flex-end;
}

.social-media ul li {
  text-align: right;
}

.social-media ul li:first-child {
  grid-column: 2/3;
}
.cartn {
  width: 100px;
  /* margin-left: 35%; */
  z-index: 0;
  padding-left: 30px;
  height: 40px;
  margin-top: 35%;
  
  border: 2px solid crimson;
  display: flex;
  text-align: center;
  align-items: center;
  border-radius: 4px;
} 
/* .category {
  display: flex;
  align-items: center;
  padding: 20px;
  text-align: center;
} */
/* ----------- Grid part ends ----------------- */

.logo h2 {
  font-size: 2.5rem;
  font-weight: 400;
  text-transform: uppercase;
  background: -webkit-linear-gradient(#eee, rgb(69, 57, 248));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.logo h2 span {
  font-size: 3.5rem;
}

.menu-link ul li {
  font-size: 1.8rem;
}

.menu-link ul li a {
  text-transform: capitalize;
  color: rgba(0, 0, 3, 0.8);
  transition: 0.5s;
}
.menu-link ul li:hover > a {
  transform-origin: left;
  color: rgba(0, 0, 3, 1);
  text-decoration: underline;
  transition: 0.5s;
}

.social-media ul li {
  font-size: 1.8rem;
}

.social-media .hamburger-menu {
  display: none;
}

.facebook {
  color: #3b5998;
}

.instagram {
  color: #c32aa3;
}

.youtube {
  color: #ff0000;
}

/* hero section   */

.hero-section {
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.hero-section p {
  font-size: 3rem;
  text-transform: capitalize;
}

.hero-section h1 {
  font-size: 5rem;
  text-transform: uppercase;
  text-align: center;
}

/* responsive css style  */
@media (max-width: 1080px) {
  .main-nav {
    height: 8rem;
    grid-template-columns: 2rem 3fr 3fr 1fr 2rem;
  }

  .logo,
  .menu-link ul,
  .social-media ul {
    height: 8rem;
  }
}

/* responsive css style  */
@media (max-width: 998px) {
  .main-nav {
    height: 7rem;
    grid-template-columns: 2rem 2fr 3fr 2rem 2rem;
  }

  .menu-link {
    display: none;
  }

  .logo,
  .social-media ul {
    height: 7rem;
  }

  .mobile-menu-link {
    grid-column: 2/4;
    position: relative;
    z-index: 99;
  }

  .mobile-menu-link {
    background-color: white;
    height: 20rem;
    display: grid;
    grid-column: 2/5;
    align-items: center;
    padding-left: 3rem;
    transition: all 2s linear;
    transform-origin: top;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }

  .mobile-menu-link ul {
    height: 20rem;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: start;
  }

  .mobile-menu-link ul li:first-child {
    transition-delay: 0.2s;
  }

  .social-media {
    grid-row: 1/2;
    grid-column: 3/5;
    justify-items: end;
    align-items: center;
    transition: all 2s linear;
  }

  .social-media .social-media-desktop {
    height: 0;
    display: none;
  }

  .social-media {
    height: 7rem;
    display: flex;
    justify-self: end;
    align-items: center;
  }

  .social-media .hamburger-menu {
    display: block;
    font-size: 2.5rem;
  }
}

@media (max-width: 798px) {
  .main-nav {
    height: 6rem;
    grid-template-columns: 1rem 2fr 1fr 1fr 1rem;
  }

  .logo,
  .social-media ul {
    height: 6rem;
  }

  .social-media {
    height: 6rem;
    display: flex;
    justify-self: end;
    align-items: center;
  }

  .social-media .hamburger-menu {
    display: block;
    font-size: 2.5rem;
  }
}

@media (max-width: 520px) {
  .main-nav {
    height: 6rem;
    grid-template-columns: 1rem 4fr 1fr 1fr 1rem;
  }

  .logo,
  .social-media ul {
    height: 6rem;
  }

  .logo h2 {
    font-size: 2rem;
  }

  .social-media {
    height: 6rem;
    display: flex;
    justify-self: end;
    align-items: center;
  }

  .social-media .hamburger-menu {
    display: block;
    font-size: 2.5rem;
  }

  /* hero section  */

  .hero-section h1 {
    font-size: 3.8rem;
  }
} */
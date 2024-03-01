import React from "react";
import Header from "./components/header";
import InfoCard from "./components/infocard";
import Image from 'next/image'
import Hero from './assets/hero.png'
import Image1 from './assets/image1.jpg'
import Image2 from './assets/image2.jpg'
import Image3 from './assets/image3.jpg'
import Image4 from './assets/image4.jpg'
import Image5 from './assets/image5.jpg'
import Footer from "./components/footer";

export default function Home() {
  //styles...
  const title1 = {
    "font-size":"8em",
    "font-family":"sans-serif",
    "height":"100px",
    "margin-top":"50px",
    "margin-left":"600px",
  };
  const title2 = {
    "font-size":"8em",
    "font-family":"sans-serif",
    "height":"100px",
    "margin-left":"400px",
  };
  const title3 = {
    "font-size":"8em",
    "font-family":"sans-serif",
    "height":"100px",
    "margin-left":"510px",
  };
  const illustrationStyle = {
    "display":"flex",
    "justify-content":"space-around",
    "margin-top":"50px",
  };const illusStyle = {
    "display":"flex",
    "flex-direction":"column",
    "justify-content":"center",
    "align-items":"center",
    "width":"40%",
    "text-align":"justify",
  }
  const heroStyle = {
    "width":"40%",
  }
  const buttonStyle = {
    "width":"150px",
    "height":"50px",
    "margin":"10px",
    "background-color":"#02e2e2",
    "border-radius":"8px",
    "border":"none",
  }
  const landingPageStyle = {
    "background-color":"linear-gradient(to bottom, transparent, #321aa1 #fff)",
    "color":"#fff",
    "font-family":"sans-serif",
    "height":"150vh",
  };
  const secondStyle = {
    "display":"flex",
    "flex-wrap":"wrap",
    "justify-content":"space-around",
    "background":"#000",
    "padding-top":"100px",
    }

  //données...

  const info1 = {
    image: Image1,
    title: 'Open your Shop',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
  const info2 = {
    image: Image2,
    title: 'Set up at your own',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
  const info3 = {
    image: Image3,
    title: 'Publish on the feed',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
  const info4 = {
    image: Image4,
    title: 'Connect with customers',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
  const info5 = {
    image: Image5,
    title: 'Make profit',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
  return (
    <>
    <div className="landing-page" style={landingPageStyle}>
      <Header />
      <div style={title1}>THE FIRST</div>
      <div style={title2}>SOCIAL MALL</div>
      <div style={title3}>IN YOUR POCKET</div>
      <div style={illustrationStyle}>
        <div style={heroStyle}>
          <Image src={Hero} alt='hero' width={670} height={500}/>
        </div>
        <div style={illusStyle}><div>
          Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt 
          ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco 
          laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit 
          in voluptate velit esse cillum dolore 
          eu fugiat nulla pariatur. Excepteur sint 
          occaecat cupidatat non proident, 
          sunt in culpa qui officia deserunt 
          mollit anim id est laborum.</div>
          <button style={buttonStyle}>Get Started</button>
        </div>
        
      </div>
    </div>
    <div style={secondStyle}>
      <InfoCard infos={info1}/>
      <InfoCard infos={info2}/>
      <InfoCard infos={info3}/>
      <InfoCard infos={info4}/>
      <InfoCard infos={info5}/>
    </div>
    <Footer />
    </>
  );
}

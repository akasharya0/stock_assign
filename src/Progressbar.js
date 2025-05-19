import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import MyList from "./Mylist";
import img from '../src/assets/img1.avif';

const SectionWithProgress = ({ title, heading }) => {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const updateProgress = () => {
    const section = sectionRef.current;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // If section is in view
    if (rect.top < windowHeight && rect.bottom > 0) {
      const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
      const percentScrolled = (visibleHeight / rect.height) * 100;
      setProgress(Math.min(100, Math.max(0, percentScrolled)));
    } else {
      setProgress(0); // Not visible
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", updateProgress);
    window.addEventListener("resize", updateProgress);
    updateProgress(); // initial call

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="progress-bar-wrapper">
        <div className="progress-bar" style={{ height: `${progress}%` }} />
      </div>
      <section ref={sectionRef}>
        <h4>{heading}</h4>
        <h2>{title}</h2>
      </section>
    </div>
  );
};

const ProgressBarComponent = () => {
    
  return (
    <>
    <div className="heading">
        <button className="btn btn_first">Our process</button>
        <h2>Become a<span> Abcd Pro</span></h2>
        <h3>in Sec...</h3>
        <p>🚀 Sign up. Fund. Trade.</p>
    </div>
    <div className="wrapper">
      <SectionWithProgress title="Register your account" heading="Step 1" />
      <SectionWithProgress title="KYC" heading="Step 2" />
      <SectionWithProgress title="Deposit Funds " heading="Step 3" />
    </div>
    <div className="heading">
         <button className="btn btn_second">Open FREE Account</button>
    </div>
    <div className="heading">
        <button className="btn btn_first">Compare Plans</button>
        <h2>Start Small,</h2>
        <h2><span>Scale</span> Big</h2>
        <p>Flexible Deposits for</p>
        <p>Every Trader</p>
    </div>
    <div  className="cards" style={{marginTop:"8vw"}}>
        <div className="card_details">
        <h2>Silver</h2>
         <MyList/>
    </div>
    </div>
    <div  className="cards">
        <div className="card_details">
        <h2>Gold</h2>
         <MyList/>
    </div>
      <div className="card_details">
        <h2>Platinum</h2>
         <MyList/>
    </div>
    </div>
    <div className="heading">
         <button className="btn btn_second">Get Funded</button>
    </div>
    <div className="footer">
        <div className="footer_circle"><h2>Trade AnyTime</h2> </div>
        <img src={img} width="150px"/>
    </div>
    </>
  );
};

export default ProgressBarComponent;

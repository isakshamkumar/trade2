import React, { useState } from "react";
// import { Button } from "../../components/Button";
import { Button } from "./Button";
import { Card } from "./Card";
import { Sponsors } from "./Sponsers";
import "./style.css";
import { Link } from "react-router-dom";
export const LandingPageStocks = () => {
  const[stockState,setstockState]=useState(true)
  const swtichHandler=()=>{
    setSwitchClick(!switchClick)
    setstockState(!stockState)
  }
  const[switchClick,setSwitchClick]=useState(false)
  return (
    <div className="landing-page-stocks">
      <div className="div-2">
        <div className="overlap">
          <div className="grid-bg">
            <div className="overlap-group-3">
              <img className="line" alt="Line" src="/img/line-2.svg" />
              <img className="img" alt="Line" src="/img/line-3.svg" />
              <img className="line-2" alt="Line" src="/img/line-4.svg" />
              <img className="line-3" alt="Line" src="/img/line-5.svg" />
              <img className="line-4" alt="Line" src="/img/line-6.svg" />
              <img className="line-5" alt="Line" src="/img/line-7.svg" />
            </div>
          </div>
          <div className="content">
            <div className="overlap-2">
              <h1 className="trade-with-a-new-way">
                Trade With A <br />
                New Way Of
                <br />
                World.
              </h1>
              <Button
                className="button-instance"
                getStartedClassName="design-component-instance-node"
                property1="default"
              />
            </div>
          </div>
          <div className="frame-2" />
          <Card className="card-instance" property1="default" />
          <Card className="card-2" property1="default" />
        </div>
        <div className="navbar">
          <div className="text-wrapper"><a href="#">Trade Go</a></div>
          <div className="text-wrapper-2"><a href="#">Sign In</a></div>
          <div className="text-wrapper-3"><a href="#">Home</a></div>
          <div className="text-wrapper-4"><a href="#">Trading</a></div>
          <div className="text-wrapper-5"><Link to={'/stocks'}>Stocks</Link></div>
          <div className="text-wrapper-6"><a href="#">Crypto</a></div>
          <div className="text-wrapper-7"><a href="#">Blog</a></div>
          <div className="text-wrapper-8"><a href="#">Register</a></div>
        </div>
        <div className="horizontal-nav">
          <div className="text-wrapper-9"><a href="#">about Us</a></div>
          <div className="text-wrapper-10"><a href="#">Our Team</a></div>
          <div className="text-wrapper-11"><a href="#">Community</a></div>
        </div>
        <Sponsors className="sponsors-instance" property1="default" />
        <div className="switch-invest">
          <div className="overlap-3">
            <div className="rectangle-4" style={{
                 backgroundColor: '#ccff00',
                 borderRadius: '144px',
                 boxShadow: '0px -2px 49px #ccff004f',
                 height: '140px',
                 left: `${!switchClick?0:350}px`,
                 position: 'absolute',
                 top: '0',
                 transition: '.15s ease-in',
                 width: '326px'
            }} />
            <div onClick={swtichHandler} className="text-wrapper-12">Stocks</div>
          </div>
          <div onClick={swtichHandler} className="text-wrapper-13">Crypto</div>
        </div>
        <div className="most-popular">Most&nbsp;&nbsp; Popular</div>

        {stockState && <> <div className="overlap-wrapper">
          <div className="overlap-4">
            <div className="overlap-5">
              <div className="div-3">
                <span className="span">MSFT </span>
                <span className="text-wrapper-14">Microsoft</span>
              </div>
              <img className="vector" alt="Vector" src="/img/vector-1-1.svg" />
              <img className="vector-2" alt="Vector" src="/img/vector-2.svg" />
            </div>
            <div className="text-wrapper-15">$1403</div>
            <div className="up-stocks">
              <img className="arrow" alt="Arrow" src="/img/arrow-1-3.svg" />
            </div>
          </div>
        </div>
        <div className="overlap-group-wrapper">
          <div className="overlap-6">
            <div className="overlap-7">
              <div className="div-3">
                <span className="span">AAPL&nbsp;&nbsp;</span>
                <span className="text-wrapper-14">Apple.inc</span>
              </div>
              <img className="vector-3" alt="Vector" src="/img/vector-1.svg" />
            </div>
            <div className="text-wrapper-16">$1120.2</div>
            <div className="arrow-wrapper">
              <img className="arrow-2" alt="Arrow" src="/img/arrow-1.svg" />
            </div>
          </div>
        </div>
        <div className="div-wrapper">
          <div className="overlap-4">
            <div className="overlap-5">
              <div className="div-3">
                <span className="span">TCS </span>
                <span className="text-wrapper-14">Tata consulating ser.</span>
              </div>
              <img className="vector" alt="Vector" src="/img/vector-1-1.svg" />
              <img className="vector-2" alt="Vector" src="/img/vector-2.svg" />
            </div>
            <div className="text-wrapper-15">$987</div>
            <div className="img-wrapper">
              <img className="arrow-2" alt="Arrow" src="/img/arrow-1.svg" />
            </div>
          </div>
        </div>
        <div className="frame-3">
          <div className="overlap-6">
            <div className="overlap-7">
              <div className="div-3">
                <span className="span">NIFTY&nbsp;&nbsp;</span>
                <span className="text-wrapper-14">Nifty</span>
              </div>
              <img className="vector-3" alt="Vector" src="/img/vector-1.svg" />
            </div>
            <div className="text-wrapper-16">$2527</div>
            <div className="arrow-wrapper">
              <img className="arrow-2" alt="Arrow" src="/img/arrow-1.svg" />
            </div>
          </div>
        </div>
        <div className="frame-4">
          <div className="overlap-4">
            <div className="overlap-5">
              <div className="div-3">
                <span className="span">MSFT </span>
                <span className="text-wrapper-14">Microsoft</span>
              </div>
              <img className="vector" alt="Vector" src="/img/vector-1-1.svg" />
              <img className="vector-2" alt="Vector" src="/img/vector-2.svg" />
            </div>
            <div className="text-wrapper-15">$1403</div>
            <div className="up-stocks">
              <img className="arrow" alt="Arrow" src="/img/arrow-1-3.svg" />
            </div>
          </div>
        </div>
        <div className="frame-5">
          <div className="overlap-6">
            <div className="overlap-7">
              <div className="div-3">
                <span className="span">AAPL&nbsp;&nbsp;</span>
                <span className="text-wrapper-14">Apple.inc</span>
              </div>
              <img className="vector-3" alt="Vector" src="/img/vector-1.svg" />
            </div>
            <div className="text-wrapper-16">$1120.2</div>
            <div className="arrow-wrapper">
              <img className="arrow-2" alt="Arrow" src="/img/arrow-1.svg" />
            </div>
          </div>
        </div>
        <div className="frame-6">
          <div className="overlap-4">
            <div className="overlap-5">
              <div className="div-3">
                <span className="span">TCS </span>
                <span className="text-wrapper-14">Tata consulating ser.</span>
              </div>
              <img className="vector" alt="Vector" src="/img/vector-1-1.svg" />
              <img className="vector-2" alt="Vector" src="/img/vector-2.svg" />
            </div>
            <div className="text-wrapper-15">$987</div>
            <div className="img-wrapper">
              <img className="arrow-2" alt="Arrow" src="/img/arrow-1.svg" />
            </div>
          </div>
        </div>
        <div className="frame-7">
          <div className="overlap-6">
            <div className="overlap-7">
              <div className="div-3">
                <span className="span">NIFTY&nbsp;&nbsp;</span>
                <span className="text-wrapper-14">Nifty</span>
              </div>
              <img className="vector-3" alt="Vector" src="/img/vector-1.svg" />
            </div>
            <div className="text-wrapper-16">$2527</div>
            <div className="arrow-wrapper">
              <img className="arrow-2" alt="Arrow" src="/img/arrow-1.svg" />
            </div>
          </div>
        </div> </>
        
        }
       {!stockState && <h1 style={{ color: 'white',position:'absolute',top: '1753px',
    width: '642px' }}>Crypto data</h1>}

        
        <div className="frame-8">
          <div className="text-wrapper-17">View All</div>
        </div>
        <img className="dropdown" alt="Dropdown" src="/img/dropdown.png" />
        <div className="world-happiness">
          <p className="our-customers">
            <span className="text-wrapper-18">
              Our Customers <br />
            </span>
            <span className="text-wrapper-19">
              Worldwide
              <br />
            </span>
            <span className="text-wrapper-18">
              <br />
            </span>
            <span className="text-wrapper-20">10000+ </span>
            <span className="text-wrapper-21">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span className="text-wrapper-20">
              {" "}
              $1000000+ <br />
            </span>
            <span className="text-wrapper-21">
              successful trades&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;profit made
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            </span>
          </p>
          <img className="world-map-PNG-image" alt="World map PNG image" src="/img/world-map-png-image-1.png" />
        </div>
        <div className="text-wrapper-22">Subscribe to Newsletter</div>
        <div className="overlap-8">
          <div className="text-wrapper-23">Email address</div>
          <img className="arrow-3" alt="Arrow" src="/img/arrow-2.svg" />
        </div>
      </div>
    </div>
  );
};

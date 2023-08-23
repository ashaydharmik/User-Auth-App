import React, { useState } from "react";
import "./home.css";
import dashboardImg from "../images/dashboard_icon.png";
import transactionImg from "../images/transaction_icon.png";
import scheduleImg from "../images/schedule_icon.png";
import userImg from "../images/user_icon.png";
import settingImg from "../images/setting_icon.png";
import searchIcon from "../images/Search icon.png";
import arrowright from "../images/arrowright.png";
import Vector from "../images/Vector.png";
import Card1 from "../images/card1.png";
import Card2 from "../images/card2.png";
import Card3 from "../images/card3.png";
import Card4 from "../images/card4.png";
import profile from "../images/image1.png";
import arrowdown from "../images/arrowdown.png";
import dot1 from "../images/dot1.png";
import dot2 from "../images/dot2.png";
import { Line, Pie } from "react-chartjs-2";
import greendot from "../images/greendot.png"
import redndot from "../images/reddot.png"
import yellowdot from "../images/yellowdot.png"

import { Tooltip, ArcElement, Legend } from "chart.js";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register({
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
});

ChartJS.register(Tooltip, Legend, ArcElement);

const data01 = {
  datasets: [
    {
      data: [14,31,55],
      backgroundColor: ["#EE8484", "#F6DC7D", "#98D89E"],
    },
  ],
};

const options01 = {
  elements: {
    arc: {
      borderWidth: 0,
    },
  },
};

const Home = () => {
  const data = {
    labels: ["", "Week1", "Week2", "Week3", "Week4", ""],
    datasets: [
      {
        data: [200, 390, 200, 300, 220, 450],
        backgroundColor: "transparent",
        borderColor: "#E9A0A0",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        tension: 0.5,
      },
      {
        data: [100, 420, 160, 450, 180, 250],
        backgroundColor: "transparent",
        borderColor: "#9BDD7C",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        tension: 0.5,
      },
    ],
  };

  const options = {
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        ticks: {
          color: "var(--secondary-text, #858585)",
          font: {
            size: 14,
            family: "Open Sans",
          },
        },
        grid: {
          display: false,
          spacing: 39,
        },
      },
      y: {
        min: 0,
        max: 500,
        ticks: {
          stepSize: 100,
          color: "var(--secondary-text, #858585)",
          font: {
            size: 14,
            family: "Lato",
          },
        },
        grid: {
          borderDash: [100],
        },
      },
    },
  };

  return (
    <>
      <section className="container-one">
        <div className="partOne">
          <div className="boxes">
            <div className="heading">
              <h1>Board.</h1>
            </div>

            <div className="box2">
              <div className="box2-1">
                <img
                  src={dashboardImg}
                  style={{ width: "18px", height: "18px" }}
                />
                <span>Dashboard</span>
              </div>
              <div className="box2-1 box2-2 box-inner">
                <img
                  src={transactionImg}
                  style={{ width: "18px", height: "18px" }}
                />
                <span>Transactions</span>
              </div>
              <div className="box2-1 box2-2">
                <img
                  src={scheduleImg}
                  style={{ width: "18px", height: "18px" }}
                />
                <span>Schedules</span>
              </div>
              <div className="box2-1 box2-2">
                <img src={userImg} style={{ width: "18px", height: "18px" }} />
                <span>Users</span>
              </div>
              <div className="box2-1 box2-2">
                <img
                  src={settingImg}
                  style={{ width: "18px", height: "18px" }}
                />
                <span>Settings</span>
              </div>
            </div>
            <div className="box3">
              <p>Help</p>
              <p>Contact Us</p>
            </div>
          </div>
        </div>

        <div className="partTwo">
          <div className="field1">
            <div className="field1-1">
              <p>Dashboard</p>
            </div>
            <div className="field1-2">
              <input
                type="text"
                className="search-input"
                placeholder="Search..."
              />
              <img src={searchIcon} alt="Search" className="search-icon" />
            </div>
            <div className="field1-3">
              <img src={Vector} />
            </div>
            <div className="field1-4">
              <img src={profile} />
            </div>
          </div>

          <div className="field2">
            <div className="card1">
              <div className="icon">
                <img src={Card1} />
              </div>
              <p className="revenue">Total Revenues</p>
              <p className="digits">$2,129,430</p>
            </div>
            <div className="card1" style={{ backgroundColor: "#F4ECDD" }}>
              <div className="icon">
                <img src={Card2} />
              </div>
              <p className="revenue" style={{ backgroundColor: "#F4ECDD" }}>
                Total Transactions
              </p>
              <p className="digits">1,520</p>
            </div>
            <div className="card1" style={{ backgroundColor: "#EFDADA" }}>
              <div className="icon">
                <img src={Card3} />
              </div>
              <p className="revenue">Total Likes</p>
              <p className="digits">9,721</p>
            </div>
            <div className="card1" style={{ backgroundColor: "#DEE0EF" }}>
              <div className="icon">
                <img src={Card4} />
              </div>
              <p className="revenue">Total Users</p>
              <p className="digits">892</p>
            </div>
          </div>

          <div className="field3">
            <div className="boxUp">
              <div className="boxUp-1">
                <p className="pUp">Activities</p>
                <p className="pDown">
                  May - June 2021 <img src={arrowdown} />
                </p>
              </div>
              <div className="boxUp-1 box-side">
                <div className="boxUp-sidebox">
                  <img src={dot1} />
                  <p>Guest</p>
                </div>
                <div className="boxUp-sidebox side-right">
                  <img src={dot2} />
                  <p>User</p>
                </div>
              </div>
            </div>

            <div className="boxDown">
              <Line data={data} options={options} className="canvas"></Line>
            </div>
          </div>

          <div className="field4">
            <div className="left">
              <div className="left1">
                <div className="topic1">
                  <p>Top products</p>
                </div>
                <div className="topic2">
                  <p>
                    May - June 2021 <img src={arrowdown} />
                  </p>
                </div>
              </div>
              <div className="left2">
                <div className="left2-1">
                  <Pie
                    data={data01}
                    options={options01}
                    className="pie"
                    
                  />
                </div>
                <div className="left2-2">
                  <div className="right-one">
                    <p className="dot-para1"> <img src={greendot} />Basic Tees </p>
                    <p className="dot-para2">55% </p>
                  </div>
                  <div className="right-one">
                    <p className="dot-para1"> <img src={yellowdot} />Custom Short Pants </p>
                    <p className="dot-para2">31% </p>
                  </div>
                  <div className="right-one">
                    <p className="dot-para1"> <img src={redndot} />Super Hoodies </p>
                    <p className="dot-para2">14% </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="right1">
                <div className="head-left">
                  <p>Today’s schedule</p>
                </div>
                <div className="head-right">
                  <p>
                    See All <img src={arrowright} className="img-arrowright" />
                  </p>
                </div>
              </div>

              <div className="right2">
                <div className="row1">
                  <div className="row1-1"></div>
                  <div className="row1-2">
                    <p>Meeting with suppliers from Kuta Bali</p>
                    <p className="para-2">14.00-15.00</p>
                    <p className="para-3">at Sunset Road, Kuta, Bali </p>
                  </div>
                </div>
                <div className="row2">
                  <div className="row2-1"></div>
                  <div className="row2-2">
                    <p>Check operation at Giga Factory 1</p>
                    <p className="para-2">18.00-20.00</p>
                    <p className="para-3">at Central Jakarta </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

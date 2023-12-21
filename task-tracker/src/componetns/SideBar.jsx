import React from "react";
import '../style/SideBar.css'

const SideBar=()=>{
    return(<div>
            <div className="side-bar">
      <div className="side-bar-rectangle"></div>
      <a href="Katalog">
      <button className="side-bar-group">
        <svg
          className="side-bar-leaderboard"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_705_84"
            //style="mask-type: alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_705_84)">
            <path
              d="M4 12.7295V20.7842H8V12.7295H4ZM10 6.68848V20.7842H14V6.68848H10ZM16 14.7432V20.7842H20V14.7432H16ZM20 22.7979H4C3.45 22.7979 2.97917 22.6007 2.5875 22.2063C2.19583 21.812 2 21.3379 2 20.7842V12.7295C2 12.1757 2.19583 11.7017 2.5875 11.3073C2.97917 10.913 3.45 10.7158 4 10.7158H8V6.68848C8 6.13472 8.19583 5.66066 8.5875 5.26632C8.97917 4.87198 9.45 4.6748 10 4.6748H14C14.55 4.6748 15.0208 4.87198 15.4125 5.26632C15.8042 5.66066 16 6.13472 16 6.68848V12.7295H20C20.55 12.7295 21.0208 12.9267 21.4125 13.321C21.8042 13.7154 22 14.1894 22 14.7432V20.7842C22 21.3379 21.8042 21.812 21.4125 22.2063C21.0208 22.6007 20.55 22.7979 20 22.7979Z"
              fill="#1D192A"
            />
          </g>
        </svg>
    
        <div className="side-bar-div">Дошки</div>
      </button>
    </a>
      <button className="side-bar-group1">
        <div className="side-bar-div2">Учасники</div>
        <svg
          className="side-bar-person"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_705_47"
            //style="mask-type: alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_705_47)">
            <path
              d="M12 14.1738C10.9 14.1738 9.95833 13.7795 9.175 12.9908C8.39167 12.2021 8 11.254 8 10.1465C8 9.03896 8.39167 8.09086 9.175 7.30217C9.95833 6.51348 10.9 6.11914 12 6.11914C13.1 6.11914 14.0417 6.51348 14.825 7.30217C15.6083 8.09086 16 9.03896 16 10.1465C16 11.254 15.6083 12.2021 14.825 12.9908C14.0417 13.7795 13.1 14.1738 12 14.1738ZM18 22.2285H6C5.45 22.2285 4.97917 22.0313 4.5875 21.637C4.19583 21.2427 4 20.7686 4 20.2148V19.4094C4 18.8388 4.14583 18.3144 4.4375 17.8362C4.72917 17.3579 5.11667 16.993 5.6 16.7413C6.63333 16.2211 7.68333 15.8309 8.75 15.5708C9.81667 15.3107 10.9 15.1807 12 15.1807C13.1 15.1807 14.1833 15.3107 15.25 15.5708C16.3167 15.8309 17.3667 16.2211 18.4 16.7413C18.8833 16.993 19.2708 17.3579 19.5625 17.8362C19.8542 18.3144 20 18.8388 20 19.4094V20.2148C20 20.7686 19.8042 21.2427 19.4125 21.637C19.0208 22.0313 18.55 22.2285 18 22.2285ZM6 20.2148H18V19.4094C18 19.2248 17.9542 19.057 17.8625 18.906C17.7708 18.7549 17.65 18.6375 17.5 18.5536C16.6 18.1005 15.6917 17.7607 14.775 17.5341C13.8583 17.3076 12.9333 17.1943 12 17.1943C11.0667 17.1943 10.1417 17.3076 9.225 17.5341C8.30833 17.7607 7.4 18.1005 6.5 18.5536C6.35 18.6375 6.22917 18.7549 6.1375 18.906C6.04583 19.057 6 19.2248 6 19.4094V20.2148ZM12 12.1602C12.55 12.1602 13.0208 11.963 13.4125 11.5686C13.8042 11.1743 14 10.7002 14 10.1465C14 9.59272 13.8042 9.11867 13.4125 8.72433C13.0208 8.32998 12.55 8.13281 12 8.13281C11.45 8.13281 10.9792 8.32998 10.5875 8.72433C10.1958 9.11867 10 9.59272 10 10.1465C10 10.7002 10.1958 11.1743 10.5875 11.5686C10.9792 11.963 11.45 12.1602 12 12.1602Z"
              fill="#48454D"
            />
          </g>
        </svg>
      </button>
    </div>
    </div>);
}

export default SideBar;
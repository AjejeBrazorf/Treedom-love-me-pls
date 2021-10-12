import React, { useState, useEffect } from "react";
import "./styles.css";
import "./navbar/Navbar";
import "./bargain/Bargain";
import Navbar from "./navbar/Navbar";
import Bargain from "./bargain/Bargain";

export default function App() {
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 1000);
  }, []);

  return (
    !spinner && (
      <div className="App">
        <Navbar />
        <div className="layout">
          <section>
            <h3>Who am I</h3>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>
          </section>
          <section className="alternate-bg">
            <h3>My expertise</h3>
            <div className="grid">
              <Bargain
                title="Angular"
                icon="https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg"
              />
              <Bargain
                title="CSS"
                icon="https://cdn.worldvectorlogo.com/logos/css-3.svg"
              />
              <Bargain
                title="Typescript"
                icon="https://cdn.worldvectorlogo.com/logos/typescript.svg"
              />
              <Bargain
                title="JS"
                icon="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"
              />
              <Bargain
                title="Git"
                icon="https://cdn.worldvectorlogo.com/logos/git-icon.svg"
              />
              <Bargain
                title="RxJs"
                icon="https://cdn.worldvectorlogo.com/logos/rxjs-1.svg"
              />
              <Bargain
                title="React"
                icon="https://cdn.worldvectorlogo.com/logos/react-2.svg"
              />
              <Bargain
                title="MySQL"
                icon="https://cdn.worldvectorlogo.com/logos/mysql-6.svg"
              />
              <Bargain
                title="RESTful API"
                icon="https://cdn.worldvectorlogo.com/logos/json-5.svg"
              />
            </div>
          </section>
          <section>
            <h3>A little mention</h3>
            <div className="card">
              <div className="card--title">
                <h4>Console</h4>
              </div>
              <div className="card--body">
                <span className="console">
                  <span className="console--title">
                    [ Treedom | let's green the planet ]
                  </span>
                  <span className="console--line">
                    <span>
                      Hi there! Trying to reverse engineer something? Why not
                      join our team instead?
                    </span>
                    <a>ngApp.js:533</a>
                  </span>
                  <span className="console--line">
                    <span>
                      Apply at <a>https://www.treedom.net/en/page/contacts</a>
                      &nbsp;and mention this comment!
                    </span>
                    <a>ngApp.js:534</a>
                  </span>
                </span>
              </div>
            </div>
          </section>
          <section className="alternate-bg">
            <h3>Intrested?</h3>
            <svg
              className="mail"
              width="86"
              height="87"
              viewBox="0 0 86 87"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M46.6281 57.4698C49.5138 57.4698 51.2658 54.5841 51.2658 51.2862C51.2658 47.473 48.3802 44.6904 43.6394 44.9995C37.8681 44.9995 33.6426 48.9158 33.6426 54.378C33.6426 58.3973 36.5283 61.283 41.269 61.283C42.2361 61.283 43.3923 61.0939 44.3925 60.7651C44.8576 60.6121 45.0887 60.1108 44.9577 59.6391C44.8026 59.0806 44.2057 58.7791 43.645 58.9259C42.8912 59.1231 42.1563 59.2218 41.3721 59.2218C37.9711 59.2218 36.013 57.1606 36.013 54.0688C36.013 49.9464 39.1048 46.8546 43.4333 46.8546C47.1434 46.8546 48.9985 48.6066 48.9985 51.4923C48.9985 52.9351 48.4832 55.3055 47.3496 55.3055C46.9373 55.3055 46.7312 55.0994 46.7312 54.6871C46.7312 54.6785 46.7319 54.6691 46.7333 54.6591C46.7535 54.5077 46.7923 54.3596 46.8312 54.2115C46.8597 54.1028 46.8883 53.994 46.9095 53.8839L47.5423 50.5932C47.7096 49.723 47.0428 48.9158 46.1567 48.9158H45.2605C45.0976 48.9158 44.958 49.0323 44.9289 49.1926C44.8738 49.4955 44.4454 49.5886 44.2124 49.3872C43.7165 48.9586 43.0561 48.7097 42.1966 48.7097C39.6201 48.7097 37.765 50.977 37.765 53.7596C37.765 56.0269 39.414 57.4698 41.269 57.4698C41.3709 57.4698 41.4713 57.467 41.5703 57.4614C42.444 57.412 43.8908 57.4341 45.1272 57.453C45.698 57.4617 46.2241 57.4698 46.6281 57.4698ZM42.6088 51.0801C43.5364 51.0801 44.1547 51.6984 44.1547 52.729C44.1547 53.9657 43.4333 55.0994 42.1966 55.0994C41.269 55.0994 40.6507 54.5841 40.6507 53.4504C40.6507 52.0076 41.4752 51.0801 42.6088 51.0801Z"
                fill="#383838"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M40.5901 16.3586C41.8974 15.1698 43.9205 15.1698 45.2277 16.3586L45.2445 16.3739L68.0836 38.1425C68.4417 38.4838 68.6199 38.9038 68.6494 39.3245C68.7337 39.403 68.7865 39.515 68.7865 39.6393V67.1539H17.1966V39.7952C17.0894 39.2306 17.2416 38.6121 17.7343 38.1425L40.5901 16.3586ZM66.823 41.2922H19.1312V65.2193H66.8519V41.292L66.823 41.2922ZM43.9188 17.7833L66.3989 39.2094H19.419L41.8991 17.7833C42.4662 17.2745 43.3516 17.2745 43.9188 17.7833Z"
                fill="#383838"
              />
            </svg>
            <br />
            <a>Let's get in touch</a>
          </section>
        </div>
      </div>
    )
  );
}

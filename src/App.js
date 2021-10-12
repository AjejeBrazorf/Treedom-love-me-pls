import "./styles.css";
import "./navbar/Navbar";
import "./bargain/Bargain";
import Navbar from "./navbar/Navbar";
import Bargain from "./bargain/Bargain";

export default function App() {
  const loading = document.getElementById('loading');
  if (loading && !loading.classList.contains('hidden')) {
    setTimeout(() => loading.classList.add('hidden'), 800 );
  }

  return (
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
            <div className="contacts">
              <div className="row">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                     width="50.000000pt" height="50.000000pt" viewBox="0 0 512.000000 512.000000"
                     preserveAspectRatio="xMidYMid meet">
                  <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                     fill="#000000" stroke="none">
                    <path d="M712 5100 c-18 -11 -41 -34 -52 -52 -20 -33 -20 -56 -20 -2488 0 -2432 0 -2455 20 -2488 11 -18 34 -41 52 -52 33 -20 53 -20 1418 -20 1369 0 1386 1 1430 21 65 29 870 834 899 899 20 45 21 58 21 2070 0 2003 0 2025 -20 2058 -11 18 -34 41 -52 52 -33 20 -55 20 -1848 20 -1793 0 -1815 0 -1848 -20z m3608 -2122 l0 -1992 -360 -360 -360 -361 0 308 0 307 217 0 c209 0 218 1 240 22 45 42 22 118 -40 133 -13 4 -123 5 -243 3 -252 -3 -271 -9 -311 -88 -23 -44 -23 -50 -23 -422 l0 -378 -1320 0 -1320 0 0 2410 0 2410 1760 0 1760 0 0 -1992z"/>
                    <path d="M1507 4376 c-105 -44 -167 -108 -207 -214 -20 -52 -21 -73 -18 -257 3 -194 4 -202 30 -255 37 -75 100 -137 178 -173 56 -27 75 -31 145 -30 95 0 171 26 232 78 46 39 59 75 43 116 -23 55 -89 57 -152 4 -85 -72 -221 -47 -288 53 -24 35 -25 45 -28 202 -4 184 3 222 49 275 67 76 179 85 271 22 29 -21 65 -37 78 -37 58 0 95 63 68 114 -7 13 -30 38 -51 55 -93 73 -238 93 -350 47z"/>
                    <path d="M2021 4374 c-12 -15 -21 -36 -21 -48 0 -37 248 -849 264 -865 23 -23 135 -27 174 -7 17 9 33 24 36 33 3 10 59 199 126 420 66 221 120 411 120 421 0 11 -9 31 -21 46 -28 35 -89 37 -116 3 -10 -13 -63 -173 -118 -355 -54 -183 -102 -332 -105 -332 -4 0 -51 149 -106 332 -54 182 -107 342 -117 355 -27 34 -88 32 -116 -3z"/>
                    <path d="M2981 4214 c-36 -45 -20 -105 32 -124 41 -14 494 -13 536 1 55 19 70 88 28 127 -23 21 -30 22 -299 22 l-277 0 -20 -26z"/>
                    <path d="M2985 3815 c-43 -43 -25 -108 34 -126 23 -6 182 -9 449 -7 l414 3 19 24 c26 32 25 82 -4 109 -23 22 -25 22 -456 22 l-432 0 -24 -25z"/>
                    <path d="M1785 2775 c-16 -15 -25 -36 -25 -55 0 -19 9 -40 25 -55 l24 -25 751 0 751 0 24 25 c33 32 33 78 0 110 l-24 25 -751 0 -751 0 -24 -25z"/>
                    <path d="M1305 2375 c-35 -34 -34 -86 1 -114 23 -18 41 -21 131 -21 57 0 112 4 122 10 30 15 46 65 32 99 -18 41 -49 51 -162 51 -93 0 -102 -2 -124 -25z"/>
                    <path d="M1785 2375 c-16 -15 -25 -36 -25 -55 0 -19 9 -40 25 -55 l24 -25 989 0 c986 0 989 0 1016 21 35 28 36 80 1 114 l-24 25 -991 0 -991 0 -24 -25z"/>
                    <path d="M1323 1990 c-47 -19 -58 -92 -20 -128 l23 -22 1235 0 1236 0 21 23 c27 29 28 77 3 108 l-19 24 -1229 2 c-696 1 -1237 -2 -1250 -7z"/>
                    <path d="M1323 1590 c-47 -19 -58 -92 -20 -128 l23 -22 995 0 996 0 21 23 c22 23 28 60 16 92 -18 46 -2 45 -1036 44 -535 0 -983 -4 -995 -9z"/>
                    <path d="M3569 1589 c-32 -12 -53 -56 -43 -93 11 -47 37 -56 159 -56 104 0 113 2 133 23 27 29 28 77 3 108 -18 22 -27 24 -123 26 -56 1 -115 -2 -129 -8z"/>
                  </g>
                </svg>
                <a>Take a look to my resume</a>
              </div>
              <div className="row">
                <svg
                    className="mail"
                    width="86"
                    height="87"
                    viewBox="0 0 86 87"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      d="M46.6281 57.4698C49.5138 57.4698 51.2658 54.5841 51.2658 51.2862C51.2658 47.473 48.3802 44.6904 43.6394 44.9995C37.8681 44.9995 33.6426 48.9158 33.6426 54.378C33.6426 58.3973 36.5283 61.283 41.269 61.283C42.2361 61.283 43.3923 61.0939 44.3925 60.7651C44.8576 60.6121 45.0887 60.1108 44.9577 59.6391C44.8026 59.0806 44.2057 58.7791 43.645 58.9259C42.8912 59.1231 42.1563 59.2218 41.3721 59.2218C37.9711 59.2218 36.013 57.1606 36.013 54.0688C36.013 49.9464 39.1048 46.8546 43.4333 46.8546C47.1434 46.8546 48.9985 48.6066 48.9985 51.4923C48.9985 52.9351 48.4832 55.3055 47.3496 55.3055C46.9373 55.3055 46.7312 55.0994 46.7312 54.6871C46.7312 54.6785 46.7319 54.6691 46.7333 54.6591C46.7535 54.5077 46.7923 54.3596 46.8312 54.2115C46.8597 54.1028 46.8883 53.994 46.9095 53.8839L47.5423 50.5932C47.7096 49.723 47.0428 48.9158 46.1567 48.9158H45.2605C45.0976 48.9158 44.958 49.0323 44.9289 49.1926C44.8738 49.4955 44.4454 49.5886 44.2124 49.3872C43.7165 48.9586 43.0561 48.7097 42.1966 48.7097C39.6201 48.7097 37.765 50.977 37.765 53.7596C37.765 56.0269 39.414 57.4698 41.269 57.4698C41.3709 57.4698 41.4713 57.467 41.5703 57.4614C42.444 57.412 43.8908 57.4341 45.1272 57.453C45.698 57.4617 46.2241 57.4698 46.6281 57.4698ZM42.6088 51.0801C43.5364 51.0801 44.1547 51.6984 44.1547 52.729C44.1547 53.9657 43.4333 55.0994 42.1966 55.0994C41.269 55.0994 40.6507 54.5841 40.6507 53.4504C40.6507 52.0076 41.4752 51.0801 42.6088 51.0801Z"
                      fill="#383838"
                  />
                  <path
                      d="M40.5901 16.3586C41.8974 15.1698 43.9205 15.1698 45.2277 16.3586L45.2445 16.3739L68.0836 38.1425C68.4417 38.4838 68.6199 38.9038 68.6494 39.3245C68.7337 39.403 68.7865 39.515 68.7865 39.6393V67.1539H17.1966V39.7952C17.0894 39.2306 17.2416 38.6121 17.7343 38.1425L40.5901 16.3586ZM66.823 41.2922H19.1312V65.2193H66.8519V41.292L66.823 41.2922ZM43.9188 17.7833L66.3989 39.2094H19.419L41.8991 17.7833C42.4662 17.2745 43.3516 17.2745 43.9188 17.7833Z"
                      fill="#383838"
                  />
                </svg>
                <a>Let's get in touch</a>
              </div>
            </div>
          </section>
        </div>
      </div>
  );
}

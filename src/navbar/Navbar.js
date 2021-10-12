import "./Navbar.css";
const Navbar = (props) => {
  return (
    <div>
      <div className="tr-navbar-top">
        <svg
          viewBox="0 0 150 12"
          xmlns="http://www.w3.org/2000/svg"
          className="tr-logo__navbar-bump"
        >
          <defs>
            <clipPath id="a">
              <path fill="none" d="M8.394.931h44.618V12H8.394z"></path>
            </clipPath>
          </defs>
          <path
            d="M51.423 12.544C48.279 6.932 41.744 2.72 33.826 1.908 23.908.83 14.717 5.326 10.936 12.409"
          ></path>
        </svg>
        <a href="mailto:">Mail me</a>
      </div>
      <nav>
        <a className="logo">
          <svg
            viewBox="0 0 150 58"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            alt="Hey Treedom | Let's hire this guy!"
            title="Hey Treedom | Let's hire this guy!"
            className="tds-svg-icon--fill tds-icon-logo"
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              id="path1"
              d="M0.200 0.533 C -0.076 0.810,-0.081 7.641,0.195 8.246 C 0.526 8.972,1.706 9.056,1.805 8.361 C 1.844 8.085,1.762 7.950,1.513 7.885 C 1.176 7.797,1.167 7.699,1.167 4.264 C 1.167 0.411,0.993 -0.260,0.200 0.533 M24.579 0.533 C 24.532 0.656,24.514 2.555,24.539 4.753 L 24.583 8.750 25.000 8.750 C 25.415 8.750,25.417 8.741,25.500 6.888 C 25.599 4.672,25.884 4.167,27.037 4.167 C 28.218 4.167,28.500 4.658,28.500 6.722 C 28.500 8.550,28.642 8.927,29.284 8.803 C 29.770 8.708,29.729 4.886,29.235 4.220 C 28.404 3.100,27.049 2.715,25.798 3.243 C 25.544 3.351,25.508 3.206,25.465 1.890 C 25.420 0.505,25.394 0.413,25.041 0.363 C 24.834 0.334,24.627 0.410,24.579 0.533 M52.579 0.533 C 52.532 0.656,52.514 2.555,52.539 4.753 L 52.583 8.750 53.000 8.750 C 53.415 8.750,53.417 8.741,53.500 6.888 C 53.599 4.672,53.884 4.167,55.037 4.167 C 56.218 4.167,56.500 4.658,56.500 6.722 C 56.500 8.550,56.642 8.927,57.284 8.803 C 57.770 8.708,57.729 4.886,57.235 4.220 C 56.404 3.100,55.049 2.715,53.798 3.243 C 53.544 3.351,53.508 3.206,53.465 1.890 C 53.420 0.505,53.394 0.413,53.041 0.363 C 52.834 0.334,52.627 0.410,52.579 0.533 M31.173 1.075 C 30.841 1.476,31.120 2.000,31.667 2.000 C 32.002 2.000,32.177 1.898,32.253 1.659 C 32.380 1.256,32.080 0.833,31.667 0.833 C 31.506 0.833,31.284 0.942,31.173 1.075 M59.173 1.075 C 58.841 1.476,59.120 2.000,59.667 2.000 C 60.002 2.000,60.177 1.898,60.253 1.659 C 60.380 1.256,60.080 0.833,59.667 0.833 C 59.506 0.833,59.284 0.942,59.173 1.075 M14.208 1.110 C 13.835 1.261,14.043 3.296,14.448 3.452 C 14.794 3.584,14.876 3.430,15.018 2.381 C 15.180 1.187,14.943 0.814,14.208 1.110 M10.372 1.528 C 10.259 1.641,10.167 2.051,10.167 2.439 C 10.167 3.114,10.143 3.148,9.625 3.198 C 8.857 3.272,8.824 4.035,9.583 4.166 L 10.083 4.252 10.167 6.123 C 10.245 7.886,10.276 8.020,10.705 8.448 C 11.349 9.092,12.885 9.139,12.973 8.519 C 13.040 8.041,12.767 7.839,12.048 7.836 C 11.299 7.832,11.145 7.443,11.202 5.707 L 11.250 4.250 12.083 4.167 C 12.839 4.091,12.917 4.044,12.917 3.667 C 12.917 3.289,12.839 3.242,12.083 3.167 L 11.250 3.083 11.167 2.251 C 11.080 1.389,10.782 1.118,10.372 1.528 M48.867 1.533 C 48.757 1.643,48.667 2.051,48.667 2.439 C 48.667 3.114,48.643 3.148,48.125 3.198 C 47.357 3.272,47.324 4.035,48.083 4.166 L 48.583 4.252 48.667 6.101 C 48.723 7.353,48.827 8.042,48.988 8.236 C 49.624 9.002,51.174 9.275,51.494 8.678 C 51.710 8.274,51.324 7.833,50.752 7.833 C 49.871 7.833,49.833 7.753,49.833 5.908 L 49.833 4.185 50.625 4.134 C 51.345 4.088,51.417 4.046,51.417 3.667 C 51.417 3.288,51.345 3.245,50.625 3.199 C 49.841 3.149,49.833 3.143,49.833 2.563 C 49.833 1.547,49.359 1.041,48.867 1.533 M71.417 2.953 C 70.829 3.096,70.007 3.832,69.647 4.539 C 68.425 6.933,70.954 9.623,73.448 8.581 C 74.155 8.286,74.245 8.333,74.097 8.923 C 73.787 10.155,72.053 10.610,71.010 9.733 C 70.112 8.977,69.445 9.660,70.256 10.506 C 71.587 11.895,74.090 11.451,75.002 9.664 C 75.295 9.088,75.333 8.680,75.333 6.123 C 75.333 2.892,75.171 2.353,74.424 3.100 C 74.180 3.344,74.102 3.344,73.492 3.100 C 72.845 2.841,72.096 2.788,71.417 2.953 M4.028 3.358 C 1.285 4.715,2.290 9.000,5.351 9.000 C 6.504 9.000,8.198 7.757,7.945 7.096 C 7.815 6.759,7.020 6.753,6.891 7.089 C 6.555 7.966,4.872 8.072,4.067 7.267 C 2.491 5.691,4.648 3.138,6.394 4.512 C 7.074 5.047,6.938 5.149,5.476 5.202 C 2.732 5.299,3.286 6.333,6.082 6.333 C 8.317 6.333,8.654 5.944,7.752 4.406 C 6.994 3.112,5.420 2.669,4.028 3.358 M17.067 3.567 C 16.065 4.569,16.398 5.458,18.106 6.338 C 19.240 6.922,19.602 7.394,19.141 7.686 C 18.732 7.946,17.726 7.845,17.287 7.500 C 16.779 7.100,16.333 7.220,16.333 7.756 C 16.333 9.045,19.238 9.393,20.164 8.215 C 20.924 7.249,20.489 6.306,18.916 5.508 C 18.058 5.073,17.750 4.829,17.750 4.583 C 17.750 4.202,18.737 4.004,19.055 4.321 C 19.474 4.741,20.278 4.317,20.073 3.784 C 19.732 2.895,17.873 2.761,17.067 3.567 M31.240 3.215 C 31.195 3.334,31.178 4.590,31.204 6.007 L 31.250 8.583 31.667 8.583 L 32.083 8.583 32.129 5.792 L 32.175 3.000 31.749 3.000 C 31.515 3.000,31.286 3.097,31.240 3.215 M33.849 3.231 C 33.480 3.676,33.682 8.733,34.072 8.808 C 34.632 8.915,34.833 8.382,34.833 6.789 C 34.833 5.140,35.207 4.479,36.270 4.245 C 37.067 4.069,37.170 4.018,37.272 3.752 C 37.547 3.037,36.662 2.820,35.543 3.328 C 34.844 3.646,34.834 3.646,34.662 3.325 C 34.459 2.944,34.120 2.905,33.849 3.231 M39.838 3.264 C 37.372 4.333,37.395 7.707,39.876 8.744 C 41.102 9.256,42.705 8.827,43.316 7.821 C 43.941 6.794,43.210 6.468,42.225 7.333 C 41.237 8.200,39.813 7.913,39.253 6.733 C 38.419 4.975,40.657 3.307,42.082 4.625 L 42.578 5.083 41.414 5.126 C 39.863 5.182,39.500 5.279,39.500 5.637 C 39.500 6.217,39.849 6.333,41.585 6.333 C 43.693 6.333,43.944 6.198,43.678 5.207 C 43.205 3.451,41.452 2.564,39.838 3.264 M59.240 3.215 C 59.195 3.334,59.178 4.590,59.204 6.007 L 59.250 8.583 59.667 8.583 L 60.083 8.583 60.129 5.792 L 60.175 3.000 59.749 3.000 C 59.515 3.000,59.286 3.097,59.240 3.215 M62.559 3.165 C 60.953 3.814,61.397 5.454,63.458 6.484 C 64.031 6.771,64.500 7.101,64.500 7.219 C 64.500 7.881,63.299 8.045,62.422 7.503 C 61.755 7.091,61.211 7.351,61.412 7.986 C 61.788 9.168,64.950 9.240,65.396 8.077 C 65.846 6.905,65.408 6.198,63.708 5.349 C 62.634 4.812,62.571 4.742,62.817 4.355 C 62.920 4.191,63.146 4.157,63.606 4.235 C 64.932 4.459,65.080 4.440,65.136 4.046 C 65.241 3.304,63.603 2.744,62.559 3.165 M83.762 3.262 C 83.357 3.667,83.402 6.517,83.827 7.455 C 84.367 8.644,85.720 9.210,86.984 8.774 L 87.667 8.539 87.667 9.007 C 87.667 10.363,86.074 10.956,85.018 9.992 C 84.436 9.460,84.214 9.433,83.944 9.862 C 83.713 10.229,83.885 10.562,84.578 11.091 C 85.819 12.037,87.615 11.681,88.407 10.333 C 88.887 9.517,89.032 3.723,88.584 3.275 C 87.939 2.629,87.667 3.171,87.667 5.102 C 87.667 7.127,87.279 7.833,86.167 7.833 C 85.072 7.833,84.667 7.119,84.667 5.191 C 84.667 3.652,84.493 3.000,84.083 3.000 C 84.051 3.000,83.906 3.118,83.762 3.262 M77.033 3.367 C 76.785 3.615,76.764 6.329,77.005 7.195 C 77.359 8.470,78.861 9.244,80.203 8.842 C 80.683 8.698,80.926 8.692,81.054 8.821 C 81.833 9.600,82.167 8.767,82.167 6.043 C 82.167 3.589,82.029 3.073,81.406 3.192 C 81.116 3.247,81.075 3.443,81.000 5.142 C 80.904 7.309,80.593 7.833,79.400 7.833 C 78.291 7.833,78.000 7.305,78.000 5.291 C 78.000 3.611,77.878 3.167,77.417 3.167 C 77.316 3.167,77.143 3.257,77.033 3.367 M73.600 4.567 C 74.252 5.219,74.357 6.042,73.889 6.835 C 73.171 8.050,71.227 7.915,70.606 6.607 C 69.707 4.713,72.109 3.076,73.600 4.567"
              transform="translate(49,47.5) scale(.9)"
            />
            <g className="tds-icon-logo__logo">
              <path d="M122.377 40.129c0 .361-.121.649-.388.89a1.27 1.27 0 01-.897.385c-.339 0-.654-.12-.896-.385a1.252 1.252 0 01-.388-.89V24.852c0-.361.121-.65.388-.89a1.27 1.27 0 01.896-.385c.34 0 .655.12.897.385.243.24.388.553.388.89v.337c1.261-1.083 2.764-1.612 4.485-1.612 1.94 0 3.613.674 4.994 2.045.291.289.558.577.776.914.243-.313.509-.625.776-.914 1.382-1.371 3.03-2.045 4.994-2.045 1.939 0 3.612.674 4.994 2.045 1.382 1.371 2.061 3.007 2.061 4.956v9.551c0 .361-.122.649-.388.89a1.273 1.273 0 01-.897.385c-.364 0-.655-.12-.897-.385a1.252 1.252 0 01-.388-.89v-9.551c0-1.227-.436-2.286-1.309-3.152-.873-.866-1.94-1.299-3.176-1.299-1.236 0-2.303.433-3.176 1.299-.873.866-1.309 1.925-1.309 3.152v9.551c0 .361-.121.649-.388.89a1.27 1.27 0 01-.897.385c-.364 0-.654-.12-.897-.385a1.256 1.256 0 01-.388-.89v-9.551c0-1.227-.436-2.286-1.309-3.152-.873-.866-1.939-1.299-3.176-1.299-1.236 0-2.303.433-3.176 1.299-.872.866-1.309 1.925-1.309 3.152v9.551zm-13.404-16.552c2.473 0 4.606.866 6.352 2.598 1.77 1.756 2.642 3.85 2.618 6.303 0 2.454-.873 4.571-2.618 6.304-1.746 1.732-3.879 2.598-6.352 2.598-2.472 0-4.606-.866-6.351-2.598-1.746-1.733-2.619-3.85-2.619-6.304 0-2.453.873-4.571 2.619-6.303 1.745-1.732 3.879-2.598 6.351-2.598zm-13.044-7.29a1.13 1.13 0 00-.388.89v9.07l-.073-.072c-1.77-1.732-3.879-2.598-6.352-2.598-2.472 0-4.606.866-6.351 2.598-1.746 1.732-2.618 3.85-2.618 6.303 0 2.454.872 4.572 2.618 6.304 1.745 1.732 3.879 2.598 6.351 2.598 2.473 0 4.607-.866 6.352-2.598 1.746-1.732 2.618-3.85 2.618-6.304V17.177c0-.336-.121-.649-.363-.89a1.15 1.15 0 00-.897-.385c-.34 0-.655.145-.897.385zM93.674 27.98c1.236 1.227 1.867 2.742 1.867 4.498 0 1.757-.631 3.272-1.867 4.499-1.236 1.227-2.764 1.853-4.533 1.853-1.77 0-3.273-.602-4.534-1.853-1.236-1.227-1.867-2.742-1.867-4.499 0-1.756.606-3.247 1.867-4.498 1.236-1.227 2.764-1.853 4.534-1.853 1.769 0 3.272.602 4.533 1.853zm15.324 10.85c1.769 0 3.272-.602 4.533-1.853 1.236-1.227 1.867-2.742 1.867-4.499 0-1.756-.606-3.247-1.867-4.498-1.236-1.227-2.764-1.853-4.533-1.853-1.77 0-3.273.602-4.534 1.853-1.236 1.226-1.866 2.742-1.866 4.498 0 1.757.606 3.248 1.866 4.499 1.237 1.227 2.764 1.853 4.534 1.853zM33.455 47.106l-1.333 8.853c-.146.938.582 1.78 1.552 1.78h11.491c.945 0 1.672-.842 1.551-1.78l-1.333-8.853a1.39 1.39 0 011.382-1.588h17.479c.097 0 .218 0 .315-.024.267.024.509.024.776.024 8.679 0 15.418-8.132 12.97-17.105-1.625-5.967-7.346-9.912-13.552-9.624-.485-4.667-4.412-8.324-9.237-8.324a9.228 9.228 0 00-5.697 1.973A20.195 20.195 0 0031.128 0C20.316 0 11.491 8.396 10.934 18.982 4.703 20.161 0 25.598 0 32.118c0 7.361 5.988 13.328 13.382 13.376h18.691c.849.024 1.504.77 1.382 1.612zm-12.388-6.087a1.273 1.273 0 01-.897.385c-4.267 0-6.425-2.117-6.425-6.375v-8.902H12.46c-.363 0-.654-.12-.897-.385a1.255 1.255 0 01-.388-.89c0-.361.122-.65.388-.89.243-.241.558-.385.897-.385h1.285v-6.375c0-.361.121-.65.388-.891.242-.24.558-.385.897-.385.364 0 .655.121.897.385.242.241.388.554.388.891v6.375h2.594c.364 0 .654.12.897.385.242.24.388.553.388.89 0 .361-.121.65-.388.89a1.273 1.273 0 01-.897.385h-2.594v8.902c0 2.55 1.285 3.825 3.855 3.825.363 0 .654.12.897.385.242.24.387.553.387.89 0 .337-.121.649-.387.89zm15.322-14.29c.34 0 .655-.145.897-.385.243-.241.388-.554.412-.915 0-.36-.121-.649-.363-.914a1.837 1.837 0 00-.534-.337c-1.042-.409-2.181-.625-3.442-.625-2.497 0-4.631.89-6.425 2.67v-1.395c0-.337-.121-.65-.363-.89a1.145 1.145 0 00-.897-.385c-.34 0-.655.144-.897.385-.267.24-.388.529-.388.89v15.277c0 .337.145.649.388.89.242.265.533.385.897.385.339 0 .654-.144.897-.385.242-.241.363-.529.363-.89v-7.627c0-1.756.607-3.247 1.867-4.498 1.237-1.227 2.764-1.853 4.534-1.853.897 0 1.745.169 2.497.481.169.072.363.121.557.121zm18.909 6.495a1.248 1.248 0 01-.897.361h-13.94c.243 1.227.825 2.286 1.746 3.224.994.986 2.182 1.588 3.515 1.78h.049c.048 0 .097 0 .145.024.04 0 .08.008.116.014.029.005.056.01.078.01h.582c1.43 0 2.763-.409 4-1.275a7.321 7.321 0 001.479-1.371 2.25 2.25 0 01.339-.337c.291-.192.606-.265.97-.192.339.048.63.24.824.529.194.289.267.601.218.938a1.354 1.354 0 01-.291.626c-.557.697-1.26 1.323-2.06 1.876-1.916 1.348-4.001 1.901-6.279 1.708-.061 0-.115-.006-.17-.012-.055-.006-.109-.012-.17-.012h-.072a2.154 2.154 0 00-.388-.048c-.025 0-.049 0-.097-.024-1.746-.313-3.273-1.131-4.606-2.454-1.746-1.732-2.619-3.825-2.619-6.279 0-2.454.873-4.547 2.619-6.279 1.745-1.732 3.854-2.598 6.327-2.598s4.582.866 6.327 2.598c1.746 1.732 2.619 3.825 2.619 6.279 0 .361-.122.674-.364.914zm11.006 5.365c-1.333-.192-2.521-.794-3.515-1.78-.945-.914-1.527-1.997-1.745-3.248h13.939c.34 0 .655-.12.897-.361.243-.24.364-.553.364-.89 0-2.454-.873-4.547-2.618-6.279-1.746-1.732-3.855-2.598-6.328-2.598-2.473 0-4.582.866-6.327 2.598-1.746 1.732-2.618 3.825-2.618 6.279 0 2.454.872 4.547 2.618 6.279 1.309 1.323 2.86 2.141 4.606 2.454a.184.184 0 00.097.024c.121 0 .267.024.388.048h.073c.06 0 .115.006.169.012.055.006.109.012.17.012 2.279.193 4.364-.36 6.279-1.708.8-.553 1.503-1.179 2.061-1.876.145-.169.242-.385.29-.626a1.295 1.295 0 00-.218-.938 1.19 1.19 0 00-.824-.529 1.24 1.24 0 00-.97.192 2.25 2.25 0 00-.339.337 7.321 7.321 0 01-1.479 1.371c-1.236.866-2.57 1.275-4 1.275h-.582a.476.476 0 01-.097-.012c-.03-.006-.06-.012-.097-.012-.048-.024-.097-.024-.145-.024h-.049zm.995-12.606c-1.77 0-3.273.625-4.51 1.852-.945.938-1.527 1.997-1.745 3.224h12.558c-.243-1.227-.824-2.286-1.746-3.224-1.285-1.227-2.788-1.852-4.557-1.852zm-20.584 0c-1.769 0-3.272.625-4.533 1.852-.945.938-1.527 1.997-1.745 3.224h12.557c-.242-1.227-.824-2.286-1.745-3.224-1.261-1.227-2.764-1.852-4.534-1.852z"></path>
            </g>
          </svg>
        </a>
        <h4> My Name </h4>
      </nav>
    </div>
  );
};

export default Navbar;

import {useState} from "react";
import "./Bargain.css";

export default function Bargain(props) {
    let [score, setScore] = useState(props.score)
    let [title, setTitle] = useState(props.title)
    let [icon, setIcon] = useState(props.icon)
  function mapScoreToCircleOffset() {
      return 282.743 - (282.743 * score / 10)
  }

  return (
    <div className="skill-box">
      <img src={icon} />
      {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"*/}
      {/*  className="svgspinner-circle">*/}
      {/*    <circle cx="50%" cy="50%" r="45" className="circle-background" />*/}
      {/*    <circle cx="50%" cy="50%" r="45" className="circle-up" style={{strokeDashoffset: mapScoreToCircleOffset()}} />*/}
      {/*</svg>*/}
      <span>{title}</span>
      {/*<span className="score">{score} / 10</span>*/}
    </div>
  );
}

import "./Bargain.css";

export default function Bargain(props) {
  return (
    <div className="bargain-box">
      <div className="bargain-img">
        <img src={props.icon} />
      </div>
      <span>{props.title}</span>
      {/* <span class="tr-button--link">Discover more</span> */}
    </div>
  );
}

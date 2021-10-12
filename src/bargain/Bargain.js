import "./Bargain.css";

export default function Bargain(props) {
  return (
    <div class="bargain-box">
      <div class="bargain-img">
        <img src={props.icon} />
      </div>
      <span>{props.title}</span>
      {/* <span class="tr-button--link">Discover more</span> */}
    </div>
  );
}

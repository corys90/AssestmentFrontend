import { React } from "react";
import TimerExt from "../TimerExt";
import "./style.css";

const CardHome = (props) => {
  return (
    <div className="containerCH">
      <div className="containerCH_divImg">
        <img className="imageSize" src={props.image} alt="Flareon" />
      </div>
      <div className="containerCH_divTitle">
        <p>
          <b>{props.title}</b>
        </p>
      </div>
      <div>
        <div>
          <TimerExt id={props.id} leftime={props.timeleft} />
        </div>
      </div>
    </div>
  );
};

export default CardHome;

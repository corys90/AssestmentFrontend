import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { React } from "react";
import "./style.css";

const TimerExt = (props) => {
  const [count, setCount] = useState(props.leftime);
  const [fmthh, setFmthh] = useState("00:00:00");
  const navigate = useNavigate();

  const productDetailPage = (id) => {
    navigate("/productdetailpage/" + id);
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count - 1);
      setFmthh(new Date(count * 1000).toISOString().substr(11, 8));
    }, 1000);

    if (count < 0) {
      clearTimeout(timer);
    }
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div className="divFootT-Container">
      <div className="divFootT-Container__divTimerT">{fmthh}</div>
      <div className="divFootT-Container__divTimerT">
        {
          <input
            className={
              count < 0 ? "buttonDetails btnDisabled" : "buttonDetails "
            }
            type="button"
            value="Ver detalle"
            onClick={() => {
              productDetailPage(props.id);
            }}></input>
        }
      </div>
    </div>
  );
};

export default TimerExt;

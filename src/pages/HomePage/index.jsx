import { useEffect } from "react";
import { useState } from "react";
import { React } from "react";
import CardHome from "../../components/CardHome";
import "../HomePage/style.css";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [clase, setClase] = useState(true);

  async function fakerApi() {
    await fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => {
        setClase(false);
        setData(json);
        return json;
      });
  }

  useEffect(() => {
    fakerApi();
  }, []);

  return (
    <div className="centerDivHP">
      <div
        className={clase ? "centerDivHP--loading" : "centerDivHP--noloading"}>
        <h1>Wait, loading product list...!!!</h1>
      </div>
      {data.map((element, idx) => (
        <div key={idx} className="centerDivHP--productItems">
          <CardHome
            key={idx}
            title={element.title}
            timeleft={Math.round(Math.random() * 100) + 15}
            image={element.image}
            id={element.id}
          />
        </div>
      ))}
    </div>
  );
};

export default HomePage;

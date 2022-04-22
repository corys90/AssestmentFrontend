import { React } from "react";
import { useEffect, useState } from "react";
import "./style.css";

const CardDetail = (props) => {
  const [data, setData] = useState({
    id: props.id,
    image:
      "https://th.bing.com/th/id/OIP.NtQhPq1wp6Zi6NZfys_aFgHaHa?pid=ImgDet&rs=1",
    title: "loading...",
    price: "loading...",
    description: "loading...",
    category: "loading...",
    rating: { rate: "loading...", count: "loading..." },
  });

  async function fakerApi(id) {
    const url = "https://fakestoreapi.com/products/" + id;
    await fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        return json;
      });
  }

  useEffect(() => {
    fakerApi(props.id);
  }, []);

  return (
    <div className="containerCD">
      <div className="containerCD_divImg ">
        <img
          src={data.image}
          alt="Target"
          className="containerCD_divImg--img"
        />
      </div>
      <div className="contenedorTexto">
        <div className="contenedorTexto_lines">
          <div>Product Id:</div>
          <div>{data.id}</div>
        </div>
        <div className="contenedorTexto_lines">
          <div>Title: </div>
          <div>{data.title}</div>
        </div>
        <div className="contenedorTexto_lines">
          <div>Price ($):</div>
          <div>{`${data.price}`}</div>
        </div>
        <div className="contenedorTexto_lines">
          <div>Description: </div>
          <div>{data.description}</div>
        </div>
        <div className="contenedorTexto_lines">
          <div>Category:</div>
          <div>{data.category}</div>
        </div>
        <div className="contenedorTexto_lines">
          <div>Rate:</div>
          <div>{data.rating.rate}</div>
        </div>
        <div className="contenedorTexto_lines">
          <div>Count:</div>
          <div>{data.rating.count}</div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;

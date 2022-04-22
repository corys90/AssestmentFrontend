import { React } from "react";
import { useParams } from "react-router-dom";
import CardDetail from "../../Components/CardDetail";
import "./style.css";

const ProductDetailPage = () => {
  const { id } = useParams();
  return (
    <div>
      <div></div>
      <div>
        <CardDetail id={id} />
      </div>
    </div>
  );
};

export default ProductDetailPage;

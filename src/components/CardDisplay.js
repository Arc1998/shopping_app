import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { ProdContext } from "../context/CartProd";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
const CardDisplay = (props) => {
  const cartProdObj = useContext(ProdContext);
  return (
    <>
      <div
        className="card"
        style={{
          color: "black",
          border: "2px solid blue",
          height: "26rem",
          width: "18rem",
          margin: "6px",
        }}
      >
        <Link to={`/detail/${props.index}`} style={{ textDecoration: "none" }}>
          <img
            src={props.product.image}
            style={{ height: "20vh" }}
            className="card-img-top"
            alt="..."
          />
        </Link>
        <div className="card-body">
          <Link
            to={`/detail/${props.index}`}
            style={{ textDecoration: "none" }}
          >
            <h5 className="card-title">
              {props.product.title.length >= 20 ? (
                <p>{props.product.title.substr(0, 20)}....</p>
              ) : (
                <p>{props.product.title}</p>
              )}
            </h5>
            <p className="card-text">
              <b>{props.product.price + " "}Rs</b>
            </p>
            <p>
              {props.product.description.length >= 10 ? (
                <p>{props.product.description.substr(0, 20)}....</p>
              ) : (
                <p>{props.product.description}</p>
              )}
            </p>
          </Link>
          <b>
            <Rating
              name="read-only"
              value={props.product.rating.rate}
              readOnly
            />
          </b>
          <br />
          
          {props.option === "shop" || props.option === "wish" ? (
            <AddShoppingCartIcon
              style={{ color: "grey", marginLeft: "25px", cursor: "pointer" }}
              onClick={() => {
                cartProdObj.setCartData(props.product);
              }}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};
export default CardDisplay;

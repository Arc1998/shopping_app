import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
const Intro = () => {
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ marginLeft: "50px" }}>
          <h2 style={{ fontSize: "70px" }}>Welcome to ShopMe</h2>
          <p style={{ fontSize: "35px" }}>We are here to serve you</p>
          <div
            style={{ display: "flex", marginTop: "40px", alignItems: "center" }}
          >
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Button
                style={{ height: "45px", width: "124px", fontSize: "23px" }}
                variant="contained"
              >
                Go
              </Button>
            </Link>
          </div>
        </div>
        <div>
          <img src="images/introImg.gif" alt="" />
        </div>
      </div>
    </>
  );
};
export default Intro;

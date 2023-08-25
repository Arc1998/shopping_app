import * as React from "react";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useContext } from "react";
import { ProdContext } from "../context/CartProd";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
export default function BottomNav(props) {
  const [value, setValue] = React.useState(0);
  const obj = useContext(ProdContext);
  return (
    <Box
      sx={{
        width: 500,
        boxShadow: "2px 2px 4px black",
        position: "fixed",
        top: "90%",
        left: "38%",
        zIndex: "1",
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label={
            <Link to="/shop" style={{ textDecoration: "none" }}>
              Shop
            </Link>
          }
          icon={
            <StyledBadge badgeContent={props.lenOfItem} color="secondary">
              <ShoppingBagIcon />
            </StyledBadge>
          }
        />
        <BottomNavigationAction
          label={
            <Link to="/cart" style={{ textDecoration: "none" }}>
              Cart
            </Link>
          }
          icon={
            <StyledBadge badgeContent={obj.products.length} color="secondary">
              <LocalGroceryStoreIcon />
            </StyledBadge>
          }
        />
        
      </BottomNavigation>
    </Box>
  );
}

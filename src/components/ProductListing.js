import React from "react";
import Product from "./Product";
import makeStyles from "@mui/styles/makeStyles";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  listingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "20px",
    marginTop: "40px",
    margin: "0 auto",
    maxWidth: "80vw",
  },
}));

function ProductListing() {
  const products = useSelector((state) => state.allRroducts.products);
  console.log(products);
  const classes = useStyles();
  return (
    <div className={classes.listingContainer}>
      {products.map((product, i) => {
        return <Product details={product} key={i}></Product>;
      })}
    </div>
  );
}

export default ProductListing;

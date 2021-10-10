import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { IconButton } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";
const useStyles = makeStyles((theme) => ({
  card: {
    width: "300px",
    height: "400px",
    overflow: "auto",
  },
  img: {
    height: "250px",
    maxWidth: "100%",
    width: "auto",
    margin: "0 auto",
  },
  detail: {
    overflow: "auto",
    fontWeight: "bold",
  },
}));

const Product = ({ details }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { price, title, image } = details;
  return (
    <Card sx={{ maxWidth: 345 }} className={classes.card}>
      <CardMedia
        className={classes.img}
        component="img"
        height="240"
        image={image}
        alt="product_image"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          className={classes.detail}
        >
          {title}
        </Typography>
      </CardContent>
      <CardActions
        style={{ position: "sticky", bottom: "0", backgroundColor: "white" }}
      >
        <IconButton size="large">
          <AddShoppingCartIcon />
        </IconButton>
        <Button size="large">Details</Button>
        <Button size="large" style={{ color: "red" }}>
          ${price}
        </Button>
      </CardActions>
    </Card>
  );
};
export default Product;

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import StarsIcon from "@mui/icons-material/Stars";
import FaceIcon from "@mui/icons-material/Face";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [visible, setVisible] = React.useState(false);
  const toggleDrawer = (open) => (event) => {
    setVisible(!visible);
  };
  const list = () => (
    <Box sx={{ width: 250 }} onClick={toggleDrawer(false)}>
      <List>
        <ListItem button key="Men's clothing">
          <ListItemIcon>
            <SupervisorAccountIcon />
          </ListItemIcon>
          <ListItemText primary="Men's Clothing" />
        </ListItem>
        <Divider />
        <ListItem button key="Women's clothing">
          <ListItemIcon>
            <FaceIcon />
          </ListItemIcon>
          <ListItemText primary="Women's Clothing" />
        </ListItem>
        <Divider />
        <ListItem button key="Electronics">
          <ListItemIcon>
            <ElectricalServicesIcon />
          </ListItemIcon>
          <ListItemText primary="Electronics" />
        </ListItem>
        <Divider />
        <ListItem button key="Jewelery">
          <ListItemIcon>
            <StarsIcon />
          </ListItemIcon>
          <ListItemText primary="Jewelery" />
        </ListItem>
        <Divider />
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon style={{ color: "white" }}></MenuIcon>

            <SwipeableDrawer
              open={visible}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
            >
              <StorefrontIcon
                style={{ alignSelf: "center" }}
                fontSize="large"
              />
              {list()}
            </SwipeableDrawer>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Material Store
          </Typography>
          <Button color="inherit">
            <Link to="/cart">
              <ShoppingCartIcon style={{ color: "white" }} />
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default NavBar;

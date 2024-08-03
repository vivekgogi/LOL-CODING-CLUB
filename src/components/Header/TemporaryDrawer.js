import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Outlet } from "react-router-dom";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      bgcolor="#171717"
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{ color: "white", backgroundColor: "black" }}>
        <ListItem>
          <ListItemButton>
            <a
              href="/"
              style={{
                color: "white",
                backgroundColor: "black",
                textDecoration: "none",
              }}
            >
              LOL Home
            </a>
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton>
            <a
              href="https://witsolapur.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "white",
                backgroundColor: "black",
                textDecoration: "none",
              }}
            >
              WIT Home
            </a>
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton>
            <a
              href="/about"
              style={{
                color: "white",
                backgroundColor: "black",
                textDecoration: "none",
              }}
            >
              About
            </a>
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton>
            <a
              href="/events"
              style={{
                color: "white",
                backgroundColor: "black",
                textDecoration: "none",
              }}
            >
              Events
            </a>
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton>
            <a
              href="/team"
              style={{
                color: "white",
                backgroundColor: "black",
                textDecoration: "none",
              }}
            >
              Team
            </a>
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton>
            <a
              href="https://lolclubwit.hashnode.dev/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "white", backgroundColor: "black" }}
            >
              Blog
            </a>
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton>
            <a
              href="/alumniconnect"
              style={{
                color: "white",
                backgroundColor: "black",
                textDecoration: "none",
              }}
            >
              Alumni Connect
            </a>
          </ListItemButton>
        </ListItem>

        <Outlet />
      </List>
    </Box>
  );

  return (
    <div
      className="temp-drawer"
      sx={{ color: "white", backgroundColor: "black" }}
    >
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            sx={{ color: "white", backgroundColor: "black" }}
          >
            <MenuIcon
              sx={{
                color: "white",
                backgroundColor: "black",
                width: 30,
                height: 30,
                marginTop: "25px",
                border: "2px solid white",
                borderRadius: "8px",
                padding: "3px",
              }}
            />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Tooltip,
} from "@mui/material";
import NavBar from "./NavBar";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  const navList: { name: string; id: string }[] = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Project", id: "project" },
    { name: "Contact", id: "contact" },
  ];

  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  return (
    <>
      <AppBar component="nav">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <p className=" text-lg font-bold italic">
              Emirael<span className="text-red-600">Dev</span>
            </p>
          </div>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navList.map((list) => (
              <Tooltip title={list.name} key={list.id}>
                <Button sx={{ color: "red" }}>{list.name}</Button>
              </Tooltip>
            ))}
          </Box>
          <IconButton
            color="inherit"
            size="large"
            onClick={() => setDrawerOpen(!drawerOpen)}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <NavBar
        navList={navList}
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
      />
    </>
  );
}

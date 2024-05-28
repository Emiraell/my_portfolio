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
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Project", id: "project" },
    { name: "Contact", id: "contact" },
  ];

  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  return (
    <>
      <AppBar component="nav" elevation={0} id="home">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            bgcolor: "rgb(249 250 251)",
            py: { md: 3, xs: 1 },
          }}
        >
          <div>
            <p className=" text-lg font-bold italic text-blue-500">
              Emirael<span className="text-gray-700">Dev</span>
            </p>
          </div>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navList.map((list) => (
              <a href={`#${list.id}`} key={list.id}>
                <Tooltip title={list.name} key={list.id}>
                  <Button color="primary">{list.name}</Button>
                </Tooltip>
              </a>
            ))}
          </Box>
          <IconButton
            color="primary"
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

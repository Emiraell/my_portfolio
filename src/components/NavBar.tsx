import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Tooltip,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type NavProps = {
  navList: { name: string; id: string }[];
  drawerOpen: boolean;
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
};
export default function NavBar({
  navList,
  drawerOpen,
  setDrawerOpen,
}: NavProps) {
  return (
    <Drawer
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
      sx={{ display: { md: "none" } }}
      ModalProps={{ keepMounted: true }}
      PaperProps={{ sx: { width: { xs: 240, sm: 400 } } }}
    >
      <Box sx={{ mx: "auto" }}>
        <div className="pt-6 mb-2">
          <p className=" text-lg font-bold italic text-blue-500">
            Emirael<span className="text-gray-800">Dev</span>
          </p>
        </div>
        <Divider />
        <List sx={{ textAlign: "center" }}>
          {navList.map((list) => (
            <ListItem key={list.id}>
              <a href={`#${list.id}`}>
                <Tooltip title={list.name}>
                  <ListItemText id={`#${list.id}`} primary={list.name} />
                </Tooltip>
              </a>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

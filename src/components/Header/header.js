import { useState } from "react";
import LibraryBooksRoundedIcon from "@mui/icons-material/LibraryBooksRounded";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Button,
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const Pages = ["Products", "Services", "ContactUs", "About", "Login", "SingUp"];
const Header = () => {
  const [value, setValue] = useState();
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <AppBar sx={{ background: "#08419e" }}>
        <Toolbar>
          <Typography>
            <LibraryBooksRoundedIcon />
            BOOKSHELF.
          </Typography>
          {isMatch ? (
            <>
              <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <List>
                  {Pages.map((page, index) => (
                    <ListItemButton
                      key={index}
                      onClick={() => setOpenDrawer(false)}
                    >
                      <ListItemIcon>
                        <ListItemText>{page}</ListItemText>
                      </ListItemIcon>
                    </ListItemButton>
                  ))}
                </List>
              </Drawer>
              <IconButton
                sx={{ marginLeft: "auto", color: "#ffffff" }}
                onClick={() => setOpenDrawer(!openDrawer)}
              >
                <MenuOpenRoundedIcon />
              </IconButton>
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColor="secondary"
              >
                <Tab label="Products" />
                <Tab label="Services" />
                <Tab label="ContactUs" />
                <Tab label="About" />
              </Tabs>
              <Button sx={{ marginLeft: "auto" }} variant="contained">
                Login
              </Button>
              <Button sx={{ marginLeft: "9px" }} variant="contained">
                SingUp
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;

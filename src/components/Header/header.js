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
  Link,
} from "@mui/material";

const Pages = ["Products", "Services", "ContactUs", "About", "Login", "SingUp"];
const Header = () => {
  const [value, setValue] = useState();
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <AppBar sx={{ background: "#edca68" }}>
        <Toolbar>
          <Typography>
            <Link
              to="/"
              sx={{ color: "#0702f7", textDecoration: "none", fontSize: "25px", fontFamily: 'Bree San-serif' }}
            >
              <LibraryBooksRoundedIcon />
              BOOKSHELF.
            </Link>
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
                sx={{ marginLeft: "auto", color: "#0702f7" }}
                onClick={() => setOpenDrawer(!openDrawer)}
              >
                <MenuOpenRoundedIcon />
              </IconButton>
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto", color: "#0b03ff" }}
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
              <Button sx={{ marginLeft: "auto", background: "#0702f7" }} variant="contained">
                Login
              </Button>
              <Button sx={{ marginLeft: "9px", background: "#0702f7"  }} variant="contained">
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

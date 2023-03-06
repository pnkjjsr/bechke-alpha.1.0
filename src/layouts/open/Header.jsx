import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { signOut } from "firebase/auth";

import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

import { AuthContext } from "@/contexts/Auth";
import { auth } from "@/libs/firebase";
import { logout } from "@/utils/sessions";

import OAuth from "@/components/Common/OAuth";
import ModalHOC from "@/components/Common/Modal/transition";

import s from "./header.module.scss";

export const HeaderLayout = (props) => {
  const { authenticated, setAuthenticated, profile, setProfile } =
    useContext(AuthContext);

  const [openFn, setOpenFn] = useState();
  const [closeFn, setCloseFn] = useState();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const modalOpen = (fn) => setOpenFn(() => fn);
  const modalClose = (fn) => setCloseFn(() => fn);
  const submitCallback = () => closeFn();

  const open = Boolean(anchorEl);
  const menuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const menuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        logout();
        setAuthenticated(false);
        setProfile(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={s.header}>
      <div className={s.logo}>
        <span>
          <Link href="/">
            <a>Bechke</a>
          </Link>

          {/* <small>alpha 0.1</small> */}
        </span>
      </div>

      <div className={s.action}>
        {(!authenticated && (
          <IconButton aria-label="Login" color="inherit" onClick={openFn}>
            <AccountCircle />
          </IconButton>
        )) || (
          <Stack direction="row" spacing={0}>
            <IconButton aria-label="Login" color="inherit" onClick={menuOpen}>
              <Avatar
                sx={{ width: 32, height: 32 }}
                alt={profile.displayName}
                src={profile.photoURL}
                size="small"
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={menuClose}
              onClick={menuClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              {/* <MenuItem onClick={menuClose}>
                <Avatar /> Profile
              </MenuItem>
              <MenuItem onClick={menuClose}>
                <Avatar /> My account
              </MenuItem>
              <Divider />
              <MenuItem onClick={menuClose}>
                <ListItemIcon>
                  <PersonAdd fontSize="small" />
                </ListItemIcon>
                Add another account
              </MenuItem>
              <MenuItem onClick={menuClose}>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem> */}
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Stack>
        )}
      </div>

      <ModalHOC title="Login" text="" openFn={modalOpen} closeFn={modalClose}>
        <OAuth callback={submitCallback} />
      </ModalHOC>
    </div>
  );
};

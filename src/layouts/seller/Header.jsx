import React, { useContext } from "react";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { AuthContext } from "@/contexts/Auth";

import s from "./header.module.scss";

export const HeaderLayout = (props) => {
  const { authenticated, setAuthenticated, profile, setProfile } =
    useContext(AuthContext);

  return (
    <div className={s.header}>
      <Grid container>
        <Grid item xs={6}>
          {authenticated && (
            <IconButton aria-label="delete">
              <MenuIcon />
            </IconButton>
          )}
        </Grid>

        <Grid item xs={6} display="flex" justifyContent="flex-end">
          <IconButton aria-label="delete">
            <AccountCircleIcon />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
};

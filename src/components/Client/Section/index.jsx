import React from "react";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import s from "./style.module.scss";

function Client() {
  return (
    <section className={s.client}>
      <h2>Our Client&apos;s Experience</h2>
      <div className={s.items}>
        <Card sx={{ maxWidth: 345 }}>
          <Link href="/rahulfitness">
            <a>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/seller/rahulfitness/profile/profile.png"
                  alt="Rahul Fitness"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Rahul Fitness
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Easiest and cheapest platform to open your supplement store
                    online. And amazing is that they upload all the product
                    updates and dynamic banner creation.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </a>
          </Link>
        </Card>
      </div>
    </section>
  );
}

export default Client;

import React from "react";
import Container from "@mui/material/Container";

function About() {
  return (
    <Container maxWidth="lg">
      <div className="static">
        <h1>About Us</h1>
        <p>
          "Bechke.com", is an online service for small shop owners. We provide
          them full technology support to do their business online.
        </p>

        <p>
          It's not a regular directory platform. Bechke takes care of every
          client and customizes features according to their need.
        </p>

        <p>
          Bechke gives you an online service, that you have never experienced
          before.
        </p>

        <h4>We provide services as</h4>
        <ol>
          <li>
            All the products upload and maintain by Bechke, with proper images
            and description
          </li>
          <li>
            Each product detail updated the same as any other "1000 cr startup
            company" level
          </li>
          <li>"Adding &amp; Removing" products is just by one click</li>
          <li>
            No more 'Graphic designer' need. With Bechke technology'ss help,
            banner creation is just in one 5 sec.
          </li>
        </ol>

        <h4>Contact Us</h4>
        <p>
          Customer Care: 9210882260
          <br />
          Whatsapp Support: 9210882260
        </p>
      </div>
    </Container>
  );
}

export default About;

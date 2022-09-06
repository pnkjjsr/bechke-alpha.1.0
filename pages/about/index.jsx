import React from "react";
import Container from "@mui/material/Container";

function About() {
  return (
    <Container maxWidth="lg">
      <div className="static">
        <h1>About Us</h1>
        <p>
          &quot;Bechke.com&quot;, is an online service for small shop owners. We
          provide them full technology support to do their business online.
        </p>

        <p>
          It&apos;s not a regular directory platform. Bechke takes care of every
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
            Each product detail updated the same as any other &quot;1000 cr
            startup company&quot; level
          </li>
          <li>
            &quot;Adding &amp; Removing&quot; products is just by one click
          </li>
          <li>
            No more &apos;Graphic designer&apos; need. With Bechke
            technology&apos;s help, banner creation is just in one 5 sec.
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

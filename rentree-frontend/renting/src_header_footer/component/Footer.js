import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyle";

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
return (
	<Box>
	<h2 style={{ color: "#F9F6EE",
				textAlign: "center",
				marginTop: "-50px" }}>
		Rentree : A Renting Portal One Stop Destination
	</h2>
	<hr style={{ color: "white" }} />
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Aim</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
			<FooterLink href="#">Testimonials</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">Purchase</FooterLink>
			<FooterLink href="#">Renting</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">Pune</FooterLink>
			<FooterLink href="#">Akola</FooterLink>
			<FooterLink href="#">Washim</FooterLink>
			<FooterLink href="#">Mumbai</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				<FacebookIcon />
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				<InstagramIcon/>
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				<TwitterIcon />
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				<YouTubeIcon />
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	<hr style={{ color: "white" }} />
	<p style={{color: "white", textAlign:"center"}}> Copyright @ 2022 RenTree. All rights reserved.</p>
	</Box>
);
};
export default Footer;

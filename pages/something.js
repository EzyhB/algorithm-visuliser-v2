import { Container, ImageList, ImageListItem } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";

export default function something() {
  return (
    <Container maxWidth="none">
      <Navbar />
      <Container sx={{ justifyContent: "center" }}>
        <ImageList
          sx={{ width: 800, height: 650 }}
          variant="woven"
          cols={3}
          gap={8}
        >
          <ImageListItem>
            <img
              src="https://i.kym-cdn.com/entries/icons/original/000/022/978/yNlQWRM.jpg"
              alt="y tho ._."
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://c.tenor.com/fCeQVrKw5ikAAAAM/white-cat-why.gif"
              alt="but like why"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://i.kym-cdn.com/entries/icons/facebook/000/022/255/tumblr_inline_o58r6dmSfe1suaed2_500.jpg"
              alt="but really..."
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://i.insider.com/6088f9a30da8f40018033e29?width=700"
              alt="._."
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://cdn.discordapp.com/attachments/786789210782171186/942388485824847872/unknown.png"
              alt="feel proud"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://media.wired.co.uk/photos/607d91994d40fbb952b6ad64/16:9/w_2992,h_1683,c_limit/wired-meme-nft-brian.jpg"
              alt="meh"
            />
          </ImageListItem>
        </ImageList>
      </Container>
    </Container>
  );
}

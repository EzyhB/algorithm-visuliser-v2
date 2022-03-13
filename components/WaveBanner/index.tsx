import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { SyntheticEvent } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ethers } from "ethers";

import abi from "../../utility/WavePortal.json";
import { useTheme } from "@mui/material";
import MiningTimeline from "../MiningTimeline";

declare const window: Window &
  typeof globalThis & {
    ethereum: any;
  };

export default function WaveBanner() {
  const [allWaves, setAllWaves] = useState([]);
  const [currentAccount, setCurrentAccount] = useState("");
  const [isMining, setIsMining] = useState(false);
  const [isMined, setIsMined] = useState(false);

  const theme = useTheme();

  const contractAddress = "0x0Eb319DFCC963F866ADdeCcd756f6Ed14326dcE6";
  const contractABI = abi.abi;

  const getAllWaves = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const wavePortalContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        const waves = await wavePortalContract.getAllWaves();
        console.log(waves);

        let cleanWaves = [];

        waves.forEach((el) => {
          cleanWaves.push({
            address: el.waver,
            timestamp: new Date(el.timestamp * 1000),
            message: el.message,
          });
        });

        setAllWaves(cleanWaves);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const walletSecurityCheck = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamask!");
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found authorised account! ", account);
        setCurrentAccount(account);
        getAllWaves();
      } else {
        console.log("No authorized account found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        alert("Get A MetaMask Wallet!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleSubmitTest = (e: SyntheticEvent) => {
  //   e.preventDefault();
  //   console.log(e);
  //   const form = e.target as HTMLFormElement;
  //   const input = form[0] as HTMLInputElement;

  //   const message = input.value;

  //   console.log(message);
  // };
  const wave = async (e: SyntheticEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form[0] as HTMLInputElement;

    const message = input.value;

    input.value = "";

    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const wavePortalContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        let count = await wavePortalContract.getTotalWaves();
        console.log("Retrieved total wave count...", count.toNumber());

        const waveTxn = await wavePortalContract.wave(message);
        console.log("Mining...", waveTxn.hash);

        setIsMining(true);

        await waveTxn.wait();
        console.log("Mined -- ", waveTxn.hash);
        setIsMined(true);
        setTimeout(() => {
          setIsMined(false);
          setIsMining(false);
        }, 5000);

        count = await wavePortalContract.getTotalWaves();
        console.log("Retrieved total wave count...", count.toNumber());
      } else {
        console.log("Ethereum objext doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    walletSecurityCheck();
  }, []);

  return (
    <Container sx={{ height: "200vh" }}>
      <Box sx={{ m: { md: 10, sm: 6, xs: 5 } }} />
      <Typography variant="h2" align="center">
        👋 Hey there!
      </Typography>
      <Typography variant="h6" align="center">
        I&apos;m Ezyh, &#38; I&apos;ve just deployed my 1st Etherium Smart
        Contract onto the BlockChain! Exciting!
      </Typography>
      <Container maxWidth="md">
        <Grid container>
          <Grid item md={6} xs={12}>
            <MiningTimeline isMining={isMining} isMined={isMined} />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
            sx={{ bgcolor: "grey", alignItems: "center" }}
          >
            {!currentAccount ? (
              <Box
                sx={{
                  bgcolor: "rgba(181, 80, 248, 0.15)",
                  maxWidth: { md: "80%", xs: "90%" },
                  margin: { md: "1rem 1rem", xs: "auto auto" },
                  height: { md: "85%", xs: "15rem" },
                  borderRadius: "5rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={connectWallet}
                  sx={{ margin: "0 auto" }}
                >
                  Connect Wallet
                </Button>
              </Box>
            ) : (
              <Box
                sx={{
                  bgcolor: "rgba(181, 80, 248, 0.15)",
                  maxWidth: { md: "80%", xs: "90%" },
                  margin: { md: "1rem 1rem", xs: "auto auto" },
                  height: { md: "85%", xs: "15rem" },
                  borderRadius: "5rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <form
                  style={{
                    // backgroundColor: "green",
                    width: "90%",
                    margin: "auto auto",
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                  onSubmit={(e: SyntheticEvent) => {
                    wave(e);
                  }}
                >
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    placeholder="Message..."
                    color="secondary"
                  />
                  <Button
                    variant="contained"
                    color="secondary"
                    type="submit"
                    sx={{
                      margin: "0 auto",
                      bottom: { md: "-2rem", xs: "-1rem" },
                    }}
                  >
                    Wave at me
                  </Button>
                </form>
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>
      {/* <Box
        position="fixed"
        sx={{
          display: "flex",
          bottom: "1rem",
          right: { md: "1rem", xs: 0 },
          background: theme.palette.primary.light,
          height: { md: "6rem", xs: "4rem" },
          width: { md: "14rem", xs: "100%" },
          borderRadius: "2rem",
          alignItems: "center",
        }}
      > */}

      {/* </Box> */}
    </Container>
  );
}

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
import WaveCard from "../WaveCard";

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

  const contractAddress = "0x20D7c38996eF424b50C3d42D704A7Ec7A8e1Be6C";
  const contractABI = abi.abi;

  const getAllWaves = async () => {
    const { ethereum } = window;
    try {
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const wavePortalContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        const waves = await wavePortalContract.getAllWaves();

        const cleanWaves = waves.map((el) => {
          return {
            address: el.waver,
            timestamp: new Date(el.timestamp * 1000),
            message: el.message,
          };
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

        const waveTxn = await wavePortalContract.wave(message, {
          gasLimit: 300000,
        });
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
    let wavePortalContract;

    const onNewWave = (from, timestamp, message) => {
      console.log("NewWave", from, timestamp, message);
      const newState = [
        ...allWaves,
        {
          address: from,
          timestamp: new Date(timestamp * 1000),
          message: message,
        },
      ];
      setAllWaves(newState);
    };

    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      wavePortalContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );
      wavePortalContract.on("NewWave", onNewWave);
    }

    return () => {
      if (wavePortalContract) {
        wavePortalContract.off("NewWave", onNewWave);
      }
    };
  }, []);

  return (
    <Container sx={{ height: "100%" }}>
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
                    required
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
                    disabled={isMining ? true : false}
                  >
                    Wave at me
                  </Button>
                </form>
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="sm">
        {allWaves.map((el, index) => (
          <WaveCard
            key={index}
            person={el.address}
            message={el.message}
            time={el.timestamp}
          />
        ))}
      </Container>
    </Container>
  );
}

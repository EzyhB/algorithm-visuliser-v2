import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ethers } from "ethers";

import abi from "../../utility/WavePortal.json";

declare const window: Window &
  typeof globalThis & {
    ethereum: any;
  };

export default function WaveBanner() {
  const [currentAccount, setCurrentAccount] = useState("");

  const contractAddress = "0xC99181CE0841b5F1DD91f63e47DF4DcA3dAb1e2A";
  const contractABI = abi.abi;

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

  const wave = async () => {
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

        const waveTxn = await wavePortalContract.wave();
        console.log("Mining...", waveTxn.hash);

        await waveTxn.wait();
        console.log("Mined -- ", waveTxn.hash);

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
    <Container>
      <Box sx={{ m: { md: 10, sm: 6, xs: 5 } }} />
      <Typography variant="h2" align="center">
        👋 Hey there!
      </Typography>
      <Typography variant="h6" align="center">
        I&apos;m Ezyh, &#38; I&apos;ve just deployed my 1st Etherium Smart
        Contract onto the BlockChain! Exciting!
      </Typography>

      {!currentAccount ? (
        <Button variant="contained" color="secondary" onClick={connectWallet}>
          Connect Wallet
        </Button>
      ) : (
        <Button variant="contained" color="secondary" onClick={wave}>
          Wave at me
        </Button>
      )}
    </Container>
  );
}

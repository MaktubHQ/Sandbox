import React, { useEffect, useState } from 'react';
import FirstTab from '../dejobs/firsttab';
import { useWallet } from '@solana/wallet-adapter-react';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';


const ConnectWallet = () => {
  // State
  const [walletAddress, setWalletAddress] = useState(null);
  const [showProfile, setShowProfile] = useState(false)
    const handleHideProfile = () => setShowProfile(false)
    const handleShowProfile = () => setShowProfile(true)

  const { connect, publicKey } = useWallet()



    const triggerProfile = {
        onClick: (e, row) => {
          applysetModalInfo(row)
          applytoggleTrueFalse()
        }
      }

  // Actions
  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window;

      if (solana) {
        if (solana.isPhantom) {
          console.log('Phantom wallet found!');
          const response = await solana.connect({ onlyIfTrusted: true });
          handleShowProfile()
          console.log(
            'Connected with Public Key:',
            response.publicKey.toString()
          );

          /*
           * Set the user's publicKey in state to be used later!
           */
          setWalletAddress(response.publicKey.toString());
        }
      } else {
        alert('Solana object not found! Get a Phantom Wallet 👻');
      }
    } catch (error) {
      console.error(error);
    }
  };

  // const connectWallet = async () => {
  //   const { solana } = window;
  
  //   if (solana) {
  //     const response = await solana.connect();
  //     console.log('Connected with Public Key:', response.publicKey.toString());
  //     setWalletAddress(response.publicKey.toString());
  //   }
  //   return walletAddress
  // };

  const ConnectWallet = () => (
    <><WalletMultiButton /></>

  );



  

  // UseEffects
  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected();
    };
    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, []);

  return (
    <div className="App">
      
			{/* This was solely added for some styling fanciness */}
			<div>
        <div className="header-container">
          {/* Add the condition to show this only if we don't have a wallet address */}
          <ConnectWallet/>
          {/* {<FirstTab connectWallet={walletAddress}/>} */}
          {console.log(walletAddress)}
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
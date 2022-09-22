import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { clusterApiUrl, Transaction, SystemProgram, Keypair, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';
import React, { FC, useCallback } from 'react';
import { useState } from 'react';
import ConnectWallet from '../accessories/connectwallet';



const TipAuthor: FC = () => {
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();
    let [lamports, setLamports] = useState(.1);
    let thelamports = 0;
    let userInput;

    const onClick = useCallback(async () => {
        if (!publicKey) throw new WalletNotConnectedError();

        // 890880 lamports as of 2022-09-01
        //const lamports = (await connection.getMinimumBalanceForRentExemption(0));
        
        lamports = Number(lamports * 1000000000);
        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: publicKey,
                //to AuthorWallet
                toPubkey: new PublicKey("Dz3spy7Me5Et3vZMTq7x29fVxGbLts6PdKirLEabeMm1"),
                lamports: lamports,
            })
        );

        const {
            context: { slot: minContextSlot },
            value: { blockhash, lastValidBlockHeight }
        } = await connection.getLatestBlockhashAndContext();

        const signature = await sendTransaction(transaction, connection, { minContextSlot });

        await connection.confirmTransaction({ blockhash, lastValidBlockHeight, signature });
    }, [publicKey, lamports, connection, sendTransaction]);

    function setTheLamports(e: any) {
    console.log(Number(e.target.value));
    setLamports(Number(e.target.value));
    // lamports = e.target.value;
    // userInput = e.target.value;
    thelamports = lamports;
    console.log(thelamports)
    console.log(lamports)
}


  

    return (
<div>

    <div className='TipMaktub'>
        <br></br>
        <h5>Drop a tip for Maktub Labs to support continued development :)</h5>
        <br></br>
        <ConnectWallet></ConnectWallet>
        <br></br>
    <input value={lamports} type="number" onChange={(e) => setTheLamports(e)}></input>
        <button className="button-tip" onClick={onClick} disabled={!publicKey}>
            Tip SOL
        </button>


        <h5>Or send to </h5>
        <h6>2hBWBzunMehc5nWKeY17sMqRLGosKaoNHfsBXtrdmJmt</h6>
    </div>
        
</div>
    )

};
export default TipAuthor;
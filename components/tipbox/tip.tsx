import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { clusterApiUrl, Transaction, SystemProgram, Keypair, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';
import React, { FC, useCallback } from 'react';
import { useState } from 'react';
import ConnectWallet from '../accessories/connectwallet';
import useSWR, { Key, Fetcher } from 'swr'
import axios from 'axios'




const fetcher = url => axios.get(url).then(res => res.data)
//const fetcher = (...args) => fetch(...args).then((res) => res.json())


const TipAuthor: FC = () => {
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();
    const { data, error } = useSWR('/api/fundraise', fetcher)

    let [lamports, setLamports] = useState(.1);
    let thelamports = 0;


    const onClick = useCallback(async () => {
        {console.log(data)}
        if (!publicKey) throw new WalletNotConnectedError();

        // 890880 lamports as of 2022-09-01
        //const lamports = (await connection.getMinimumBalanceForRentExemption(0));
        
        lamports = Number(lamports * 1000000000);
        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: publicKey,
                //to AuthorWallet
                toPubkey: new PublicKey(data.data[0].ownerWallet),
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
    lamports = Number(e.target.value);
    // userInput = e.target.value;
    thelamports = lamports;
    console.log(thelamports)
    console.log(lamports)
}


if (error) return <div>Failed to load</div>
if (!data) return <div>Magic is loading...</div>

    return (

<div>

    <div className='TipMaktub'>
        <span><ConnectWallet></ConnectWallet><input value={lamports} type="number" onChange={(e) => setTheLamports(e)}></input>
        <button className="button-tip" onClick={onClick} disabled={!publicKey}>
            Tip SOL
        </button></span>
   
    </div>
        
</div>
    )

};
export default TipAuthor;
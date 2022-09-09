const TWITTER_HANDLE = 'maktublabs';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;
import Image from "next/image";
import styles from '../../styles/Home.module.css'
import maktub from '../../public/maktub.png'
import Link from "next/link";



const Footer = () => {

    return (

<footer className={styles.footer}>
<a
  href="https://twitter.com/maktublabs"
  target="_blank"
  rel="noopener noreferrer"
>
  Copyright 2022 © Made with ❤️ by Maktub Labs{' '}
  {/* <span className={styles.logo}>
  </span> */}
</a>
</footer>
        
    );
};

export default Footer;
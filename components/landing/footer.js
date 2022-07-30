const TWITTER_HANDLE = 'maktublabs';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;
import Image from "next/image";
import styles from '../../styles/Home.module.css'
import maktub from '../../public/maktub.png'



const Footer = () => {

    return (

<footer className={styles.footer}>
<a
  href="https://twitter.com/maktublabs"
  target="_blank"
  rel="noopener noreferrer"
>
  Powered by{' '}
  <span className={styles.logo}>
    <Image src={maktub} alt="Maktub" width={75} height={75} />
  </span>
</a>
</footer>
        
    );
};

export default Footer;
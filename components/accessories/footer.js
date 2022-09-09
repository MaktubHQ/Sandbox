const TWITTER_HANDLE = 'maktublabs';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;
import styles from '../../styles/Home.module.css'



const Footer = () => {

    return (

<footer className={styles.footer}>
<a
  href={TWITTER_LINK}
  target="_blank"
  rel="noopener noreferrer"
>
  Copyright 2022 © Made with ❤️ by Maktub Labs{' '}
</a>
</footer>
        
    );
};

export default Footer;
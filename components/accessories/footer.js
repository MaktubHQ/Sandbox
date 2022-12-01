const TWITTER_HANDLE = 'maktublabs';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;
const DISCORD_LINK = 'https://discord.gg/uTrhxFy49M'
import styles from '../../styles/Home.module.css'



const Footer = () => {

    return (

<footer className={styles.footer}>
<a
  href={DISCORD_LINK}
  target="_blank"
  rel="noopener noreferrer"
>
  Join our Discord © Made with ❤️ by Maktub Labs{' '}
</a>
</footer>
        
    );
};

export default Footer;
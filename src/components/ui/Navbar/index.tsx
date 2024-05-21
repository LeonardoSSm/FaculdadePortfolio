import Link from 'next/link';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li><Link href="/"><a>Inicio</a></Link></li>
        <li><Link href="/about"><a>Sobre</a></Link></li>
        <li><Link href="/skills"><a>Habilidades</a></Link></li>
        <li><Link href="/contact"><a>Contacts</a></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

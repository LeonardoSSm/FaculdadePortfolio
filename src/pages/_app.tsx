import '../../styles/globals.scss';
import Navbar from '../components/ui/Navbar';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div style={{ position: 'relative' }}>
      <Navbar />
      <Component {...pageProps} />
      <style jsx global>{`
        nav {
          position: absolute;
          width: 100%;
          z-index: 100;
        }
      `}</style>
    </div>
  );
}


export default MyApp;

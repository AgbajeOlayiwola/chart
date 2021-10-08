import '../styles/globals.css'
import Index from '../components/chart/index';

function MyApp({ Component, pageProps }) {
  return (
  <div>
    <Component {...pageProps} />
    <Index/>
  </div>)
}

export default MyApp

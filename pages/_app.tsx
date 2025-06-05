// This file customizes the root App component in Next.js.
// It wraps all pages and is the only place where global CSS should be imported.
// You can use this file to add providers or global layout if needed.
import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

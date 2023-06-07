import '@/styles/globals.scss'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {

  return (
    <SessionProvider session={session}>
      <AnimatePresence mode="wait" initial={false}>
        <Component {...pageProps} />
      </AnimatePresence>
    </SessionProvider>
  )
}

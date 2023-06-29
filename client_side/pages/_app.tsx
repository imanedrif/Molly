import "@/styles/globals.scss";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Store from "@/redux/Store";
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps }: AppProps) {
    return (
        <SessionProvider session={pageProps.session}
            // basePath="cool-app"
            // Re-fetch session every 5 minutes
            refetchInterval={5 * 60 * 60 * 60}
            // Disable Re-fetches session when window is focused
            refetchOnWindowFocus={false}
        >
            <Provider store={Store}>
                <AnimatePresence mode="wait" initial={false}>
                    <Component {...pageProps} />
                </AnimatePresence>
            </Provider>
        </SessionProvider>
    );
}

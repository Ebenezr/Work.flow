import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import "rsuite/dist/rsuite.min.css";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import Layout from "../components/Layout/Layout";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);

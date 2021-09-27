import "antd/dist/antd.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { initializeApp } from "firebase/app";

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyC5uPKSGi71y_08KWcofZ-DsXo4DdojtZ8",
  authDomain: "codecamp-1874a.firebaseapp.com",
  projectId: "codecamp-1874a",
  storageBucket: "codecamp-1874a.appspot.com",
  messagingSenderId: "440427753552",
  appId: "1:440427753552:web:07db13a43421b7dffaa155",
  measurementId: "G-Y9EJ7E17KE",
});

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "http://backend03.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <>
      <Global styles={globalStyles} />
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </>
  );
}

export default MyApp;

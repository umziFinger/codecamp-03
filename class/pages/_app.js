import "antd/dist/antd.css";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { initializeApp } from "firebase/app";
import { createUploadLink } from "apollo-upload-client";

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
  const uploadLink = createUploadLink({
    uri: "http://backend03.codebootcamp.co.kr/graphql",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]), // 배열형식으로 원하는 요소만 추가하여 사용
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

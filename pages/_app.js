import { Chakra } from "../src/Chakra";

function MyApp({ Component, pageProps }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Component {...pageProps} />
    </Chakra>
  );
}

export default MyApp;

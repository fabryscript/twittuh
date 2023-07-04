import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home";

function Providing() {
  return (
    <>
      <ChakraProvider>
        <Home />
      </ChakraProvider>
    </>
  )
}

export default Providing;

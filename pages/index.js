import { Center, Text, HStack } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/button";

const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Center>
      <HStack>
        <Text>Darkmode Button</Text>
        <IconButton mt={4} aria-label="Toggle Mode" onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </IconButton>
      </HStack>
    </Center>
  );
};

export default Home;

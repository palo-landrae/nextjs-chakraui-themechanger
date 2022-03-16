import { Center, Text, HStack, VStack, Box } from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/button";

const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("red.500", "red.200");
  const color = useColorModeValue("white", "gray.800");

  return (
    <Center h="full">
      <VStack>
        <HStack mt={4}>
          <Text>Darkmode Button</Text>
          <IconButton mt={4} aria-label="Toggle Mode" onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </IconButton>
        </HStack>
        <Box w={72} h={72} mt={4} bg={bg} color={color} borderRadius={10}>
          <Center h="full">This box will change color</Center>
        </Box>
      </VStack>
    </Center>
  );
};

export default Home;

export { getServerSideProps } from "../src/Chakra";

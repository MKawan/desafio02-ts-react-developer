import {Box, Flex,} from "@chakra-ui/react";
import { GetLogin } from "../getUserLogin";


export default function Login() {

  return (
    <Flex bg="#cccccc" align="center" justify="center" h="100vh">
      <Box bgGradient='linear(to-t, #131313, #212121)' p='7rem 2.5rem' rounded="md" borderRadius={25}
        boxShadow="dark-lg"
        >
          <GetLogin/>
      </Box>
    </Flex>
  );
}
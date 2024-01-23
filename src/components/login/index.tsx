import { useFormik } from "formik";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack
} from "@chakra-ui/react";
import {WelcomeLogin} from "../../hooks/welcomeLogin";

export default function Login() {
  // const formik = useFormik({
  //   initialValues: {
  //     email: "",
  //     password: "",
  //     rememberMe: false
  //   }
  //    onSubmit:  (values) => {
  //    console.log(JSON.stringify(values, null, 2));
  //    }
  // });
  return (
    <Flex bg="#cccccc" align="center" justify="center" h="100vh">
      <Box bgGradient='linear(to-t, #131313, #212121)' p='7rem 2.5rem' rounded="md" borderRadius={25}
        boxShadow="dark-lg"
        >
        <form 
          // onSubmit={formik.handleSubmit}
        >
          <VStack spacing={4} align="flex-start">
            <FormControl>
              <FormLabel htmlFor="email" color="#fff" fontSize={32}>Login</FormLabel>
              <FormLabel htmlFor="email" color="#fff">Email Address</FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                variant="filled"
                // onChange={formik.handleChange}
                // value={formik.values.email}
                placeholder="digite seu email"
                bg="#cccccc"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password" color="#fff">Password</FormLabel>
              <Input
                id="password"
                name="password"
                type="password"
                variant="filled"
                // onChange={formik.handleChange}
                // value={formik.values.password}
                placeholder="password"
                bg="#cccccc"
                color="#fff"
              />
            </FormControl>
            <Checkbox
              id="rememberMe"
              name="rememberMe"
              // onChange={formik.handleChange}
              // isChecked={formik.values.rememberMe}
              colorScheme="#843471"
              color="#843471"
            >
              Remember me?
            </Checkbox>
            <Button onClick={WelcomeLogin} type="submit" bg="#843471" width="full" >
              Login
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
}
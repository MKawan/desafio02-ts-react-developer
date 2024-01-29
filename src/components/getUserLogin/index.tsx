import { useFormik } from "formik";
import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  VStack
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../appContext";
import { changeLocalStorage } from "../../services/localStore";
import { login } from "../../services/autenticationLogin";

export const GetLogin = ( ) =>{

  
const formik = useFormik({
    initialValues: {
        email: "",
        password: "",
        rememberMe: false
    },
        onSubmit:  (values: any) => {
          JSON.stringify(values, null, 2)
        }
    });

    const { setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const validateUser = async (email: string, password: string) => {
        const loggedIn = await login(email, password)

        if(!loggedIn){
            return alert('Email ou senha inválido')
        }

        setIsLoggedIn(true)
        changeLocalStorage({ login: formik.values.rememberMe })
        navigate('/conta/1')
    }
return(
    <>
    <form   onSubmit={formik.handleSubmit}>
    <VStack spacing={4} align="flex-start">
      <FormControl>
        <FormLabel htmlFor="email" color="#fff" fontSize={32}>Login</FormLabel>
        <FormLabel htmlFor="email" color="#fff">Email Address</FormLabel>
        <Input
          id="email"
          name="email"
          type="email"
          variant="filled"
          onChange={formik.handleChange}
          value={formik.values.email}
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
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="password"
          bg="#cccccc"
          color="#fff"
        />
      </FormControl>
      <Checkbox
        id="rememberMe"
        name="rememberMe"
        onChange={formik.handleChange}
        isChecked={formik.values.rememberMe}
        colorScheme="#843471"
        color="#843471"
      >
        Remember me?
      </Checkbox>
       <Button type="submit" onClick={() => validateUser(formik.values.email, formik.values.password)} bg="#843471" width="full" > 
        Login
      </Button>
    </VStack>
    </form>    
    </>
    
  );
}

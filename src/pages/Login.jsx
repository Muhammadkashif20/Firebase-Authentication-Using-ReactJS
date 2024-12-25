import React, { useState } from "react";
import { Form, Input, Button } from "@nextui-org/react";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Loading, setIsloading] = useState(false);
  const navigate = useNavigate();
  const handleLoginWithGoogleAuth = () => {
    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log("user=>", user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        console.log("Errors=>", errorCode, errorMessage);
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  const handleLogin = async () => {
   try {
    setIsloading(true)
    await signInWithEmailAndPassword(auth,email,password).then(()=>{
      navigate("/")
      setIsloading(false)
    })
   } catch (error) {
    setIsloading(false)
   }
  };
  return (
    <div>
      <h1 className="font-bold text-center text-2xl my-5">Login </h1>
      <Form
        validationBehavior="native"
        className="my-5 flex flex-col items-center"
      >
        <Input
          isRequired
          label="Email"
          labelPlacement="outside"
          name="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your Email"
          type="text"
          size="lg"
          className="w-1/3 my-5 sm:full"
        />
        <Input
          isRequired
          label="Password"
          labelPlacement="outside"
          name="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your Password"
          type="text"
          size="lg"
          className="w-1/3 my-5 sm:full"
        />
        <Button
          onClick={handleLogin}
          isLoading={Loading}
          className="w-1/3"
          type="submit"
          variant="bordered"
        >
          Login
        </Button>
        <h1 className="font-bold text-center ">OR</h1>
      </Form>
      <Button
        onClick={handleLoginWithGoogleAuth}
        className="w-1/3"
        type="submit"
        variant="bordered"
      >
        Login with Google
      </Button>
    </div>
  );
}

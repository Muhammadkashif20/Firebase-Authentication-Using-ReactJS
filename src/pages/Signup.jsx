import { useState } from "react";
import React from "react";
import {Form, Input, Button} from "@nextui-org/react";
import { Link } from "react-router";
export default function Signup() {
    const [username,setUsername]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    return (
      <div>
          <h1 className="font-bold text-center text-2xl my-5">SignUp </h1>
      <Form validationBehavior="native" className="my-5 flex flex-col items-center">
        <Input
          isRequired
          label="Username"
          labelPlacement="outside"
        name="Username"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder="Enter your Username"
        type="text"
        size="lg"
        className="w-1/3 my-5 sm:full"
        />
         <Input
        isRequired
        label="Email"
        labelPlacement="outside"
        name="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
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
        onChange={(e)=>setPassword(e.target.value)}
        placeholder="Enter your Password"
        type="text"
        size="lg"
        className="w-1/3 my-5 sm:full"
        />
      <Button className="w-1/3" type="submit" variant="bordered">
      SignUp
      </Button>
      <h1 className="font-bold text-center mt-2">OR</h1>
    </Form>
    <Link to={'/Login'} className="flex justify-center">
      <Button className=" w-1/3" type="submit" variant="bordered">
              Login
            </Button>
      </Link>
        </div>
  );
}
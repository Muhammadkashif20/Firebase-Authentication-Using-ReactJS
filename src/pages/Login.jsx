import React from "react";
import {Form, Input, Button} from "@nextui-org/react";
import { div, h1 } from "framer-motion/client";
export default function Login() {
  return (
    <div>
        <h1 className="font-bold text-center text-2xl my-3">Login </h1>
    <Form validationBehavior="native" className="my-3 flex flex-col items-center">
      <Input
        isRequired
        label="Email"
        labelPlacement="outside"
        name="Email"
        placeholder="Enter your Email"
        type="text"
        size="lg"
        className="w-1/2 my-3 sm:full"
      />
       <Input
        isRequired
        label="Password"
        labelPlacement="outside"
        name="Password"
        placeholder="Enter your Password"
        type="text"
        size="lg"
        className="w-1/2 my-3 sm:full"
        />
      <Button className="w-1/2" type="submit" variant="bordered">
        Login
      </Button>
    </Form>
        </div>
  );
}
import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import AuthNavbar from "../../components/common/AuthNavbar";

import validator from "validator";
import { toast } from "sonner";
import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Input,
  FormControl,
  FormLabel,
  Box,
  Divider,
  AbsoluteCenter,
} from "@chakra-ui/react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (!validator.isEmail(email)) {
      toast.error("Please enter a valid E-mail address.");
      return;
    }
    if (!validator.isStrongPassword(password)) {
      toast.error("Password should contain: Uppercase letters, Numbers & Symbols");
      return;
    }

    await signup(email, password);
  };

  return (
    <div>
      <AuthNavbar />
      <div className="flex justify-center">
        <form onSubmit={handleSubmit}>
          <h1 className="mb-5 text-center text-7xl font-black leading-none text-gray-900 select-none">
            SaberDesk<span className="text-indigo-600">.</span>
          </h1>
          <Card className="w-96">
            <CardBody>
              <p className="text-center text-gray-500 mb-5">
                Get an overall better ticketing experience with us
              </p>
              <FormControl className="mb-2">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </FormControl>

              <FormControl className="mb-5">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </FormControl>
              {/* #4F46E5 */}
              <Button
                colorScheme="purple"
                className="w-full"
                disabled={isLoading}
                type="submit"
              >
                Sign-up
              </Button>
              {error && toast.error(`Signup failed: ${error.message}`)}
            </CardBody>

            <Box position="relative" padding="3">
              <Divider />
              <AbsoluteCenter bg="white" px="4">
                Or
              </AbsoluteCenter>
            </Box>

            <CardFooter className="flex justify-center">
              <a href="/login">
                <Button colorScheme="gray">Log-In</Button>
              </a>
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  );
};

export default Signup;

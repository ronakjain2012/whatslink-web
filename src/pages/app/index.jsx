import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import { useState } from "react";

export function AppIndex() {

  const [mobile, setMobile] = useState('')
  const [message, setMessage] = useState('')

  return (
    <>
      <div className="absolute inset-0 z-0 h-full w-full bg-bg-100" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4 bg-light-400">
          <CardHeader
            variant="gradient"
            className="mb-4 grid h-32 place-items-center place-contant-center bg-bg-600"
          >
            <Typography variant="h3" className="text-light-400">
              WhatsApp Tools
            </Typography>
            <Typography variant="h6" className="text-light-400 w-10/12 ">
              No More Saving the contact just to message them on WhatsApp
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input type="number" label="Mobile Number" size="lg" onChange={(e) => setMobile(e.target.value)} />
            <Textarea type="text" label="Message (Hi Dear, I have offer for you..." size="lg" onChange={(e) => setMessage(e.target.value)} />
          </CardBody>
          <CardFooter className="pt-0">
            <Button fullWidth className="text-light-400 bg-primary-700 shadow-outline hover:shadow-dark-400/50">
              Send Message
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default AppIndex;

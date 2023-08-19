import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import countries from "@/data/countries";
import { getPositionData } from "@/services";
import Select from 'react-select'
import { getWhatsappUrl, removeSpecialCharacters } from "@/utils";

export function AppIndex() {
  const countriesOption = countries.map(e => {
    return {
      label: e.name,
      value: e.iso3
    }
  })
  const [mobile, setMobile] = useState('')
  const [message, setMessage] = useState('')
  const [countryCode, setCountryCode] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const response = await getPositionData();
      setCountryCode(response.country_code_iso3)
    }
    fetchData().then()
  }, [])

  const defaultSelected = countriesOption.find(e => e.value === countryCode)

  const onSubmit = async (e) => {
    e.preventDefault();
    const phoneCode = countries.find((c) => c.iso3 === countryCode)?.phone_code;
    const fullNumber = `${phoneCode}${mobile}`;
    const url = getWhatsappUrl(removeSpecialCharacters(fullNumber), message);
    window.open(url, "_blank");
  };


  return (
    <>
      <div className="absolute inset-0 z-0 h-full w-full bg-bg-100" />
      <div className="container mx-auto p-4">
        <form onSubmit={onSubmit}>
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
              <Select options={countriesOption} value={defaultSelected} isSearchable onChange={(newValue) => setCountryCode(newValue.value)} className="w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 border-primary-500" />
              <Input type="number" label="Mobile Number" size="lg" onChange={(e) => setMobile(e.target.value)} />
              <Textarea type="text" label="Message (Hi Dear, I have offer for you..." size="lg" onChange={(e) => setMessage(e.target.value)} />
            </CardBody>
            <CardFooter className="pt-0">
              <Button fullWidth className="text-light-400 bg-primary-700 shadow-outline hover:shadow-dark-400/50" type="submit">
                Send Message
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </>
  );
}

export default AppIndex;

/* eslint-disable react/prop-types */
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";
import Map from "./map";

function Icon({ id, open }) {
  const isOpen = id === open;
  return isOpen ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-5 w-5 transition-transform"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-5 w-5 transition-transform"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
}

const FaqPage = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="flex flex-col md:flex-row w-full max-w-6xl">
        <div className="w-full md:w-1/2 border-b md:border-b-0 md:border-r border-gray-300 mb-6 md:mb-0">
          <Map />
        </div>

        <div className="w-full md:w-1/2 md:pl-6">
          <h1 className="text-2xl font-bold text-center mb-6">
            GENERAL FAQ&apos;S
          </h1>
          <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(1)}>
              How do I get my car back?
            </AccordionHeader>
            <AccordionBody>
              If your car was towed at the request of an agency, you must first
              be sure that you don’t need the agency’s permission to pick up the
              car.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(2)}>
              How long do I have to get my stuff?
            </AccordionHeader>
            <AccordionBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem facere doloremque ut dolores laudantium nihil at,
              repudiandae est numquam fuga tempora totam sequi quidem saepe
              officiis sint beatae, magni fugit.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(3)}>
              Why did you tow my car?
            </AccordionHeader>
            <AccordionBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem facere doloremque ut dolores laudantium nihil at,
              repudiandae est numquam fuga tempora totam sequi quidem saepe
              officiis sint beatae, magni fugit.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(4)}>
              What is a courtesy tow / tow by the hour?
            </AccordionHeader>
            <AccordionBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem facere doloremque ut dolores laudantium nihil at,
              repudiandae est numquam fuga tempora totam sequi quidem saepe
              officiis sint beatae, magni fugit.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(5)}>
              Why is there a lien on my vehicle?
            </AccordionHeader>
            <AccordionBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem facere doloremque ut dolores laudantium nihil at,
              repudiandae est numquam fuga tempora totam sequi quidem saepe
              officiis sint beatae, magni fugit.
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;

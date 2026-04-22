import React from "react";
import Container from "./Container";
import { FiTruck } from "react-icons/fi";
import { GiCardExchange } from "react-icons/gi";
import { SlBadge } from "react-icons/sl";

const FooterTop = () => {
  const incentives = [
    {
      name: "Free shipping",
      icon: FiTruck,
      description:
        "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
    },
    {
      name: "10-year warranty",
      icon: SlBadge,
      description:
        "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
    },
    {
      name: "Exchanges",
      icon: GiCardExchange,
      description:
        "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
    },
  ];

  return (
    <div className="py-0">
      <Container className="rounded-2xl bg-[#f6f6f6] px-6 py-16 sm:p-16">
        <div className="mx-auto max-w-xl lg:max-w-none ">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-grey-900">
              We build our business on customer satisfaction.
            </h2>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-8 sm:max-w-none lg:grid-cols-3">
          {incentives.map((incentive) => {
            return (
              <div
                key={incentive.name}
                className="text-center sm:flex sm:text-left lg:block lg:text-center"
              >
                <div className="sm:flex-shrink-0">
                  <div className="flex-root">
                    <incentive.icon className="mx-auto h-16 w-16" />
                  </div>
                </div>
                <div className="mt-3 sm:ml-6 lg:ml-0">
                  <h2 className="text-base text-gray-900 font-medium">
                    {incentive.name}
                  </h2>
                  <p className="mt-2 text-sm text-gray-500 md:px-0 lg:px-10">
                    {incentive.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default FooterTop;

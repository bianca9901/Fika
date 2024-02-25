import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type OrderFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function OrderFormEmail({
  message,
  senderEmail,
}: OrderFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>A new order has been received</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-gray-800">
          <Container className="mx-auto max-w-2xl">
            <Section className="bg-white my-10 p-6 rounded-lg shadow-lg">
              <Heading className="text-xl font-bold mb-4 text-sky-500">
                You have received a new order! Here are the details:
              </Heading>
              <Text className="mb-4">{message}</Text>
              <Hr className="border-t border-gray-300 mb-4" />
              <Text className="text-sm">
                The senders email address: {senderEmail}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

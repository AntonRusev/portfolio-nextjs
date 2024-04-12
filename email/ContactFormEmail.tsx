import React from 'react';
import {
    Html,
    Body,
    Head,
    Hr,
    Container,
    Preview,
    Section,
    Text,
} from '@react-email/components';

import { Tailwind } from '@react-email/tailwind';

import { ContactFormEmailProps } from '@/lib/types';

// The visual styling of the email, as seen by the recipient.
// (What you see in the inbox when you open the email).
export default function ContactFormEmail({ name, email, message }: ContactFormEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>New message from {name} through the contact form on your portfolio site.</Preview>
            {/* Section that can be styled with Tailwind */}
            <Tailwind>
                <Body className='bg-gray-200 text-gray-700'>
                    <Container>
                        <Section className='bg-white p-8 rounded-sm border'>
                            <Text className=''>You received a new message from {name}({email}).</Text>
                            <Hr /> 
                            <Text>{message}</Text>
                            <Hr />
                            <Text className='text-black'>By {name}</Text>
                            <Text className='text-black'>The sender's email is: {email}</Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html >
    );
};
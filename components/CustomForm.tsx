import React, { useState } from 'react';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { RiMailSendLine } from "react-icons/ri";
// Actions
import { sendEmail } from '@/actions/sendEmail';
// Shadcn/ui components
import { useToast } from "@/components/ui/use-toast"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
// Utils
import { formSchema } from '@/lib/utils/formSchema';
import { getErrorMessage } from '@/lib/utils/getErrorMessage';

export default function CustomForm() {
    const [pending, setPending] = useState(false);
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setPending(true);

        try {
            const { data } = await sendEmail(values);

            if (data && data.error !== null) {
                throw new Error(data.error.message); // If there is an error value in the data object, throw new Error and deal with it in the catch block
            } else if (data && data.error === null) {
                // Upon successful form submission
                toast({
                    variant: "default",
                    title: "Success!",
                    description: "Your message was sent successfully!",
                });
            };
        } catch (error) {
            // Upon form submission error
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: getErrorMessage(error),
            });
        } finally {
            // Clearing the form input fields and reseting the pending state
            setPending(false);
            form.reset();
        };
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                {/* Name */}
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem className='flex flex-col items-start'>
                            <FormControl>
                                <Input
                                    placeholder="Your name"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Email */}
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className='flex flex-col items-start'>
                            <FormControl>
                                <Input
                                    placeholder="Your email"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Message */}
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem className='flex flex-col items-start'>
                            <FormControl>
                                <Textarea
                                    className='resize-none'
                                    rows={4}
                                    placeholder="Your message"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Submit button */}
                <Button
                    type="submit"
                    className='w-full mx-auto'
                    disabled={pending}
                >
                    <div className='flex flex-row items-center gap-4 tracking-wide font-bold'>
                        {pending
                            ?
                            <>
                                {/* Spinner */}
                                <div className='h-5 w-5 rounded-full border-b-2 border-white animate-spin dark:border-gray-800'></div>
                                Sending...
                            </>
                            :
                            <>
                                <RiMailSendLine className='w-[1.3rem] h-[1.3rem]' />
                                Send
                            </>
                        }
                    </div>
                </Button>
            </form>
        </Form >
    );
};
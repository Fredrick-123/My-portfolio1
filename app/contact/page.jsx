/* eslint-disable react/no-unescaped-entities */
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const info = [
  {
    icon: <FaLinkedinIn />,
    title: "Linkedin",
    description: "Fredrick Nicholas",
  },

  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "fredricknicholas8@gmail.com",
  },
];

import { motion } from "framer-motion";

import React, { useRef } from "react";
import emailjs, { send } from "@emailjs/browser";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast"
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const Contact = () => {
  const { toast } = useToast();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = "service_i58e23a";
    const templateId = "template_77f8vcd";
    const publicKey = "gn8rBUUhWww7l128U";

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        (response) => {
          console.log("Your email was sent successfully!", response);
        },
        (error) => {
          console.log("Failed to send Your email", error.text);
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        {/* form */}
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={sendEmail}
              ref={form}
              action=""
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>

              {/* input */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="name"
                  name="from_name1"
                  placeholder="Firstname"
                  required
                />
                <Input
                  type="name"
                  name="from_name2"
                  placeholder="Lastname"
                  required
                />
                <Input
                  type="email"
                  name="from_email"
                  placeholder="Email Address"
                  required
                />
                <Input
                  type="phone"
                  name="from_number"
                  placeholder="Phone Number"
                  required
                />
              </div>

              {/* select */}

              <Select name="from_select">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="Maintenance and Support">
                      Maintenance and Support
                    </SelectItem>
                    <SelectItem value="E-commerce Development">
                      E-commerce Development
                    </SelectItem>
                    <SelectItem value="Consulting Services">
                      Consulting Services
                    </SelectItem>
                    <SelectItem value="UI/UX Design"> UI/UX Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                name="message"
                placeholder="Type your message here"
                className="h-[200px] "
              />

              {/* btn */}
              <Button
                variant="outline"
                onClick={() => {
                  toast({
                    variant: "success",
                    title: "Success",
                    description: "Your message was sent", 
                    action: <ToastAction altText="success"><IoCheckmarkCircleSharp size={50} className="" /></ToastAction>,
                  })
                }}
                type="submit"
                value={send}
                size="md"
                className="max-w-40"
              >
                Send message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="xl:text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";

import { toast } from "react-toastify";

type Props = {};

export default function ContactForm({}: Props) {
  const [name, setName] = useState<string | any>();
  const [email, setEmail] = useState<string | any>();
  const [message, setMessage] = useState<string | any>();

  const handleChangeName = (e: any) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const handleChangeMessage = (e: any) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = (e: any) => {
    e.preventDefault();
    console.log(name, email, message);
    toast.success("Message send ✅", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <form className="flex w-[400px] flex-col items-center justify-center max-md:w-full sm:w-full">
      <Input
        className="mb-6"
        placeholder="Name"
        onChange={handleChangeName}
        value={name}
      />
      <Input
        className="mb-6"
        placeholder="Email"
        onChange={handleChangeEmail}
        value={email}
      />
      <Textarea
        className="mb-6"
        placeholder="Type your message here."
        onChange={handleChangeMessage}
        value={message}
      />
      <Button onClick={handleSendMessage}>Send Message</Button>
    </form>
  );
}

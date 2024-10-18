"use client";
import { supabase } from "@/app/lib/supabase";
import { FormEvent, useState } from "react";
import "@radix-ui/themes/styles.css";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSabmit = async (e: FormEvent) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      console.error(error.message);
    } else {
      console.log("user signed up:", data);
    }
  };

  return (
    <form onSubmit={onSabmit}>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button type="submit">login</button>
    </form>
  );
}

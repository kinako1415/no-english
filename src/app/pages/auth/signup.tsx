"use client";
import { supabase } from "@/app/lib/supabase";
import { FormEvent, useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    if (error) {
      console.error(error.message);
    } else {
      console.log("User signed up:", data);
    }
  };

  return (
    <form onSubmit={handleSignUp}>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">signin</button>
    </form>
  );
}

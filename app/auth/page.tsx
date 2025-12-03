"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [msg, setMsg] = useState("");

  async function handleSubmit() {
    setMsg("");

    if (mode === "signup") {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) return setMsg(error.message);
      setMsg("注册成功，请查收验证邮件！");
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) return setMsg(error.message);
      setMsg("登录成功！");
    }
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>{mode === "login" ? "登录" : "注册"}</h1>

      <input
        placeholder="邮箱"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />

      <input
        placeholder="密码"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />

      <button onClick={handleSubmit}>
        {mode === "login" ? "登录" : "注册"}
      </button>

      <p style={{ color: "red" }}>{msg}</p>

      <button onClick={() => setMode(mode === "login" ? "signup" : "login")}>
        切换到 {mode === "login" ? "注册" : "登录"}
      </button>
    </div>
  );
}

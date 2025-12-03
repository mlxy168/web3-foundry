"use client";

import { useAuth } from "@/app/components/AuthProvider";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CoursesPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth");
    }
  }, [loading, user, router]);

  if (loading) return <p>加载中...</p>;
  if (!user) return null; // 跳转中

  return (
    <main className="min-h-screen bg-black text-white px-8 py-20">
      <h1 className="text-4xl font-bold mb-10">课程总览</h1>
      {/* 已登录用户课程内容 */}
    </main>
  );
}

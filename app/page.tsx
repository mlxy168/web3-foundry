// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-8 py-20">
      {/* 第一屏标题 */}
      <h1 className="text-5xl font-bold mb-6 text-center">
        Web3 创业工厂
      </h1>
      <p className="text-gray-400 text-lg max-w-xl mb-10 text-center">
        为非技术背景创业者打造的 Web3 实战平台，
        教你从 0 到上线一个真实项目、发币、融资、搭 DAO。
      </p>

      {/* 首页按钮 */}
      <div className="flex gap-4">
        <Link
          href="/auth"
          className="bg-white text-black px-6 py-3 rounded-lg inline-block font-semibold"
        >
          免费开始
        </Link>
        <Link
          href="/auth"
          className="border border-gray-600 px-6 py-3 rounded-lg inline-block font-semibold"
        >
          查看课程
        </Link>
      </div>

      {/* 可选：底部课程预览 */}
      <section className="mt-20 w-full max-w-5xl">
        <h2 className="text-3xl font-bold mb-6">课程总览</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-gray-800 rounded-xl p-6">
            <h3 className="font-bold text-xl mb-2">Web3 入门</h3>
            <p className="text-gray-400 text-sm mb-4">
              理解区块链、钱包、DApp、DeFi 基础知识
            </p>
          </div>
          <div className="border border-gray-800 rounded-xl p-6">
            <h3 className="font-bold text-xl mb-2">项目实战</h3>
            <p className="text-gray-400 text-sm mb-4">
              学会规划项目、写白皮书、设计 Token
            </p>
          </div>
          <div className="border border-gray-800 rounded-xl p-6">
            <h3 className="font-bold text-xl mb-2">融资与运营</h3>
            <p className="text-gray-400 text-sm mb-4">
              社群增长、市场推广、融资策略
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

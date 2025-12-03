export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-20">
      <h1 className="text-4xl font-bold mb-10">课程总览</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="border border-gray-800 rounded-xl p-6">
          <h2 className="font-bold text-xl mb-2">Web3 入门</h2>
          <p className="text-gray-400 text-sm mb-4">
            理解区块链、钱包、DApp、DeFi 基础知识
          </p>
          <button className="bg-white text-black px-4 py-2 rounded">
            查看课程
          </button>
        </div>

        <div className="border border-gray-800 rounded-xl p-6">
          <h2 className="font-bold text-xl mb-2">项目实战</h2>
          <p className="text-gray-400 text-sm mb-4">
            学会规划项目、写白皮书、设计 Token
          </p>
          <button className="bg-white text-black px-4 py-2 rounded">
            查看课程
          </button>
        </div>

        <div className="border border-gray-800 rounded-xl p-6">
          <h2 className="font-bold text-xl mb-2">融资与运营</h2>
          <p className="text-gray-400 text-sm mb-4">
            社群增长、市场推广、融资策略
          </p>
          <button className="bg-white text-black px-4 py-2 rounded">
            查看课程
          </button>
        </div>
      </div>
    </main>
  );
}

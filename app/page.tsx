export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="text-center py-24 px-4">
        <h1 className="text-5xl font-bold mb-6">Web3 创业工厂</h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          为非技术背景创业者打造的 Web3 实战平台，
          教你从0到上线一个真实项目、发币、融资、搭DAO。
        </p>

        <div className="mt-8 space-x-4">
         <a href="/courses" className="bg-white text-black px-6 py-3 rounded-lg inline-block">
          免费开始
         </a>

         <a href="/courses" className="border border-gray-600 px-6 py-3 rounded-lg inline-block">
          查看课程
         </a>

        </div>
      </section>

      {/* Path */}
      <section className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        <div className="border border-gray-800 rounded-xl p-6">
          <h3 className="font-bold text-xl mb-2">我是创业者</h3>
          <p className="text-gray-400 text-sm">
            学会项目设计、发币、融资、运营你的 Web3 项目
          </p>
        </div>

        <div className="border border-gray-800 rounded-xl p-6">
          <h3 className="font-bold text-xl mb-2">我是开发者</h3>
          <p className="text-gray-400 text-sm">
            掌握 Solidity、智能合约、Web3 架构实战
          </p>
        </div>

        <div className="border border-gray-800 rounded-xl p-6">
          <h3 className="font-bold text-xl mb-2">我是投资者</h3>
          <p className="text-gray-400 text-sm">
            学懂项目逻辑、Token设计、赛道洞察
          </p>
        </div>
      </section>

      {/* Courses */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">核心课程</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["Web3基础", "项目实战", "代币经济学"].map((course) => (
            <div key={course} className="border border-gray-800 rounded-xl p-6">
              <h3 className="font-bold mb-2">{course}</h3>
              <p className="text-sm text-gray-400">
                系统掌握 Web3 项目搭建全过程
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 bg-white text-black">
        <h2 className="text-3xl font-bold mb-4">
          开始你的 Web3 创业之路
        </h2>
        <button className="bg-black text-white px-8 py-4 rounded-lg">
          立即加入
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-600">
        © {new Date().getFullYear()} Web3 创业工厂
      </footer>
    </main>
  );
}

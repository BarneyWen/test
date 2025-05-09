import JobCard from "@/components/job-card"
import { MoveUpRight } from "lucide-react"

export default function Home() {
  const jobs = [
    { title: "前端开发工程师", id: "frontend" },
    { title: "后端开发工程师", id: "backend" },
    { title: "UI/UX设计师", id: "design" },
    { title: "产品经理", id: "product" },
    { title: "数据分析师", id: "data" },
    { title: "市场营销专员", id: "marketing" },
    { title: "人力资源专员", id: "hr" },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* 顶部背景 */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      {/* 头部区域 */}
      <header className="relative pt-16 pb-8 px-4 text-center">
        <div className="inline-block animate-bounce-slow">
          <div className="flex items-center justify-center mb-2">
            <div className="h-2 w-2 rounded-full bg-purple-500 mr-1 animate-pulse" />
            <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse delay-75" />
          </div>
        </div>
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400 mb-2">
          上班族
        </h1>
        <p className="text-gray-300 max-w-md mx-auto">加入我们，开启您的职业新篇章</p>
        <div className="mt-6 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <button className="relative flex items-center gap-2 px-6 py-2 bg-black rounded-lg leading-none">
              <span>查看所有职位</span>
              <MoveUpRight size={16} />
            </button>
          </div>
        </div>
      </header>

      {/* 招聘岗位区域 */}
      <section className="relative px-4 pb-20">
        <h2 className="text-2xl font-semibold mb-8 text-center">当前招聘岗位</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {jobs.map((job) => (
            <JobCard key={job.id} title={job.title} id={job.id} />
          ))}
        </div>
      </section>

      {/* 底部区域 */}
      <footer className="relative py-8 text-center text-gray-400 text-sm">
        <p>© 2025 上班族. 保留所有权利.</p>
      </footer>
    </main>
  )
}

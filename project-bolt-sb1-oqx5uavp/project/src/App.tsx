import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FilterBar from './components/FilterBar';
import JobCard from './components/JobCard';
import Footer from './components/Footer';
import { jobs } from './data/jobs';
import { Job } from './types';

function App() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const filteredJobs = activeFilter === 'all' 
    ? jobs 
    : jobs.filter(job => job.type === activeFilter);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <Hero />
      
      <main className="flex-grow">
        <section className="py-12">
          <div className="container mx-auto px-4 mb-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">热招岗位</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto">
              我们正在寻找充满激情的人才加入我们的团队，一起创造更好的未来。选择适合你的岗位，开启职业新篇章。
            </p>
          </div>
          
          <FilterBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
          
          <div className="container mx-auto px-4 py-8">
            {filteredJobs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredJobs.map((job, index) => (
                  <JobCard key={job.id} job={job} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-500">暂无符合条件的岗位</p>
              </div>
            )}
          </div>
        </section>
        
        <section className="py-12 bg-blue-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">为什么选择上班族</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md transform transition-transform duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">创新文化</h3>
                <p className="text-gray-600">
                  我们鼓励员工大胆尝试，突破常规，创造更多可能性。
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md transform transition-transform duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">成长空间</h3>
                <p className="text-gray-600">
                  提供全方位的培训和发展机会，帮助员工实现个人价值。
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md transform transition-transform duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">工作福利</h3>
                <p className="text-gray-600">
                  灵活的工作时间，完善的福利体系，舒适的办公环境。
                </p>
              </div>
            </div>
            
            <button className="mt-10 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105">
              了解更多公司文化
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
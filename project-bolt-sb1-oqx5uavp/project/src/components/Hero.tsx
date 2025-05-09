import React from 'react';
import { Search, Users, Briefcase, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white pt-24 pb-16 md:pb-24">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-10 top-10 w-40 h-40 bg-purple-400 opacity-10 rounded-full"></div>
        <div className="absolute left-10 bottom-10 w-20 h-20 bg-blue-400 opacity-10 rounded-full"></div>
        <div className="absolute right-1/4 bottom-1/3 w-32 h-32 bg-indigo-400 opacity-10 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fadeInDown">
            加入<span className="text-blue-400">上班族</span>，开启职业新篇章
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 animate-fadeInUp">
            我们正在寻找热爱创新、充满活力的人才，一起打造未来
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 flex items-center">
              <Briefcase className="text-blue-300 mr-3" />
              <span>多元化职位</span>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 flex items-center">
              <Users className="text-purple-300 mr-3" />
              <span>友好团队文化</span>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 flex items-center">
              <TrendingUp className="text-indigo-300 mr-3" />
              <span>成长空间</span>
            </div>
          </div>
          
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 animate-pulse">
            查看所有职位
          </button>
        </div>
      </div>
      
      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z">
          </path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
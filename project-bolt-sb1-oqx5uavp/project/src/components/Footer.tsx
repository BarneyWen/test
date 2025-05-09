import React from 'react';
import { Mail, Phone, MapPin, GitCommit } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <GitCommit className="mr-2" /> 上班族
            </h3>
            <p className="text-gray-300">
              上班族是一家专注于技术创新和人才培养的科技公司，致力于为员工创造良好的工作环境和发展空间。
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">联系我们</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <span>400-123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <span>hr@shangbanzu.com</span>
              </li>
              <li className="flex items-center">
                <MapPin size={18} className="mr-2" />
                <span>北京市朝阳区科技园区88号</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">关注我们</h3>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <span className="font-bold">微</span>
              </div>
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors cursor-pointer">
                <span className="font-bold">微</span>
              </div>
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer">
                <span className="font-bold">抖</span>
              </div>
            </div>
            <p className="mt-4 text-gray-300">关注我们的社交媒体，了解更多公司动态和招聘信息</p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>© {new Date().getFullYear()} 上班族科技有限公司 版权所有</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
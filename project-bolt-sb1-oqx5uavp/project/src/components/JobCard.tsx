import React from 'react';
import { Job } from '../types';
import { ArrowRight, Users, Clock } from 'lucide-react';

interface JobCardProps {
  job: Job;
  index: number;
}

const JobCard: React.FC<JobCardProps> = ({ job, index }) => {
  const typeLabels = {
    'full-time': '全职',
    'intern': '实习',
    'graduate': '应届生'
  };

  // Animation delay based on index
  const animationDelay = `${index * 0.1}s`;

  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 animate-fadeIn"
      style={{ animationDelay }}
    >
      <div className={`${job.color} h-2`}></div>
      <div className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
            <div className="flex items-center mt-2 text-gray-600">
              <Users size={16} className="mr-1" />
              <span className="text-sm">{job.department}</span>
              <span className="mx-2">•</span>
              <Clock size={16} className="mr-1" />
              <span className="text-sm">{typeLabels[job.type]}</span>
            </div>
          </div>
        </div>

        <p className="mt-4 text-gray-600">{job.description}</p>
        
        <div className="mt-4">
          <h4 className="font-medium text-gray-800">工作职责：</h4>
          <ul className="mt-2 pl-5 list-disc text-gray-600">
            {job.responsibilities.map((resp, idx) => (
              <li key={idx} className="mt-1">{resp}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex-1">
            <button className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200">
              <span className="font-medium">了解更多</span>
              <ArrowRight size={16} className="ml-1" />
            </button>
          </div>
          
          <div className="mt-4 sm:mt-0 flex flex-col items-center">
            <div className="bg-gray-100 p-2 rounded-lg">
              {/* This would be a real QR code in production */}
              <div className="w-24 h-24 bg-white border flex items-center justify-center">
                <div className="text-xs text-gray-400 text-center">
                  扫码<br />申请职位
                </div>
              </div>
            </div>
            <p className="mt-2 text-xs text-gray-500">扫描二维码申请</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
import React from 'react';
import { Filter, ChevronDown } from 'lucide-react';

interface FilterBarProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ activeFilter, setActiveFilter }) => {
  return (
    <div className="bg-white py-4 sticky top-16 z-30 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div className="flex items-center mb-3 sm:mb-0">
            <Filter size={18} className="text-gray-500 mr-2" />
            <h2 className="text-lg font-medium text-gray-700">筛选岗位</h2>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              全部岗位
            </button>
            
            <button 
              onClick={() => setActiveFilter('full-time')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === 'full-time' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              全职岗位
            </button>
            
            <button 
              onClick={() => setActiveFilter('intern')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === 'intern' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              实习岗位
            </button>
            
            <button 
              onClick={() => setActiveFilter('graduate')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === 'graduate' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              应届生岗位
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
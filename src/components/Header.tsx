import React from 'react';
import { Compass } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenReport: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onOpenReport }) => {
  const navItems = [
    { id: 'apple_hermes', label: '苹果/爱马仕联名深度对比' },
    { id: 'cmf', label: '5大挪威CMF打磨' },
    { id: 'threeway', label: '手环/表带三方对比' },
    { id: 'testing', label: 'B2B/C测款体系' },
    { id: 'strategy', label: '出海战略与SWOT' },
    { id: 'calculator', label: 'VOEC税费测算器' },
    { id: 'b2b', label: '挪威买手推介' },
    { id: 'roadmap', label: '0-180天落地图' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-stone-50/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single text wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="w-8 h-8 rounded-lg bg-stone-900 text-stone-100 flex items-center justify-center font-display font-bold text-sm tracking-widest">
              北华
            </span>
            <span className="font-display font-bold text-lg tracking-tight text-stone-900 whitespace-nowrap">
              北欧·华韵
            </span>
            <span className="hidden sm:inline text-xs text-stone-500 font-normal">
              挪威智能表带出海战略系统
            </span>
          </div>

          {/* Zone 2: 4-6 concise single-line nav links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-600">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 text-xs md:text-sm ${
                  activeTab === item.id
                    ? 'border-stone-900 text-stone-900 font-semibold'
                    : 'border-transparent hover:text-stone-900 hover:border-stone-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenReport}
              className="px-3.5 py-2 text-xs font-medium text-stone-100 bg-stone-900 rounded-lg hover:bg-stone-800 transition-colors whitespace-nowrap flex items-center gap-1.5 shadow-xs"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>导出战略研报</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav strip */}
      <div className="lg:hidden flex items-center gap-2 px-4 py-2 overflow-x-auto scrollbar-none border-t border-stone-100 bg-stone-100/60">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`px-2.5 py-1 text-xs rounded-md whitespace-nowrap transition-colors ${
              activeTab === item.id
                ? 'bg-stone-900 text-white font-medium'
                : 'text-stone-600 hover:text-stone-900 bg-stone-200/60'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
};

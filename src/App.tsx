import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AppleAndHermesComparisonView } from './components/AppleAndHermesComparisonView';
import { CmfStudioView } from './components/CmfStudioView';
import { ThreeWayBenchmarkView } from './components/ThreeWayBenchmarkView';
import { ValidationTestingView } from './components/ValidationTestingView';
import { MarketAndSwotView } from './components/MarketAndSwotView';
import { CompetitorBenchmarkingView } from './components/CompetitorBenchmarkingView';
import { ProductCapsuleShowcase } from './components/ProductCapsuleShowcase';
import { UnitEconomicsCalculator } from './components/UnitEconomicsCalculator';
import { B2BOutreachGenerator } from './components/B2BOutreachGenerator';
import { RoadmapView } from './components/RoadmapView';
import { ComplianceGuideView } from './components/ComplianceGuideView';
import { ReportExportModal } from './components/ReportExportModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('apple_hermes');
  const [isReportOpen, setIsReportOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans selection:bg-stone-800 selection:text-white">
      {/* Top Bar adhering strictly to Top Bar Contract */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenReport={() => setIsReportOpen(true)}
      />

      {/* Hero Showcase Area */}
      <HeroSection onNavigate={(tabId) => setActiveTab(tabId)} />

      {/* Secondary Functional Navigation Strip */}
      <div className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-none text-xs">
            <span className="text-stone-400 font-mono shrink-0 mr-1">导航定位:</span>
            {[
              { id: 'apple_hermes', label: '01. 苹果/爱马仕联名深度对比' },
              { id: 'cmf', label: '02. 5大挪威CMF打磨' },
              { id: 'threeway', label: '03. 民族手环/智能表带三方对比' },
              { id: 'testing', label: '04. B2B/C测款体系' },
              { id: 'strategy', label: '05. 出海战略与SWOT' },
              { id: 'calculator', label: '06. VOEC利润测算器' },
              { id: 'b2b', label: '07. 挪威买手推介' },
              { id: 'roadmap', label: '08. 0-180天落地图' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors shrink-0 font-medium ${
                  activeTab === tab.id
                    ? 'bg-stone-900 text-white shadow-2xs'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main View Container */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-6">
        {activeTab === 'apple_hermes' && <AppleAndHermesComparisonView />}
        {activeTab === 'cmf' && <CmfStudioView />}
        {activeTab === 'threeway' && <ThreeWayBenchmarkView />}
        {activeTab === 'testing' && <ValidationTestingView />}
        {activeTab === 'strategy' && <MarketAndSwotView />}
        {activeTab === 'competitors' && <CompetitorBenchmarkingView />}
        {activeTab === 'products' && <ProductCapsuleShowcase />}
        {activeTab === 'calculator' && <UnitEconomicsCalculator />}
        {activeTab === 'b2b' && <B2BOutreachGenerator />}
        {activeTab === 'roadmap' && <RoadmapView />}
        {activeTab === 'compliance' && <ComplianceGuideView />}
      </main>

      {/* Quiet, Clean Editorial Footer */}
      <footer className="mt-auto border-t border-stone-200 bg-white py-8 text-xs text-stone-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-stone-900">北欧·华韵</span>
            <span>中挪民族文化融合智能手表表带出海挪威战略研报与执行系统</span>
          </div>
          <div className="flex items-center gap-4 text-stone-600">
            <span>REACH 合规标准</span>
            <span aria-hidden="true">·</span>
            <span>VOEC 增值税通道</span>
            <span aria-hidden="true">·</span>
            <span>中国东莞/苏州精工供应链</span>
          </div>
        </div>
      </footer>

      {/* Strategic Report Full Dossier Modal */}
      <ReportExportModal
        isOpen={isReportOpen}
        onClose={() => setIsReportOpen(false)}
      />
    </div>
  );
}

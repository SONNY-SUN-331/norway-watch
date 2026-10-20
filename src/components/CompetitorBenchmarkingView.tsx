import React, { useState } from 'react';
import { COMPETITORS, Competitor } from '../data/marketData';
import { Target, ShieldCheck, Zap, Layers, AlertCircle, Sparkles } from 'lucide-react';

export const CompetitorBenchmarkingView: React.FC = () => {
  const [selectedCompetitorId, setSelectedCompetitorId] = useState<string>('bandwerk');

  const selectedCompetitor = COMPETITORS.find(c => c.id === selectedCompetitorId) || COMPETITORS[0];

  return (
    <div className="space-y-12 py-6">
      {/* Chapter header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
          <span>Chapter 02</span>
          <span aria-hidden="true">·</span>
          <span>Competitive Landscape & White Space</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-stone-900 tracking-tight">
          竞品深度调研：北欧市场格局与战略空白点
        </h2>
        <p className="text-stone-600 text-sm mt-2 max-w-3xl leading-relaxed">
          目前挪威智能配件市场在“极度奢华但缺乏文化创新的德国手工（Bandwerk）”与“纯功能主义但缺乏人文底蕴的加州硬核户外（Nomad）”之间，留下了极大的高溢价文化艺术空白。
        </p>
      </div>

      {/* Strategic Market Gap Callout */}
      <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-stone-400">
          <span>Market Opportunity Radar</span>
          <span aria-hidden="true">·</span>
          <span>The 490 - 790 NOK White Space</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-display font-bold text-white max-w-2xl text-balance">
          挪威市场的结构性断层：490 - 790 NOK 高品质文化跨界真空区
        </h3>
        <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-3xl">
          挪威消费者并非不愿为表带付钱，而是市面上只有两种极端：要么是 200-300 NOK 的低劣义乌白牌塑料带，要么是动辄 1,500-2,000 NOK 的传统老派奢侈皮带。
          我们的中国非遗丝织（宋锦/苏绣）+ 氟橡胶防水底衬 + 钛金属五金的表带，以 <strong>599 NOK</strong> 入市，以 <strong>8倍于低端竞品的工艺质感、1/2于欧洲高奢的价格</strong> 形成降维打击。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-stone-800">
          <div className="space-y-1">
            <span className="text-xs text-stone-400">义乌普通白牌</span>
            <div className="text-stone-200 text-sm font-semibold">190 - 350 NOK</div>
            <p className="text-xs text-stone-500">公模塑料，无文化溢价，环保抵触</p>
          </div>
          <div className="space-y-1 bg-stone-800/80 p-3 rounded-lg border border-stone-700">
            <span className="text-xs text-amber-300 font-medium">我们的中挪非遗融合系列</span>
            <div className="text-white text-base font-bold tabular-nums">490 - 790 NOK</div>
            <p className="text-xs text-stone-300">非遗宋锦/苏绣 + 氟橡胶防水 + 挪威民俗故事</p>
          </div>
          <div className="space-y-1">
            <span className="text-xs text-stone-400">欧美奢侈/本地手工</span>
            <div className="text-stone-200 text-sm font-semibold">1,200 - 2,200 NOK</div>
            <p className="text-xs text-stone-500">高昂手工时薪，无工业快拆模具，产能极低</p>
          </div>
        </div>
      </div>

      {/* Interactive Competitor Switcher */}
      <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-2xs space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-100 pb-4">
          <div>
            <h3 className="font-display font-bold text-lg text-stone-900">
              主要竞品全景解剖与破局策略
            </h3>
            <p className="text-xs text-stone-500">点击下方品牌查看详尽优劣势与攻防点</p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-lg overflow-x-auto max-w-full">
            {COMPETITORS.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCompetitorId(c.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                  selectedCompetitorId === c.id
                    ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Competitor Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Summary Profile */}
          <div className="lg:col-span-5 bg-stone-50 rounded-xl p-5 border border-stone-200 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-stone-500 uppercase">{selectedCompetitor.origin}</span>
              <span className="text-xs px-2 py-0.5 rounded bg-stone-200 text-stone-800 font-medium">
                挪威份额 {selectedCompetitor.norwayMarketShare}
              </span>
            </div>

            <div>
              <h4 className="text-2xl font-display font-bold text-stone-900">{selectedCompetitor.name}</h4>
              <p className="text-xs text-stone-500 mt-0.5">{selectedCompetitor.brandPositioning}</p>
            </div>

            <div className="space-y-2 pt-2 border-t border-stone-200 text-xs">
              <div className="flex justify-between py-1 border-b border-stone-100">
                <span className="text-stone-500">主流价格区间</span>
                <span className="font-semibold text-stone-900 tabular-nums">{selectedCompetitor.priceRangeNOK}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-100">
                <span className="text-stone-500">核心用料</span>
                <span className="font-medium text-stone-800">{selectedCompetitor.coreMaterial}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-stone-500">销售渠道</span>
                <span className="text-stone-700">{selectedCompetitor.salesChannels.join(' / ')}</span>
              </div>
            </div>

            <div className="p-3 bg-white rounded-lg border border-stone-200 text-xs space-y-1">
              <div className="flex items-center gap-1.5 font-medium text-stone-900">
                <Target className="w-3.5 h-3.5 text-stone-700" />
                <span>战略突防窗口 (White Space Attack)</span>
              </div>
              <p className="text-stone-600 leading-relaxed">
                {selectedCompetitor.whiteSpaceOpportunity}
              </p>
            </div>
          </div>

          {/* Right: Strengths, Weaknesses, and Battle tactics */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>竞品核心优势 (What They Do Well)</span>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {selectedCompetitor.strengths.map((str, idx) => (
                  <div key={idx} className="p-3 bg-stone-50 rounded-lg border border-stone-100 text-xs text-stone-700 leading-relaxed">
                    · {str}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-amber-700" />
                <span>竞品软肋与致命痛点 (Vulnerabilities to Exploit)</span>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {selectedCompetitor.weaknesses.map((weak, idx) => (
                  <div key={idx} className="p-3 bg-stone-50 rounded-lg border border-stone-100 text-xs text-stone-700 leading-relaxed">
                    · {weak}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-stone-100/70 rounded-xl border border-stone-200 space-y-2">
              <div className="flex items-center gap-2 font-display font-semibold text-stone-900 text-sm">
                <Zap className="w-4 h-4 text-stone-800" />
                <span>应对此竞品的实操落地战术</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                针对 {selectedCompetitor.name}，我们在宣传物料与买手选品单中，重点突出<strong>中国顶尖织锦工艺与北欧严酷户外双面工程结构</strong>，强调“兼具传统服饰礼仪仪式感与暴雪峡湾防水性能”，不拼绝对品牌虚荣心，而拼“不可替代的人文仪式感与质价比”。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Side by side comparison table */}
      <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-2xs">
        <div className="p-6 border-b border-stone-200">
          <h3 className="font-display font-bold text-lg text-stone-900">
            全维度竞品对标与综合能力矩阵
          </h3>
          <p className="text-xs text-stone-500 mt-1">
            横向评估价格、材质、文化故事、户外耐候性及五金可靠度
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-stone-50 border-b border-stone-200 text-stone-600 uppercase font-medium">
              <tr>
                <th className="py-3 px-4">对标品牌</th>
                <th className="py-3 px-4">产地定位</th>
                <th className="py-3 px-4">挪威售价</th>
                <th className="py-3 px-4">材质方案</th>
                <th className="py-3 px-4">Bunad/民族适配度</th>
                <th className="py-3 px-4">Friluftsliv户外耐水</th>
                <th className="py-3 px-4">核心壁垒</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-stone-700">
              <tr className="bg-stone-100/40 font-medium text-stone-900">
                <td className="py-3.5 px-4 font-bold text-stone-900">
                  北欧·华韵 (本项目)
                </td>
                <td className="py-3.5 px-4">中挪非遗跨界</td>
                <td className="py-3.5 px-4 tabular-nums font-bold text-emerald-800">490 - 790 NOK</td>
                <td className="py-3.5 px-4">宋锦/苏绣/植鞣皮 + 氟橡胶衬底</td>
                <td className="py-3.5 px-4 text-emerald-700 font-semibold">极高 (专研适配)</td>
                <td className="py-3.5 px-4 text-emerald-700 font-semibold">优秀 (双层导汗)</td>
                <td className="py-3.5 px-4">文化故事 + 极致质价比</td>
              </tr>
              {COMPETITORS.map((c) => (
                <tr key={c.id} className="hover:bg-stone-50/60 transition-colors">
                  <td className="py-3.5 px-4 font-medium text-stone-900">{c.name}</td>
                  <td className="py-3.5 px-4">{c.origin}</td>
                  <td className="py-3.5 px-4 tabular-nums">{c.priceRangeNOK}</td>
                  <td className="py-3.5 px-4">{c.coreMaterial}</td>
                  <td className="py-3.5 px-4 text-stone-500">
                    {c.id === 'etsy_artisans' ? '高 (手作)' : '极低 (商务/工业)'}
                  </td>
                  <td className="py-3.5 px-4 text-stone-500">
                    {c.id === 'nomad' ? '极强' : c.id === 'bandwerk' ? '较弱 (皮革畏水)' : '普通'}
                  </td>
                  <td className="py-3.5 px-4">{c.brandPositioning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

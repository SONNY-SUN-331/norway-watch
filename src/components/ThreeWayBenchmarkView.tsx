import React from 'react';
import { THREE_WAY_BENCHMARK, ThreeWayBenchmarkItem } from '../data/marketData';
import { Sparkles, CheckCircle2, XCircle, AlertTriangle, ShieldCheck, Scale, Award } from 'lucide-react';

export const ThreeWayBenchmarkView: React.FC = () => {
  return (
    <div className="space-y-12 py-6">
      {/* Chapter header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
          <span>Module 02 · 3-Way Competitive Benchmark</span>
          <span aria-hidden="true">·</span>
          <span>Folk Bracelets vs Smart Straps vs Fusion</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-stone-900 tracking-tight">
          挪威市场三方对标：传统民族手环 vs 主流智能表带 vs 本项目
        </h2>
        <p className="text-stone-600 text-sm mt-2 max-w-3xl leading-relaxed">
          深入挪威真实佩戴场景，对比“传统纯首饰手镯”、“纯工业智能表带”与“中挪非遗跨界智能表带”在文化价值、工程适配、耐候防水与 B2B 利润上的本质差距。
        </p>
      </div>

      {/* The 3 Archetypes Cards Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Category 1: Traditional Ethnic */}
        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase text-stone-400">Category A</span>
            <span className="text-3xs font-semibold px-2 py-0.5 rounded bg-stone-100 text-stone-700">传统首饰手作</span>
          </div>
          <h3 className="font-display font-bold text-lg text-stone-900">
            挪威传统民族手环
          </h3>
          <p className="text-xs text-stone-500">
            代表：Husfliden 索尔耶银手镯、萨米锡丝鹿皮手绳
          </p>
          <div className="p-3 bg-stone-50 rounded-xl border border-stone-100 text-xs text-stone-600 space-y-2 leading-relaxed">
            <p><strong>售价：</strong>850 - 2,500 NOK (昂贵高定)</p>
            <p><strong>优势：</strong>极高民族自豪感，受长辈与传统仪式敬重。</p>
            <p className="text-rose-700 font-medium"><strong>硬伤：</strong>完全无法连接智能手表！戴了手镯就不能戴 Apple Watch 测心率；且纯毛呢怕汗怕水，无法在日常运动佩戴。</p>
          </div>
        </div>

        {/* Category 2: Mainstream Smartwatch */}
        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase text-stone-400">Category B</span>
            <span className="text-3xs font-semibold px-2 py-0.5 rounded bg-stone-100 text-stone-700">现代工业配件</span>
          </div>
          <h3 className="font-display font-bold text-lg text-stone-900">
            挪威主流智能表带
          </h3>
          <p className="text-xs text-stone-500">
            代表：Apple 原装、Nomad Goods、BandWerk、StrapsCo
          </p>
          <div className="p-3 bg-stone-50 rounded-xl border border-stone-100 text-xs text-stone-600 space-y-2 leading-relaxed">
            <p><strong>售价：</strong>250 NOK (劣质) 至 1,500 NOK (高奢)</p>
            <p><strong>优势：</strong>快拆接口稳定，防水抗磨机能强。</p>
            <p className="text-amber-800 font-medium"><strong>硬伤：</strong>冰冷机械同质化，毫无挪威文化温度；搭配数万克朗的 Bunad 盛装或日常高雅穿搭时，塑料黑灰极具违和感。</p>
          </div>
        </div>

        {/* Category 3: Our Fusion Strap */}
        <div className="bg-stone-900 text-white p-6 rounded-2xl shadow-md space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase text-stone-400">Category C · Blue Ocean</span>
            <span className="text-3xs font-semibold px-2 py-0.5 rounded bg-amber-400/20 text-amber-300">
              跨界终极解法
            </span>
          </div>
          <h3 className="font-display font-bold text-lg text-white">
            北欧·华韵 中挪非遗智能表带
          </h3>
          <p className="text-xs text-stone-300">
            代表：宋锦八瓣玫瑰、苏绣索尔耶、维京如尼植鞣皮
          </p>
          <div className="p-3 bg-stone-800/80 rounded-xl border border-stone-700 text-xs text-stone-200 space-y-2 leading-relaxed">
            <p><strong>售价：</strong>490 - 790 NOK (大众高奢黄金区)</p>
            <p className="text-emerald-400 font-semibold">
              <strong>双重价值穿透：</strong>
            </p>
            <p>① 拥有传统民族手环的华美与文化灵魂；</p>
            <p>② 兼具专业智能表的精密 CNC 快拆、导汗氟橡胶与 -40℃ 耐候性！</p>
          </div>
        </div>
      </div>

      {/* Comprehensive 5-Dimension Master Comparison Grid */}
      <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-2xs">
        <div className="p-6 border-b border-stone-200 bg-stone-50/50 flex items-center justify-between">
          <div>
            <h3 className="font-display font-bold text-lg text-stone-900">
              5 大核心维度三方全景横向深度对标
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              从文化感性价值到硬核工程指标与买手店渠道利润全解析
            </p>
          </div>
          <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
            全胜蓝海区
          </span>
        </div>

        <div className="divide-y divide-stone-200">
          {THREE_WAY_BENCHMARK.map((bench, idx) => (
            <div key={idx} className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-stone-400">0{idx + 1}</span>
                <h4 className="font-display font-bold text-base text-stone-900">
                  {bench.dimension}
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                {/* Traditional */}
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-stone-500 text-3xs uppercase font-medium">传统民族手环</span>
                    <span className="font-semibold text-stone-800 text-3xs">{bench.traditionalEthnicBracelet.rating}</span>
                  </div>
                  <div className="font-semibold text-stone-900">{bench.traditionalEthnicBracelet.summary}</div>
                  <p className="text-stone-600 text-3xs leading-relaxed">{bench.traditionalEthnicBracelet.detail}</p>
                </div>

                {/* Mainstream */}
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-stone-500 text-3xs uppercase font-medium">主流智能表带</span>
                    <span className="font-semibold text-stone-800 text-3xs">{bench.mainstreamSmartStrap.rating}</span>
                  </div>
                  <div className="font-semibold text-stone-900">{bench.mainstreamSmartStrap.summary}</div>
                  <p className="text-stone-600 text-3xs leading-relaxed">{bench.mainstreamSmartStrap.detail}</p>
                </div>

                {/* Our Fusion */}
                <div className="p-4 rounded-xl bg-stone-900 text-white space-y-1.5 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <span className="text-amber-300 text-3xs uppercase font-medium">本项目中挪非遗融合款</span>
                    <span className="font-semibold text-emerald-400 text-3xs">{bench.ourFusionStrap.rating}</span>
                  </div>
                  <div className="font-semibold text-white">{bench.ourFusionStrap.summary}</div>
                  <p className="text-stone-300 text-3xs leading-relaxed">{bench.ourFusionStrap.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

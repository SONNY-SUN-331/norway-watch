import React, { useState } from 'react';
import { CAPSULE_PRODUCTS, CapsuleProduct } from '../data/marketData';
import { Sparkles, Check, Watch, Shield, Info, ArrowUpRight } from 'lucide-react';

export const ProductCapsuleShowcase: React.FC = () => {
  const [selectedCapsule, setSelectedCapsule] = useState<CapsuleProduct>(CAPSULE_PRODUCTS[0]);
  const [selectedSize, setSelectedSize] = useState<string>('Apple Watch 45/49mm Ultra');

  return (
    <div className="space-y-12 py-6">
      {/* Chapter header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
          <span>Chapter 03</span>
          <span aria-hidden="true">·</span>
          <span>Product Architecture & Cultural Capsules</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-stone-900 tracking-tight">
          选品架构与材质工程：四大非遗跨界胶囊系列
        </h2>
        <p className="text-stone-600 text-sm mt-2 max-w-3xl leading-relaxed">
          以“中国顶尖非遗工艺 + 挪威民俗文化图腾 + 现代精密快拆五金”为三位一体。彻底解决传统织物表带“怕汗水、怕磨损、五金晃动”三大致命工艺缺陷。
        </p>
      </div>

      {/* Capsule Selector Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {CAPSULE_PRODUCTS.map((cap) => (
          <button
            key={cap.id}
            onClick={() => setSelectedCapsule(cap)}
            className={`text-left p-4 rounded-xl border transition-all ${
              selectedCapsule.id === cap.id
                ? 'bg-stone-900 text-white border-stone-900 shadow-md ring-1 ring-stone-900'
                : 'bg-white text-stone-900 border-stone-200 hover:border-stone-300 hover:bg-stone-50/50'
            }`}
          >
            <div className="flex items-center justify-between text-xs mb-1">
              <span className={`font-mono ${selectedCapsule.id === cap.id ? 'text-stone-300' : 'text-stone-400'}`}>
                {cap.code}
              </span>
              <span className={`font-bold tabular-nums ${selectedCapsule.id === cap.id ? 'text-amber-300' : 'text-stone-900'}`}>
                {cap.targetPriceNOK} NOK
              </span>
            </div>
            <div className="font-display font-semibold text-sm line-clamp-1">{cap.nameZh}</div>
            <div className={`text-xs mt-1 line-clamp-1 ${selectedCapsule.id === cap.id ? 'text-stone-400' : 'text-stone-500'}`}>
              {cap.nameEn}
            </div>
          </button>
        ))}
      </div>

      {/* Main Showcase Specimen Card */}
      <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-2xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left Visual Area: 4:3 product image */}
          <div className="lg:col-span-6 bg-stone-100 relative min-h-[380px] lg:min-h-full flex items-center justify-center p-6">
            <div className="relative w-full max-w-lg aspect-4/3 rounded-xl overflow-hidden shadow-sm border border-stone-200/80 bg-white">
              <img
                src={selectedCapsule.imagePath}
                alt={selectedCapsule.nameZh}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-stone-900/85 backdrop-blur-sm text-stone-100 text-xs px-2.5 py-1 rounded font-mono">
                {selectedCapsule.code}
              </div>
            </div>
          </div>

          {/* Right Spec & Story Area */}
          <div className="lg:col-span-6 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono text-stone-500 uppercase">
                  Material Engineering & Cultural Narrative
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-stone-900 mt-1">
                  {selectedCapsule.nameZh}
                </h3>
                <p className="text-xs text-stone-500 italic mt-0.5">{selectedCapsule.nameEn}</p>
                <p className="text-xs font-medium text-stone-800 mt-2 bg-stone-100 px-3 py-1.5 rounded-lg inline-block">
                  {selectedCapsule.tagline}
                </p>
              </div>

              {/* Cultural concept description */}
              <div className="space-y-2 text-xs text-stone-600 leading-relaxed">
                <div className="font-semibold text-stone-900 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-stone-800" />
                  <span>设计理念与文化图腾解析</span>
                </div>
                <p>{selectedCapsule.fusionConcept}</p>
              </div>

              {/* Material specifications */}
              <div className="space-y-2 text-xs">
                <span className="font-semibold text-stone-900">核心材质配方</span>
                <div className="flex flex-wrap gap-2">
                  {selectedCapsule.materials.map((mat, i) => (
                    <span key={i} className="px-2.5 py-1 bg-stone-50 border border-stone-200 rounded-md text-stone-700">
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Watch Compatibility selector */}
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-stone-900">支持机型与连接器</span>
                  <span className="text-stone-500">免开模成熟公模五金</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedCapsule.compatibility.map((compat) => (
                    <button
                      key={compat}
                      onClick={() => setSelectedSize(compat)}
                      className={`px-2.5 py-1 rounded text-xs transition-colors ${
                        selectedSize === compat
                          ? 'bg-stone-900 text-white font-medium'
                          : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                      }`}
                    >
                      {compat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom economics & compliance strip */}
            <div className="pt-4 border-t border-stone-200 space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-stone-50 p-3 rounded-xl border border-stone-200 text-xs text-center">
                <div>
                  <span className="text-stone-500 block">中国出厂综合BOM</span>
                  <span className="font-bold text-stone-900 text-sm tabular-nums">
                    ¥{selectedCapsule.estCostRMB.totalRMB} RMB
                  </span>
                </div>
                <div>
                  <span className="text-stone-500 block">挪威零售指导价</span>
                  <span className="font-bold text-emerald-800 text-sm tabular-nums">
                    {selectedCapsule.targetPriceNOK} NOK
                  </span>
                </div>
                <div>
                  <span className="text-stone-500 block">换算人民币货值</span>
                  <span className="font-bold text-stone-900 text-sm tabular-nums">
                    ≈ ¥{Math.round(selectedCapsule.targetPriceNOK * 0.67)} RMB
                  </span>
                </div>
                <div>
                  <span className="text-stone-500 block">单品粗毛利</span>
                  <span className="font-bold text-emerald-700 text-sm tabular-nums">
                    {Math.round(((selectedCapsule.targetPriceNOK * 0.67 - selectedCapsule.estCostRMB.totalRMB) / (selectedCapsule.targetPriceNOK * 0.67)) * 100)}%
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-stone-500 flex-wrap gap-2">
                <div className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-stone-700" />
                  <span>合规认证：{selectedCapsule.complianceRequirements.join(' · ')}</span>
                </div>
                <div className="text-stone-800 font-medium">
                  目标受众：{selectedCapsule.targetAudience}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sourcing & Supply Chain Playbook */}
      <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-2xs space-y-4">
        <h3 className="font-display font-bold text-lg text-stone-900">
          中国供应链极简起步采买指南 (零开模成本)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-stone-600 leading-relaxed">
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="font-semibold text-stone-900 block text-sm">
              01. 广东精密快拆五金 (东莞/深圳)
            </span>
            <p>
              完全无需支付数万元开模费！东莞拥有全球最成熟的 Apple Watch (38-49mm) 及 Garmin QuickFit (20/22/26mm) 锌合金/316L 不锈钢公模连接器。
              采购市面最高档喷砂钛灰五金，单套现货采购价仅需 <strong>8-15 元 RMB</strong>。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="font-semibold text-stone-900 block text-sm">
              02. 苏浙非遗提花与刺绣 (苏州/海宁)
            </span>
            <p>
              苏州拥有大量数码高速提花织机，支持微批量数码打版。宋锦及高密盘金刺绣只需提供高清矢量图（AI文件），打样费通常仅 <strong>300-500 元</strong>，每米面料可制作 15-20 条表带面料，单条面料成本摊薄至 <strong>10-18 元 RMB</strong>。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="font-semibold text-stone-900 block text-sm">
              03. 环保原木牛皮纸包装 (温州/东莞)
            </span>
            <p>
              针对挪威人严苛的环保偏好，彻底摒弃任何吸塑塑料壳。采用抽拉式 FSC 认证牛皮纸盒（单价 3-5 元），内附印有中挪双语非遗故事的种子纸证书（埋入花盆可发芽），大幅提高开箱仪式感与社交分享率。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

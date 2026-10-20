import React, { useState } from 'react';
import { CMF_STYLES, CmfStyle } from '../data/marketData';
import { Palette, Layers, Sparkles, Shield, Wrench, ArrowUpRight, Check, Droplets, Thermometer, Gauge } from 'lucide-react';

export const CmfStudioView: React.FC = () => {
  const [selectedCmf, setSelectedCmf] = useState<CmfStyle>(CMF_STYLES[0]);
  const [activeTab, setActiveTab] = useState<'cmf' | 'specs' | 'manufacturing'>('cmf');

  return (
    <div className="space-y-12 py-6">
      {/* Chapter header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
          <span>Module 01 · Industrial CMF Deep Dive</span>
          <span aria-hidden="true">·</span>
          <span>5 Norwegian Cultural Archetypes</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-stone-900 tracking-tight">
          五大挪威文化样式 CMF 深度打磨方案
        </h2>
        <p className="text-stone-600 text-sm mt-2 max-w-3xl leading-relaxed">
          针对挪威宪法日、高山严寒、大西洋峡湾与极光荒野四大真实佩戴场景，系统打磨 Color（色彩）、Material（材质）、Finish（表面后处理）三位一体的工业落地标准。
        </p>
      </div>

      {/* 5 Archetype Selector Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {CMF_STYLES.map((style) => (
          <button
            key={style.id}
            onClick={() => setSelectedCmf(style)}
            className={`text-left p-3.5 rounded-xl border transition-all flex flex-col justify-between ${
              selectedCmf.id === style.id
                ? 'bg-stone-900 text-white border-stone-900 shadow-md ring-1 ring-stone-900'
                : 'bg-white text-stone-900 border-stone-200 hover:border-stone-300 hover:bg-stone-50/50'
            }`}
          >
            <div>
              <div className="flex items-center justify-between text-xs mb-1">
                <span className={`font-mono text-3xs ${selectedCmf.id === style.id ? 'text-stone-400' : 'text-stone-500'}`}>
                  {style.code}
                </span>
                <span className={`font-bold tabular-nums text-xs ${selectedCmf.id === style.id ? 'text-amber-300' : 'text-emerald-800'}`}>
                  {style.economics.retailPriceNOK} NOK
                </span>
              </div>
              <div className="font-display font-semibold text-xs sm:text-sm line-clamp-1">
                {style.nameZh.split(' · ')[0]}
              </div>
              <div className={`text-3xs mt-0.5 line-clamp-1 ${selectedCmf.id === style.id ? 'text-stone-300' : 'text-stone-500'}`}>
                {style.nameZh.split(' · ')[1] || style.nameEn}
              </div>
            </div>

            {/* Micro color dots indicator */}
            <div className="flex items-center gap-1.5 mt-3 pt-2 border-t border-stone-100/30">
              {style.cmf.color.palette.map((p, idx) => (
                <span
                  key={idx}
                  className="w-2.5 h-2.5 rounded-full border border-black/10 shrink-0"
                  style={{ backgroundColor: p.hex }}
                  title={`${p.name} (${p.pantone})`}
                />
              ))}
            </div>
          </button>
        ))}
      </div>

      {/* Main Specimen & CMF Breakdown Workbench */}
      <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-2xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left Visual Specimen (4:3 real commercial macro shot) */}
          <div className="lg:col-span-5 bg-stone-100 relative min-h-[380px] lg:min-h-full flex items-center justify-center p-6 border-b lg:border-b-0 lg:border-r border-stone-200">
            <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden shadow-sm border border-stone-200/80 bg-white">
              <img
                src={selectedCmf.imagePath}
                alt={selectedCmf.nameZh}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-stone-900/85 backdrop-blur-sm text-stone-100 text-xs px-2.5 py-1 rounded font-mono">
                {selectedCmf.code} · CMF SPEC
              </div>
              <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs text-stone-900 text-3xs font-semibold px-2 py-0.5 rounded shadow-2xs">
                实拍工程样机
              </div>
            </div>
          </div>

          {/* Right CMF Configuration Dossier */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              {/* Title & Origin */}
              <div>
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-xs font-mono text-stone-500 uppercase">
                    Norwegian Heritage CMF Archetype
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-stone-100 text-stone-800">
                    毛利率 {selectedCmf.economics.grossMarginPercent}%
                  </span>
                </div>
                <h3 className="text-2xl font-display font-bold text-stone-900 mt-1">
                  {selectedCmf.nameZh}
                </h3>
                <p className="text-xs text-stone-500 italic mt-0.5">{selectedCmf.heritageArchetype}</p>
                <p className="text-xs font-medium text-stone-800 mt-2 bg-stone-100 p-2 rounded-lg">
                  {selectedCmf.tagline}
                </p>
              </div>

              {/* Sub-view switcher */}
              <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-lg text-xs font-medium w-fit">
                <button
                  onClick={() => setActiveTab('cmf')}
                  className={`px-3 py-1.5 rounded-md transition-colors ${
                    activeTab === 'cmf' ? 'bg-white text-stone-900 shadow-2xs font-semibold' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  CMF 色彩与材质后工艺
                </button>
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`px-3 py-1.5 rounded-md transition-colors ${
                    activeTab === 'specs' ? 'bg-white text-stone-900 shadow-2xs font-semibold' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  工程耐候与兼容指标
                </button>
                <button
                  onClick={() => setActiveTab('manufacturing')}
                  className={`px-3 py-1.5 rounded-md transition-colors ${
                    activeTab === 'manufacturing' ? 'bg-white text-stone-900 shadow-2xs font-semibold' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  中国供应链落地指南
                </button>
              </div>

              {/* Tab 1: CMF Details */}
              {activeTab === 'cmf' && (
                <div className="space-y-4 pt-1">
                  {/* Colors */}
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-stone-900 flex items-center gap-1.5">
                      <Palette className="w-3.5 h-3.5 text-stone-700" />
                      <span>C - Color 色彩定义与潘通色号</span>
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {selectedCmf.cmf.color.palette.map((color, idx) => (
                        <div key={idx} className="p-2.5 rounded-lg border border-stone-200 bg-stone-50/50 flex items-center gap-2.5">
                          <span
                            className="w-5 h-5 rounded-full border border-black/10 shrink-0"
                            style={{ backgroundColor: color.hex }}
                          />
                          <div className="text-3xs overflow-hidden">
                            <span className="font-semibold text-stone-900 block truncate">{color.name}</span>
                            <span className="font-mono text-stone-500 block truncate">{color.pantone}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-3xs text-stone-500 leading-relaxed italic">
                      色彩叙事：{selectedCmf.cmf.color.narrative}
                    </p>
                  </div>

                  {/* Materials & Finish */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 space-y-1.5">
                      <span className="font-semibold text-stone-900 block text-3xs uppercase text-stone-500">
                        M - Material 复合用料
                      </span>
                      <div className="space-y-1 text-3xs text-stone-700">
                        <p><strong>外表层：</strong>{selectedCmf.cmf.material.outerLayer}</p>
                        <p><strong>贴肤衬底：</strong>{selectedCmf.cmf.material.innerLining}</p>
                        <p><strong>五金扣件：</strong>{selectedCmf.cmf.material.hardwareBuckle}</p>
                        <p><strong>锁边缝线：</strong>{selectedCmf.cmf.material.threadStitch}</p>
                      </div>
                    </div>

                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 space-y-1.5">
                      <span className="font-semibold text-stone-900 block text-3xs uppercase text-stone-500">
                        F - Finish 表面后处理
                      </span>
                      <div className="space-y-1 text-3xs text-stone-700">
                        <p><strong>表面肌理：</strong>{selectedCmf.cmf.finish.surfaceTexture}</p>
                        <p><strong>五金处理：</strong>{selectedCmf.cmf.finish.hardwareFinish}</p>
                        <p><strong>油边工艺：</strong>{selectedCmf.cmf.finish.edgeCoating}</p>
                        <p><strong>佩戴体感：</strong>{selectedCmf.cmf.finish.tactileFeel}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Engineering Specs */}
              {activeTab === 'specs' && (
                <div className="space-y-3 pt-1 text-xs">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 text-center">
                      <Droplets className="w-4 h-4 mx-auto text-stone-700 mb-1" />
                      <span className="text-3xs text-stone-500 block">抗汗防水等级</span>
                      <span className="font-semibold text-stone-900 text-3xs mt-0.5 block">
                        {selectedCmf.engineeringSpecs.waterproofSweatRating}
                      </span>
                    </div>

                    <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 text-center">
                      <Thermometer className="w-4 h-4 mx-auto text-stone-700 mb-1" />
                      <span className="text-3xs text-stone-500 block">极端工作温区</span>
                      <span className="font-semibold text-stone-900 text-3xs mt-0.5 block">
                        {selectedCmf.engineeringSpecs.workingTemp}
                      </span>
                    </div>

                    <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 text-center">
                      <Gauge className="w-4 h-4 mx-auto text-stone-700 mb-1" />
                      <span className="text-3xs text-stone-500 block">抗拉脱拉力上限</span>
                      <span className="font-semibold text-stone-900 text-3xs mt-0.5 block">
                        {selectedCmf.engineeringSpecs.tensileLoadLimit}
                      </span>
                    </div>
                  </div>

                  <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-1 text-3xs text-emerald-950">
                    <div className="font-semibold flex items-center gap-1">
                      <Shield className="w-3.5 h-3.5 text-emerald-700" />
                      <span>EU REACH 镍析出达标</span>
                    </div>
                    <p>
                      实测析出率：<strong>{selectedCmf.engineeringSpecs.nickelReleaseRate}</strong>，通过 EN 1811:2011 接触测试，绝无过敏红肿风险。
                    </p>
                  </div>

                  <div>
                    <span className="font-semibold text-stone-900 text-3xs block mb-1">适配机型（公模互通）</span>
                    <div className="flex flex-wrap gap-1">
                      {selectedCmf.engineeringSpecs.compatibility.map((comp, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-stone-100 text-stone-700 text-3xs">
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Manufacturing */}
              {activeTab === 'manufacturing' && (
                <div className="space-y-3 pt-1 text-xs">
                  <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
                    <span className="font-semibold text-stone-900 block flex items-center gap-1.5 text-xs">
                      <Wrench className="w-3.5 h-3.5 text-stone-700" />
                      <span>国内产业带代工路线（零开模费方案）</span>
                    </span>
                    <p className="text-3xs text-stone-600 leading-relaxed">
                      {selectedCmf.manufacturingInstructions}
                    </p>
                  </div>

                  <div className="p-3 bg-stone-100/60 rounded-lg border border-stone-200 text-3xs text-stone-600">
                    <span className="font-semibold text-stone-900 block mb-0.5">挪威本地买手受众画像：</span>
                    <p>{selectedCmf.targetAudienceNorway}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom pricing economics bar */}
            <div className="pt-4 border-t border-stone-200 flex items-center justify-between flex-wrap gap-3 text-xs">
              <div className="flex items-center gap-4">
                <div>
                  <span className="text-3xs text-stone-400 block">出厂总成本</span>
                  <span className="font-bold text-stone-900 tabular-nums">
                    ¥{selectedCmf.economics.totalCostRMB} RMB
                  </span>
                </div>
                <div>
                  <span className="text-3xs text-stone-400 block">建议零售价</span>
                  <span className="font-bold text-emerald-800 tabular-nums">
                    {selectedCmf.economics.retailPriceNOK} NOK
                  </span>
                </div>
                <div>
                  <span className="text-3xs text-stone-400 block">折合人民币</span>
                  <span className="font-bold text-stone-900 tabular-nums">
                    ≈ ¥{Math.round(selectedCmf.economics.retailPriceNOK * 0.67)} RMB
                  </span>
                </div>
              </div>

              <div className="text-3xs text-stone-500">
                单位毛利空间超 <strong className="text-emerald-700 font-bold">{selectedCmf.economics.grossMarginPercent}%</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, Sparkles, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (tabId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Thesis & Value proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-medium text-stone-500 tracking-wide">
              <span>中国智造精工供应链</span>
              <span aria-hidden="true">·</span>
              <span>中挪民族非遗文化交融</span>
              <span aria-hidden="true">·</span>
              <span>北欧高客单出海实战</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-stone-900 leading-tight text-balance">
              挪威智能手表带出海
              <span className="block text-stone-700 font-serif italic font-normal text-2xl sm:text-3xl lg:text-4xl mt-1">
                低成本冷启动与中挪文化跨界落地全案
              </span>
            </h1>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-2xl">
              结合中国精工五金与非遗刺绣/宋锦工艺（苏州、东莞成熟供应链），直击挪威消费者
              <strong className="text-stone-900 font-semibold">“高人均收入、人手一块智能表（穿透率超68%）、热爱旷野户外哲学（Friluftsliv）及盛装节日（Bunad）搭配缺失”</strong>
              的真实痛点。通过“数字微测试 + 线下买手店突击”双轨制，实现万余元极低试错成本精准准入。
            </p>

            {/* Value checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs text-stone-700">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-stone-800 shrink-0 mt-0.5" />
                <span>精准避开低端义乌白牌红海，锚定 490 - 790 NOK 溢价蓝海</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-stone-800 shrink-0 mt-0.5" />
                <span>合规穿透挪威 VOEC 税改（低于 3,000 NOK 包裹豁免清关费）</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-stone-800 shrink-0 mt-0.5" />
                <span>B2C 小单直邮测款 + B2B 线下设计买手店样品盒低成本展业</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-stone-800 shrink-0 mt-0.5" />
                <span>适配 Apple Watch Ultra 及挪威主流户外 Garmin 严苛生态</span>
              </div>
            </div>

            {/* Quick Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('calculator')}
                className="px-4 py-2.5 rounded-lg bg-stone-900 text-stone-100 text-xs sm:text-sm font-medium hover:bg-stone-800 transition-colors flex items-center gap-2 shadow-xs"
              >
                <span>进入 VOEC 利润测算器</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('products')}
                className="px-4 py-2.5 rounded-lg bg-stone-100 text-stone-800 text-xs sm:text-sm font-medium hover:bg-stone-200 transition-colors border border-stone-200"
              >
                <span>浏览 4 大非遗融合胶囊系列</span>
              </button>
              <button
                onClick={() => onNavigate('roadmap')}
                className="px-3.5 py-2.5 rounded-lg text-stone-600 text-xs sm:text-sm hover:text-stone-900 transition-colors"
              >
                <span>查看 0-180 天落地路线图 →</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-stone-200 shadow-sm bg-stone-100 aspect-16/10 sm:aspect-16/9 lg:aspect-4/3">
              <img
                src="/src/assets/images/hero_nordic_fusion_watchstrap_1792474484680.jpg"
                alt="挪威峡湾苔石背景上的中国宋锦与北欧传统纹样智能表带商业实拍"
                className="w-full h-full object-cover"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-5 text-white">
                <span className="text-xs font-mono uppercase tracking-widest text-stone-300">
                  Capsule Specimen · High Altitude Test
                </span>
                <h3 className="font-display font-semibold text-base sm:text-lg text-white">
                  峡湾宋锦 × 挪威 Selburose 八瓣玫瑰
                </h3>
                <p className="text-xs text-stone-300 line-clamp-2 mt-1">
                  高密真丝提花面料复合 FKM 氟橡胶衬底，抗寒抗汗，适配 Apple Watch Ultra 与 316L 喷砂钛灰五金。
                </p>
              </div>
            </div>

            {/* Strategic proof metrics bar */}
            <div className="mt-4 grid grid-cols-3 gap-2 text-center bg-stone-50 border border-stone-200 rounded-xl p-3">
              <div>
                <div className="text-xs text-stone-500">挪威智能表渗透率</div>
                <div className="text-base sm:text-lg font-bold font-display text-stone-900 tabular-nums">
                  68.4%
                </div>
              </div>
              <div className="border-x border-stone-200">
                <div className="text-xs text-stone-500">主流定价甜区</div>
                <div className="text-base sm:text-lg font-bold font-display text-stone-900 tabular-nums">
                  490-790 NOK
                </div>
              </div>
              <div>
                <div className="text-xs text-stone-500">综合毛利空间</div>
                <div className="text-base sm:text-lg font-bold font-display text-stone-900 tabular-nums">
                  68% - 78%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

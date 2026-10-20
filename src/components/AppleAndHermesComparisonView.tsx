import React, { useState } from 'react';
import { Sparkles, ShieldAlert, Check, X, ArrowRight, DollarSign, Users, Award, ExternalLink } from 'lucide-react';

interface StrapCategory {
  id: string;
  name: string;
  tier: string;
  brand: string;
  priceNOK: string;
  priceRMB: string;
  image: string;
  targetPersonaNorway: string;
  strengths: string[];
  weaknesses: string[];
  occasionFit: {
    gym: string;
    office: string;
    outdoor: string;
    bunadGala: string;
  };
  b2bMargin: string;
}

export const AppleAndHermesComparisonView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'comparison' | 'hermes_deep_dive' | 'strategy'>('comparison');

  const strapCategories: StrapCategory[] = [
    {
      id: 'apple_oem',
      name: 'Apple 官方现役主力表带 (Sport / Alpine / Trail)',
      tier: '大众功能性科技配件 (Tech Utility)',
      brand: 'Apple Inc. (加州设计 · 中国/越南代工)',
      priceNOK: '499 - 999 NOK',
      priceRMB: '¥379 - ¥779 RMB',
      image: '/src/assets/images/apple_oem_watch_bands_1792479785771.jpg',
      targetPersonaNorway: '奥斯陆通勤上班族、日常健身房常客、苹果全家桶重度用户。追求省心、标准化与绝对兼容，审美偏好极简工业风。',
      strengths: [
        '生态原厂光环，与 Apple Watch 机身和 watchOS 表盘软硬件 100% 契合',
        '五金公差严苛，Ultra 钛金属高山扣与野外回环抗拉扯能力强',
        '全球 Apple Store 与挪威 Elkjøp、Power 等巨头全渠道铺货'
      ],
      weaknesses: [
        '毫无个性与文化温度，奥斯陆街头与地铁撞款率高达 80%',
        '彩色硅胶与尼龙易吸附油污灰尘，长时间佩戴易产生气味',
        '极其冰冷机械，搭配挪威 5月17日 宪法日传统 Bunad 盛装或晚宴西装时极为滑稽'
      ],
      occasionFit: {
        gym: '★★★★★ (最佳)',
        office: '★★★☆☆ (普通)',
        outdoor: '★★★★☆ (较好)',
        bunadGala: '★☆☆☆☆ (灾难搭配)'
      },
      b2bMargin: '买手店几乎无法拿到利润（渠道进货扣点微薄，仅适合巨头连锁带货）'
    },
    {
      id: 'apple_hermes',
      name: 'Apple Watch Hermès 爱马仕官方联名系列',
      tier: '法式高奢时尚配饰 (Luxury Fashion)',
      brand: 'Apple × Hermès (巴黎高奢 · 法国手工皮坊)',
      priceNOK: '3,490 - 9,990 NOK',
      priceRMB: '¥2,799 - ¥7,999 RMB',
      image: '/src/assets/images/hermes_apple_watch_strap_1792479785403.jpg',
      targetPersonaNorway: '挪威富人区（如奥斯陆 Frogner/Bygdøy）高净值金领、时尚主编、奢侈品藏家。重视社会阶层符号与 Hermès 橙色专属表盘溢价。',
      strengths: [
        '全球顶尖奢侈品地位，专属爱马仕定制动态表盘与马鞍针法皮质',
        '今年主打的 Twill Jump 双色高定跳跃斜纹与 Kilim 几何 H 纹氟橡胶，兼顾了年轻化视觉',
        '包装与开箱奢华仪式感登峰造极'
      ],
      weaknesses: [
        '售价极度昂贵，一条表带常超过手表主机本身 2 倍以上',
        '浓厚的法式凡尔赛与马术贵族叙事，与挪威崇尚旷野自由、朴实平等的社会文化存在隔阂',
        '无法耐受挪威 -20℃ 极地极寒与暴风雪高山徒步，更无法适配庞大的 Garmin 户外表群'
      ],
      occasionFit: {
        gym: '★★☆☆☆ (除Kilim外均不适宜)',
        office: '★★★★★ (奢华尊贵)',
        outdoor: '★☆☆☆☆ (娇贵忌水)',
        bunadGala: '★★★☆☆ (虽奢华但文化错位)'
      },
      b2bMargin: '完全被爱马仕直营精品店垄断，独立买手店和普通文创店零配额'
    },
    {
      id: 'our_fusion',
      name: '北欧·华韵 中挪非遗跨界智能表带 (本项目)',
      tier: '轻奢人文与极地机能跨界 (Cultural Affordable Luxury)',
      brand: '北欧·华韵 (中挪文化互敬 · 苏州非遗/东莞精工)',
      priceNOK: '490 - 790 NOK',
      priceRMB: '¥320 - ¥520 RMB',
      image: '/src/assets/images/strap_bunad_embroidery_silk_1792474487078.jpg',
      targetPersonaNorway: '挪威文化盛装拥有者、注重穿搭个性的高品位中产女性、极光荒野探险家、买手店常客。追求“既要爱马仕般的触感，又要属于挪威的文化骄傲”。',
      strengths: [
        '精准击穿“爱马仕的质感 + 1/5 的价格 + 挪威本土民俗灵魂”黄金甜区',
        '双面工程结构：正面高定宋锦/苏绣/植鞣皮，贴肤反面医用氟橡胶导汗槽，兼备耐候防污',
        '独创专为 5月17日 宪法日 Bunad 礼服定制的索尔耶（Sølje）银饰快拆件，填补国民痛点',
        '同时支持 Apple Watch 全系与挪威市场占有率极高的 Garmin 户外表'
      ],
      weaknesses: [
        '初创期品牌知名度不及 Apple 或 Hermès，需借由买手店与真实口碑沉淀'
      ],
      occasionFit: {
        gym: '★★★★☆ (氟橡胶内衬防汗)',
        office: '★★★★★ (优雅低调)',
        outdoor: '★★★★☆ (-35℃抗冻)',
        bunadGala: '★★★★★ (终极天花板)'
      },
      b2bMargin: '给挪威买手店让利高达 45% - 50%（批发进货动力极强，单件净赚 270-400 NOK）'
    }
  ];

  return (
    <div className="space-y-12 py-6">
      {/* Chapter header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
          <span>Module 04 · Apple & Hermès Official Benchmark</span>
          <span aria-hidden="true">·</span>
          <span>Market Positioning & Luxury Disruption</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-stone-900 tracking-tight">
          苹果官方现役系列 & 爱马仕联名全景对比与降维破局
        </h2>
        <p className="text-stone-600 text-sm mt-2 max-w-3xl leading-relaxed">
          深入拆解今年 Apple 官方主力表带（Sport/Alpine/Trail）与爱马仕联名款（Twill Jump / Kilim / Grand H）的视觉、价格、用户画像与场景软肋，确立我们的“平价高奢文化平替”进攻路径。
        </p>
      </div>

      {/* View Switcher Tabs */}
      <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-xl w-fit text-xs font-medium">
        <button
          onClick={() => setActiveTab('comparison')}
          className={`px-3.5 py-1.5 rounded-lg transition-colors ${
            activeTab === 'comparison'
              ? 'bg-stone-900 text-white shadow-2xs font-semibold'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          三大梯队全景对照看板
        </button>
        <button
          onClick={() => setActiveTab('hermes_deep_dive')}
          className={`px-3.5 py-1.5 rounded-lg transition-colors ${
            activeTab === 'hermes_deep_dive'
              ? 'bg-stone-900 text-white shadow-2xs font-semibold'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          爱马仕联名系列今年款式解构
        </button>
        <button
          onClick={() => setActiveTab('strategy')}
          className={`px-3.5 py-1.5 rounded-lg transition-colors ${
            activeTab === 'strategy'
              ? 'bg-stone-900 text-white shadow-2xs font-semibold'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          降维打击“平价爱马仕”商业打法
        </button>
      </div>

      {/* Tab 1: 3-way Side-by-Side Cards */}
      {activeTab === 'comparison' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {strapCategories.map((item) => (
            <div
              key={item.id}
              className={`rounded-2xl border p-6 flex flex-col justify-between space-y-6 ${
                item.id === 'our_fusion'
                  ? 'bg-stone-900 text-white border-stone-800 shadow-md ring-1 ring-stone-900'
                  : 'bg-white text-stone-900 border-stone-200 shadow-2xs'
              }`}
            >
              <div className="space-y-4">
                {/* Image Showcase */}
                <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-stone-100 border border-black/5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className={`absolute top-2.5 left-2.5 text-3xs font-mono px-2 py-0.5 rounded backdrop-blur-sm ${
                    item.id === 'our_fusion' ? 'bg-amber-400 text-stone-950 font-bold' : 'bg-black/70 text-white'
                  }`}>
                    {item.tier}
                  </div>
                </div>

                {/* Title & Price */}
                <div>
                  <span className={`text-3xs uppercase font-mono ${item.id === 'our_fusion' ? 'text-stone-400' : 'text-stone-500'}`}>
                    {item.brand}
                  </span>
                  <h3 className="font-display font-bold text-lg mt-0.5 line-clamp-2">
                    {item.name}
                  </h3>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className={`text-2xl font-bold font-display tabular-nums ${
                      item.id === 'our_fusion' ? 'text-amber-300' : item.id === 'apple_hermes' ? 'text-rose-600' : 'text-stone-900'
                    }`}>
                      {item.priceNOK}
                    </span>
                    <span className={`text-xs ${item.id === 'our_fusion' ? 'text-stone-400' : 'text-stone-500'}`}>
                      (≈ {item.priceRMB})
                    </span>
                  </div>
                </div>

                {/* User Persona */}
                <div className={`p-3 rounded-xl text-xs space-y-1 ${
                  item.id === 'our_fusion' ? 'bg-stone-800/80 border border-stone-700' : 'bg-stone-50 border border-stone-100'
                }`}>
                  <span className={`font-semibold flex items-center gap-1.5 text-3xs uppercase tracking-wider ${
                    item.id === 'our_fusion' ? 'text-amber-300' : 'text-stone-700'
                  }`}>
                    <Users className="w-3.5 h-3.5" />
                    <span>挪威核心受众画像</span>
                  </span>
                  <p className={`text-3xs leading-relaxed ${item.id === 'our_fusion' ? 'text-stone-300' : 'text-stone-600'}`}>
                    {item.targetPersonaNorway}
                  </p>
                </div>

                {/* Pros and Cons */}
                <div className="space-y-2 text-3xs">
                  <span className="font-semibold block uppercase tracking-wider opacity-80">优势与壁垒</span>
                  <ul className="space-y-1 leading-relaxed opacity-90">
                    {item.strengths.map((str, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{str}</span>
                      </li>
                    ))}
                  </ul>

                  <span className="font-semibold block uppercase tracking-wider opacity-80 pt-1">软肋与硬伤</span>
                  <ul className="space-y-1 leading-relaxed opacity-90">
                    {item.weaknesses.map((weak, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <X className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                        <span>{weak}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Occasion & Margin Strip */}
              <div className={`pt-4 border-t space-y-3 ${
                item.id === 'our_fusion' ? 'border-stone-800' : 'border-stone-100'
              }`}>
                <div className="grid grid-cols-2 gap-2 text-3xs">
                  <div className="p-2 rounded bg-black/5 dark:bg-white/5">
                    <span className="opacity-70 block">健身与暴汗</span>
                    <span className="font-semibold">{item.occasionFit.gym}</span>
                  </div>
                  <div className="p-2 rounded bg-black/5 dark:bg-white/5">
                    <span className="opacity-70 block">Bunad 国服盛典</span>
                    <span className="font-semibold">{item.occasionFit.bunadGala}</span>
                  </div>
                </div>

                <div className={`text-3xs p-2 rounded-lg leading-relaxed ${
                  item.id === 'our_fusion' ? 'bg-amber-400/10 text-amber-200 border border-amber-400/20' : 'bg-stone-100 text-stone-600'
                }`}>
                  <strong>B2B 买手利润：</strong>{item.b2bMargin}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 2: Hermes Deep Dive */}
      {activeTab === 'hermes_deep_dive' && (
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-2xs space-y-6">
          <div className="flex items-center justify-between border-b border-stone-100 pb-4 flex-wrap gap-2">
            <div>
              <h3 className="font-display font-bold text-xl text-stone-900">
                今年 Apple Watch Hermès 爱马仕联名四大主力款式拆解
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                剖析法国奢侈品在材料、织造、五金与品牌溢价背后的逻辑与破绽
              </p>
            </div>
            <span className="text-xs font-mono text-stone-500 bg-stone-100 px-3 py-1 rounded">
              Hermès Collection 2024-2026
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-stone-700">
            {/* Model 1 */}
            <div className="p-5 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="flex justify-between items-baseline">
                <h4 className="font-display font-bold text-stone-900 text-sm">
                  01. Twill Jump Single Tour (跳跃斜纹高定织物)
                </h4>
                <span className="font-bold text-rose-700 tabular-nums">3,490 NOK</span>
              </div>
              <p className="text-3xs text-stone-600 leading-relaxed">
                <strong>材质与工艺：</strong>采用高密精纺双色尼龙斜纹织物，灵感来自爱马仕经典马术障碍赛跑马杆色彩。边缘做精准高反差滚边缝线，配经典马鞍搭扣。
              </p>
              <p className="text-3xs text-stone-500">
                <strong>痛点反思：</strong>本质依然是合成织物，但溢价达数十倍；遇到挪威雨雪容易浸湿吸味，且与北欧本土文化毫无纽带。
              </p>
            </div>

            {/* Model 2 */}
            <div className="p-5 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="flex justify-between items-baseline">
                <h4 className="font-display font-bold text-stone-900 text-sm">
                  02. Kilim Single Tour (几何 H 纹防水氟橡胶)
                </h4>
                <span className="font-bold text-rose-700 tabular-nums">3,490 NOK</span>
              </div>
              <p className="text-3xs text-stone-600 leading-relaxed">
                <strong>材质与工艺：</strong>爱马仕首款专为运动抗水打造的表带，采用交错互锁的“H”形几何模切软质防水橡胶，配弹簧快拆蝴蝶扣。
              </p>
              <p className="text-3xs text-stone-500">
                <strong>痛点反思：</strong>开模精细但设计偏西方名媛度假风，无法满足挪威极端 -25℃ 高山滑雪的保暖与防扯脱极限需求。
              </p>
            </div>

            {/* Model 3 */}
            <div className="p-5 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="flex justify-between items-baseline">
                <h4 className="font-display font-bold text-stone-900 text-sm">
                  03. Grand H (全精钢高级链带)
                </h4>
                <span className="font-bold text-rose-700 tabular-nums">9,990 NOK</span>
              </div>
              <p className="text-3xs text-stone-600 leading-relaxed">
                <strong>材质与工艺：</strong>316L 不锈钢链节，微雕反光缎面打磨与倒角抛光，隐形双折叠蝴蝶扣。单条表带售价近 10,000 克朗（超 ¥6,700 元）。
              </p>
              <p className="text-3xs text-stone-500">
                <strong>痛点反思：</strong>极度沉重，挪威崇尚户外自然与平民主义生活，穿金戴银的高调奢华在当地往往被视为炫耀（违反挪威 Janteloven 平等文化）。
              </p>
            </div>

            {/* Model 4 */}
            <div className="p-5 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="flex justify-between items-baseline">
                <h4 className="font-display font-bold text-stone-900 text-sm">
                  04. Barénia & Torsade (经典马鞍皮与编织绳带)
                </h4>
                <span className="font-bold text-rose-700 tabular-nums">4,490 - 5,990 NOK</span>
              </div>
              <p className="text-3xs text-stone-600 leading-relaxed">
                <strong>材质与工艺：</strong>爱马仕传奇的 Barénia 小牛皮，经双面手工蜡线马鞍缝（Sellier Stitch），触感丝滑，随岁月变深形成油润光泽。
              </p>
              <p className="text-3xs text-stone-500">
                <strong>痛点反思：</strong>极度畏水怕汗，佩戴出汗极易在浅色皮面上留下永久水渍痕迹，保养繁琐。
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Positioning Strategy */}
      {activeTab === 'strategy' && (
        <div className="bg-stone-900 text-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-md">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-stone-400">
            <span>Strategic Playbook</span>
            <span aria-hidden="true">·</span>
            <span>Positioning Against Apple & Hermès</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-display font-bold text-white max-w-2xl text-balance">
            定位为“挪威国民文化高定”：借势爱马仕的工艺心智，打出 1/5 售价与本土文化共鸣
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-stone-800 text-xs">
            <div className="space-y-2 bg-stone-800/80 p-4 rounded-xl border border-stone-700">
              <span className="text-amber-300 font-bold block text-sm">
                01. 借势高定工艺心智
              </span>
              <p className="text-stone-300 text-3xs leading-relaxed">
                在海外官网与买手推介中，直接以<strong>“Silk Brocade vs French Twill（宋锦织造对比法式跳跃斜纹）”</strong>为切入点。
                中国宋锦与苏绣具有千年的皇家御用手工传承，织密与立体光泽完全不逊于爱马仕，以工匠精神打动崇尚物料品质的挪威精英。
              </p>
            </div>

            <div className="space-y-2 bg-stone-800/80 p-4 rounded-xl border border-stone-700">
              <span className="text-amber-300 font-bold block text-sm">
                02. 痛击爱马仕的文化缺位
              </span>
              <p className="text-stone-300 text-3xs leading-relaxed">
                爱马仕卖的是“法国马术贵族”，但挪威人骨子里认同的是<strong>“峡湾高山（Friluftsliv）”</strong>和<strong>“宪法日民族服饰（Bunad）”</strong>。
                挪威消费者在 5月17日 宁愿佩戴融入本民族八瓣玫瑰与索尔耶银饰的表带，也不会戴一条不搭调的法国马术皮带。
              </p>
            </div>

            <div className="space-y-2 bg-stone-800/80 p-4 rounded-xl border border-stone-700">
              <span className="text-amber-300 font-bold block text-sm">
                03. 攻克爱马仕的娇贵病
              </span>
              <p className="text-stone-300 text-3xs leading-relaxed">
                爱马仕的真皮带怕水怕汗，下雨或徒步必须取下。我们采用<strong>“非遗织物表层 + 氟橡胶防水底衬”</strong>的双面专利复合结构，
                既保留了高定视觉，又拥有潜水级的防汗抗雨性能，完美契合挪威多雨雪的海洋峡湾气候。
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

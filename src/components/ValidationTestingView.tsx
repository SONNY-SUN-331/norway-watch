import React, { useState } from 'react';
import { VALIDATION_TESTING_FRAMEWORK } from '../data/marketData';
import { PlayCircle, CheckCircle, AlertTriangle, ArrowRight, Gauge, Users, Store, ShoppingCart, Sliders } from 'lucide-react';

export const ValidationTestingView: React.FC = () => {
  const [testBatchSize, setTestBatchSize] = useState<number>(100);
  const [b2cShare, setB2cShare] = useState<number>(40); // 40% B2C, 60% B2B
  const [adSpendNOK, setAdSpendNOK] = useState<number>(2000); // 广告测试预算 2,000 NOK

  // Simulation calculations
  const b2cUnits = Math.round((testBatchSize * b2cShare) / 100);
  const b2bUnits = testBatchSize - b2cUnits;
  const numStores = Math.max(1, Math.round(b2bUnits / 10)); // 10 units per store consignment

  // B2C conversion simulation: adSpend / ~40 NOK CPC = ~50 clicks; with 6% conversion -> ~3 orders per 1000 NOK
  const estB2cOrders = Math.min(b2cUnits, Math.round((adSpendNOK / 50) * 0.08 * 10));
  const estB2cSellThroughRate = Math.min(100, Math.round((estB2cOrders / Math.max(1, b2cUnits)) * 100));

  // B2B consignment simulation (assuming 50% sell-through in 45 days)
  const estB2bSellThroughUnits = Math.round(b2bUnits * 0.65);
  const estB2bRevenueNOK = estB2bSellThroughUnits * 340; // 340 NOK wholesale price
  const estB2cRevenueNOK = estB2cOrders * 599; // 599 NOK retail price

  const totalTestRevenueNOK = estB2cRevenueNOK + estB2bRevenueNOK;
  const totalProductionCostRMB = testBatchSize * 55; // 55 RMB avg BOM + hardware
  const totalProductionCostNOK = Math.round(totalProductionCostRMB / 0.67);
  const testNetProfitNOK = Math.round(totalTestRevenueNOK * 0.8 - totalProductionCostNOK - adSpendNOK);

  return (
    <div className="space-y-12 py-6">
      {/* Chapter header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
          <span>Module 03 · Dual-Channel Testing Framework</span>
          <span aria-hidden="true">·</span>
          <span>B2B & B2C Real-Market Validation</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-stone-900 tracking-tight">
          B2B 与 B2C 双轨低成本测款落地实操体系
        </h2>
        <p className="text-stone-600 text-sm mt-2 max-w-3xl leading-relaxed">
          坚决不做大货压仓冒险！以“首批 100 条种子样机 + 20 套大师样品盒”，分别在数字端（Etsy/独立站）与实体端（奥斯陆买手店）开展敏捷科学测款。
        </p>
      </div>

      {/* Interactive Simulator Bar */}
      <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-2xs space-y-6">
        <div className="flex items-center justify-between border-b border-stone-100 pb-3 flex-wrap gap-2">
          <div>
            <h3 className="font-display font-bold text-lg text-stone-900 flex items-center gap-2">
              <Sliders className="w-5 h-5 text-stone-800" />
              <span>首批 100 条双轨测款沙盘模拟器</span>
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">调节样品分配与测试参数，预判回款与动销速率</p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded bg-stone-100 text-stone-800">
            首期资金闭环验证
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          {/* Slider 1: Total test batch */}
          <div className="space-y-2">
            <div className="flex justify-between font-medium">
              <span className="text-stone-700">首批测试样机总量</span>
              <span className="font-bold text-stone-900 tabular-nums">{testBatchSize} 条</span>
            </div>
            <input
              type="range"
              min="50"
              max="200"
              step="10"
              value={testBatchSize}
              onChange={(e) => setTestBatchSize(Number(e.target.value))}
              className="w-full accent-stone-900"
            />
            <span className="text-3xs text-stone-400">工厂小批量打样最低经济起订量 (MOQ)</span>
          </div>

          {/* Slider 2: B2C vs B2B distribution */}
          <div className="space-y-2">
            <div className="flex justify-between font-medium">
              <span className="text-stone-700">渠道配比 (B2C : B2B)</span>
              <span className="font-bold text-stone-900 tabular-nums">{b2cShare}% B2C ({b2cUnits}条) : {100 - b2cShare}% B2B ({b2bUnits}条)</span>
            </div>
            <input
              type="range"
              min="20"
              max="80"
              step="5"
              value={b2cShare}
              onChange={(e) => setB2cShare(Number(e.target.value))}
              className="w-full accent-stone-900"
            />
            <span className="text-3xs text-stone-400">约对接 {numStores} 家买手店（每店铺货 10 条）</span>
          </div>

          {/* Slider 3: Ad spend */}
          <div className="space-y-2">
            <div className="flex justify-between font-medium">
              <span className="text-stone-700">B2C 极简投流与红人置换</span>
              <span className="font-bold text-stone-900 tabular-nums">{adSpendNOK} NOK (≈ ¥{Math.round(adSpendNOK * 0.67)}元)</span>
            </div>
            <input
              type="range"
              min="500"
              max="5000"
              step="250"
              value={adSpendNOK}
              onChange={(e) => setAdSpendNOK(Number(e.target.value))}
              className="w-full accent-stone-900"
            />
            <span className="text-3xs text-stone-400">控制在 2-3 个核心红人体验或微量搜索拦截</span>
          </div>
        </div>

        {/* Dynamic Simulation Result Card */}
        <div className="p-5 bg-stone-900 text-white rounded-xl grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <span className="text-3xs text-stone-400 block uppercase">测试总营收预估</span>
            <span className="text-xl sm:text-2xl font-bold font-display text-white tabular-nums mt-0.5 block">
              {totalTestRevenueNOK.toLocaleString()} NOK
            </span>
            <span className="text-3xs text-stone-400">≈ ¥{Math.round(totalTestRevenueNOK * 0.67).toLocaleString()} RMB</span>
          </div>

          <div>
            <span className="text-3xs text-stone-400 block uppercase">B2B 寄售动销速度</span>
            <span className="text-xl sm:text-2xl font-bold font-display text-amber-300 tabular-nums mt-0.5 block">
              约 {estB2bSellThroughUnits} 条 / 45天
            </span>
            <span className="text-3xs text-stone-400">{numStores} 家店铺平均动销率 65%</span>
          </div>

          <div>
            <span className="text-3xs text-stone-400 block uppercase">B2C 线上销出</span>
            <span className="text-xl sm:text-2xl font-bold font-display text-emerald-400 tabular-nums mt-0.5 block">
              {estB2cOrders} 条已转化
            </span>
            <span className="text-3xs text-stone-400">售罄率 {estB2cSellThroughRate}%</span>
          </div>

          <div>
            <span className="text-3xs text-stone-400 block uppercase">测试期净回收现金流</span>
            <span className="text-xl sm:text-2xl font-bold font-display text-emerald-400 tabular-nums mt-0.5 block">
              + {testNetProfitNOK.toLocaleString()} NOK
            </span>
            <span className="text-3xs text-stone-400">已完全收回打样生产本金</span>
          </div>
        </div>
      </div>

      {/* Dual Track Detailed Protocol Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Track 1: B2C Protocol */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200 shadow-2xs space-y-4">
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-stone-800" />
              <h3 className="font-display font-bold text-base text-stone-900">
                {VALIDATION_TESTING_FRAMEWORK.b2cTesting.title}
              </h3>
            </div>
            <span className="text-3xs font-mono text-stone-500">
              周期：{VALIDATION_TESTING_FRAMEWORK.b2cTesting.duration}
            </span>
          </div>

          <div className="space-y-3.5 text-xs">
            {VALIDATION_TESTING_FRAMEWORK.b2cTesting.steps.map((st, i) => (
              <div key={i} className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                <span className="font-semibold text-stone-900 block">{st.stepName}</span>
                <p className="text-stone-600 text-3xs leading-relaxed">{st.description}</p>
                <div className="pt-1 text-3xs text-emerald-800 font-medium">
                  <strong>考核合格指标：</strong>{st.metrics}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Track 2: B2B Protocol */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200 shadow-2xs space-y-4">
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <div className="flex items-center gap-2">
              <Store className="w-5 h-5 text-stone-800" />
              <h3 className="font-display font-bold text-base text-stone-900">
                {VALIDATION_TESTING_FRAMEWORK.b2bTesting.title}
              </h3>
            </div>
            <span className="text-3xs font-mono text-stone-500">
              周期：{VALIDATION_TESTING_FRAMEWORK.b2bTesting.duration}
            </span>
          </div>

          <div className="space-y-3.5 text-xs">
            {VALIDATION_TESTING_FRAMEWORK.b2bTesting.steps.map((st, i) => (
              <div key={i} className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                <span className="font-semibold text-stone-900 block">{st.stepName}</span>
                <p className="text-stone-600 text-3xs leading-relaxed">{st.description}</p>
                <div className="pt-1 text-3xs text-emerald-800 font-medium">
                  <strong>考核合格指标：</strong>{st.metrics}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decision Rules Panel */}
      <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 space-y-3">
        <h4 className="font-display font-semibold text-stone-900 text-sm flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-700" />
          <span>测款决策红绿灯法则 (Go / No-Go Decision Rules)</span>
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          {VALIDATION_TESTING_FRAMEWORK.decisionRules.map((r, i) => (
            <div key={i} className="p-3 bg-white rounded-lg border border-stone-200 text-stone-700 text-3xs leading-relaxed">
              · {r.rule}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

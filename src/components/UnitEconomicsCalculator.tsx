import React, { useState } from 'react';
import { Calculator, ArrowRight, DollarSign, TrendingUp, RefreshCw, HelpCircle, CheckCircle } from 'lucide-react';

export const UnitEconomicsCalculator: React.FC = () => {
  // Preset scenario configurations
  const [modelType, setModelType] = useState<'b2c_shopify' | 'b2c_etsy' | 'b2b_wholesale'>('b2c_shopify');

  // Input states
  const [retailPriceNOK, setRetailPriceNOK] = useState<number>(599);
  const [exchangeRate, setExchangeRate] = useState<number>(0.67); // 1 NOK = 0.67 RMB
  const [bomCostRMB, setBomCostRMB] = useState<number>(32); // 面料+皮料
  const [hardwareCostRMB, setHardwareCostRMB] = useState<number>(15); // 五金连接扣
  const [packagingCostRMB, setPackagingCostRMB] = useState<number>(6); // FSC牛皮纸盒+说明书
  const [shippingCostRMB, setShippingCostRMB] = useState<number>(38); // 云途特快小包直发挪威
  const [marketingCACRate, setMarketingCACRate] = useState<number>(18); // 营销获客成本占比 (B2C)
  const [platformFeeRate, setPlatformFeeRate] = useState<number>(3.5); // 平台/支付通道手续费
  const [wholesaleDiscountRate, setWholesaleDiscountRate] = useState<number>(45); // B2B批发折扣率 (45% off)
  const [monthlyVolume, setMonthlyVolume] = useState<number>(150); // 预计月出货量

  // Quick preset apply
  const applyPreset = (type: 'b2c_shopify' | 'b2c_etsy' | 'b2b_wholesale') => {
    setModelType(type);
    if (type === 'b2c_shopify') {
      setRetailPriceNOK(599);
      setShippingCostRMB(38);
      setMarketingCACRate(18);
      setPlatformFeeRate(3.5);
    } else if (type === 'b2c_etsy') {
      setRetailPriceNOK(649);
      setShippingCostRMB(38);
      setMarketingCACRate(10); // Etsy自带自然文化流量
      setPlatformFeeRate(9.5); // Etsy交易费6.5% + 支付处理费
    } else if (type === 'b2b_wholesale') {
      setRetailPriceNOK(599);
      setWholesaleDiscountRate(45); // 批发进货价通常为零售价的 55%
      setShippingCostRMB(14); // 50-100条批量空运拼箱，单件运费骤降
      setMarketingCACRate(0); // B2B无单个买家广告费
      setPlatformFeeRate(1.5); // 国际电汇/信用证结算手续费
    }
  };

  // Calculations
  const totalFactoryCostRMB = bomCostRMB + hardwareCostRMB + packagingCostRMB;
  const isB2B = modelType === 'b2b_wholesale';

  // Effective revenue per unit in NOK
  const effectiveRevenueNOK = isB2B
    ? retailPriceNOK * ((100 - wholesaleDiscountRate) / 100)
    : retailPriceNOK;

  const effectiveRevenueRMB = effectiveRevenueNOK * exchangeRate;

  // VOEC Norwegian MVA (VAT): 25% of net price (Price = Net * 1.25 -> MVA = Price * 20%)
  // In Norway, retail prices shown to consumers must be inclusive of 25% MVA
  const voecMvaNOK = isB2B ? 0 : (retailPriceNOK * 20) / 100;
  const voecMvaRMB = voecMvaNOK * exchangeRate;

  // Net revenue before costs in RMB
  const netRevenueAfterVatRMB = effectiveRevenueRMB - voecMvaRMB;

  // Platform & Payment processing fee
  const platformFeeRMB = effectiveRevenueRMB * (platformFeeRate / 100);

  // Marketing cost per unit
  const marketingCostRMB = isB2B ? 0 : effectiveRevenueRMB * (marketingCACRate / 100);

  // Total cost per unit in RMB
  const totalUnitCostRMB = totalFactoryCostRMB + shippingCostRMB + platformFeeRMB + marketingCostRMB;

  // Net Profit per unit
  const netProfitUnitRMB = netRevenueAfterVatRMB - (totalFactoryCostRMB + shippingCostRMB + platformFeeRMB + marketingCostRMB);
  const netProfitUnitNOK = netProfitUnitRMB / exchangeRate;

  // Net Profit Margin %
  const netProfitMarginPercent = Math.max(0, Math.round((netProfitUnitRMB / effectiveRevenueRMB) * 100));

  // Monthly aggregates
  const monthlyTotalRevenueNOK = Math.round(effectiveRevenueNOK * monthlyVolume);
  const monthlyNetProfitRMB = Math.round(netProfitUnitRMB * monthlyVolume);
  const monthlyNetProfitNOK = Math.round(netProfitUnitNOK * monthlyVolume);

  // Initial Bootstrapping Capital requirement
  const initialBatchUnits = 100;
  const initialCapitalRMB = (totalFactoryCostRMB * initialBatchUnits) + 1200; // 样机与包装初期备料
  const breakevenUnits = Math.ceil(initialCapitalRMB / Math.max(1, netProfitUnitRMB));

  return (
    <div className="space-y-12 py-6">
      {/* Chapter header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
          <span>Chapter 04</span>
          <span aria-hidden="true">·</span>
          <span>Financial Simulation & VOEC Economics</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-stone-900 tracking-tight">
          动态单品经济模型与挪威 VOEC 税费测算器
        </h2>
        <p className="text-stone-600 text-sm mt-2 max-w-3xl leading-relaxed">
          挪威海关要求 B2C 包裹含 25% 增值税（MVA）。下方模型已全面打通“中国出厂成本、空运特快专线、挪威增值税、平台扣点与营销费用”，助您精准模拟现金流。
        </p>
      </div>

      {/* Preset Model Switcher */}
      <div className="flex items-center gap-2 p-1.5 bg-stone-100 rounded-xl max-w-2xl">
        <button
          onClick={() => applyPreset('b2c_shopify')}
          className={`flex-1 py-2 px-3 text-xs font-medium rounded-lg transition-colors ${
            modelType === 'b2c_shopify'
              ? 'bg-stone-900 text-white shadow-xs font-semibold'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          B2C 品牌独立站 (Shopify + DDP)
        </button>
        <button
          onClick={() => applyPreset('b2c_etsy')}
          className={`flex-1 py-2 px-3 text-xs font-medium rounded-lg transition-colors ${
            modelType === 'b2c_etsy'
              ? 'bg-stone-900 text-white shadow-xs font-semibold'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          Etsy 北欧手作文创专营 (自动代缴VOEC)
        </button>
        <button
          onClick={() => applyPreset('b2b_wholesale')}
          className={`flex-1 py-2 px-3 text-xs font-medium rounded-lg transition-colors ${
            modelType === 'b2b_wholesale'
              ? 'bg-stone-900 text-white shadow-xs font-semibold'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          B2B 买手店批发走量 (50-100条小拼箱)
        </button>
      </div>

      {/* Calculator Grid: Inputs Left, Dashboard Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Input Form Controls */}
        <div className="lg:col-span-6 bg-white p-6 sm:p-7 rounded-2xl border border-stone-200 shadow-2xs space-y-6">
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <h3 className="font-display font-semibold text-stone-900 text-base flex items-center gap-2">
              <Calculator className="w-4 h-4 text-stone-700" />
              <span>成本与参数配置面板</span>
            </h3>
            <span className="text-xs text-stone-500">实时联动重算</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            {/* Retail price */}
            <div className="space-y-1.5">
              <label className="font-medium text-stone-700 block">
                挪威终端建议零售价 (NOK)
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={retailPriceNOK}
                  onChange={(e) => setRetailPriceNOK(Math.max(100, Number(e.target.value)))}
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg text-stone-900 font-semibold tabular-nums focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-stone-900"
                />
                <span className="absolute right-3 top-2 text-stone-400 font-mono">NOK</span>
              </div>
              <span className="text-stone-400 text-3xs">
                折合人民币约 ¥{Math.round(retailPriceNOK * exchangeRate)} 元
              </span>
            </div>

            {/* Exchange rate */}
            <div className="space-y-1.5">
              <label className="font-medium text-stone-700 block">
                克朗汇率 (1 NOK = ? RMB)
              </label>
              <input
                type="number"
                step="0.01"
                value={exchangeRate}
                onChange={(e) => setExchangeRate(Number(e.target.value))}
                className="w-full px-3 py-2 border border-stone-300 rounded-lg text-stone-900 tabular-nums focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-stone-900"
              />
              <span className="text-stone-400 text-3xs">当前参考汇率 0.65 - 0.70</span>
            </div>

            {/* BOM cost */}
            <div className="space-y-1.5">
              <label className="font-medium text-stone-700 block">
                面料/皮料原料成本 (RMB)
              </label>
              <input
                type="number"
                value={bomCostRMB}
                onChange={(e) => setBomCostRMB(Number(e.target.value))}
                className="w-full px-3 py-2 border border-stone-300 rounded-lg text-stone-900 tabular-nums focus:outline-none focus:ring-2 focus:ring-stone-900"
              />
            </div>

            {/* Hardware cost */}
            <div className="space-y-1.5">
              <label className="font-medium text-stone-700 block">
                快拆五金连接扣成本 (RMB)
              </label>
              <input
                type="number"
                value={hardwareCostRMB}
                onChange={(e) => setHardwareCostRMB(Number(e.target.value))}
                className="w-full px-3 py-2 border border-stone-300 rounded-lg text-stone-900 tabular-nums focus:outline-none focus:ring-2 focus:ring-stone-900"
              />
            </div>

            {/* Packaging */}
            <div className="space-y-1.5">
              <label className="font-medium text-stone-700 block">
                环保原木牛皮纸盒 (RMB)
              </label>
              <input
                type="number"
                value={packagingCostRMB}
                onChange={(e) => setPackagingCostRMB(Number(e.target.value))}
                className="w-full px-3 py-2 border border-stone-300 rounded-lg text-stone-900 tabular-nums focus:outline-none focus:ring-2 focus:ring-stone-900"
              />
            </div>

            {/* Shipping */}
            <div className="space-y-1.5">
              <label className="font-medium text-stone-700 block">
                国际物流特快专线 (RMB/件)
              </label>
              <input
                type="number"
                value={shippingCostRMB}
                onChange={(e) => setShippingCostRMB(Number(e.target.value))}
                className="w-full px-3 py-2 border border-stone-300 rounded-lg text-stone-900 tabular-nums focus:outline-none focus:ring-2 focus:ring-stone-900"
              />
              <span className="text-stone-400 text-3xs">
                {isB2B ? 'B2B小拼箱约12-18元' : '小包单票约35-42元'}
              </span>
            </div>

            {/* Model specific controls */}
            {isB2B ? (
              <div className="space-y-1.5 sm:col-span-2">
                <div className="flex justify-between">
                  <label className="font-medium text-stone-700">
                    B2B 买手店批发折扣率
                  </label>
                  <span className="font-bold text-stone-900 tabular-nums">
                    {wholesaleDiscountRate}% 折扣 (供货价 {Math.round(retailPriceNOK * (1 - wholesaleDiscountRate / 100))} NOK)
                  </span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="60"
                  value={wholesaleDiscountRate}
                  onChange={(e) => setWholesaleDiscountRate(Number(e.target.value))}
                  className="w-full accent-stone-900"
                />
              </div>
            ) : (
              <>
                <div className="space-y-1.5">
                  <label className="font-medium text-stone-700 block">
                    预估营销获客成本率 (%)
                  </label>
                  <input
                    type="number"
                    value={marketingCACRate}
                    onChange={(e) => setMarketingCACRate(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg text-stone-900 tabular-nums focus:outline-none focus:ring-2 focus:ring-stone-900"
                  />
                  <span className="text-stone-400 text-3xs">小红书/网红送测通常约 10-20%</span>
                </div>
                <div className="space-y-1.5">
                  <label className="font-medium text-stone-700 block">
                    平台手续费与抽佣 (%)
                  </label>
                  <input
                    type="number"
                    step="0.5"
                    value={platformFeeRate}
                    onChange={(e) => setPlatformFeeRate(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg text-stone-900 tabular-nums focus:outline-none focus:ring-2 focus:ring-stone-900"
                  />
                  <span className="text-stone-400 text-3xs">Stripe约3% / Etsy约9.5%</span>
                </div>
              </>
            )}

            {/* Monthly Volume */}
            <div className="space-y-1.5 sm:col-span-2 pt-2 border-t border-stone-100">
              <div className="flex justify-between">
                <label className="font-medium text-stone-700">
                  预估月销出货量
                </label>
                <span className="font-bold text-stone-900 tabular-nums">{monthlyVolume} 条/月</span>
              </div>
              <input
                type="range"
                min="20"
                max="1000"
                step="10"
                value={monthlyVolume}
                onChange={(e) => setMonthlyVolume(Number(e.target.value))}
                className="w-full accent-stone-900"
              />
            </div>
          </div>
        </div>

        {/* Right: Profit & Unit Economics Scorecard */}
        <div className="lg:col-span-6 space-y-6">
          {/* Main Profit KPI Card */}
          <div className="bg-stone-900 text-white rounded-2xl p-6 sm:p-7 space-y-6 shadow-md">
            <div>
              <div className="flex items-center justify-between text-xs text-stone-400 uppercase font-mono tracking-wider">
                <span>Unit Profitability</span>
                <span>{modelType === 'b2b_wholesale' ? 'B2B Wholesale' : 'B2C Direct'}</span>
              </div>
              <div className="mt-2 flex items-baseline gap-3">
                <span className="text-4xl sm:text-5xl font-display font-extrabold text-white tabular-nums">
                  ¥{Math.round(netProfitUnitRMB)}
                </span>
                <span className="text-lg text-emerald-400 font-semibold tabular-nums">
                  ≈ {Math.round(netProfitUnitNOK)} NOK / 件
                </span>
              </div>
              <p className="text-xs text-stone-400 mt-1">
                单件实际落袋纯利润（已完全扣除中国制造、国际小包、挪威25%增值税及平台费）
              </p>
            </div>

            {/* Profit margin bar */}
            <div className="space-y-1.5 pt-2 border-t border-stone-800">
              <div className="flex justify-between text-xs">
                <span className="text-stone-400">净利润率 (Net Margin)</span>
                <span className="text-emerald-400 font-bold tabular-nums text-sm">
                  {netProfitMarginPercent}%
                </span>
              </div>
              <div className="w-full bg-stone-800 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-emerald-400 h-full rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(100, Math.max(5, netProfitMarginPercent))}%` }}
                />
              </div>
            </div>

            {/* Monthly Aggregation Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-stone-800 text-xs">
              <div>
                <span className="text-stone-400 block">月度净现金流入</span>
                <span className="text-2xl font-display font-bold text-white tabular-nums mt-0.5 block">
                  ¥{monthlyNetProfitRMB.toLocaleString()}
                </span>
                <span className="text-3xs text-stone-400">
                  ≈ {monthlyNetProfitNOK.toLocaleString()} NOK
                </span>
              </div>
              <div>
                <span className="text-stone-400 block">首批 100 条回本线</span>
                <span className="text-2xl font-display font-bold text-amber-300 tabular-nums mt-0.5 block">
                  仅需售出 {breakevenUnits} 条
                </span>
                <span className="text-3xs text-stone-400">
                  初始试错本金约 ¥{initialCapitalRMB.toLocaleString()} 元
                </span>
              </div>
            </div>
          </div>

          {/* Breakdown Waterfall */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-2xs space-y-4">
            <h4 className="font-display font-semibold text-stone-900 text-sm">
              单品金额流向瀑布拆解 (每销售 1 条)
            </h4>

            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between items-center text-stone-900 font-medium pb-1 border-b border-stone-100">
                <span>实收毛收入 (Gross Revenue)</span>
                <span className="tabular-nums font-bold">
                  {effectiveRevenueNOK.toFixed(1)} NOK (¥{Math.round(effectiveRevenueRMB)})
                </span>
              </div>

              {!isB2B && (
                <div className="flex justify-between items-center text-rose-700">
                  <span className="flex items-center gap-1">
                    <span>挪威海关 25% MVA (VOEC增值税)</span>
                  </span>
                  <span className="tabular-nums font-medium">
                    - {voecMvaNOK.toFixed(1)} NOK (- ¥{Math.round(voecMvaRMB)})
                  </span>
                </div>
              )}

              <div className="flex justify-between items-center text-stone-600">
                <span>中国工厂 BOM + 五金 + 包装</span>
                <span className="tabular-nums">- ¥{totalFactoryCostRMB} RMB</span>
              </div>

              <div className="flex justify-between items-center text-stone-600">
                <span>国际空运直发物流 (中国至挪威)</span>
                <span className="tabular-nums">- ¥{shippingCostRMB} RMB</span>
              </div>

              <div className="flex justify-between items-center text-stone-600">
                <span>平台扣点与支付通道网关费</span>
                <span className="tabular-nums">- ¥{Math.round(platformFeeRMB)} RMB</span>
              </div>

              {!isB2B && (
                <div className="flex justify-between items-center text-stone-600">
                  <span>营销与红人体验赞助成本</span>
                  <span className="tabular-nums">- ¥{Math.round(marketingCostRMB)} RMB</span>
                </div>
              )}

              <div className="pt-2 border-t border-stone-200 flex justify-between items-center text-emerald-800 font-bold text-sm">
                <span>最终单件落袋净利</span>
                <span className="tabular-nums">
                  + ¥{Math.round(netProfitUnitRMB)} RMB ({Math.round(netProfitUnitNOK)} NOK)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { COMPLIANCE_GUIDELINES } from '../data/marketData';
import { ShieldCheck, AlertOctagon, HelpCircle, FileCheck2, Scale, Recycle } from 'lucide-react';

export const ComplianceGuideView: React.FC = () => {
  return (
    <div className="space-y-12 py-6">
      {/* Chapter header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
          <span>Chapter 07</span>
          <span aria-hidden="true">·</span>
          <span>Regulatory Compliance & Risk Defense</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-stone-900 tracking-tight">
          挪威市场合规准入与致命风控避坑指南
        </h2>
        <p className="text-stone-600 text-sm mt-2 max-w-3xl leading-relaxed">
          外贸出海挪威最容易导致全盘覆灭的四大死穴：镍超标扣关、VOEC增值税漏缴被收件人拒付、过度塑料包装遭抵制，以及民族文化叙事失当。以下是低成本化解方案。
        </p>
      </div>

      {/* Guidelines Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {COMPLIANCE_GUIDELINES.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl border border-stone-200 shadow-2xs space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-stone-400 uppercase">Compliance Directive 0{idx + 1}</span>
                <span className={`text-3xs font-semibold px-2 py-0.5 rounded ${
                  item.importance === '最高致命级'
                    ? 'bg-rose-100 text-rose-800'
                    : item.importance === '核心关税关卡'
                    ? 'bg-amber-100 text-amber-800'
                    : 'bg-stone-100 text-stone-800'
                }`}>
                  {item.importance}
                </span>
              </div>

              <h3 className="text-lg font-display font-bold text-stone-900">
                {item.title}
              </h3>

              <div className="p-3 bg-stone-50 rounded-xl border border-stone-100 text-xs text-stone-600 leading-relaxed">
                <span className="font-semibold text-stone-900 block mb-1">法规与风险实质</span>
                <p>{item.summary}</p>
              </div>
            </div>

            <div className="p-4 bg-emerald-50/70 border border-emerald-200/80 rounded-xl text-xs space-y-1.5">
              <div className="flex items-center gap-1.5 font-semibold text-emerald-900">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>低成本解决方案与实操动作</span>
              </div>
              <p className="text-emerald-950 leading-relaxed">
                {item.solution}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Strategic FAQ Section */}
      <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-2xs space-y-6">
        <h3 className="font-display font-bold text-lg text-stone-900 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-stone-800" />
          <span>初创外贸者最关心的 3 大实操痛点解答</span>
        </h3>

        <div className="space-y-4 text-xs text-stone-600 leading-relaxed">
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="font-semibold text-stone-900 block text-sm">
              Q1: 我人在国内，挪威买家退货怎么办？
            </span>
            <p>
              <strong>A:</strong> 绝对不要要求买家将单条表带寄回中国（单程邮费高达 180-250 NOK，远超产品出厂成本）。
              <br />
              <strong>最佳实践：</strong>① 售前在详情页提供极度精准的腕围测量尺码图（mm），卡扣安装视频教程，将因尺寸选错的退货率压降到 2% 以下；② 若遇微小缝线瑕疵，直接提供“免退货并补发”或“折让 40% 现金”；③ 针对 B2B 合作的奥斯陆买手店，可约定每月代收当地零星换货，并以批发折价抵扣货款。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="font-semibold text-stone-900 block text-sm">
              Q2: 为什么一定要避开义乌普通廉价白牌，坚持做文化溢价？
            </span>
            <p>
              <strong>A:</strong> 挪威人工极高、消费税（MVA）25% 极严。如果您卖 150 NOK 的普通塑料带，运费 38 元 + 税费 30 元 + 包装 10 元，单件落袋仅几块钱人民币，一旦有一单退货就会亏损 10 单。
              相反，做 599 NOK 的非遗中高端表带，虽然销量基数比低端小，但单件纯利润高达 200+ RMB，只需 100 条月销量就能支撑稳定的现金流。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
            <span className="font-semibold text-stone-900 block text-sm">
              Q3: 挪威客户付款方式怎么解决？需要挪威本地银行账户吗？
            </span>
            <p>
              <strong>A:</strong> 早期完全不需要注册挪威公司或本地银行账户！
              <br />
              B2C 渠道使用 Shopify + <strong>Airwallex (空中云汇) / PingPong / Stripe</strong>，可直接接收挪威克朗 (NOK) 并自动结算成人民币；如果开通 Etsy，Etsy 会自动处理多币种汇兑直接打入国内双币卡。B2B 批发订单则直接通过标准银行电汇（TT）或西联汇款。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

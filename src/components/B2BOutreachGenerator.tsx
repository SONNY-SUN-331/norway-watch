import React, { useState } from 'react';
import { B2B_RETAIL_TARGETS, RetailBuyerTarget } from '../data/marketData';
import { Mail, Copy, Check, Send, Store, Package, FileText, Sparkles } from 'lucide-react';

export const B2BOutreachGenerator: React.FC = () => {
  const [selectedTarget, setSelectedTarget] = useState<RetailBuyerTarget>(B2B_RETAIL_TARGETS[0]);
  const [senderName, setSenderName] = useState<string>('Founder & Design Director');
  const [copied, setCopied] = useState<boolean>(false);

  // Dynamic email draft generation
  const generateEmailBody = () => {
    return `Subject: New Collection for ${selectedTarget.name}: Sino-Nordic Cultural Smartwatch Straps (Song Brocade & Viking Runes)

Hei ${selectedTarget.name} Team,

I hope this message finds you well in ${selectedTarget.city}.

I have long admired ${selectedTarget.name}'s dedication to tactile craftsmanship and distinctive design accessories. 

We are introducing "Nordic-Silk" (北欧·华韵) — a limited cross-cultural capsule of artisanal smartwatch straps crafted for Apple Watch Ultra and Garmin adventurers. 

Our collection bridges two ancient textile and leather traditions:
• The Fjord & Song Brocade Series: Song Dynasty high-density silk brocade interwoven with the iconic Norwegian Selburose, reinforced with a sweatproof medical-grade fluororubber backing.
• The Bunad Heritage Series: Fine wool felt featuring delicate Suzhou needlework inspired by Telemark floral motifs, tailored specifically for Constitution Day (17. mai) celebrations and formal attire.
• Viking Runes & Dragon Leather: Heavy vegetable-tanned leather laser-engraved with Nordic elder futhark runes, engineered with rugged CNC quick-release hardware.

Why this resonates with your customers:
1. Cultural Harmony: A respectful dialogue honoring Norwegian heritage paired with Eastern heritage craftsmanship.
2. REACH & EU Compliant: 100% nickel-release compliant (EN 1811) with FSC-certified recycled seed-paper gift packaging.
3. Healthy Margins: Recommended retail 599–799 NOK with a 45–50% wholesale margin (Tier: ${selectedTarget.suggestedWholesaleTier}).

Risk-Free Proposal:
We have curated a physical "Master Sample Presentation Box" (containing 2 finished strap specimens, tactile fabric swatches, and our bilingual lookbook). We would love to send this directly to your boutique with our compliments — no strings attached.

Alternatively, we can offer an initial 10-piece trial on a guaranteed consignment basis (60-day review).

Would you be open to receiving our presentation box this week? If so, what is the best postal address and contact person at ${selectedTarget.name}?

Tusen takk for your time and consideration.

Vennlig hilsen / Warm regards,

${senderName}
Sino-Nordic Cultural Accessories Initiative
Email: hello@nordicsilk-straps.com
WhatsApp/WeChat: +86-138-0000-0000
Portfolio: www.nordicsilk-straps.com`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateEmailBody());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-12 py-6">
      {/* Chapter header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
          <span>Chapter 05</span>
          <span aria-hidden="true">·</span>
          <span>B2B Channel Entry & Buyer Outreach</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-stone-900 tracking-tight">
          挪威本地买手拓展：B2B 定向推介与破冰工具
        </h2>
        <p className="text-stone-600 text-sm mt-2 max-w-3xl leading-relaxed">
          北欧零售店主极度注重文化真实度与礼仪尊重。通过寄送“大师样品盒 (Master Sample Box) + 专业商务推介信”，可将陌生拜访的转化率提升 4 倍以上。
        </p>
      </div>

      {/* Target Retailers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {B2B_RETAIL_TARGETS.map((target) => (
          <button
            key={target.name}
            onClick={() => setSelectedTarget(target)}
            className={`text-left p-4 rounded-xl border transition-all ${
              selectedTarget.name === target.name
                ? 'bg-stone-900 text-white border-stone-900 shadow-md ring-1 ring-stone-900'
                : 'bg-white text-stone-900 border-stone-200 hover:border-stone-300'
            }`}
          >
            <div className="flex items-center justify-between text-xs mb-1">
              <span className={`font-mono ${selectedTarget.name === target.name ? 'text-stone-400' : 'text-stone-500'}`}>
                {target.city}
              </span>
              <span className={`px-2 py-0.5 rounded text-3xs ${selectedTarget.name === target.name ? 'bg-stone-800 text-stone-200' : 'bg-stone-100 text-stone-600'}`}>
                {target.type}
              </span>
            </div>
            <div className="font-display font-semibold text-sm line-clamp-1">{target.name}</div>
            <p className={`text-xs mt-2 line-clamp-2 leading-relaxed ${selectedTarget.name === target.name ? 'text-stone-300' : 'text-stone-600'}`}>
              {target.relevance}
            </p>
          </button>
        ))}
      </div>

      {/* Email Generator Area */}
      <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-2xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
          <div>
            <h3 className="font-display font-bold text-lg text-stone-900 flex items-center gap-2">
              <Mail className="w-5 h-5 text-stone-800" />
              <span>针对【{selectedTarget.name}】的定制外贸推介信</span>
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              挪威语/英语专业商务规范，包含文化溯源、合规数据与免风险寄售提议
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopy}
              className="px-4 py-2 text-xs font-medium rounded-lg bg-stone-900 text-white hover:bg-stone-800 transition-colors flex items-center gap-1.5 shadow-2xs"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>已复制推介全文</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>一键复制全英文开发信</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Dynamic Email Preview Box */}
        <div className="bg-stone-50 border border-stone-200 rounded-xl p-5 text-xs text-stone-800 font-mono leading-relaxed whitespace-pre-wrap selection:bg-stone-300">
          {generateEmailBody()}
        </div>

        {/* Sourcing Master Sample Box Checklist */}
        <div className="bg-stone-100/60 p-5 rounded-xl border border-stone-200 space-y-3">
          <div className="flex items-center gap-2 text-stone-900 font-display font-semibold text-sm">
            <Package className="w-4 h-4 text-stone-800" />
            <span>实体“大师样品盒 (Master Sample Box)”标配清单与成本控制</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-stone-600">
            <div className="p-3 bg-white rounded-lg border border-stone-200 space-y-1">
              <span className="font-semibold text-stone-900 block">① 2条实物高精样</span>
              <p>1条峡湾宋锦款 + 1条维京符文植鞣皮款（带 Apple Watch / Garmin 精工接头）。</p>
            </div>
            <div className="p-3 bg-white rounded-lg border border-stone-200 space-y-1">
              <span className="font-semibold text-stone-900 block">② 触感面料色卡</span>
              <p>3片真丝宋锦原样与意大利植鞣皮样片，证明天然真材实料，防伪溯源卡。</p>
            </div>
            <div className="p-3 bg-white rounded-lg border border-stone-200 space-y-1">
              <span className="font-semibold text-stone-900 block">③ 手写英文邀请信</span>
              <p>黑色信封火漆印章，手写主理人寄语，诚邀店主佩戴体验，提供试销合作通道。</p>
            </div>
          </div>
          <div className="text-3xs text-stone-500 pt-1">
            * 单套样品盒制作成本约 120-150 RMB，通过 DHL/FedEx 寄往挪威运费约 180 RMB。向挪威排名前 20 的核心买手店群发总预算仅需约 6,000 RMB。
          </div>
        </div>
      </div>
    </div>
  );
};

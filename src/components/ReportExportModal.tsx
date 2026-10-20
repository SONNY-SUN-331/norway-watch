import React, { useState } from 'react';
import { X, Copy, Check, Printer, FileDown } from 'lucide-react';
import { COMPETITORS, CAPSULE_PRODUCTS, ROADMAP_PHASES } from '../data/marketData';

interface ReportExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReportExportModal: React.FC<ReportExportModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const fullReportMarkdown = `# 中挪文化融合智能手表表带：出海挪威低成本战略研报与落地执行方案

## 01. 市场战略与商业画布
- 目标市场：挪威 (Norway) —— 550万人口，人均GDP 10.6万美元，可穿戴渗透率超68%。
- 双大核心场景痛点：
  1. Friluftsliv 旷野生活哲学：对高强度、耐极寒（-20℃）、抗汗水的高端运动表带有刚需（Garmin / Apple Watch Ultra 主流）。
  2. Bunad 民族盛装搭配痛点：5月17日宪法日与正式仪式，挪威人身着数万克朗民族盛装，却佩戴廉价黑色塑料表带，急需文化定制配饰。
- 模式研判：
  - 纯低端义乌白牌不可行（运费与25%增值税吞噬利润）；
  - 纯欧美高奢手工不可行（时薪高、产能受限、无快拆工程五金）；
  - 推荐：轻资产“双轨互哺制”——首批 100 条小单，Etsy/Shopify 直邮测款 + 25套高级大师样品盒（Master Sample Box）直投奥斯陆买手店。

## 02. 竞品深度调研与破局点
- Bandwerk (德国/意大利皮具)：990 - 2,190 NOK，传统欧派商务，缺乏户外防水与民族叙事，不适配 Garmin。
- Nomad Goods (美国硬核科技)：690 - 1,450 NOK，纯科技工业风，无文化温度，无法搭配民族礼服。
- StrapsCo (大众快消)：220 - 450 NOK，公模塑料，质感差，环保抗拒。
- Etsy 本地萨米人/布纳德手作：850 - 1,800 NOK，产能仅月产数十条，无专业CNC快拆扣，价格奇高。
★ 破局空白区：以 490 - 790 NOK 定价，采用中国宋锦/苏绣/生态植鞣皮 + 复合氟橡胶衬底 + 316L钛灰快拆五金，形成降维打击。

## 03. 4 大非遗融合胶囊系列
1. 峡湾宋锦 (Fjord & Song)：中国千年宋锦缂丝 × 挪威 Selburose 八瓣玫瑰，双面防汗防水氟橡胶底，599 NOK。
2. 维京龙鳞 (Viking & Dragon)：生态植鞣牛皮，激光精雕古卢恩符文与祥云龙鳞，Garmin/Apple Ultra 重型扣，689 NOK。
3. 布纳德非遗礼仪带 (Bunad Heritage)：精纺羊毛呢 + 苏绣盘金花卉蔓藤 + Sølje 银饰镂空扣件，主打5月17日盛装节，799 NOK。
4. 旷野之息环保双面带 (Friluftsliv Eco-Sport)：100% 回收海洋塑料再生纱线 + 环保氟橡胶，附赠种子纸包装，489 NOK。

## 04. 财务测算与 VOEC 增值税模型 (以 599 NOK 单品为例)
- 挪威零售价：599 NOK (约 ¥401 RMB)
- 挪威 VOEC 25% MVA (VAT)：120 NOK (约 ¥80 RMB)
- 中国出厂成本 (BOM + 精工五金 + FSC牛皮纸盒)：¥48 - 60 RMB
- 国际特快小包专线直发：¥38 RMB
- 营销与平台手续费：约 ¥60 RMB
- 单件纯利润净落袋：¥190 - 220 RMB (约 280 - 330 NOK)
- 净利润率：50% - 55%
- 首批 100 条启动资金仅需约 ¥4,000 - 5,000 RMB，仅售出 25 条即可全部回本！

## 05. 0-180 天极简低成本路线图
- Phase 1 (Day 1-25): 东莞现成公模五金采购 + 苏州宋锦打样（预算 ¥3,500），Reddit r/Norway 社群盲测。
- Phase 2 (Day 26-60): Etsy 店铺上线（自动代收VOEC税）+ 寄送 25 套 Master Sample Box 至奥斯陆买手店。
- Phase 3 (Day 61-110): 备战 5月17日 宪法日，红人开箱传播，转化 3-5 家买手店免风险寄售。
- Phase 4 (Day 111-180): 规模化回款滚动扩产，申请挪威税局直联 VOEC，进军 Garmin 连锁渠道 (XXL)。

## 06. 挪威合规防线
- REACH Annex XVII：扣件五金必须通过 EN 1811 镍释放测试 (< 0.5 µg/cm²/周)。
- VOEC 方案：单件货值低于 3,000 NOK 享受通关免手续费。
- 包装环保：FSC 牛皮纸盒 + 大豆油墨，严禁泡沫塑料。
- 文化叙事：定位“中挪匠心对话”，尊重当地民间传统。`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullReportMarkdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-stone-200 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div>
            <h3 className="font-display font-bold text-lg text-stone-900">
              中挪文化智能表带出海挪威战略研报与执行方案
            </h3>
            <p className="text-xs text-stone-500">完整版战略文书 · 可一键复制或打印备忘</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 text-xs font-medium rounded-lg bg-stone-900 text-white hover:bg-stone-800 transition-colors flex items-center gap-1.5"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? '已复制研报' : '复制全文'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="p-1.5 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-200/60 transition-colors"
              title="打印报告"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Report Content */}
        <div className="p-6 sm:p-8 overflow-y-auto font-mono text-xs text-stone-800 leading-relaxed space-y-6 bg-stone-50/30">
          <pre className="whitespace-pre-wrap font-sans text-xs text-stone-700 leading-relaxed selection:bg-stone-300">
            {fullReportMarkdown}
          </pre>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-stone-200 bg-stone-50 flex justify-between items-center text-xs text-stone-500">
          <span>北欧·华韵战略决策系统出品 · 保留核心外贸知识产权</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-stone-200 text-stone-800 font-medium hover:bg-stone-300 transition-colors"
          >
            关闭预览
          </button>
        </div>
      </div>
    </div>
  );
};

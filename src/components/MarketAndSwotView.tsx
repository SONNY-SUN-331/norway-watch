import React, { useState } from 'react';
import { 
  Globe2, 
  Store, 
  ShoppingBag, 
  ArrowRight, 
  CheckCircle, 
  AlertTriangle, 
  Layers, 
  TrendingUp,
  Coins,
  ShieldAlert,
  Sparkles
} from 'lucide-react';
import { NORWAY_MARKET_INSIGHTS } from '../data/marketData';

export const MarketAndSwotView: React.FC = () => {
  const [activeModelTab, setActiveModelTab] = useState<'hybrid' | 'b2b' | 'b2c'>('hybrid');

  return (
    <div className="space-y-12 py-6">
      {/* Chapter header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
          <span>Chapter 01</span>
          <span aria-hidden="true">·</span>
          <span>Market Strategy & Strategic SWOT</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-stone-900 tracking-tight">
          市场战略透视：挪威可穿戴生态与跨境出海定位
        </h2>
        <p className="text-stone-600 text-sm mt-2 max-w-3xl leading-relaxed">
          挪威虽为 550 万人口的北欧体量，但凭借全球领先的人均购买力与极高的智能穿戴设备渗透率，是高客单、低恶性竞价的跨境“蓝海腹地”。
        </p>
      </div>

      {/* Norway Market Pillars Bento */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-2xs space-y-3">
          <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center text-stone-800">
            <Coins className="w-5 h-5" />
          </div>
          <h3 className="font-display font-semibold text-stone-900 text-lg">
            超高客单耐受力
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            挪威人均 GDP 超过 10 万美元，购买力平价位于欧洲前列。普通硅胶表带在当地售价常达 250-400 NOK（约 160-260 RMB），而具备非遗故事与金属精工的表带可轻松支撑 <strong>490 - 790 NOK（约 320 - 520 RMB）</strong> 的售价空间，毛利率高达 70% 以上。
          </p>
          <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
            <span>核心定位</span>
            <span className="font-medium text-stone-900">轻奢艺术民俗穿戴配饰</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-2xs space-y-3">
          <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center text-stone-800">
            <Globe2 className="w-5 h-5" />
          </div>
          <h3 className="font-display font-semibold text-stone-900 text-lg">
            Friluftsliv 旷野生活哲学
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            挪威全民崇尚“旷野自由漫游（Friluftsliv）”，徒步、越野滑雪是国民生活方式。这也是为何挪威市场上 <strong>Garmin（佳明）与 Suunto（颂拓）</strong> 的占有率远高于欧美其他国家。表带必须具备可靠的防脱卡扣与抗严寒汗液耐受力。
          </p>
          <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
            <span>机型兼顾</span>
            <span className="font-medium text-stone-900">Apple Watch Ultra + Garmin QuickFit</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-2xs space-y-3">
          <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center text-stone-800">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="font-display font-semibold text-stone-900 text-lg">
            Bunad 民族盛装的核心痛点
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            每年 5月17日 挪威宪法日及重大庆典，挪威人必穿传统民族礼服 Bunad（一套造价 3-8 万克朗）。然而现代人在盛装时依然习惯佩戴 Apple Watch，黑灰色塑料表带与典雅刺绣礼服极为冲突。<strong>苏绣与挪威花草银饰的融合表带是颠覆性的解题方案。</strong>
          </p>
          <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
            <span>爆发节点</span>
            <span className="font-medium text-stone-900">每年 4-5月 宪法日备货高峰</span>
          </div>
        </div>
      </div>

      {/* Model Selector Tabs */}
      <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-2xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
          <div>
            <h3 className="font-display font-bold text-xl text-stone-900">
              中国生产出海挪威：B2B 与 B2C 模式优劣势全景研判
            </h3>
            <p className="text-xs text-stone-500 mt-1">
              对比单兵出海在资金流、供应链、客诉管理与品牌势能上的差异
            </p>
          </div>

          <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-lg shrink-0">
            <button
              onClick={() => setActiveModelTab('hybrid')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeModelTab === 'hybrid'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              推荐：低成本双轨互哺制
            </button>
            <button
              onClick={() => setActiveModelTab('b2c')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeModelTab === 'b2c'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              B2C 跨境零售单模
            </button>
            <button
              onClick={() => setActiveModelTab('b2b')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeModelTab === 'b2b'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              B2B 线下批发集采单模
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        {activeModelTab === 'hybrid' && (
          <div className="space-y-6">
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-5">
              <div className="flex items-center gap-2 text-stone-900 font-display font-semibold text-base mb-2">
                <Layers className="w-5 h-5 text-stone-800" />
                <span>战略总舵：以 B2C 小单直邮测款，沉淀社群口碑，反哺 B2B 线下买手店无库存寄售</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                对于资金有限的初创外贸者，切忌孤注一掷去大量囤货租赁海外仓，也切忌盲目上千张名片海投 B2B。
                <strong>低成本破局之道：</strong>首批生产 80-120 条高精样品，20 条通过 Etsy/Shopify 直接向挪威早期种子用户发售直邮（借由 Etsy 自动处理 VOEC 税款，验证定价与好评率）；
                同时筛选 25 套制作极具仪式感的大师样品盒（Master Sample Box），直接空运直投奥斯陆、卑尔根精选买手店与钟表行（Norway Designs, Dapper 等），附带零风险试销寄售协议（Consignment）。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-3">
                <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm">
                  <ShoppingBag className="w-4 h-4 text-stone-700" />
                  <span>B2C 轨负责：造势、溢价锚定与现金流自造血</span>
                </div>
                <ul className="text-xs text-stone-600 space-y-2 leading-relaxed">
                  <li className="flex items-start gap-1.5">
                    <span className="text-stone-400">·</span>
                    <span><strong>定价高地</strong>：独立站/Etsy 统一定价 599-799 NOK，建立尊贵的文化非遗艺术品锚点，绝不打折贱卖。</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-stone-400">·</span>
                    <span><strong>达人真实背书</strong>：为 10 位挪威本土小微户外/Bunad穿搭博主免费送测，获得挪威实景高清佩戴素材。</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-stone-400">·</span>
                    <span><strong>即时现金回流</strong>：每卖出一条即到账净利 300+ NOK，用来支撑后续批量的生产支出。</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-3">
                <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm">
                  <Store className="w-4 h-4 text-stone-700" />
                  <span>B2B 轨负责：实体信任背书、大单走量与零售后成本</span>
                </div>
                <ul className="text-xs text-stone-600 space-y-2 leading-relaxed">
                  <li className="flex items-start gap-1.5">
                    <span className="text-stone-400">·</span>
                    <span><strong>化解信任障碍</strong>：北欧消费者看到当地百年老街买手店（如 Karl Johans gate 沿线）有展陈，线上信任度直线上升 300%。</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-stone-400">·</span>
                    <span><strong>批发毛利稳健</strong>：提供 45%-50% 折扣批发价（329-399 NOK），工厂成本仅 50-70 RMB，单件仍能狂揽 150-200 RMB 纯利。</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-stone-400">·</span>
                    <span><strong>零碎售后免除</strong>：B2B 渠道由零售商自行面对当地顾客退换货，大大减轻跨境个人的客服负担。</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeModelTab === 'b2c' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-emerald-800 font-semibold text-sm">
                <CheckCircle className="w-4 h-4" />
                <span>B2C 跨境直售 (D2C / Etsy) 优势</span>
              </div>
              <ul className="text-xs text-stone-700 space-y-2 leading-relaxed">
                <li>· <strong>极限毛利率</strong>：直面消费者，零售价 599 NOK，扣除物流税费后毛利仍高达 70%-78%。</li>
                <li>· <strong>快速测款敏捷迭代</strong>：款式花样每周可调整，不满意随时下架，无需压库存。</li>
                <li>· <strong>直达消费者心智</strong>：掌握挪威买家的第一手偏好数据、腕径尺寸分布与佩戴习惯。</li>
                <li>· <strong>平台托管税务便捷</strong>：早期依托 Etsy 发售，平台直接代收代缴 25% VOEC 增值税，免办挪威本地企业税号。</li>
              </ul>
            </div>

            <div className="bg-stone-50 border border-stone-200 rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-amber-800 font-semibold text-sm">
                <AlertTriangle className="w-4 h-4" />
                <span>B2C 跨境直售 劣势与避坑策略</span>
              </div>
              <ul className="text-xs text-stone-700 space-y-2 leading-relaxed">
                <li>· <strong>北欧流量采买昂贵</strong>：挪威人口少、CPM 极高，盲目烧 Facebook/Instagram 广告极易亏损。<strong>应对：</strong>严禁广撒网广告，纯靠垂直圈层红人置换和 SEO 搜索词精准拦截。</li>
                <li>· <strong>退货逆向物流痛点</strong>：从挪威退回中国运费高达 150-250 NOK。<strong>应对：</strong>若遇微小瑕疵，直接全额退款不退货，或委托挪威本地合作买手店代为接收质检。</li>
                <li>· <strong>本地支付习惯壁垒</strong>：挪威全民使用 <strong>Vipps</strong> 移动支付（渗透率 90%）。纯信用卡结账弃单率偏高。<strong>应对：</strong>Shopify 需配置 Klarna 或 Dintero 聚合支付插件。</li>
              </ul>
            </div>
          </div>
        )}

        {activeModelTab === 'b2b' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-emerald-800 font-semibold text-sm">
                <CheckCircle className="w-4 h-4" />
                <span>B2B 线下批发与买手店渠道 优势</span>
              </div>
              <ul className="text-xs text-stone-700 space-y-2 leading-relaxed">
                <li>· <strong>批量起订与单票稳妥</strong>：一旦入选挪威设计买手店或博物馆礼品店，单次采购在 30-100 条以上，复购周期稳定。</li>
                <li>· <strong>零个单售后客服压力</strong>：店员完成现场试戴与销售，退换货责任归于当地零售商，海外运营成本骤降。</li>
                <li>· <strong>高端实体背书</strong>：出现在奥斯陆老城设计店的橱窗里，胜过在网上打十万元广告的信誉价值。</li>
                <li>· <strong>运费规模效应</strong>：50-100 条通过 DHL/联邦快递单次拼箱空运，单件平摊物流成本由 40 元降至 15 元以下。</li>
              </ul>
            </div>

            <div className="bg-stone-50 border border-stone-200 rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-amber-800 font-semibold text-sm">
                <AlertTriangle className="w-4 h-4" />
                <span>B2B 线下批发 劣势与应对策略</span>
              </div>
              <ul className="text-xs text-stone-700 space-y-2 leading-relaxed">
                <li>· <strong>欧洲买手决策周期长</strong>：北欧买手极为严谨，从收到样品到决定订货通常需 3-6 周。<strong>应对：</strong>提前在每年 1-2 月接触，锁定 4-5 月 Bunad 旺季与 6-8 月夏日徒步季。</li>
                <li>· <strong>账期与寄售资金占用</strong>：初次合作买手店往往要求 Consignment（寄售 60 天结账）或 Net 30 天账期。<strong>应对：</strong>首批严格限定每家店只提供 8-12 条试销展架，锁死最大敞口风险。</li>
                <li>· <strong>包装与环保认证严苛审查</strong>：必须出具环保包装与欧盟 REACH 镍释放测试报告，否则无法进正规连锁店。<strong>应对：</strong>在中国出厂前预先做好 SGS/天祥无镍无铅环保检测。</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Comprehensive SWOT Matrix Table */}
      <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-2xs">
        <div className="p-6 border-b border-stone-200 bg-stone-50/50">
          <h3 className="font-display font-bold text-lg text-stone-900">
            中挪跨界表带出海综合战略 SWOT 分析
          </h3>
          <p className="text-xs text-stone-500 mt-1">
            系统剖析内部优势（S）、劣势（W）、外部机遇（O）与潜在威胁（T）
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-stone-200">
          {/* Strengths */}
          <div className="p-6 space-y-4">
            <div className="flex items-center gap-2 text-emerald-800 font-display font-semibold text-sm">
              <span className="w-6 h-6 rounded-md bg-emerald-100 flex items-center justify-center text-xs">S</span>
              <span>优势 (Strengths) · 内部核心竞争力</span>
            </div>
            <ul className="text-xs text-stone-600 space-y-2.5 leading-relaxed">
              <li>
                <strong>中国顶尖五金与非遗面料产业集群</strong>：东莞精密 CNC 五金件公差控制在 0.03mm 内，苏州宋锦、苏绣电脑提花与手工刺绣产能成熟，单位成本仅为欧洲本土的 1/8。
              </li>
              <li>
                <strong>独特的跨文化叙事差异化</strong>：全球智能手表带陷入“黑灰硅胶”与“极简素皮”的同质化内卷，中挪文化互敬交融填补了高端艺术手作配饰的真空。
              </li>
              <li>
                <strong>双面复合结构工程优势</strong>：攻克了纯丝绸布料怕水怕汗的死穴，通过氟橡胶底衬与防泼水纳米涂层，让艺术表带兼备户外实用主义。
              </li>
            </ul>
          </div>

          {/* Weaknesses */}
          <div className="p-6 space-y-4">
            <div className="flex items-center gap-2 text-stone-800 font-display font-semibold text-sm">
              <span className="w-6 h-6 rounded-md bg-stone-200 flex items-center justify-center text-xs">W</span>
              <span>劣势 (Weaknesses) · 内部启动短板</span>
            </div>
            <ul className="text-xs text-stone-600 space-y-2.5 leading-relaxed">
              <li>
                <strong>品牌在挪威初期的零认知度</strong>：北欧人高度信任本地百年老铺或全球户外大牌，新品牌缺乏本土消费信任基础。
              </li>
              <li>
                <strong>跨境逆向退换货成本极高</strong>：单程小包直邮成本低，但一旦买家退货，退回国内的国际反向运费将吞噬单笔利润。
              </li>
              <li>
                <strong>多机型适配导致的 SKU 复杂化</strong>：Apple Watch（41/45/49mm）与 Garmin（20/22/26mm）接头各异，若选型过多会导致首批存货分散。
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-200 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-stone-200">
          {/* Opportunities */}
          <div className="p-6 space-y-4">
            <div className="flex items-center gap-2 text-blue-800 font-display font-semibold text-sm">
              <span className="w-6 h-6 rounded-md bg-blue-100 flex items-center justify-center text-xs">O</span>
              <span>机遇 (Opportunities) · 外部市场窗口</span>
            </div>
            <ul className="text-xs text-stone-600 space-y-2.5 leading-relaxed">
              <li>
                <strong>5月17日 宪法日 Bunad 搭配刚需</strong>：全国性民俗穿戴痛点年年发生，目前挪威几乎没有规模化品牌专门提供高品位智能表带解法。
              </li>
              <li>
                <strong>挪威 VOEC 税改红利</strong>：单件 3,000 NOK 以下包裹免繁琐商业清关代理费，小包物流时效稳定在 7-10 天，小额直发阻力降到历史最低。
              </li>
              <li>
                <strong>中挪建交与文化交流暖流</strong>：挪威年轻一代对东方丝织、茶道、陶瓷美学表现出强烈的反差式审美探索欲。
              </li>
            </ul>
          </div>

          {/* Threats */}
          <div className="p-6 space-y-4">
            <div className="flex items-center gap-2 text-rose-800 font-display font-semibold text-sm">
              <span className="w-6 h-6 rounded-md bg-rose-100 flex items-center justify-center text-xs">T</span>
              <span>威胁 (Threats) · 外部合规与舆论风险</span>
            </div>
            <ul className="text-xs text-stone-600 space-y-2.5 leading-relaxed">
              <li>
                <strong>文化挪用 (Cultural Appropriation) 指责风险</strong>：若在文案中声称“正宗挪威国宝”，易引发本土历史保护主义者反弹；必须严格定位于“中挪跨文化艺术对话与匠心互敬”。
              </li>
              <li>
                <strong>欧盟 REACH 镍释放测试不达标扣货</strong>：五金连接扣若使用劣质翻砂合金，在潮湿出汗环境中极易镍超标导致过敏与罚没。
              </li>
              <li>
                <strong>汇率波动与通胀波动</strong>：挪威克朗对美元/人民币汇率波动需在产品定价中预留 10%-15% 的缓冲池。
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

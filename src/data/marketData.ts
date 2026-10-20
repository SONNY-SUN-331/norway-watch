/**
 * Comprehensive Market Intelligence & Cross-Border Strategic Data
 * Focus: Cultural Fusion Smart Watch Straps (China Manufacture -> Norway B2B & B2C)
 */

export interface Competitor {
  id: string;
  name: string;
  origin: string;
  priceRangeNOK: string;
  coreMaterial: string;
  brandPositioning: string;
  norwayMarketShare: string;
  strengths: string[];
  weaknesses: string[];
  whiteSpaceOpportunity: string;
  salesChannels: string[];
}

export interface CapsuleProduct {
  id: string;
  code: string;
  nameZh: string;
  nameEn: string;
  tagline: string;
  imagePath: string;
  fusionConcept: string;
  materials: string[];
  compatibility: string[];
  targetAudience: string;
  targetPriceNOK: number;
  estCostRMB: {
    bom: number;
    hardware: number;
    packaging: number;
    totalRMB: number;
  };
  keyFeatures: string[];
  complianceRequirements: string[];
}

export const COMPETITORS: Competitor[] = [
  {
    id: 'bandwerk',
    name: 'BandWerk',
    origin: '德国慕尼黑 (Germany)',
    priceRangeNOK: '990 - 2,190 NOK',
    coreMaterial: '意大利小牛皮 / 霍尔温马臀皮 / 钛金属扣',
    brandPositioning: '欧洲高端奢华手工皮具 (Luxury Artisan)',
    norwayMarketShare: '约 6% (高端商务人群偏好)',
    strengths: [
      '德国精工口碑，皮料来源经过欧盟严格环保认证 (LWG金牌皮厂)',
      '适配全系 Apple Watch Ultra，五金电镀与表壳匹配度极高',
      '成熟的欧洲本地仓配与售后服务体系'
    ],
    weaknesses: [
      '价格门槛过高，单条表带常超过 1,500 NOK',
      '设计风格偏传统欧式商务，缺乏民族叙事与户外多功能防水支持',
      '几乎不做 Garmin / Polar 等专业户外运动手表的表带开发'
    ],
    whiteSpaceOpportunity: '挪威户外运动人群极庞大（Garmin占比高），且年轻一代对东方丝织/非遗与北欧传统结合的“文化故事感”抱有极高好奇，在 490-790 NOK 区间存在显著空白。',
    salesChannels: ['D2C 独立站', '欧洲高端钟表珠宝集成店']
  },
  {
    id: 'nomad',
    name: 'Nomad Goods',
    origin: '美国加州 (USA)',
    priceRangeNOK: '690 - 1,450 NOK',
    coreMaterial: 'Horween皮质 / FKM耐氟橡胶 / 钛金属',
    brandPositioning: '硬核户外与极简科技美学 (Rugged Tech & Adventure)',
    norwayMarketShare: '约 14% (挪威徒步滑雪及科技发烧友标配)',
    strengths: [
      '极强的户外耐候性能（防水抗汗、耐严寒），高度契合挪威 Friluftsliv 哲学',
      '在挪威户外社群与数码零售商（如 Elkjøp）渗透深',
      '钛金属表带与 Apple Watch Ultra 形成了近乎垄断的联想'
    ],
    weaknesses: [
      '工业科技感浓重，缺乏温润的人文/织物手工质感',
      '纯正西方设计语言，同质化加剧（黑/灰/橙三色为主）',
      '无法适配挪威宪法日(5月17日)等正式传统民俗盛装(Bunad)佩戴需求'
    ],
    whiteSpaceOpportunity: '用高强度氟橡胶作为内衬，外层覆合中国防泼水宋锦或非遗刺绣，打造“兼具硬核户外耐磨 + 东方风骨”的跨界表带。',
    salesChannels: ['Elkjøp', 'D2C官网', 'Nordic Outdoor 电商']
  },
  {
    id: 'strapsco',
    name: 'StrapsCo',
    origin: '加拿大 (Canada - 中国代工)',
    priceRangeNOK: '220 - 450 NOK',
    coreMaterial: '普通PU皮革 / 硅胶 / 尼龙编织',
    brandPositioning: '大众平价海量SKU快时尚替代品 (Fast Fashion Utility)',
    norwayMarketShare: '约 18% (大众入门网购选择)',
    strengths: [
      'SKU多达上千种，适配几乎所有智能手表型号',
      '价格低廉，满足“随季更换”的基本功能'
    ],
    weaknesses: [
      '毫无品牌故事与溢价能力，用户复购靠价格敏感度',
      '质感粗糙，五金连接器公差大，容易磨损表身',
      '包装多为一次性塑料袋，极易引发注重环保的挪威消费者抵触'
    ],
    whiteSpaceOpportunity: '避免与低端义乌白牌卷价格；用 FSC 可再生环保纸盒 + 挪威本地化环保认证 + 非遗溯源证书建立 400-600 NOK 的中高端心智。',
    salesChannels: ['Amazon', '速卖通', '自建快消站']
  },
  {
    id: 'etsy_artisans',
    name: 'Etsy Nordic Artisans',
    origin: '挪威/瑞典本土手艺人 (Local Artisans)',
    priceRangeNOK: '850 - 1,800 NOK',
    coreMaterial: '萨米人锡绣鹿皮 (Sámi Pewter Wire) / 布纳德羊毛呢 / 银饰纽扣',
    brandPositioning: '本土小众民族手作与非遗配饰 (Heritage Handcraft)',
    norwayMarketShare: '< 2% (受限于纯手工产能)',
    strengths: [
      '极高文化认同，挪威本土人对萨米手作和布纳德刺绣充满情感溢价',
      '天然环保原料，符合挪威本土伦理消费价值观'
    ],
    weaknesses: [
      '纯个人手作，产能极低（月产几十条），经常断货且交期长达3-4周',
      '表带连接扣大多从亚马逊购买现成普通金属扣二次缝合，结构工程可靠性差',
      '没有专业精密CNC五金开发能力，缺少快拆结构'
    ],
    whiteSpaceOpportunity: '将“中国成熟的高精度精密五金模具 & 庞大的苏绣/宋锦非遗工业化刺绣织造产能”与挪威民俗审美结合，以工业化品质实现手工艺术的大规模平价供应（490-690 NOK）。',
    salesChannels: ['Etsy', '卑尔根/奥斯陆手工艺跳蚤市集', 'Instagram私域']
  },
  {
    id: 'dale_norway',
    name: 'Dale of Norway (周边衍生类)',
    origin: '挪威达勒 (Norway)',
    priceRangeNOK: '未正式涉足 (服饰类 1,800-4,000 NOK)',
    coreMaterial: '纯挪威羊毛提花 (100% Norwegian Wool)',
    brandPositioning: '挪威百年国宝级传统羊毛品牌 (National Heritage Icon)',
    norwayMarketShare: '智能配件领域 0% (潜在联名/学习标杆)',
    strengths: [
      '挪威最具代表性的八瓣玫瑰纹（Selburose）拥有极强国民心智',
      '奥委会官方赞助商，高品位符号'
    ],
    weaknesses: [
      '传统重工羊毛服饰为主，未布局现代可穿戴设备配件市场'
    ],
    whiteSpaceOpportunity: '借鉴其经典挪威提花色彩与几何骨架，融入中国宋代折枝花鸟与云纹，创造“双国宝图腾交融”的联名感限量设计。',
    salesChannels: ['高端百货', '旅游文化免税店', '专卖店']
  }
];

export const CAPSULE_PRODUCTS: CapsuleProduct[] = [
  {
    id: 'song-fjord',
    code: 'CAP-01',
    nameZh: '峡湾宋锦 · 八瓣玫瑰联名款',
    nameEn: 'Fjord & Song Brocade Strap',
    tagline: '中国千年宋锦缂丝提花与挪威 Selburose 八瓣玫瑰的几何相逢',
    imagePath: '/src/assets/images/strap_song_fjord_brocade_1792474485089.jpg',
    fusionConcept: '采用苏州高密真丝混纺色织宋锦工艺，将挪威象征永恒的传统八瓣玫瑰（Selburose）与中国宋代“如意穿枝纹”重构。底衬复合防水氟橡胶，内里导汗槽设计，打破传统织物怕汗怕水的痛点。',
    materials: ['高密防泼水真丝聚酯宋锦混纺面料', '医用级 FKM 氟橡胶衬底', '316L 喷砂钛灰不锈钢精密连接器'],
    compatibility: ['Apple Watch 40/41/44/45/49mm Ultra', 'Garmin QuickFit 20/22mm'],
    targetAudience: '奥斯陆/卑尔根都市白领、跨文化艺术爱好者、设计从业者',
    targetPriceNOK: 599,
    estCostRMB: {
      bom: 28,
      hardware: 14,
      packaging: 6,
      totalRMB: 48
    },
    keyFeatures: [
      '纳米防污防泼水涂层（荷叶效应，防咖啡/红酒溅染）',
      '隐藏式快拆磁吸/针扣双重安全锁止结构',
      '中国非遗纹样认证与挪威语文化故事双语内附折页'
    ],
    complianceRequirements: ['REACH Annex XVII 镍释放测试', 'OEKO-TEX 100 纺织环保认证']
  },
  {
    id: 'viking-dragon',
    code: 'CAP-02',
    nameZh: '维京龙鳞 · 植鞣雕刻户外带',
    nameEn: 'Viking Runes & Dragon Cloud Leather',
    tagline: '狂野北欧如尼符文与东方祥云龙鳞激光微雕，专为荒野而生',
    imagePath: '/src/assets/images/strap_viking_leather_runic_1792474486465.jpg',
    fusionConcept: '严选中国北方生态植鞣头层牛皮（意大利树膏复鞣），表侧激光精雕北欧古代维京卢恩符文（象征保护与勇气）与东方高古云纹龙鳞微缩图腾。经手工擦色做旧，佩戴日久将形成专属岁月包浆。',
    materials: ['3.2mm 厚度特制植鞣头层牛皮', '哑光黑 PVD 镀层不锈钢重型五金', '德国高强 Serafil 蜡线加固'],
    compatibility: ['Garmin Fenix 7/8 / Epix / Enduro', 'Apple Watch Ultra 1/2', 'Suunto 9 Peak'],
    targetAudience: '挪威 Friluftsliv 户外徒步、滑雪越野爱好者、北欧历史神话发烧友',
    targetPriceNOK: 689,
    estCostRMB: {
      bom: 36,
      hardware: 18,
      packaging: 7,
      totalRMB: 61
    },
    keyFeatures: [
      '纯植物多酚鞣制，亲肤透气无刺激，经受 -25℃ 严寒不开裂',
      '重型双插针五金表扣，抗拉脱拉力测试达 180N 以上',
      '搭配纯黄铜做旧铭牌刻字定制选配项'
    ],
    complianceRequirements: ['REACH 六价铬严格检测 (< 3 mg/kg)', '无铅五金件测试']
  },
  {
    id: 'bunad-heritage',
    code: 'CAP-03',
    nameZh: '布纳德盛典 · 苏绣银花非遗礼仪带',
    nameEn: 'Bunad Heritage & Suzhou Needlework',
    tagline: '5月17日挪威宪法日与神圣婚礼：为传统礼服而生的智能表带',
    imagePath: '/src/assets/images/strap_bunad_embroidery_silk_1792474487078.jpg',
    fusionConcept: '痛点根源：挪威女性每年 5月17日 都会身穿价值数万克朗的传统国民盛装 Bunad，但手腕上的塑料手表带极度突兀破坏美感。本款采用墨绿/深藏青精纺羊毛呢衬底，由苏州绣娘以传统平绣、盘金绣复刻挪威 Telemark 与 Hardanger 地区的经典花草蔓藤，搭配挪威传统 Sølje 银饰镂空扣件。',
    materials: ['高支高密天然羊毛呢底布', '苏绣高光蚕丝线与环保金属盘线', '仿古 925 银色锌合金镂空雕花扣件'],
    compatibility: ['Apple Watch 38/40/41/42mm', 'Samsung Galaxy Watch 40/44mm'],
    targetAudience: '挪威注重仪式感的家庭、青年女性、婚礼伴娘、文化礼品买手',
    targetPriceNOK: 799,
    estCostRMB: {
      bom: 45,
      hardware: 20,
      packaging: 9,
      totalRMB: 74
    },
    keyFeatures: [
      '完美与挪威各大区 Bunad 民族礼服色彩（墨绿/酒红/藏青/雪白）色彩配对',
      '微型复古 Sølje 吊片装饰，随手腕摇曳生姿',
      '特制高档植绒首饰级礼盒，赠送收藏证书'
    ],
    complianceRequirements: ['重金属接触安全测试', '羊毛材质无偶氮染料检测']
  },
  {
    id: 'friluftsliv-sport',
    code: 'CAP-04',
    nameZh: '旷野之息 · 海洋回收透气运动带',
    nameEn: 'Friluftsliv Dual-Sided Eco Explorer',
    tagline: '100% 回收海洋塑料再生纱线，拥抱北欧极致环保主义',
    imagePath: '/src/assets/images/hero_nordic_fusion_watchstrap_1792474484680.jpg',
    fusionConcept: '直击挪威消费者对“海洋保护与微塑料危机”的深刻共鸣。正面采用浙江沿海回收渔网再生的高弹提花编织物（融入东方水纹意象），反面为耐低温超轻环保氟橡胶，双向卡扣，可在暴风雪与峡湾划艇中无缝应对。',
    materials: ['GRS 认证海洋再生尼龙复合纱线', '轻量化食品级氟橡胶底带', '钛合金快拆弹簧针与CNC机芯托架'],
    compatibility: ['Garmin QuickFit 22/26mm', 'Apple Watch 45/49mm', 'Polar Vantage'],
    targetAudience: '挪威环保志愿者、海洋运动爱好者、极简主义越野跑者',
    targetPriceNOK: 489,
    estCostRMB: {
      bom: 22,
      hardware: 13,
      packaging: 5,
      totalRMB: 40
    },
    keyFeatures: [
      '附带 GRS (Global Recycled Standard) 溯源二维码标签',
      '极轻设计（仅 21g），高透气菱形打孔排汗',
      '附赠种子纸包装（埋入土壤可长出挪威本地野花草）'
    ],
    complianceRequirements: ['GRS 全球回收标准认证', '欧盟 RoHS / REACH 环保合规']
  }
];

export interface CmfStyle {
  id: string;
  code: string;
  nameZh: string;
  nameEn: string;
  heritageArchetype: string;
  imagePath: string;
  tagline: string;
  culturalOrigin: string;
  cmf: {
    color: {
      palette: { name: string; hex: string; pantone: string; role: string }[];
      narrative: string;
    };
    material: {
      outerLayer: string;
      innerLining: string;
      hardwareBuckle: string;
      threadStitch: string;
    };
    finish: {
      surfaceTexture: string;
      hardwareFinish: string;
      edgeCoating: string;
      tactileFeel: string;
    };
  };
  engineeringSpecs: {
    waterproofSweatRating: string;
    workingTemp: string;
    tensileLoadLimit: string;
    nickelReleaseRate: string;
    weightGrams: number;
    compatibility: string[];
  };
  economics: {
    bomRMB: number;
    hardwareRMB: number;
    packagingRMB: number;
    totalCostRMB: number;
    retailPriceNOK: number;
    grossMarginPercent: number;
  };
  manufacturingInstructions: string;
  targetAudienceNorway: string;
}

export interface RoadmapPhase {
  phaseNumber: number;
  timeframe: string;
  titleZh: string;
  titleEn: string;
  budgetEstRMB: string;
  objective: string;
  actionItems: {
    id: string;
    task: string;
    subtext: string;
    deliverable: string;
    riskMitigation: string;
  }[];
}

export interface RetailBuyerTarget {
  name: string;
  city: string;
  type: string;
  relevance: string;
  contactApproach: string;
  suggestedWholesaleTier: string;
}

export interface ThreeWayBenchmarkItem {
  dimension: string;
  traditionalEthnicBracelet: {
    rating: string;
    summary: string;
    detail: string;
  };
  mainstreamSmartStrap: {
    rating: string;
    summary: string;
    detail: string;
  };
  ourFusionStrap: {
    rating: string;
    summary: string;
    detail: string;
  };
}

export const CMF_STYLES: CmfStyle[] = [
  {
    id: 'telemark-bunad',
    code: 'CMF-01',
    nameZh: '泰勒马克布纳德 · 银花刺绣款',
    nameEn: 'Telemark Bunad & Sølje Needlework',
    heritageArchetype: '挪威泰勒马克传统服饰 (Telemark Bunad) × 索尔耶银饰 (Sølje) × 苏绣盘金',
    imagePath: '/src/assets/images/strap_bunad_embroidery_silk_1792474487078.jpg',
    tagline: '5月17日宪法日与神圣婚礼的智能表带解法，让 Apple Watch 完美融入百年国服',
    culturalOrigin: '挪威 Telemark 地区的 Bunad 刺绣享有极高国家级美誉，其植物蔓藤花纹与挪威传统辟邪守护银饰“Sølje”金银吊片相生相伴。本款将其与中国国家级非遗“苏绣盘金绣”融合。',
    cmf: {
      color: {
        palette: [
          { name: '冷杉墨绿 (Fjord Spruce)', hex: '#1C3829', pantone: 'PANTONE 5605 C', role: '羊毛呢底布主色' },
          { name: '胭脂茜红 (Nordic Crimson)', hex: '#9E2A2B', pantone: 'PANTONE 195 C', role: '苏绣花卉副色' },
          { name: '仿古纯银 (Sølje Silver)', hex: '#D1D5DB', pantone: 'PANTONE 877 C', role: '五金扣与金银盘线' }
        ],
        narrative: '沉稳庄严的高山针叶林深绿，托起手工真丝盘金玫瑰花瓣，金属吊饰随光线折射细碎微芒。'
      },
      material: {
        outerLayer: '挪威高支精纺羊毛呢 + 苏绣 100% 桑蚕丝高光绣线',
        innerLining: '医用级低敏 FKM 黑色氟橡胶（表面开设 0.4mm 导汗排湿微凹槽）',
        hardwareBuckle: '锌合金真空压铸 + 仿古 925 纯银氧化擦黑工艺（带微型可拆卸 Sølje 镂空摇曳吊片）',
        threadStitch: '德国 AMANN Serafil 阻燃耐磨马鞍蜡线'
      },
      finish: {
        surfaceTexture: '羊毛温润微绒感 + 浮雕立体盘金刺绣触感',
        hardwareFinish: '哑光微拉丝复古银饰质感，经抗指纹钝化处理',
        edgeCoating: '意大利进口哑光环保黑边油（三涂三烤，抗龟裂）',
        tactileFeel: '贴肤侧柔韧干爽，正面古典厚重，绝无刺痒感'
      }
    },
    engineeringSpecs: {
      waterproofSweatRating: 'IP67（内衬防水防汗，外层经超疏水纳米涂层防污）',
      workingTemp: '-20℃ 至 55℃',
      tensileLoadLimit: '≥ 160 N (超出国标安全要求 2 倍)',
      nickelReleaseRate: '< 0.1 µg/cm²/week (远严于欧盟 REACH 0.5 标准)',
      weightGrams: 28,
      compatibility: ['Apple Watch 38/40/41/42mm', 'Samsung Galaxy 40/44mm', '传统 20mm 平头快拆']
    },
    economics: {
      bomRMB: 45,
      hardwareRMB: 20,
      packagingRMB: 9,
      totalCostRMB: 74,
      retailPriceNOK: 799,
      grossMarginPercent: 78
    },
    manufacturingInstructions: '东莞五金厂开模压铸银饰扣件；苏州绣品厂采用日本进口百灵达刺绣机做底盘，关键玫瑰花蕊由绣娘人工盘线；在东莞做氟橡胶高温低硫化热压复合成型。',
    targetAudienceNorway: '挪威 25-55 岁拥有 Bunad 的都市女性、婚礼新人与伴娘、文化礼品高端买手。'
  },
  {
    id: 'selburose-song',
    code: 'CMF-02',
    nameZh: '塞尔布八瓣玫瑰 · 峡湾宋锦款',
    nameEn: 'Selburose Star & Song Brocade Jacquard',
    heritageArchetype: '挪威塞尔布八瓣玫瑰编织 (Selbumønster 1857) × 中国宋代缂丝宋锦 (Song Brocade)',
    imagePath: '/src/assets/images/strap_song_fjord_brocade_1792474485089.jpg',
    tagline: '中国千年织锦机杼与挪威国民冬日雪星的几何相逢，高山与峡湾的日常穿戴',
    culturalOrigin: 'Selburose（塞尔布玫瑰）自 1857 年诞生以来，是挪威全境最具代表性的编织文化图腾，也是挪威奥委会指定纹样。宋锦作为中国非遗锦绣之冠，兼具织造结构紧密与金属丝交织的华贵光泽。',
    cmf: {
      color: {
        palette: [
          { name: '极地深海蓝 (Arctic Fjord Blue)', hex: '#1E293B', pantone: 'PANTONE 289 C', role: '宋锦底纹主经线' },
          { name: '冬日雪白 (Glacial Snow White)', hex: '#F8FAFC', pantone: 'PANTONE 11-0601 TCX', role: '八瓣玫瑰几何纹' },
          { name: '宋式古铜金 (Song Bronze Gold)', hex: '#D97706', pantone: 'PANTONE 7556 C', role: '穿枝如意纹边缘勾线' }
        ],
        narrative: '大西洋峡湾深水与白雪八瓣星辰的冷暖交织，暗含东方宋代内敛典雅的隐士审美。'
      },
      material: {
        outerLayer: '高密聚酯-真丝交织高定宋锦提花布（经纳米级防泼水荷叶涂层整理）',
        innerLining: '耐候性氟橡胶，波浪形导气槽设计',
        hardwareBuckle: '316L 医用级不锈钢，CNC 精密铣削',
        threadStitch: '防海水腐蚀 Bonded Nylon 缝线'
      },
      finish: {
        surfaceTexture: '精致微凸起斜纹提花肌理，耐磨擦刮',
        hardwareFinish: '微米级石英砂喷砂处理，钛灰色 PVD 真空镀膜',
        edgeCoating: '激光无缝包边熔合工艺，无脱线隐患',
        tactileFeel: '微凉顺滑，抗静电，四季佩戴适宜'
      }
    },
    engineeringSpecs: {
      waterproofSweatRating: 'IP68 级别耐水（防泼溅、防小雨、日常擦拭洗涤）',
      workingTemp: '-25℃ 至 60℃',
      tensileLoadLimit: '≥ 190 N',
      nickelReleaseRate: '0.00 µg/cm²/week (全钛灰镀层无析出)',
      weightGrams: 26,
      compatibility: ['Apple Watch 40/41/44/45/49mm Ultra', 'Garmin QuickFit 20/22mm']
    },
    economics: {
      bomRMB: 28,
      hardwareRMB: 14,
      packagingRMB: 6,
      totalCostRMB: 48,
      retailPriceNOK: 599,
      grossMarginPercent: 77
    },
    manufacturingInstructions: '海宁高速数码电子提花机大批量试织；后整理浸轧碳氟三防整理剂防油防水；东莞表带厂点胶高频熔合。',
    targetAudienceNorway: '奥斯陆设计白领、高校学者、偏好低调艺术感与日常佩戴的科技极客。'
  },
  {
    id: 'viking-dragon',
    code: 'CMF-03',
    nameZh: '奥斯伯格维京龙舟 · 如尼古符植鞣款',
    nameEn: 'Viking Oseberg Beast & Runic Leather',
    heritageArchetype: '挪威9世纪奥斯伯格龙船 (Oseberg Ship) × 老弗萨克如尼文 × 东方龙鳞云纹',
    imagePath: '/src/assets/images/strap_viking_leather_runic_1792474486465.jpg',
    tagline: '狂野北欧如尼符文与东方高古云纹龙鳞微雕，专为荒野而生',
    culturalOrigin: '源自奥斯陆维京船博物馆镇馆之宝——9世纪奥斯伯格（Oseberg）龙船船首的交缠神兽木雕，与代表“旅行庇护与力量”的古日耳曼老弗萨克（Elder Futhark）如尼符文，融入中国高古战汉玉雕云纹。',
    cmf: {
      color: {
        palette: [
          { name: '干邑琥珀棕 (Cognac Amber)', hex: '#92400E', pantone: 'PANTONE 7573 C', role: '植鞣牛皮基色' },
          { name: '焦炭松木黑 (Charred Pine)', hex: '#18181B', pantone: 'PANTONE 419 C', role: '激光雕刻炭化边缘' },
          { name: '做旧哑光黑 (Weathered Gunmetal)', hex: '#374151', pantone: 'PANTONE 446 C', role: 'PVD 哑光重型表扣' }
        ],
        narrative: '维京龙舟穿越北大西洋松木火盆的岁月质感，随主人腕部体温与日常佩戴逐渐形成焦糖色光泽包浆。'
      },
      material: {
        outerLayer: '3.2mm 厚度特制植鞣头层牛皮（意大利托斯卡纳树膏工艺复鞣）',
        innerLining: '同皮质牛皮反绒吸汗衬底（纯天然植物鞣制，零化学防腐涂料）',
        hardwareBuckle: '加厚 2.5mm 316L 不锈钢重型双针扣件 + 专用 Garmin/Apple Ultra 宽耳螺丝件',
        threadStitch: '0.6mm 手工浸蜡粗马鞍线'
      },
      finish: {
        surfaceTexture: '皮面自然摔纹与油脂毛孔 + 0.15mm 微浮雕激光符文灼烧触感',
        hardwareFinish: '哑光石洗做旧 (Stonewash) PVD 黑色',
        edgeCoating: '传统法国蜂蜡热烫封边（反复抛光 4 次，呈现玉质圆润感）',
        tactileFeel: '硬朗挺括但弯折贴合手腕，散发浓郁天然木本鞣剂清香'
      }
    },
    engineeringSpecs: {
      waterproofSweatRating: '防生活溅水与汗渍（植鞣皮具备天然透气微孔）',
      workingTemp: '-30℃ 至 50℃ (极寒不冻硬开裂)',
      tensileLoadLimit: '≥ 220 N (高强度户外防扯脱极限设计)',
      nickelReleaseRate: '< 0.05 µg/cm²/week',
      weightGrams: 35,
      compatibility: ['Garmin Fenix 7/8 / Epix / Enduro', 'Apple Watch Ultra 1/2', 'Suunto 9 Peak']
    },
    economics: {
      bomRMB: 36,
      hardwareRMB: 18,
      packagingRMB: 7,
      totalCostRMB: 61,
      retailPriceNOK: 689,
      grossMarginPercent: 74
    },
    manufacturingInstructions: '广州白云皮具成熟供应链采购优质树膏皮原胚；高精度大功率紫外激光微雕机逐条雕刻；工人手工封蜂蜡与擦色。',
    targetAudienceNorway: '挪威荒野越野跑者、户外登山客、重度佳明户外表拥趸、北欧历史神话爱好者。'
  },
  {
    id: 'sami-duodji',
    code: 'CMF-04',
    nameZh: '萨米杜奥吉 · 锡绣鹿皮图腾款',
    nameEn: 'Sámi Duodji Pewter Wire & Reindeer Heritage',
    heritageArchetype: '挪威极北萨米族民间手作 (Sámi Duodji) × 传统锡丝编织 (Tenntråd) × 纳斯卡红蓝线',
    imagePath: '/src/assets/images/strap_sami_pewter_leather_1792479222050.jpg',
    tagline: '致敬北极圈千年游牧手作锡绣，编织进入现代智能手表的微型艺术',
    culturalOrigin: '北极圈萨米人（Sámi）拥有独特的杜奥吉（Duodji）手作传统，其中将 96% 纯锡与 4% 纯银熔铸抽成细丝（Tenntråd）并在鹿皮上编织三股、四股辫，是萨米贵族的象征。传统萨米旗帜上的红、黄、蓝、绿四色则代表阳光、海洋与苔原。',
    cmf: {
      color: {
        palette: [
          { name: '极夜玄黑 (Arctic Night Leather)', hex: '#0F172A', pantone: 'PANTONE 419 C', role: '软质植鞣皮革底色' },
          { name: '萨米锡丝白银 (Pewter Wire)', hex: '#E2E8F0', pantone: 'PANTONE 877 C', role: '中央手工立体编织脊' },
          { name: '萨米盛典红蓝 (Gákti Crimson & Royal Blue)', hex: '#DC2626', pantone: 'PANTONE 186 C / 286 C', role: '外缘手工压线跳色点缀' }
        ],
        narrative: '黑夜与极地白银的编织交响，点缀红蓝传统的萨米刺绣边缘，呈现非凡的高贵神秘感。'
      },
      material: {
        outerLayer: '生态仿鹿皮粒面特制超软小牛皮 + 传统锡银合金线 (96% Tin / 4% Silver)',
        innerLining: '透气超纤防过敏反绒内衬（经抗真菌防臭离子处理）',
        hardwareBuckle: '钛合金轻量化表扣，表面锤目纹手工做旧处理',
        threadStitch: '防褪色特种刺绣股线'
      },
      finish: {
        surfaceTexture: '柔软皮革触感中凹凸镶嵌着三维金属编织骨架',
        hardwareFinish: '手工锻打锤目纹 (Hammered Titanium Finish)',
        edgeCoating: '意大利哑光真皮无痕内包缝工艺',
        tactileFeel: '极度亲肤柔顺，贴腕即热，极寒天气下佩戴无冰冷刺骨感'
      }
    },
    engineeringSpecs: {
      waterproofSweatRating: '生活防泼溅，防冷凝水渗透',
      workingTemp: '-35℃ 至 50℃ (极耐低温)',
      tensileLoadLimit: '≥ 150 N',
      nickelReleaseRate: '0.00 µg/cm²/week (锡银线与钛金属扣均天然绝对零镍)',
      weightGrams: 24,
      compatibility: ['Apple Watch 40/41/44/45/49mm Ultra', 'Galaxy Watch 4/5/6', '传统 20/22mm']
    },
    economics: {
      bomRMB: 48,
      hardwareRMB: 22,
      packagingRMB: 8,
      totalCostRMB: 78,
      retailPriceNOK: 849,
      grossMarginPercent: 77
    },
    manufacturingInstructions: '特制纯锡线专用绕线机配合非遗绣娘编织；表扣采用高精密冷锻钛合金；附赠“致敬萨米手工艺文化传承”合规公证书。',
    targetAudienceNorway: '特罗姆瑟 (Tromsø) 与挪威北部极光游客、本土手工艺爱好者、高净值个性配饰收藏家。'
  },
  {
    id: 'aurora-friluftsliv',
    code: 'CMF-05',
    nameZh: '极光峡湾 · 旷野耐候夜光双面带',
    nameEn: 'Aurora Borealis & Friluftsliv Explorer',
    heritageArchetype: '挪威极光神话 (Nordlys) × 挪威露天生活哲学 (Friluftsliv) × GRS海洋塑料再生',
    imagePath: '/src/assets/images/strap_aurora_fjord_friluftsliv_1792479223153.jpg',
    tagline: '100% 回收海洋塑料再生纱线，蓄能发光，拥抱北欧极致环保主义',
    culturalOrigin: '源自挪威特罗姆瑟与罗弗敦群岛（Lofoten）冬夜天际流动的绿色极光（Nordlys），以及挪威深入骨髓的 Friluftsliv（露天荒野生活）信仰，直击挪威对海洋塑料治理与气候行动的最高敬意。',
    cmf: {
      color: {
        palette: [
          { name: '玄武岩深灰 (Basalt Slate)', hex: '#334155', pantone: 'PANTONE 426 C', role: '耐磨基布骨架色' },
          { name: '欧若拉夜光翡翠 (Aurora Luminescent Green)', hex: '#10B981', pantone: 'PANTONE 3298 C', role: '长余辉荧光蓄能织线' },
          { name: '极地冰川墨黑 (DLC Glacier Black)', hex: '#09090B', pantone: 'PANTONE Neutral Black C', role: '重型 DLC 类金刚石镀层' }
        ],
        narrative: '白天呈低调内敛的高级玄武岩矿石灰，进入漆黑的挪威极夜或山洞时，极光绿线条泛起幽蓝夜光，兼具户外安全信标功能。'
      },
      material: {
        outerLayer: '100% GRS 认证海洋废弃渔网再生聚酯纱线 + 日本进口稀土蓄光高发光纤维',
        innerLining: '耐 -40℃ 极低温航空级全硫化氟橡胶，蜂窝状六边形立体呼吸孔',
        hardwareBuckle: '316L 不锈钢基底 + DLC (Diamond-Like Carbon) 类金刚石耐磨纳米硬化镀层',
        threadStitch: '凯夫拉 (Kevlar) 防割断加固缝线'
      },
      finish: {
        surfaceTexture: '高密度军工织带抗磨纹理 + 氟橡胶哑光丝滑手感',
        hardwareFinish: 'DLC 晶体深邃哑光黑（莫氏硬度 7.5，防冰镐钥匙刮擦）',
        edgeCoating: '超声波无痕无胶热裁封边',
        tactileFeel: '极度清爽干练，暴汗不粘腻，浸水 10 秒即干'
      }
    },
    engineeringSpecs: {
      waterproofSweatRating: '100% 潜水级抗水 (10 ATM 耐水压)',
      workingTemp: '-40℃ 至 75℃ (极地荒野认证)',
      tensileLoadLimit: '≥ 250 N (最强抗拉撕裂指标)',
      nickelReleaseRate: '0.00 µg/cm²/week (全包覆 DLC 涂层)',
      weightGrams: 23,
      compatibility: ['Garmin QuickFit 20/22/26mm', 'Apple Watch 45/49mm Ultra', 'Polar Vantage']
    },
    economics: {
      bomRMB: 26,
      hardwareRMB: 16,
      packagingRMB: 5,
      totalCostRMB: 47,
      retailPriceNOK: 549,
      grossMarginPercent: 79
    },
    manufacturingInstructions: '采购青岛/浙江回收海洋再生认证切片抽丝；与蓄光母粒共混纺织；东莞五金厂进行离子束辅助 DLC 真空物理气相沉积镀膜。',
    targetAudienceNorway: '北欧滑雪登山向导、皮划艇与帆船水手、环保主义青年、极夜长跑爱好者。'
  }
];

export const THREE_WAY_BENCHMARK: ThreeWayBenchmarkItem[] = [
  {
    dimension: '文化认同与情感共鸣',
    traditionalEthnicBracelet: {
      rating: '★★★★★ (极高)',
      summary: '挪威百年民俗瑰宝',
      detail: '由 Husfliden 等本地百年手作店售卖，与 Bunad 或萨米血统绑定，深受长辈与传统家庭青睐。'
    },
    mainstreamSmartStrap: {
      rating: '★☆☆☆☆ (极弱)',
      summary: '冰冷同质的工业耗材',
      detail: '不论是苹果原厂还是 Nomad，均由加州/硅谷工业设计主导，黑灰硅胶千篇一律，与挪威民族庆典格格不入。'
    },
    ourFusionStrap: {
      rating: '★★★★☆ (卓越跨界)',
      summary: '中挪文明互敬与手作温润',
      detail: '将挪威八瓣玫瑰、索尔耶银饰、维京如尼与中国宋锦、苏绣非遗技法结合，赋予智能手表强烈的人文灵魂。'
    }
  },
  {
    dimension: '智能设备适配与工程可靠度',
    traditionalEthnicBracelet: {
      rating: '☆☆☆☆☆ (完全不支持)',
      summary: '纯手镯首饰，无接口',
      detail: '无法与 Apple Watch 或 Garmin 连接，日常想戴手表就必须放弃手环，无法监测运动心率健康。'
    },
    mainstreamSmartStrap: {
      rating: '★★★★★ (精密工业)',
      summary: '公差精确，快拆稳定',
      detail: '与智能手表卡槽 100% 贴合，但单品溢价高（如 Nomad 钛金属售价超 1,400 NOK）。'
    },
    ourFusionStrap: {
      rating: '★★★★★ (高精公模互通)',
      summary: '316L/钛金属 CNC 快拆',
      detail: '东莞五金供应链公差控制在 0.03mm 内，经 180N 拉力与 1000 次插拔测试，同时兼容 Apple Watch Ultra 与 Garmin QuickFit。'
    }
  },
  {
    dimension: '抗汗防水与户外极端耐候 (Friluftsliv)',
    traditionalEthnicBracelet: {
      rating: '★★☆☆☆ (脆弱娇贵)',
      summary: '怕水、怕汗、易污损',
      detail: '纯羊毛呢或未涂层生鹿皮一旦遭遇大汗或峡湾雨水极易发霉硬化变形，只能在正式室内仪式佩戴。'
    },
    mainstreamSmartStrap: {
      rating: '★★★★★ (硬核耐磨)',
      summary: '全硅胶/全金属无惧风雨',
      detail: '专为汗液与海水设计，但贴肤侧容易闷汗发黏，冬天触感冰冷。'
    },
    ourFusionStrap: {
      rating: '★★★★☆ (双面复合工程创新)',
      summary: '表面艺术，内衬防汗氟橡胶',
      detail: '正面为纳米防污丝织/植鞣皮，贴肤反面采用立体导汗氟橡胶，并在极光款中达到 -40℃ 极限抗冻耐受力。'
    }
  },
  {
    dimension: '售价门槛与质价比 (Price-to-Value)',
    traditionalEthnicBracelet: {
      rating: '★★☆☆☆ (高昂手工溢价)',
      summary: '850 - 2,500 NOK',
      detail: '受制于挪威每小时数百克朗的高昂手工薪资，普通人难以当做日常消耗品随意复购。'
    },
    mainstreamSmartStrap: {
      rating: '★★★☆☆ (两极化分水岭)',
      summary: '250 NOK (劣质) 或 1,500 NOK (高奢)',
      detail: '平价款质感极廉价，高端款如 Bandwerk 价格昂贵且缺少运动机能。'
    },
    ourFusionStrap: {
      rating: '★★★★★ (490 - 790 NOK 黄金甜区)',
      summary: '轻奢质感，平价消费',
      detail: '凭借中国东莞与苏州庞大成熟的供应链，将千元级艺术质感的表带定在挪威大众日常可轻松消费的 490-790 NOK。'
    }
  },
  {
    dimension: 'B2B 渠道供货与商业毛利空间',
    traditionalEthnicBracelet: {
      rating: '★☆☆☆☆ (产能极小无折扣)',
      summary: '手作人无法批量供货',
      detail: '手工艺人月产仅能满足小摊位，无法给买手店提供 45%-50% 的批发利润空间，难以规模化。'
    },
    mainstreamSmartStrap: {
      rating: '★★★☆☆ (品牌商控盘严格)',
      summary: '批发毛利被压缩至 20-30%',
      detail: 'Nomad 等品牌方直供门槛高，给当地小买手店留存的利润空间微薄。'
    },
    ourFusionStrap: {
      rating: '★★★★★ (双赢超高毛利)',
      summary: '给买手店让利 45% - 50%',
      detail: '出厂成本仅 45-70 RMB，批发给买手店 329-399 NOK，零售商单件净赚 270-400 NOK，极具进货动力。'
    }
  }
];

export const VALIDATION_TESTING_FRAMEWORK = {
  b2cTesting: {
    title: 'B2C 线上极简数字测款流水线 (低试错成本)',
    budgetRMB: '约 2,000 - 3,500 元',
    duration: '14 - 21 天',
    steps: [
      {
        stepName: '01. 视觉化 A/B 创意测试 (不用提前备大货)',
        description: '在 Etsy 和独立站上线 5 款 CMF 样式的超高清 3D/实拍图。为每款配置 3 组不同场景广告文案（“Bunad 盛典搭配”、“Viking 户外荒野”、“极夜极光夜光”），挂出预售（Pre-order，交期标明 10-14 天）。',
        metrics: '点击率 CTR > 2.8%，加购率 > 6% 即为绿色通过指标。'
      },
      {
        stepName: '02. 挪威小微红人精准穿戴盲测 (Seeding Test)',
        description: '定向筛选 8 位挪威本地万粉以下博主（4位奥斯陆时尚/穿搭女性，4位卑尔根徒步越野跑者）。免费寄送原型样品，附带专属 85 折优惠券码，观察自然点赞数、评论提问“从哪买的”比例及转化率。',
        metrics: '单博主互动率 > 4.5%，产生 3 单以上转化即为优质爆款苗头。'
      },
      {
        stepName: '03. 逆向客诉与佩戴感知调研',
        description: '向首批 30 位原价购买的挪威买家发送自动调查邮件，重点核查：卡扣是否卡手、连续佩戴 8 小时是否出汗发红、防泼水效果是否符合预期。',
        metrics: '净推荐值 NPS > 55，退货率 < 3% 准许量产。'
      }
    ]
  },
  b2bTesting: {
    title: 'B2B 线下设计买手店“无风险实销”测款流水线',
    budgetRMB: '约 4,500 - 6,000 元 (含 20 套大师样品盒制作与专线空运)',
    duration: '30 - 45 天',
    steps: [
      {
        stepName: '01. 样品盒触感与开箱测试 (Master Sample Kit)',
        description: '向奥斯陆、卑尔根的 20 家精选生活方式买手店（Norway Designs, Dapper 等）寄送实物大师盒。盒内配原木亚克力桌面展示架，让店主在店员与常客中传阅，记录第一手店面反馈。',
        metrics: '买手回复意向率 > 25%（20家中有 5 家以上愿意试销）。'
      },
      {
        stepName: '02. 60天寄售动销速度测试 (Consignment Velocity Test)',
        description: '对入围的 5 家买手店，每家提供 8-10 条现货免费铺货，采用寄售协议（60 天未售出原样退回，售出按 50% 批发价按月结款）。',
        metrics: '单店 30 天内动销率 > 40%（卖出 4 条以上）判定为高动销店铺，立即锁定长期供货合同。'
      },
      {
        stepName: '03. 价格弹性与陈列位置测试',
        description: '在两家同商圈店铺分别标价 599 NOK 与 699 NOK，测试挪威买家对价格波动的敏感度，最终确定最佳统一零售指导价（MSRP）。',
        metrics: '确定零售毛利最大化的价格锚点。'
      }
    ]
  },
  decisionRules: [
    { rule: '综合评分前 2 名款式（通常为泰勒马克布纳德款与塞尔布八瓣玫瑰款）进入首期 150 条现货量产；', type: 'positive' },
    { rule: '若单款 B2C 广告获客成本（CAC）超过 180 NOK，立即关停投流，改为纯内容自然种草；', type: 'warning' },
    { rule: '若买手店反馈五金插头有任何松动摇晃痕迹，中国工厂五金批次全数报废重检，杜绝口碑硬伤。', type: 'critical' }
  ]
};

export const NORWAY_MARKET_INSIGHTS = {
  macro: {
    population: '550 万人 (人口规模不大，但具备极强聚合度与极高消费信任感)',
    gdpPerCapita: '$106,000 美元 (全球前列，居民对优质手作与文化设计品极度宽容，价格敏感度低)',
    wearablesPenetration: '超 68% (在全球名列前茅，几乎人手一块 Apple Watch 或专业户外表)',
    culturalCore: 'Friluftsliv (亲近自然的户外哲学) 与 Bunad (高度凝聚的国家与民族礼服传统)',
    currencyRate: '1 NOK ≈ 0.65 - 0.70 RMB (当前汇率相对稳定，易于核算)'
  },
  osloRetailZones: [
    { name: 'Karl Johans gate & Grünerløkka', feature: '奥斯陆设计买手店聚集地，聚集独立设计师、画廊衍生品店' },
    { name: 'Majorstuen & Hegdehaugsveien', feature: '高端珠宝钟表店集中地，传统表行聚集' },
    { name: 'Bryggen in Bergen & Tromsø Sentrum', feature: '峡湾旅游与历史名胜区，游客与本地文创礼品消费高地' }
  ],
  taxAndCustomsVOEC: {
    thresholdNOK: 3000,
    mvaRate: '25%',
    explanation: '自2020年挪威实施 VOEC (VAT on E-Commerce) 政策，跨境B2C包裹单件商品货值低于 3,000 NOK 时，无需缴纳昂贵的清关代理手续费，但必须征收 25% 的挪威增值税 (MVA)。小成本启动时，挂靠 Etsy 或通过专业货代走 DDP 直发通道可完全自动化申报。'
  }
};

export const B2B_RETAIL_TARGETS: RetailBuyerTarget[] = [
  {
    name: 'Norway Designs (Oslo)',
    city: 'Oslo',
    type: '北欧设计与生活美学买手名店',
    relevance: '专注于具有材质创新与人文工艺的独特配饰，对“非遗手作+现代硬件”的跨界融合有极高选品偏好。',
    contactApproach: '寄送实物 Master Sample Box + 英文设计原旨折页，主打宋锦八瓣玫瑰与布纳德限定款。',
    suggestedWholesaleTier: '进货折扣：45% (建议零售 599 NOK，批发价 329 NOK)'
  },
  {
    name: 'Dapper Oslo (Grünerløkka)',
    city: 'Oslo',
    type: '复古绅士与高端生活方式买手店',
    relevance: '聚集热爱高品质机械表、精制皮革和复古户外装备的男性中产顾客，对植鞣皮维京符文与极光款契合度极高。',
    contactApproach: '以“维京古老符文 x 东方龙鳞微雕”的神秘主义碰撞切入，提供少量寄售展示架测试。',
    suggestedWholesaleTier: '进货折扣：48% (建议零售 689 NOK，批发价 358 NOK)'
  },
  {
    name: 'Norsk Folkemuseum & Viking Museum Shops',
    city: 'Oslo / Bygdøy',
    type: '挪威国家民俗与维京历史博物馆官方商店',
    relevance: '官方文创商店常年寻找不仅止于塑料纪念品、而是能兼具文化厚度与现代日常实用性的高客单文创。',
    contactApproach: '强调苏绣布纳德传统纹样溯源与正向文化交流背书，突出环保包装与传承故事。',
    suggestedWholesaleTier: '进货折扣：50% (支持博物馆批量文创集采定制)'
  },
  {
    name: 'Husfliden 挪威本土手工协会旗下商店',
    city: 'Oslo / Bergen / Trondheim',
    type: '挪威最具威望的传统手工艺与 Bunad 官方零售机构',
    relevance: '所有做传统盛装配件的至高殿堂，若能以“现代智能表带配件供应商”身份进入其配饰专区，将彻底引爆全国声量。',
    contactApproach: '强调严苛的环保与无镍标准，邀请其本地老匠人进行实机试戴与文化审核。',
    suggestedWholesaleTier: '战略联名或特许进货'
  }
];

export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    phaseNumber: 1,
    timeframe: 'Day 1 - 25',
    titleZh: '原型打样与文化社群低成本验证',
    titleEn: 'Prototyping & Cultural Resonance Proof',
    budgetEstRMB: '约 3,500 - 5,000 元',
    objective: '零模具费开局，利用中国现有精密连接器公模，融合打样 5 个 CMF 系列各 2-3 套，验证工艺可行性与北欧受众真实声量。',
    actionItems: [
      {
        id: 'p1-1',
        task: '东莞/深圳五金连接器公模采购与公差实测',
        subtext: '避免开模重资产，采购市面最高等级 316L 喷砂钛灰 Apple Watch 及 Garmin QuickFit 快拆公模连接扣（每个成本 5-10 元），实装真机晃动测试。',
        deliverable: '50 套各尺寸精工快拆连接五金现货样本',
        riskMitigation: '劣质连接扣卡顿或划伤真机机身，务必做拉力机测试并实测 100 次插拔。'
      },
      {
        id: 'p1-2',
        task: '苏州宋锦/刺绣小样与防泼水复合打胶打样',
        subtext: '在苏州/海宁面料市场定制 2-3 米宋锦提花和精仿布纳德刺绣呢料，在东莞复合厂进行氟橡胶高温压合打样。',
        deliverable: '5 款表带各 3 套成品工程样（共 15 条）',
        riskMitigation: '真丝耐汗性弱，必须与底层氟橡胶紧密贴合且边缘做油边封蜡。'
      },
      {
        id: 'p1-3',
        task: 'Reddit r/Norway 与挪威华人/设计师社群盲测',
        subtext: '在 Reddit r/Norway 发起非广告性质的文化设计讨论帖（“Do you wear your Apple Watch with your Bunad on May 17?”），收集真实痛点与意向反馈。',
        deliverable: '至少 50 份挪威本地真实消费者定量与定性审美偏好问卷',
        riskMitigation: '避免被视作文化挪用（Cultural Appropriation），措辞须突出“致敬传统民俗的跨文化对话”。'
      }
    ]
  },
  {
    phaseNumber: 2,
    timeframe: 'Day 26 - 60',
    titleZh: '极简 B2C 数字验证与 B2B 样品盒突击',
    titleEn: 'Lean B2C Launch & B2B Sample Kit Blitz',
    budgetEstRMB: '约 7,000 - 12,000 元',
    objective: '借助 Etsy 自动代缴 VOEC 免去早期税务合规复杂手续；小批量产 100 条现货，同时向挪威 20 家精选买手店寄送大师样品盒。',
    actionItems: [
      {
        id: 'p2-1',
        task: 'Etsy 挪威店铺与 Shopify 极简独立站上线',
        subtext: '首选 Etsy 出海挪威，因为 Etsy 作为大型注册平台会自动代扣代缴挪威 25% VOEC 增值税，海关凭包装上的 VOEC 编码秒通关，零罚款与延误风险。',
        deliverable: '双语规范的高清视觉店铺与文化非遗故事专页',
        riskMitigation: '直邮物流选用云途小包或燕文专线，妥投时效 7-10 天，单票运费控制在 35-45 元。'
      },
      {
        id: 'p2-2',
        task: '制作 20 套“Sino-Nordic Master Sample Box”',
        subtext: '使用牛皮纸盒、棉麻防尘袋、手工封蜡与火漆，内装 2 款招牌表带 + 挪威语/英语装帧画册，寄往奥斯陆、卑尔根 20 家目标买手店。',
        deliverable: 'DHL 专线直接投递至买手店店主/选品经理办公桌',
        riskMitigation: '发货前通过 LinkedIn 或 Instagram 官方私信提前 3 天打招呼，告知礼盒正在路上。'
      },
      {
        id: 'p2-3',
        task: '小红书/TikTok/IG 挪威小微户外与时尚达人种草',
        subtext: '放弃几万粉昂贵头部达人，寻找粉丝量 2,000 - 10,000 的挪威本土户外摄影师、Bunad 穿搭博主，以“免费赠送体验 + 独家订制刻字”换取真实开箱分享。',
        deliverable: '首批 8-12 篇挪威实景自然光开箱测评图文与短视频',
        riskMitigation: '附带真实手写信，表达对挪威大自然与手作传统的敬意。'
      }
    ]
  },
  {
    phaseNumber: 3,
    timeframe: 'Day 61 - 110',
    titleZh: '5月17日宪法日备战与 B2B 线下寄售锁量',
    titleEn: 'May 17th Peak Campaign & B2B Consignment',
    budgetEstRMB: '约 15,000 - 25,000 元 (由首批回款滚动投入)',
    objective: '全面引爆挪威一年一度最大的消费节点（5月17日国民盛装节），并借势转化 3-5 家线下买手店成为首批常态化进货 B2B 渠道。',
    actionItems: [
      {
        id: 'p3-1',
        task: '针对“Bunad 搭配智能表”发起精准专题营销',
        subtext: '主推布纳德苏绣系列，强调“让你的 Apple Watch 也能融入百年生日庆典”，在挪威本地 Facebook 群组与 Google Ads 搜索词投产比精准投放。',
        deliverable: 'B2C 周期销售突破 200-300 条，验证高溢价 799 NOK 转化力',
        riskMitigation: '物流必须在 4月20日 之前全部从中国空运发出，避免赶不上 5月17日 庆典造成客诉。'
      },
      {
        id: 'p3-2',
        task: '转化首批 3-5 家买手店落地（提供试销免退换政策）',
        subtext: '对有顾虑的买手店提供“首批 10 条铺货寄售（Consignment），60天未结款退回”的零风险政策，配合定制的原木桌面立牌展示架。',
        deliverable: '至少 3 家奥斯陆/卑尔根高端买手店上架实物展示',
        riskMitigation: '以寄售控制违约风险，设立正规英文供货备忘录（MOU）。'
      }
    ]
  },
  {
    phaseNumber: 4,
    timeframe: 'Day 111 - 180',
    titleZh: '规模化出海与挪威本土官方合规沉淀',
    titleEn: 'Brand Scaling & Local Norwegian Compliance',
    budgetEstRMB: '业务正向自造血滚动扩产',
    objective: '月销稳定超 50,000 NOK 时，完成挪威税局正式 VOEC 直连注册，与中国代工厂签订独家模具排他协议，拓展瑞典/丹麦全北欧市场。',
    actionItems: [
      {
        id: 'p4-1',
        task: '挪威税务局 (Skatteetaten) 自主 VOEC 账号申请',
        subtext: '独立站流水提升后，脱离 Etsy 单一平台，在挪威税局官网自主开通 VOEC 申报代码，在 Shopify 直接代扣 25% MVA 并按季度申报。',
        deliverable: '官方注册企业 VOEC 纳税代码，关税绿色通道认证',
        riskMitigation: '聘请熟悉北欧跨境增值税的兼职财税顾问指导首季度做账。'
      },
      {
        id: 'p4-2',
        task: '拓展 Garmin 户外专业渠道 (XXL / Anton Sport)',
        subtext: '携真实出海数据与用户口碑，针对挪威连锁体育巨头（XXL, Anton Sport）切入极光双面带与维京皮革系列。',
        deliverable: '启动连锁户外零售商季节性采购供应商准入谈判',
        riskMitigation: '备足流动资金应对 B2B 连锁 60-90 天账期。'
      }
    ]
  }
];

export const COMPLIANCE_GUIDELINES = [
  {
    title: 'EU/EEA REACH 镍释放量强制测试 (EN 1811)',
    importance: '最高致命级',
    summary: '与人体手腕长期直接接触的金属部件（表扣、连接插头），镍析出速率必须低于 0.5 µg/cm²/周。挪威虽然不是欧盟成员国，但属于欧洲经济区 (EEA)，严格执行此法规。',
    solution: '中国供应链必须指定使用“真空炉无镍电镀”或 316L 医用级不锈钢/纯钛金属，出厂前在深圳具备 CNAS 认证的第三方实验室（如 SGS 或天祥）取得 EN 1811 测试合格报告，单次费用仅约 400-600 元。'
  },
  {
    title: '挪威 VOEC (VAT on E-Commerce) 增值税法案',
    importance: '核心关税关卡',
    summary: '货值低于 3,000 NOK（约 2,000 RMB）的单个包裹，免除常规进口清关手续费与关税，但严格征收 25% 的增值税 (MVA)。未依法申报的包裹可能被挪威海关扣留，并向收件人索取高额通关代办费（高达 150-300 NOK），导致恶评如潮。',
    solution: '前期通过 Etsy 开店（平台自扣代缴并在面单自动打印 VOEC 识别码），或使用带有挪威 DDP 专线的云途物流，确保发件人预付增值税，买家无感签收。'
  },
  {
    title: 'Grønt Punkt Norge (挪威绿点包装环保法案)',
    importance: '品牌声誉级',
    summary: '挪威法律要求商业进出口商对废旧包装的回收承担延伸责任。一次性泡沫塑料泡沫袋将直接遭遇当地环保审查和消费者抵制。',
    solution: '采用 FSC 认证纯原木浆牛皮纸盒、大豆油墨印刷，内部固定结构使用模切卡纸而非珍珠棉海绵，外贴可降解纸质胶带。'
  },
  {
    title: '文化尊重与知识产权侵权规避',
    importance: '公关与品牌防线',
    summary: '挪威人对萨米人（Sámi）传统与民间布纳德有深厚情感保护。若宣称“中国原产萨米表带”易被指责为廉价仿冒或文化挪用。',
    solution: '品牌叙事定位于“Sino-Nordic Cultural Dialogue (中挪文化互敬与匠心对话)”，明示材质来源与工艺细节，真诚讲述“苏州非遗丝织刺绣遇见挪威旷野”，避免盗用具有专有注册保护的地域 Bunad 官方认证商标。'
  }
];

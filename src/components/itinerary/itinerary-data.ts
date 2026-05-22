export type Variant = "card" | "flex-row" | "dashed";

export type ItineraryItem = {
  time: string;
  title: string;
  description: string;
  variant: Variant;
  mapsUrl?: string;
  imageSrc?: string;
  imageAlt?: string;
  internalHtml?: string;
};

export type ItineraryDay = {
  id: string;
  chars: [string, string, string];
  date: string;
};

export const days: ItineraryDay[] = [
  { id: "day1", chars: ["第", "一", "日"], date: "5/23 (六)" },
  { id: "day2", chars: ["第", "二", "日"], date: "5/24 (日)" },
  { id: "day3", chars: ["第", "三", "日"], date: "5/25 (一)" },
];

export const day1Items: ItineraryItem[] = [
  {
    time: "07:10",
    title: "啟程台南",
    description: "07:10 自重陽站搭乘和欣客運，約 11:30 抵達台南轉運站。",
    variant: "card",
  },
  {
    time: "11:30",
    title: "午餐．陳家汕頭麵",
    description: "當年回馬槍一吃成主顧，用汕頭乾麵開始完美的旅程！再熱都要吃！不管啦~",
    variant: "flex-row",
    mapsUrl: "https://maps.app.goo.gl/DWfEkeedw8EDGriLA",
    imageSrc: "/assets/shantou_noodles.png",
    imageAlt: "陳家汕頭麵",
  },
  {
    time: "13:00",
    title: "住宿放行李",
    description: "",
    variant: "card",
    internalHtml: '前往 <a href="/hotel" class="inline-link">Provintia Hotel 天下南隅</a> 辦理手續，放下行囊，輕裝上陣。',
  },
  {
    time: "14:30",
    title: "開基臨水夫人媽廟",
    description: "臨水夫人護佑初生嬰兒及保佑產婦的平安，是台灣最古老的祝禱順產育嬰的廟！為好朋友祈求孕期與生產順利~",
    variant: "flex-row",
    mapsUrl: "https://maps.google.com/?q=台南開基臨水夫人媽廟",
    imageSrc: "/assets/lin_shui_temple.png",
    imageAlt: "開基臨水夫人媽廟",
  },
  {
    time: "18:30",
    title: "晚餐．和洋亭真夏",
    description: "",
    variant: "flex-row",
    mapsUrl: "https://maps.google.com/?q=台南和洋亭真夏",
    imageSrc: "/assets/hamburg_steak.png",
    imageAlt: "和洋亭真夏",
    internalHtml:
      '復古和風氛圍中，品嚐多汁醇厚的日式漢堡排，結束完美的第一天。<br><br>已訂位 18:30，<a href="https://share.google/FvigoQfVOn0woT8YP" target="_blank" rel="noopener noreferrer" class="inline-link-green">查看店家資訊</a>。',
  },
];

export const day2Items: ItineraryItem[] = [
  {
    time: "白天",
    title: "自由探索",
    description: "府城漫遊，探索未知的巷弄小店與咖啡館... (待安排)",
    variant: "dashed",
  },
  {
    time: "20:00",
    title: "晚餐．蕪麦酒食",
    description: "",
    variant: "flex-row",
    mapsUrl: "https://maps.google.com/?q=台南 蕪麦酒食",
    imageSrc: "/assets/izakaya.png",
    imageAlt: "居酒屋",
    internalHtml:
      '華燈初上，在日式居酒屋中小酌，品嚐串燒，聊聊旅途趣事。<br><br>已訂位 20:00，<a href="https://share.google/n1KGYH1Iep78fWoyE" target="_blank" rel="noopener noreferrer" class="inline-link-green">查看店家資訊</a>。',
  },
];

export const day3Items: ItineraryItem[] = [
  {
    time: "上午",
    title: "奇美博物館．埃及展",
    description: "",
    variant: "flex-row",
    mapsUrl: "https://maps.google.com/?q=奇美博物館",
    imageSrc: "/assets/chimei_egypt.png",
    imageAlt: "奇美博物館 埃及展",
    internalHtml:
      '與大英博物館共同合作，匯聚280件作品，是歷年埃及法老文物來臺規模之最！<br><br>特別推薦2樓的VR沉浸探險【消失的法老】：完整還原最大、最古老的「古夫金字塔」，深入探訪解鎖金字塔內的神祕禁區。<a href="https://chimeimuseum.fonticket.com/ticket/Online_VR" target="_blank" rel="noopener noreferrer" class="inline-link-green">線上預售票$680/人，奇美博物館官網獨賣。</a>',
  },
  {
    time: "19:41",
    title: "滿載賦歸",
    description: "19:41 自台南站搭乘高鐵，21:39 抵達台北，帶著滿滿回憶與照片賦歸。",
    variant: "card",
  },
];

export const allItems = [day1Items, day2Items, day3Items];

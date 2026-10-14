/* i住家側欄共用資料：日後只需修改下方清單 */
// 最新公告開關：true = 顯示；false = 隱藏
const showAnnouncements = true;
// 活動總覽大廣告：填入熱門活動其中一個url，其餘會依hotEvents順序排成小廣告。
// 範例："./event-blog-coffee.html" 或 "./event-blog-04.html"
const featuredEventUrl = "./event-blog-01.html";

const sidebarContent = {
  "hotEvents": [
    {
      "title": "天天抽｜好禮輕鬆拿",
      "url": "./event-blog-01.html",
      "endDate": "2026-10-27"
    },
    {
      "title": "預約指定服務｜首單回饋",
      "url": "./event-blog-02.html",
      "endDate": "2026-10-27"
    },
    {
      "title": "咖啡1元購｜加碼送優惠券",
      "url": "./event-blog-coffee.html",
      "endDate": "2026-10-27"
    },
    {
      "title": "住戶專享｜綁定會員送點數",
      "url": "./event-blog-03.html",
      "endDate": "2026-12-31"
    },
    {
      "title": "美食外送｜首購享優惠",
      "url": "./event-blog-04.html",
      "endDate": "2026-10-27"
    },
    {
      "title": "光纖上網申辦送好禮",
      "url": "./event-blog-05.html",
      "endDate": "2026-10-31"
    },
    {
      "title": "寄件享雙重十倍回饋",
      "url": "./event-blog-06.html",
      "endDate": "2026-10-27"
    },
    {
      "title": "秋季出遊｜熱門票券5折起",
      "url": "./event-blog-07.html",
      "endDate": "2026-10-27"
    },
    {
      "title": "樂清｜首單洗冷氣送100點",
      "url": "./event-blog-duskin.html",
      "endDate": "2026-10-27"
    },
    {
      "title": "太子物業｜水電修繕雙重保障",
      "url": "./event-blog-prince.html",
      "endDate": "2026-10-27"
    }
  ],
  "announcements": [
    {

      "title": "維修公告｜2026-10-10",
      "url": "./notice-20261010.html"
    }
  ]
};


/* 活動預覽資料：由既有活動頁自動整理；右側及下方的順序共用 hotEvents */
const activityPreviews = {
  "event-blog-01.html": {
    "image": "./images/blog/blog-01.jpg",
    "description": "完成綁定 uniopen 會員帳號，即可免費參加天天抽活動，每位會員帳號每日可參加一次，不需扣除任何點數。 活動獎項包含 OPENPOINT 點數、限時購商城折價券，及不定期推出的生活服務折價券等好禮。實際獎項內容、數量及中獎機率，皆以當期活動頁面公告為準。"
  },
  "event-blog-02.html": {
    "image": "./images/blog/blog-02.jpg",
    "description": "每筆回饋11%，最高回饋100點。 活動期間內新會員首次預約或訂購 i住家指定服務，完成訂單後即可獲得 OPENPOINT 11%點數回饋。不論是預約餐廳、外送飲料、安排居家清潔、預約水電修繕，還是申辦光纖上網，都能享有筆筆回饋，讓您輕鬆體驗 i住家一站式生活服務。"
  },
  "event-blog-coffee.html": {
    "image": "./images/blog/1751x890_coffee.jpg",
    "description": "進入i住家平台首頁，點選「1元咖啡」活動頁，於活動期間內完成綁定 uniopen 會員帳號， 即可以 1元優惠價 購買 City Cafe 中杯美式咖啡，結帳完成後再加碼送您100元折價券！每日數量有限，兌換完畢即提前結束。 City Cafe 中杯美式咖啡$1（原價優惠折抵後） 加碼回饋：結帳成功即贈送 100 元折價券乙張，下次消費即可折抵使用。"
  },
  "event-blog-03.html": {
    "image": "./images/blog/blog-03.jpg",
    "description": "活動期間內，凡使用樺康E-life、窩福智慧物業管理平台或中保好生活之住戶，開啟i住家服務並完成uniopen會員帳號綁定，即可獲得OPENPOINT50點回饋。 透過i住家，輕鬆享有餐廳訂位、美食外送、水電修繕、家事清潔、光纖上網及限時購等多元生活服務，一站滿足日常所需。"
  },
  "event-blog-04.html": {
    "image": "./images/blog/blog-04.jpg",
    "description": "肚子餓了不用出門，美食直接送到家！ 活動期間透過i住家首次使用foodomo下單的新會員，輸入優惠碼「i住家首購5折」，單筆訂單實付金額滿$200即可享5折優惠，單筆最高折抵$120。"
  },
  "event-blog-05.html": {
    "image": "./images/blog/blog-05.jpg",
    "description": "追劇不卡頓、視訊更順暢、多人同時上網也沒問題！ 活動期間內，透過i住家申辦指定光纖上網方案，即可享雙重好禮回饋，讓您升級網路速度的同時，也把好康一起帶回家。 申辦指定光纖上網方案，即贈萬家福禮券1,200或 2,400元。"
  },
  "event-blog-06.html": {
    "image": "./images/blog/blog-06.jpg",
    "description": "寄包裹也有好禮拿！ 活動期間內，透過 i住家完成包裹寄件預約並成功寄件，即可獲得10+10共計20點OPENPOINT點數，方便寄還能累積點數回饋。"
  },
  "event-blog-07.html": {
    "image": "./images/blog/blog-07.jpg",
    "description": "熱門景點門票、旅遊住宿、連鎖餐飲、百貨等票券5折起，讓你一次備足出遊最重要的食住行，安排出遊簡單又優惠！ 瓦城集團、肯德基、台中鳳凰酒店、義大世界、鈴鹿賽道樂園、煙波都會館、關西六福莊......等等多個知名品牌，等你來搶購！"
  },
  "event-blog-duskin.html": {
    "image": "./images/blog/1751x890_duskin.jpg",
    "description": "i住家會員專屬活動,透過i住家預約冷氣清洗，即享i住家專屬加值服務。清洗完成後再送價值500元日本抗菌鍍膜，洗淨同時延長清新效果。"
  },
  "event-blog-prince.html": {
    "image": "./images/blog/blog-00.jpg",
    "description": "180天保固（須回饋滿意度）"
  }
};

/* 熱門活動與最新公告：直接載入JS，不需要fetch或JSON檔 */
(function () {

  // 活動總覽：大圖、小圖順序由 hotEvents 和 featuredEventUrl 控制。
  function renderEventOverview() {
    const featured = document.getElementById('overviewFeatured');
    const list = document.getElementById('overviewList');
    const homeList = document.getElementById('homeActivityList');
    if ((!featured || !list) && !homeList) return;

    const items = sidebarContent.hotEvents.filter(item => item && item.url && item.title);
    const main = items.find(item => item.url === featuredEventUrl) || items[0];
    const remaining = items.filter(item => item !== main);
    // 大廣告最多120字；小廣告維持74字
    const summary = (item, limit = 74) => {
      const file = item.url.split('/').pop();
      const details = activityPreviews[file] || {};
      const full = (details.description || item.title).replace(/\s+/g, ' ').trim();
      return full.length > limit ? full.slice(0, limit).replace(/[，、；。\s]+$/, '') + '…' : full;
    };
    const image = (item, large) => {
      const file = item.url.split('/').pop();
      const src = (activityPreviews[file] || {}).image;
      const wrap = document.createElement('div');
      wrap.className = large ? 'event-overview__image event-overview__image--large' : 'event-overview__image';
      if (src) {
        const img = document.createElement('img');
        img.src = src;
        img.alt = item.title;
        img.loading = large ? 'eager' : 'lazy';
        wrap.appendChild(img);
      } else {
        wrap.classList.add('event-overview__image--empty');
        wrap.textContent = 'i住家';
      }
      return wrap;
    };
    const title = item => {
      const h = document.createElement('h2');
      h.textContent = item.title;
      return h;
    };
    const description = (item, limit = 74) => {
      const para = document.createElement('p');
      para.textContent = summary(item, limit);
      return para;
    };

    // 截止日期由 hotEvents[].endDate 控制，不需修改各頁HTML。
    // 使用本地日期比較（活動結束當天仍顯示截止日期）。
    const deadlineBadge = item => {
      const badge = document.createElement('span');
      badge.className = 'event-overview__deadline';
      const rawDate = item.endDate;
      const validFormat = typeof rawDate === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(rawDate);
      if (!validFormat) {
        badge.textContent = '0000/00/00 截止';
        badge.classList.add('is-expired');
        badge.setAttribute('aria-hidden', 'true');
        return badge;
      }
      const [year, month, day] = rawDate.split('-').map(Number);
      const deadline = new Date(year, month - 1, day);
      if (deadline.getFullYear() !== year || deadline.getMonth() !== month - 1 || deadline.getDate() !== day) {
        badge.textContent = '0000/00/00 截止';
        badge.classList.add('is-expired');
        badge.setAttribute('aria-hidden', 'true');
        return badge;
      }
      badge.textContent = `${year}/${String(month).padStart(2, '0')}/${String(day).padStart(2, '0')} 截止`;
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      if (today > deadline) {
        // 隱藏標籤但保留版位，讓所有卡片底部對齊。
        badge.classList.add('is-expired');
        badge.setAttribute('aria-hidden', 'true');
      }
      return badge;
    };

    if (featured && list) {
    const hero = document.createElement('a');
    hero.className = 'event-overview__hero';
    hero.href = main.url;
    hero.append(image(main, true), title(main), description(main, 120));

    // 大廣告右下角 MORE：套用i住家首頁的綠色圓角樣式，連結隨主打活動同步變更
    const more = document.createElement('a');
    more.className = 'home-more';
    more.href = main.url;
    more.target = '_blank';
    more.rel = 'noopener noreferrer';
    more.setAttribute('aria-label', '查看更多：' + main.title);
    more.textContent = '+MORE';
    featured.replaceChildren(hero, more);

    const frag = document.createDocumentFragment();
    remaining.forEach(item => {
      const card = document.createElement('a');
      card.className = 'event-overview__item';
      card.href = item.url;
      const copy = document.createElement('div');
      copy.className = 'event-overview__copy';
      copy.append(title(item), description(item));
      card.append(image(item, false), copy);
      // 所有卡片均保留相同的截止日期區域，即使日期已過或未設定。
      const footer = document.createElement('div');
      footer.className = 'event-overview__card-footer';
      footer.appendChild(deadlineBadge(item));
      card.appendChild(footer);
      frag.appendChild(card);
    });
    list.replaceChildren(frag);
    }

    // 首頁只顯示四張小卡，與活動總覽共用圖片、摘要、截止日設定。
    if (homeList) {
      const fragment = document.createDocumentFragment();
      remaining.slice(0, 4).forEach(item => {
        const card = document.createElement('a');
        card.className = 'event-overview__item';
        card.href = item.url;
        const copy = document.createElement('div');
        copy.className = 'event-overview__copy';
        copy.append(title(item), description(item));
        const footer = document.createElement('div');
        footer.className = 'event-overview__card-footer';
        footer.appendChild(deadlineBadge(item));
        card.append(image(item, false), copy, footer);
        fragment.appendChild(card);
      });
      homeList.replaceChildren(fragment);
    }
  }

  function renderSidebar() {
    renderEventOverview();
    const hotList = document.querySelector('.hot-news:not(.latest-news) .hot-news__list');
    const noticeList = document.getElementById('latestAnnouncements');

    // 同步控制整張「最新公告」卡片（包括標題及內容）
    const noticeSection = document.querySelector('.sidebar .latest-news');
    if (noticeSection) {
      noticeSection.style.setProperty('display', showAnnouncements ? '' : 'none', 'important');
    }

    if (hotList) {
      const fragment = document.createDocumentFragment();
      sidebarContent.hotEvents.forEach((event, index) => {
        if (!event || typeof event.title !== 'string' || typeof event.url !== 'string') return;
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = event.url;
        const rank = document.createElement('span');
        rank.className = 'hot-news__rank';
        rank.textContent = String(fragment.childElementCount + 1);
        const body = document.createElement('span');
        body.className = 'hot-news__body';
        const name = document.createElement('span');
        name.className = 'hot-news__name';
        name.textContent = event.title;
        body.appendChild(name);
        a.append(rank, body);
        li.appendChild(a);
        fragment.appendChild(li);
      });
      hotList.replaceChildren(fragment);
    }

    if (noticeList) {
      const fragment = document.createDocumentFragment();
      sidebarContent.announcements.forEach(entry => {
        if (!entry || typeof entry.title !== 'string') return;
        const li = document.createElement('li');
        const body = document.createElement('span');
        body.className = 'hot-news__body';
        const name = document.createElement('span');
        name.className = 'hot-news__name';
        const date = typeof entry.date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(entry.date)
          ? entry.date.replace(/^(\d{4})-(\d{2})-(\d{2})$/, (_, y, m, d) => `${y}年${Number(m)}月${Number(d)}日`)
          : '';
        name.textContent = date + entry.title;
        body.appendChild(name);
        if (typeof entry.url === 'string' && entry.url.trim()) {
          const a = document.createElement('a');
          a.href = entry.url;
          a.appendChild(body);
          li.appendChild(a);
        } else {
          const div = document.createElement('div');
          div.className = 'latest-news__entry';
          div.appendChild(body);
          li.appendChild(div);
        }
        fragment.appendChild(li);
      });
      noticeList.replaceChildren(fragment);
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderSidebar, { once: true });
  } else {
    renderSidebar();
  }
})();

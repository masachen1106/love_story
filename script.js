/* =========================================================
   💕 這裡開始修改你們的資料
========================================================= */

const couple = {
    myName: "最可愛寶貝",

    partnerName: "建安",

    daysTogether: "30+",

    // Secret password
    secretPassword: "0724",

    /* ---------------------------------------------------------
       🎁 兌換券小禮物設定（底下的文字皆可自訂修改）
    --------------------------------------------------------- */
    coupon: {
        title: "願望兌換券", // 兌換券主標題
        subtitle: "一個小小的紀念禮物", // 副標題
        content: "憑此券可要求陳屁屁為妳實現一個願望！\n", // 兌換內容 (使用 \n 換行)
        receiver: "湘玲", // 獲獎對象
        issuer: "建安", // 承諾發行人
        expire: "終身有效 ♾️", // 有效期限
        note: "＊本券最終解釋權歸公主所有，還望手下留情 💚", // 備註條款
        code: "VAL-2026-0821-LOVE-001", // 兌換碼 / 條碼編號
    },

    message: `
最愛的湘玲仙女公主寶貝：

不知不覺我們已經一個月了。

一個月好像不是很長，
但這段時間裡面，
有好多原本很普通的日子，
因為有了妳，變得不太一樣。

我很喜歡跟妳聊天的放鬆時光、
跟妳一起吃東西變胖肚肚、
一起出去玩到迷路，
也很喜歡我們之間的小默契。

這是我們很多很多個月的第一個，
未來可能會有吵架的時候，但只要妳願意，
我就會一直緊緊抱著妳，
我們一起，度過那些磨合、包容、還有越來越認識彼此的日子。

相信我們不會只有「我愛你」時的浪漫，
而是在日子變得平凡、生活有了柴米油鹽之後，
依然願意選擇繼續跟彼此在一起。
或許不一定每次都有完美的回應或答案，
就讓我們一同面對、一同成長，
一起把平凡的日子過成屬於我們的故事。


我可能不是最會準備驚喜的人，
但還是想展現一下直男式浪漫 <3

Happy 1 Month ❤️

最愛妳的比比&屁屁&陳公子&大同車銀優&陳同學
`,

    timeline: [
        {
            date: "DAY 01",
            title: "拍貼機裡的我們 📸",
            image: "assets/IMG_6691.PNG",
        },
        {
            date: "DAY 12",
            title: "迎接公主回國",
            image: "assets/IMG_6745.MOV",
        },
        {
            date: "DAY 16",
            title: "離家10步の咖啡廳小約會 ☕️",
            image: "assets/IMG_6760.jpg",
        },
        {
            date: "DAY 19",
            title: "「愛你」❤️",
            image: "assets/S__303071243.jpg",
        },

        {
            date: "DAY 20",
            title: "甜甜的冰淇淋 🍦",
            image: "assets/IMG_6775.jpg",
        },
        {
            date: "DAY ??",
            title: "不知為啥就挺常出現在話題的紈絝",
            image: "assets/IMG_6603.JPG",
        },

        {
            date: "DAY 24",
            title: "一起說早安 ☀️",
            image: "assets/IMG_6791.PNG",
        },
        {
            date: "DAY 27-1",
            title: "悄悄比的小愛心 💕",
            image: "assets/7A904DA9-0987-4E6C-9C6E-9EBB58B58E20.JPG",
        },
        {
            date: "DAY 27-2",
            title: "好美的代客服務",
            image: "assets/IMG_6810.jpg",
        },
        {
            date: "DAY 30",
            title: "Sweet & Sweet",
            image: "assets/IMG_6819.jpg",
        },
        {
            date: "TODAY",
            title: "一個月紀念日 🎉",
            image: "",
        },
    ],

    achievements: [
        {
            icon: "❤️",
            title: "Relationship Started",
            description: "開始一段心動的冒險。",
            unlocked: true,
        },
        {
            icon: "🍜",
            title: "一起吃飯",
            description: "一起吃過很多頓飯。",
            unlocked: true,
        },
        {
            icon: "🎬",
            title: "電影",
            description: "一起看了一場電影",
            unlocked: true,
        },
        {
            icon: "🍦",
            title: "冰淇淋",
            description: "一起攻略各家冰店",
            unlocked: true,
        },
        {
            icon: "😂",
            title: "被搭訕",
            description: "一起被奇怪的售票員搭訕",
            unlocked: true,
        },
        {
            icon: "🎆",
            title: "煙火",
            description: "一起看大稻埕煙火",
            unlocked: true,
        },
        {
            icon: "🐶",
            title: "狗狗",
            description: "被超可愛湘湘狗咬了幾口",
            unlocked: true,
        },
        {
            icon: "🕊️",
            title: "灰鴿",
            description: "一起呷好好粗a灰鴿！",
            unlocked: true,
        },
        {
            icon: "💰",
            title: "中獎",
            description: "刮超過1000！",
            unlocked: true,
        },
        {
            icon: "👨🏻",
            title: "爸爸",
            description: "講電話被突襲",
            unlocked: true,
        },
        {
            icon: "⭐️",
            title: "看星星",
            description: "一起去天文館",
            unlocked: false,
        },
        {
            icon: "🏝️",
            title: "漢來",
            description: "一起登上島語",
            unlocked: false,
        },
        {
            icon: "🚠",
            title: "出遊",
            description: "一起去外宿冒險！",
            unlocked: false,
        },
        {
            icon: "🚗",
            title: "卡爾",
            description: "兩個小飆仔一起去兜風",
            unlocked: false,
        },
        {
            icon: "🏠",
            title: "???",
            description: "持續解鎖中...",
            unlocked: false,
        },
    ],
};

/* =========================================================
   系統初始化
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("my-name").textContent = couple.myName;
    document.getElementById("days").textContent = couple.daysTogether;

    runBootSequence();

    renderTimeline();
    renderAchievements();
    renderCoupon();
});

/* =========================================================
   開機動畫
========================================================= */

function runBootSequence() {
    const logs = [
        "> Starting LOVE_LETTER...",
        "> Loading relationship database...",
        "> Searching memories...",
        "> Found 99+ memories.",
        "> Analyzing happiness level...",
        "> Ready.",
    ];

    const container = document.getElementById("boot-log");

    let index = 0;

    function nextLog() {
        if (index >= logs.length) {
            document.getElementById("start-btn").classList.remove("hidden");

            return;
        }

        const line = document.createElement("div");

        line.textContent = logs[index];

        container.appendChild(line);

        index++;

        setTimeout(nextLog, 450);
    }

    nextLog();
}

/* =========================================================
   切換頁面
========================================================= */

function showScreen(screenId) {
    document.querySelectorAll(".screen").forEach((screen) => {
        screen.classList.remove("active");
    });

    document.getElementById(screenId).classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });

    if (screenId === "message-screen") {
        startTyping();
    }
}

/* =========================================================
   ENTER SYSTEM
========================================================= */

document.getElementById("start-btn").addEventListener("click", () => {
    showScreen("home-screen");
});

/* =========================================================
   Timeline
========================================================= */

function renderTimeline() {
    const container = document.getElementById("timeline-container");

    container.innerHTML = "";

    couple.timeline.forEach((item) => {
        const div = document.createElement("div");

        div.className = "timeline-item";

        let mediaHTML = "";

        if (item.image) {
            const isVideo = /\.(mov|mp4|webm)$/i.test(item.image);
            if (isVideo) {
                mediaHTML = `
                    <video
                        src="${item.image}"
                        controls
                        playsinline
                        style="width: 100%; max-width: 500px; margin-top: 10px; border: 1px solid var(--green-dark);"
                    ></video>
                `;
            } else {
                mediaHTML = `
                    <img
                        src="${item.image}"
                        alt="${item.title}"
                        onerror="this.style.display='none'"
                    >
                `;
            }
        }

        div.innerHTML = `

            <div class="timeline-date">
                ${item.date}
            </div>

            <div class="timeline-content">

                <h3>${item.title}</h3>

                ${mediaHTML}

            </div>

        `;

        container.appendChild(div);
    });
}

/* =========================================================
   Achievements
========================================================= */

function renderAchievements() {
    const container = document.getElementById("achievement-container");

    container.innerHTML = "";

    couple.achievements.forEach((item) => {
        const div = document.createElement("div");

        div.className =
            "achievement " + (item.unlocked ? "unlocked" : "locked");

        div.innerHTML = `

            <h3>
                ${item.icon}
                ${item.title}
            </h3>

            <p>
                ${item.description}
            </p>

            <small>
                ${item.unlocked ? "✓ UNLOCKED" : "🔒 LOCKED"}
            </small>

        `;

        container.appendChild(div);
    });
}

/* =========================================================
   打字機情書
========================================================= */

let typingStarted = false;

function startTyping() {
    if (typingStarted) {
        return;
    }

    typingStarted = true;

    const element = document.getElementById("typing-text");

    let index = 0;

    function type() {
        if (index < couple.message.length) {
            element.textContent += couple.message[index];

            index++;

            setTimeout(type, 25);
        }
    }

    type();
}

/* =========================================================
   Secret
========================================================= */

function unlockSecret() {
    const input = document.getElementById("password-input");

    const result = document.getElementById("password-result");

    if (input.value === couple.secretPassword) {
        document.getElementById("secret-lock").classList.add("hidden");

        document.getElementById("secret-content").classList.remove("hidden");
        renderCoupon();
    } else {
        result.textContent = "> 小提示：神秘紀念日 ";

        input.value = "";
    }
}

/* =========================================================
   🎁 專屬兌換券渲染與圖片下載 (Canvas 高解析度輸出)
========================================================= */

function renderCoupon() {
    if (!couple.coupon) return;
    const c = couple.coupon;

    const titleEl = document.getElementById("coupon-display-title");
    const subTitleEl = document.getElementById("coupon-display-subtitle");
    const contentEl = document.getElementById("coupon-display-content");
    const receiverEl = document.getElementById("coupon-display-receiver");
    const issuerEl = document.getElementById("coupon-display-issuer");
    const expireEl = document.getElementById("coupon-display-expire");
    const noteEl = document.getElementById("coupon-display-note");
    const codeEl = document.getElementById("coupon-display-code");

    if (titleEl) titleEl.textContent = c.title || "";
    if (subTitleEl) subTitleEl.textContent = c.subtitle || "";
    if (contentEl)
        contentEl.innerHTML = (c.content || "").replace(/\n/g, "<br>");
    if (receiverEl) receiverEl.textContent = c.receiver || "";
    if (issuerEl) issuerEl.textContent = c.issuer || "";
    if (expireEl) expireEl.textContent = c.expire || "";
    if (noteEl) noteEl.textContent = c.note || "";
    if (codeEl) codeEl.textContent = c.code || "";
}

function downloadCoupon() {
    const c = couple.coupon || {};
    const canvas = document.createElement("canvas");
    const W = 1200;
    const H = 675;
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext("2d");

    // 相容性 roundRect 支援
    if (!ctx.roundRect) {
        ctx.roundRect = function (x, y, w, h, r) {
            if (typeof r === "number") r = { tl: r, tr: r, br: r, bl: r };
            this.beginPath();
            this.moveTo(x + r.tl, y);
            this.lineTo(x + w - r.tr, y);
            this.quadraticCurveTo(x + w, y, x + w, y + r.tr);
            this.lineTo(x + w, y + h - r.br);
            this.quadraticCurveTo(x + w, y + h, x + w - r.br, y + h);
            this.lineTo(x + r.bl, y + h);
            this.quadraticCurveTo(x, y + h, x, y + h - r.bl);
            this.lineTo(x, y + r.tl);
            this.quadraticCurveTo(x, y, x + r.tl, y);
            this.closePath();
        };
    }

    // 1. 全局背景 (黑綠混色高質感漸層)
    const bgGrad = ctx.createLinearGradient(0, 0, W, H);
    bgGrad.addColorStop(0, "#0a0f0d");
    bgGrad.addColorStop(0.5, "#121915");
    bgGrad.addColorStop(1, "#1a0f16");
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, W, H);

    // 2. 霓虹光芒細節
    const glowGrad = ctx.createRadialGradient(
        W / 2,
        H / 2,
        50,
        W / 2,
        H / 2,
        500,
    );
    glowGrad.addColorStop(0, "rgba(255, 123, 172, 0.18)");
    glowGrad.addColorStop(0.5, "rgba(99, 255, 154, 0.08)");
    glowGrad.addColorStop(1, "transparent");
    ctx.fillStyle = glowGrad;
    ctx.fillRect(0, 0, W, H);

    // 3. 票券邊框 (帶兩側 Ticket Notch 缺口)
    const marginX = 80;
    const marginY = 40;
    const cardW = W - marginX * 2;
    const cardH = H - marginY * 2;
    const cardX = marginX;
    const cardY = marginY;
    const radius = 24;
    const notchR = 20;

    // 繪製包含切角的 Path
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(cardX + radius, cardY);
    ctx.lineTo(cardX + cardW - radius, cardY);
    ctx.arcTo(cardX + cardW, cardY, cardX + cardW, cardY + radius, radius);

    // 右缺口
    ctx.lineTo(cardX + cardW, cardY + cardH / 2 - notchR);
    ctx.arc(
        cardX + cardW,
        cardY + cardH / 2,
        notchR,
        -Math.PI / 2,
        Math.PI / 2,
        true,
    );
    ctx.lineTo(cardX + cardW, cardY + cardH - radius);

    ctx.arcTo(
        cardX + cardW,
        cardY + cardH,
        cardX + cardW - radius,
        cardY + cardH,
        radius,
    );
    ctx.lineTo(cardX + radius, cardY + cardH);
    ctx.arcTo(cardX, cardY + cardH, cardX, cardY + cardH - radius, radius);

    // 左缺口
    ctx.lineTo(cardX, cardY + cardH / 2 + notchR);
    ctx.arc(cardX, cardY + cardH / 2, notchR, Math.PI / 2, -Math.PI / 2, true);
    ctx.lineTo(cardX, cardY + radius);

    ctx.arcTo(cardX, cardY, cardX + radius, cardY, radius);
    ctx.closePath();

    // 填滿票券背景色
    ctx.fillStyle = "#111714";
    ctx.fill();

    // 粉紅霓虹邊框
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#ff7bac";
    ctx.shadowColor = "#ff7bac";
    ctx.shadowBlur = 15;
    ctx.stroke();
    ctx.restore();

    // 4. 內層虛線對齊線
    ctx.save();
    ctx.beginPath();
    ctx.rect(cardX + 20, cardY + 20, cardW - 40, cardH - 40);
    ctx.setLineDash([8, 6]);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgba(99, 255, 154, 0.4)";
    ctx.stroke();
    ctx.restore();

    // 5. 標籤 Badge
    ctx.save();
    const badgeText = "★ SPECIAL LOVE COUPON ★";
    ctx.font = "bold 16px 'JetBrains Mono', monospace, sans-serif";
    const badgeW = ctx.measureText(badgeText).width + 30;
    const badgeX = W / 2 - badgeW / 2;
    const badgeY = cardY + 45;

    ctx.fillStyle = "#ff7bac";
    ctx.shadowColor = "#ff7bac";
    ctx.shadowBlur = 10;
    ctx.beginPath();
    ctx.roundRect(badgeX, badgeY, badgeW, 30, 15);
    ctx.fill();

    ctx.fillStyle = "#080b0a";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(badgeText, W / 2, badgeY + 15);
    ctx.restore();

    // 6. 主標題 (Title)
    ctx.save();
    ctx.font = "bold 44px 'PingFang TC', 'Microsoft JhengHei', sans-serif";
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.shadowColor = "rgba(255, 123, 172, 0.8)";
    ctx.shadowBlur = 12;
    ctx.fillText(c.title || "願望無條件兌換券", W / 2, cardY + 130);
    ctx.restore();

    // 7. 副標題 (Subtitle)
    ctx.save();
    ctx.font = "bold 18px 'JetBrains Mono', sans-serif";
    ctx.fillStyle = "#ff7bac";
    ctx.textAlign = "center";
    ctx.fillText(
        c.subtitle || "LIMITED EDITION · 終身有效",
        W / 2,
        cardY + 170,
    );
    ctx.restore();

    // 8. 虛線分隔線 + 愛心
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(cardX + 60, cardY + 195);
    ctx.lineTo(cardX + cardW - 60, cardY + 195);
    ctx.setLineDash([6, 6]);
    ctx.strokeStyle = "#246b40";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.font = "20px sans-serif";
    ctx.textAlign = "center";
    ctx.fillStyle = "#ff7bac";
    ctx.fillText("❤️", W / 2, cardY + 200);
    ctx.restore();

    // 9. 內容框 (Content Box)
    const boxX = cardX + 50;
    const boxY = cardY + 225;
    const boxW = cardW - 100;
    const boxH = 145;

    ctx.save();
    ctx.fillStyle = "rgba(99, 255, 154, 0.04)";
    ctx.beginPath();
    ctx.roundRect(boxX, boxY, boxW, boxH, 12);
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 4]);
    ctx.strokeStyle = "#246b40";
    ctx.stroke();

    // 繪製多行內容文字
    ctx.font = "bold 24px 'PingFang TC', 'Microsoft JhengHei', sans-serif";
    ctx.fillStyle = "#d9ffe5";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    const lines = (c.content || "").split("\n");
    const lineGap = 36;
    const startY = boxY + boxH / 2 - ((lines.length - 1) * lineGap) / 2;
    lines.forEach((line, i) => {
        ctx.fillText(line, W / 2, startY + i * lineGap);
    });
    ctx.restore();

    // 10. 詳細資料項 (Details Grid: 獲獎對象 / 承諾發行 / 有效期限)
    const details = [
        { label: "獲獎對象", val: c.receiver || "最可愛寶貝" },
        { label: "承諾發行", val: c.issuer || "建安" },
        { label: "有效期限", val: c.expire || "終身有效 ♾️" },
    ];

    const detailY = cardY + 395;
    const detailW = (cardW - 140) / 3;

    details.forEach((item, index) => {
        const itemX = cardX + 50 + index * (detailW + 20);
        ctx.save();
        ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
        ctx.beginPath();
        ctx.roundRect(itemX, detailY, detailW, 65, 8);
        ctx.fill();
        ctx.strokeStyle = "rgba(255, 123, 172, 0.3)";
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.font = "14px 'PingFang TC', 'Microsoft JhengHei', sans-serif";
        ctx.fillStyle = "#7d9184";
        ctx.textAlign = "center";
        ctx.fillText(item.label, itemX + detailW / 2, detailY + 24);

        ctx.font = "bold 18px 'PingFang TC', 'Microsoft JhengHei', sans-serif";
        ctx.fillStyle = "#63ff9a";
        ctx.fillText(item.val, itemX + detailW / 2, detailY + 50);
        ctx.restore();
    });

    // 11. 備註 Note
    ctx.save();
    ctx.font = "15px 'PingFang TC', 'Microsoft JhengHei', sans-serif";
    ctx.fillStyle = "#7d9184";
    ctx.textAlign = "center";
    ctx.fillText(
        c.note || "＊本券隨叫隨到，最終解釋權歸公主所有",
        W / 2,
        cardY + 490,
    );
    ctx.restore();

    // 12. 條碼 Barcode
    const barY = cardY + 515;
    ctx.save();
    const barW = 320;
    const barX = W / 2 - barW / 2;
    let currX = barX;

    const pattern = [
        3, 2, 5, 2, 4, 1, 6, 2, 3, 4, 2, 5, 1, 4, 3, 2, 6, 2, 4, 1, 5, 3, 2, 4,
        2, 6, 1, 3,
    ];
    pattern.forEach((w) => {
        ctx.fillStyle = "#63ff9a";
        ctx.fillRect(currX, barY, w, 40);
        currX += w + 3;
    });

    ctx.font = "14px 'JetBrains Mono', monospace";
    ctx.fillStyle = "#7d9184";
    ctx.textAlign = "center";
    ctx.fillText(c.code || "VAL-2026-0821-LOVE-001", W / 2, barY + 58);
    ctx.restore();

    // 13. 右上角戳章 (Love Stamp)
    ctx.save();
    ctx.translate(cardX + cardW - 100, cardY + 110);
    ctx.rotate((-15 * Math.PI) / 180);
    ctx.beginPath();
    ctx.arc(0, 0, 42, 0, Math.PI * 2);
    ctx.lineWidth = 3;
    ctx.strokeStyle = "rgba(255, 123, 172, 0.7)";
    ctx.setLineDash([4, 3]);
    ctx.stroke();

    ctx.font = "bold 12px 'JetBrains Mono', sans-serif";
    ctx.fillStyle = "rgba(255, 123, 172, 0.8)";
    ctx.textAlign = "center";
    ctx.fillText("AUTHENTIC", 0, -10);
    ctx.font = "bold 14px sans-serif";
    ctx.fillText("❤️ LOVE ❤️", 0, 10);
    ctx.font = "bold 10px sans-serif";
    ctx.fillText("APPROVED", 0, 26);
    ctx.restore();

    // 14. 產出圖片 Data URI
    const dataUrl = canvas.toDataURL("image/png");

    // 更新 Modal 彈窗與下載連結
    const modalImg = document.getElementById("coupon-modal-img");
    const modalLink = document.getElementById("coupon-modal-download-link");
    if (modalImg) modalImg.src = dataUrl;
    if (modalLink) {
        modalLink.href = dataUrl;
        modalLink.download = `Love_Coupon_${c.receiver || "Gift"}.png`;
    }

    // 顯示 Modal 彈窗 (手機長按即可存入相簿)
    const modal = document.getElementById("coupon-modal");
    if (modal) modal.classList.remove("hidden");

    // 自動觸發下載 (適用電腦端 / 支援 download 屬性之瀏覽器)
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = `Love_Coupon_${c.receiver || "Gift"}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function closeCouponModal() {
    const modal = document.getElementById("coupon-modal");
    if (modal) modal.classList.add("hidden");
}

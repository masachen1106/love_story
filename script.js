/* =========================================================
   💕 這裡開始修改你們的資料
========================================================= */

const couple = {
    myName: "最可愛寶貝",

    partnerName: "建安",

    daysTogether: 30,

    // Secret password
    secretPassword: "0724",

    message: `
最愛的湘玲仙女公主寶貝：

不知不覺我們已經一個月了。

一個月好像不是很長，
但這段時間裡面，
有好多原本很普通的日子，
因為多了一個妳，變得不太一樣。

我很喜歡跟妳聊天的放鬆時光、
跟妳一起吃東西變胖肚肚、
一起出去玩到迷路，
也很喜歡我們之間那些只有我們懂的小默契。

這是我們很多很多個月的第一個，
未來可能會有吵架的時候，但只要妳願意，
我就會一直緊緊抱著妳，
我們一起，度過那些磨合、包容、還有越來越認識彼此的日子。

雖然我可能不是最會準備驚喜的人，
但還是想展現一下宅男式浪漫 <3

Happy 1 Month ❤️

最愛妳的比比
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
            title: "訊息裡的「愛你」❤️",
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
            icon: "⭐️",
            title: "看星星",
            description: "一起去天文館",
            unlocked: true,
        },
        {
            icon: "🏝️",
            title: "漢來",
            description: "一起登島",
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
            description: "買一台我們的小車去兜風",
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
    } else {
        result.textContent = "> 小提示：神秘紀念日 ";

        input.value = "";
    }
}

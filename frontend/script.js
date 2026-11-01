const occasionInput = document.getElementById("occasion");
const recipientInput = document.getElementById("recipient");
const relationshipInput = document.getElementById("relationship");
const toneInput = document.getElementById("tone");

const card = document.getElementById("greetingCard");
const cardTitle = document.getElementById("cardTitle");
const cardName = document.getElementById("cardName");
const cardMessage = document.getElementById("cardMessage");
const decoration = document.getElementById("decoration");

const themes = {
    "Birthday": {
        emoji: "🎂 🎈 🎁",
        background: "linear-gradient(145deg, #fff0f6, #f0eaff)",
        color: "#7041d8",
        title: "Happy Birthday!"
    },
    "Diwali": {
        emoji: "🪔 ✨ 🪷",
        background: "linear-gradient(145deg, #fff1c9, #ffe0a3)",
        color: "#a65300",
        title: "Happy Diwali!"
    },
    "Eid": {
        emoji: "🌙 ⭐ ✨",
        background: "linear-gradient(145deg, #e2f8e9, #c2ead4)",
        color: "#176b48",
        title: "Eid Mubarak!"
    },
    "Christmas": {
        emoji: "🎄 🎁 ❄️",
        background: "linear-gradient(145deg, #e4f8e9, #c4e8d1)",
        color: "#176b3a",
        title: "Merry Christmas!"
    },
    "New Year": {
        emoji: "🎆 🥂 ✨",
        background: "linear-gradient(145deg, #e6eaff, #f8e2ff)",
        color: "#5734b5",
        title: "Happy New Year!"
    },
    "Wedding": {
        emoji: "💍 💐 🤍",
        background: "linear-gradient(145deg, #fff0e8, #ffe0ec)",
        color: "#a23c68",
        title: "Congratulations!"
    },
    "Anniversary": {
        emoji: "❤️ 🌹 ✨",
        background: "linear-gradient(145deg, #ffe6ed, #fff0f5)",
        color: "#b3295b",
        title: "Happy Anniversary!"
    },
    "Congratulations": {
        emoji: "🏆 🎉 ⭐",
        background: "linear-gradient(145deg, #e6f2ff, #e9e3ff)",
        color: "#2457a7",
        title: "Congratulations!"
    },
    "Thank You": {
        emoji: "💐 💖 🌸",
        background: "linear-gradient(145deg, #fff0f6, #f5e5ff)",
        color: "#9b3977",
        title: "Thank You!"
    },
    "Formal": {
        emoji: "✨ 🤝 ✨",
        background: "linear-gradient(145deg, #edf2f8, #dfe8f5)",
        color: "#304e77",
        title: "Warm Wishes"
    }
};

function createMessage(occasion, name, relationship, tone) {
    const greetings = {
        "Birthday": {
            warm: `Wishing you a wonderful birthday, ${name}! May your day be filled with happiness, laughter, and beautiful memories.`,
            funny: `Happy Birthday, ${name}! 🎉 Another year older, wiser, and even more awesome. Time to celebrate!`,
            formal: `Wishing you a very happy birthday, ${name}. May the year ahead bring you happiness and success.`,
            short: `Happy Birthday, ${name}! 🎂 Have an amazing day!`
        },
        "Diwali": {
            warm: `Happy Diwali, ${name}! May your life shine with happiness, peace, and prosperity.`,
            funny: `Happy Diwali, ${name}! May your sweets be plenty and your worries disappear like magic!`,
            formal: `Wishing you and your family a joyful Diwali filled with peace and prosperity.`,
            short: `Happy Diwali, ${name}! 🪔 Shine bright!`
        },
        "Eid": {
            warm: `Eid Mubarak, ${name}! May this special occasion bring peace, joy, and blessings to you and your loved ones.`,
            funny: `Eid Mubarak, ${name}! Wishing you a day full of smiles, wonderful company, and delicious food!`,
            formal: `Wishing you and your family a peaceful and blessed Eid.`,
            short: `Eid Mubarak, ${name}! 🌙 Wishing you joy and peace.`
        },
        "Christmas": {
            warm: `Merry Christmas, ${name}! May your home be filled with love, laughter, and wonderful memories.`,
            funny: `Merry Christmas, ${name}! May Santa bring you everything on your list and skip the naughty list!`,
            formal: `Wishing you a joyful Christmas and a peaceful holiday season.`,
            short: `Merry Christmas, ${name}! 🎄 Spread the joy!`
        },
        "New Year": {
            warm: `Happy New Year, ${name}! May this new beginning bring you happiness, growth, and wonderful opportunities.`,
            funny: `Happy New Year, ${name}! New year, new adventures, and another chance to keep those resolutions!`,
            formal: `Wishing you a prosperous New Year filled with continued success and new opportunities.`,
            short: `Happy New Year, ${name}! 🎆 Here's to a fresh start!`
        },
        "Wedding": {
            warm: `Congratulations, ${name}! Wishing you both a lifetime of love, laughter, and beautiful memories together.`,
            funny: `Congratulations, ${name}! Wishing you a lifetime of love, teamwork, and sharing the last slice of cake!`,
            formal: `Heartfelt congratulations and best wishes for a happy and fulfilling married life.`,
            short: `Congratulations, ${name}! 💍 Wishing you both a lifetime of love.`
        },
        "Anniversary": {
            warm: `Happy Anniversary, ${name}! May your journey together continue to grow with love and happiness.`,
            funny: `Happy Anniversary, ${name}! Cheers to another year of love, laughter, and putting up with each other!`,
            formal: `Warm wishes on your anniversary. May the years ahead bring continued happiness.`,
            short: `Happy Anniversary, ${name}! ❤️ Celebrate your beautiful journey.`
        },
        "Congratulations": {
            warm: `Congratulations, ${name}! Your hard work deserves to be celebrated. Wishing you even more success ahead.`,
            funny: `Congratulations, ${name}! You did it! Time to celebrate like the superstar you are!`,
            formal: `Congratulations on your achievement. Wishing you continued success in all your future endeavors.`,
            short: `Congratulations, ${name}! 🎉 Well deserved!`
        },
        "Thank You": {
            warm: `Thank you so much, ${name}! Your kindness means a lot, and I truly appreciate you.`,
            funny: `Thanks a million, ${name}! If gratitude were a gift, you'd be getting a huge one!`,
            formal: `Thank you for your time, support, and consideration. It is sincerely appreciated.`,
            short: `Thank you, ${name}! 💐 Truly appreciated.`
        },
        "Formal": {
            warm: `Warm wishes to you, ${name}. May the occasion bring happiness and continued success.`,
            funny: `Best wishes, ${name}! May your day be productive, positive, and pleasantly surprising.`,
            formal: `Please accept my warmest wishes. I hope you enjoy continued success and happiness in the days ahead.`,
            short: `Best wishes, ${name}! ✨`
        }
    };

    let message = greetings[occasion][tone];

    if (tone === "warm" && relationship === "family member") {
        message += "\n\nSending lots of love to you and your family!";
    } else if (tone === "warm" && relationship === "friend") {
        message += "\n\nSo grateful to have you in my life!";
    } else if (tone === "formal" && relationship === "colleague") {
        message += "\n\nBest regards and best wishes for the future.";
    } else if (tone === "formal" && relationship === "client") {
        message += "\n\nThank you for your continued trust and support.";
    }

    return message;
}

function drawWrappedText(ctx, text, x, y, maxWidth, lineHeight) {
    const paragraphs = text.split("\n");

    paragraphs.forEach((paragraph, index) => {
        const words = paragraph.split(" ");
        let line = "";

        for (const word of words) {
            const testLine = line ? line + " " + word : word;

            if (ctx.measureText(testLine).width > maxWidth && line) {
                ctx.fillText(line, x, y);
                y += lineHeight;
                line = word;
            } else {
                line = testLine;
            }
        }

        if (line) {
            ctx.fillText(line, x, y);
            y += lineHeight;
        }

        if (index < paragraphs.length - 1) {
            y += lineHeight * 0.5;
        }
    });

    return y;
}

/* ---------- Customization, AI and download ---------- */

const $ = id => document.getElementById(id);
const senderInput = $("sender"), detailsInput = $("details"), templateInput = $("template");
const fontInput = $("font"), colorInput = $("accent"), messageBox = $("messageBox");
const aiBtn = $("aiBtn"), statusEl = $("status");
const fonts = {
    serif: "Georgia, serif",
    modern: "'Segoe UI', Arial, sans-serif",
    script: "'Brush Script MT', cursive",
    mono: "'Courier New', monospace"
};
let useCustomColor = false;

const currentName = () => recipientInput.value.trim() || "Dear Friend";
const currentAccent = () => useCustomColor ? colorInput.value : themes[occasionInput.value].color;

function renderCard() {
    const theme = themes[occasionInput.value];
    const accent = currentAccent();
    const sender = senderInput.value.trim();
    const msg = messageBox.value.trim() || "Your personalized greeting will appear here.";

    cardTitle.textContent = theme.title;
    cardName.textContent = currentName();
    cardMessage.textContent = sender ? msg + "\n\n— " + sender : msg;
    decoration.textContent = theme.emoji;

    card.className = "greeting-card tpl-" + templateInput.value;
    card.style.background = theme.background;
    card.style.borderColor = accent;
    card.style.fontFamily = fonts[fontInput.value];
    cardTitle.style.color = accent;
    cardName.style.color = accent;
}

function templateMessage() {
    messageBox.value = createMessage(occasionInput.value, currentName(),
        relationshipInput.value, toneInput.value);
    renderCard();
}

async function aiGenerate() {
    aiBtn.disabled = true;
    statusEl.textContent = "Writing with AI…";
    try {
        const r = await fetch("/api/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                occasion: occasionInput.value,
                name: currentName(),
                relationship: relationshipInput.value,
                tone: toneInput.value,
                sender: senderInput.value.trim(),
                details: detailsInput.value.trim()
            })
        });
        const data = await r.json();
        if (!r.ok) throw new Error(data.error || r.status);
        messageBox.value = data.message;
        statusEl.textContent = "AI greeting ready. Edit it freely!";
    } catch (err) {
        templateMessage();
        statusEl.textContent = "AI unavailable (" + err.message + "). Used a template instead. Run the app with `npm start`.";
    }
    aiBtn.disabled = false;
    renderCard();
}

aiBtn.addEventListener("click", aiGenerate);
$("generateBtn").addEventListener("click", templateMessage);

[recipientInput, senderInput, templateInput, fontInput, messageBox].forEach(el =>
    el.addEventListener("input", renderCard));
colorInput.addEventListener("input", () => { useCustomColor = true; renderCard(); });
occasionInput.addEventListener("change", () => {
    useCustomColor = false;
    colorInput.value = themes[occasionInput.value].color;
    templateMessage();
});

$("downloadBtn").addEventListener("click", () => {
    const theme = themes[occasionInput.value];
    const accent = currentAccent();
    const [c1, c2] = theme.background.match(/#[0-9a-f]{6}/gi);
    const font = fonts[fontInput.value];
    const W = 1200, H = 800;

    const canvas = document.createElement("canvas");
    canvas.width = W; canvas.height = H;
    const ctx = canvas.getContext("2d");

    const g = ctx.createLinearGradient(0, 0, W, H);
    g.addColorStop(0, c1); g.addColorStop(1, c2);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);

    ctx.strokeStyle = accent;
    ctx.lineWidth = 8;
    if (templateInput.value === "playful") ctx.setLineDash([24, 14]);
    ctx.strokeRect(35, 35, W - 70, H - 70);
    ctx.setLineDash([]);
    if (templateInput.value === "elegant") {
        ctx.lineWidth = 2;
        ctx.strokeRect(55, 55, W - 110, H - 110);
    }

    ctx.textAlign = "center";
    ctx.font = "65px Arial";
    ctx.fillText(theme.emoji, 600, 170);

    ctx.fillStyle = accent;
    ctx.font = `bold 58px ${font}`;
    ctx.fillText(theme.title, 600, 260, 1000);
    ctx.font = `bold 48px ${font}`;
    ctx.fillText(currentName(), 600, 335, 1000);

    ctx.fillStyle = "#403653";
    ctx.font = `27px ${font}`;
    drawWrappedText(ctx, cardMessage.textContent, 600, 415, 900, 40);

    ctx.fillStyle = "#76658e";
    ctx.font = "22px Arial";
    ctx.fillText("Made with love on GREETINGLY", 600, 735);

    const link = document.createElement("a");
    link.download = "greetingly-greeting.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
});

colorInput.value = themes[occasionInput.value].color;
templateMessage();
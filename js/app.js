// ===== 12套专业配色方案 =====
const palettes = [
    {
        name: "暖暮",
        highlight: "#FFE4C4",
        midtone: "#DEB887",
        shadow: "#8B4513",
        skin: "#F4A460",
        skinShadow: "#A0522D",
        hidden1: "#CD853F",
        hidden2: "#D2691E",
        accent: "#FF6347"
    },
    {
        name: "晨雾",
        highlight: "#F0F8FF",
        midtone: "#B0C4DE",
        shadow: "#4682B4",
        skin: "#FFE4E1",
        skinShadow: "#BC8F8F",
        hidden1: "#87CEEB",
        hidden2: "#5F9EA0",
        accent: "#00CED1"
    },
    {
        name: "莫兰迪",
        highlight: "#E8E0D5",
        midtone: "#C4B7A6",
        shadow: "#8B7D6B",
        skin: "#D4C4B0",
        skinShadow: "#9C8B7A",
        hidden1: "#A69B8C",
        hidden2: "#B8A99A",
        accent: "#D4A5A5"
    },
    {
        name: "森语",
        highlight: "#F5F5DC",
        midtone: "#8FBC8F",
        shadow: "#2E8B57",
        skin: "#F5DEB3",
        skinShadow: "#8B7355",
        hidden1: "#9ACD32",
        hidden2: "#6B8E23",
        accent: "#98FB98"
    },
    {
        name: "幻紫",
        highlight: "#FFF0F5",
        midtone: "#DDA0DD",
        shadow: "#8B008B",
        skin: "#FFE4E1",
        skinShadow: "#BC8F8F",
        hidden1: "#DA70D6",
        hidden2: "#BA55D3",
        accent: "#EE82EE"
    },
    {
        name: "深海",
        highlight: "#E0FFFF",
        midtone: "#87CEFA",
        shadow: "#191970",
        skin: "#FFE4C4",
        skinShadow: "#DEB887",
        hidden1: "#4169E1",
        hidden2: "#0000CD",
        accent: "#00BFFF"
    },
    {
        name: "胶片",
        highlight: "#FAEBD7",
        midtone: "#D2B48C",
        shadow: "#8B4513",
        skin: "#FFDAB9",
        skinShadow: "#CD853F",
        hidden1: "#DEB887",
        hidden2: "#BC8F8F",
        accent: "#F4A460"
    },
    {
        name: "樱语",
        highlight: "#FFF5EE",
        midtone: "#FFB6C1",
        shadow: "#DB7093",
        skin: "#FFE4E1",
        skinShadow: "#BC8F8F",
        hidden1: "#FFC0CB",
        hidden2: "#FF69B4",
        accent: "#FF1493"
    },
    {
        name: "金秋",
        highlight: "#FFF8DC",
        midtone: "#DAA520",
        shadow: "#B8860B",
        skin: "#F4A460",
        skinShadow: "#8B4513",
        hidden1: "#D2691E",
        hidden2: "#CD853F",
        accent: "#FFD700"
    },
    {
        name: "水墨",
        highlight: "#F5F5F5",
        midtone: "#A9A9A9",
        shadow: "#2F4F4F",
        skin: "#FAF0E6",
        skinShadow: "#BC8F8F",
        hidden1: "#696969",
        hidden2: "#808080",
        accent: "#DC143C"
    },
    {
        name: "糖果",
        highlight: "#FFFACD",
        midtone: "#FFDAB9",
        shadow: "#F4A460",
        skin: "#FFE4E1",
        skinShadow: "#DEB887",
        hidden1: "#FFB6C1",
        hidden2: "#DDA0DD",
        accent: "#FF69B4"
    },
    {
        name: "暗夜",
        highlight: "#483D8B",
        midtone: "#2F2F4F",
        shadow: "#191970",
        skin: "#8B7355",
        skinShadow: "#4A3728",
        hidden1: "#6A5ACD",
        hidden2: "#483D8B",
        accent: "#9400D3"
    }
];

// ===== 当前配色索引 =====
let currentPaletteIndex = 0;

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', () => {
    // 从本地存储加载上次使用的配色
    const savedIndex = localStorage.getItem('currentPaletteIndex');
    if (savedIndex !== null) {
        currentPaletteIndex = parseInt(savedIndex);
    } else {
        // 随机选择一个
        currentPaletteIndex = Math.floor(Math.random() * palettes.length);
    }
    
    renderPalette();
});

// ===== 渲染配色方案 =====
function renderPalette() {
    const palette = palettes[currentPaletteIndex];
    
    // 更新色卡名称
    document.getElementById('paletteName').textContent = palette.name;
    
    // 更新光影层次
    updateColorBubble('highlight', palette.highlight);
    updateColorBubble('midtone', palette.midtone);
    updateColorBubble('shadow', palette.shadow);
    
    // 更新肤色
    updateColorBubble('skin', palette.skin);
    updateColorBubble('skinShadow', palette.skinShadow);
    
    // 更新藏色
    updateColorBubble('hidden1', palette.hidden1);
    updateColorBubble('hidden2', palette.hidden2);
    
    // 更新点缀色
    updateColorBubble('accent', palette.accent);
    
    // 保存到本地存储
    localStorage.setItem('currentPaletteIndex', currentPaletteIndex);
}

// ===== 更新颜色气泡 =====
function updateColorBubble(type, color) {
    const colorElement = document.getElementById(type + 'Color');
    const hexElement = document.getElementById(type + 'Hex');
    
    if (colorElement) {
        colorElement.style.backgroundColor = color;
        // 根据背景色亮度调整图标颜色
        const icon = colorElement.querySelector('.hidden-icon, .accent-icon');
        if (icon) {
            icon.style.color = getContrastColor(color);
        }
    }
    
    if (hexElement) {
        hexElement.textContent = color;
    }
}

// ===== 获取对比色（黑或白） =====
function getContrastColor(hexColor) {
    const r = parseInt(hexColor.substr(1, 2), 16);
    const g = parseInt(hexColor.substr(3, 2), 16);
    const b = parseInt(hexColor.substr(5, 2), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.9)';
}

// ===== 复制颜色 =====
function copyColor(element) {
    const type = element.dataset.type;
    const palette = palettes[currentPaletteIndex];
    let color;
    
    switch(type) {
        case 'highlight': color = palette.highlight; break;
        case 'midtone': color = palette.midtone; break;
        case 'shadow': color = palette.shadow; break;
        case 'skin': color = palette.skin; break;
        case 'skinShadow': color = palette.skinShadow; break;
        case 'hidden1': color = palette.hidden1; break;
        case 'hidden2': color = palette.hidden2; break;
        case 'accent': color = palette.accent; break;
    }
    
    // 复制到剪贴板
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(color).then(() => {
            showToast(color);
            vibrate();
        }).catch(() => {
            fallbackCopy(color);
        });
    } else {
        fallbackCopy(color);
    }
}

// ===== 备用复制方法 =====
function fallbackCopy(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showToast(text);
        vibrate();
    } catch (err) {
        console.error('复制失败:', err);
    }
    
    document.body.removeChild(textArea);
}

// ===== 显示Toast提示 =====
function showToast(color) {
    const toast = document.getElementById('toast');
    const toastText = document.getElementById('toastText');
    
    toastText.textContent = `已复制 ${color}`;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// ===== 震动反馈 =====
function vibrate() {
    if (navigator.vibrate) {
        navigator.vibrate(10);
    }
}

// ===== 重新生成配色 =====
function regeneratePalette() {
    const btn = document.querySelector('.regenerate-btn');
    btn.classList.add('spinning');
    
    // 震动反馈
    if (navigator.vibrate) {
        navigator.vibrate([20, 30, 20]);
    }
    
    // 随机选择一个新的配色（避免重复）
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * palettes.length);
    } while (newIndex === currentPaletteIndex && palettes.length > 1);
    
    currentPaletteIndex = newIndex;
    
    // 添加淡出动画
    const card = document.querySelector('.palette-card');
    card.style.opacity = '0';
    card.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
        renderPalette();
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
        btn.classList.remove('spinning');
    }, 200);
}

// ===== 显示帮助 =====
function showHelp() {
    const modal = document.getElementById('helpModal');
    modal.classList.add('show');
}

// ===== 关闭帮助 =====
function closeHelp() {
    const modal = document.getElementById('helpModal');
    modal.classList.remove('show');
}

// ===== 键盘快捷键 =====
document.addEventListener('keydown', (e) => {
    // 空格键重新生成
    if (e.code === 'Space' && e.target === document.body) {
        e.preventDefault();
        regeneratePalette();
    }
});

// ===== 防止双击缩放 =====
let lastTouchEnd = 0;
document.addEventListener('touchend', (e) => {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        e.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// ===== 添加触摸反馈 =====
document.querySelectorAll('.color-bubble, .regenerate-btn').forEach(el => {
    el.addEventListener('touchstart', () => {
        el.style.transform = 'scale(0.92)';
    }, { passive: true });
    
    el.addEventListener('touchend', () => {
        el.style.transform = '';
    }, { passive: true });
});

// ===== 导出功能（可选）=====
function exportPalette() {
    const palette = palettes[currentPaletteIndex];
    const data = {
        name: palette.name,
        colors: {
            highlight: palette.highlight,
            midtone: palette.midtone,
            shadow: palette.shadow,
            skin: palette.skin,
            skinShadow: palette.skinShadow,
            hidden1: palette.hidden1,
            hidden2: palette.hidden2,
            accent: palette.accent
        }
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `palette-${palette.name}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

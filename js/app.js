function resize(baseWidth = 1920, baseHeight = 1080) {
    const app = document.getElementsByTagName("body")[0];
    const scaleX = window.innerWidth / baseWidth;
    const scaleY = window.innerHeight / baseHeight;
    const scale = Math.min(scaleX, scaleY); // 비율 유지하려면 min 사용
    app.style.transform = `scale(${scale})`;
    app.style.border = "1px solid black";
}

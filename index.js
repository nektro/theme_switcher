//
import { Loop } from "https://gitcdn.xyz/cdn/nektro/basalt/9d376510b9dec8efbff0c79c347dedc149f8a1b0/src/loop.js";

//
export function setup_switcher(theme_count) {
    const themes = Array(theme_count).fill(0).map((v,i) => (`theme-${i+1}`));
    const loop = new Loop(0, themes.length-1, 0);
    const div = document.createElement("div");
    div.id = "theme-switcher";
    div.style.textAlign = "right";
    div.style.cursor = "pointer";
    div.style.userSelect = "none";
    div.textContent = "Switch Theme";
    div.addEventListener("click", function() {
        document.body.classList.remove(themes[loop.value]);
        loop.inc();
        document.body.classList.add(themes[loop.value]);
    });
    document.body.prepend(document.createElement("hr"));
    document.body.prepend(div);
    document.body.classList.add(themes[loop.value]);
}

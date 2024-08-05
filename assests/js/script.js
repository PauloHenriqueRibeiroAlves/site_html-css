/*window.onload = function() {
    document.querySelector(".menuMobile").addEventListener("click", function() {
        if (document.querySelector(".menu nav ul").computedStyleMap.display == 'flex') {
            document.querySelector(".menu nav ul").computedStyleMap.display = 'none';
        }else {
            document.querySelector(".menu nav ul").computedStyleMap.display = 'flex';
        }
    });
}*/

window.onload = function() {
    document.querySelector(".menuMobile").addEventListener("click", function() {
        const menu = document.querySelector(".menu nav ul");

        // Usamos getComputedStyle para verificar o valor de display atual
        if (window.getComputedStyle(menu).display === 'flex') {
            menu.style.display = 'none'; // Alteramos o estilo usando .style
        } else {
            menu.style.display = 'flex'; // Alteramos o estilo usando .style
        }
    });
};

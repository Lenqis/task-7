const content = [
    { key: "profile", title: "Николай, 20 лет, холост" },
    { key: "settings", title: "Ну вот тут крч настройки, настраивайся" },
    { key: "about", title: "Ну мы крч делаем это и то и вот наш номер: +7(999) 888-77-66" },
];

const container = document.getElementById("content");
const tabs = document.getElementById("tabs");
content.forEach(item => {
    const block = document.createElement("div");
    block.textContent = item.title;
    block.dataset.tab = item.key;
    container.appendChild(block);
});

function active(key) {
    document.querySelectorAll("#tabs li").forEach(tab => {
        tab.classList.remove("active");
        if (tab.dataset.tab === key) {
            tab.classList.add("active");
        };
    });
    document.querySelectorAll('#content > div').forEach(block => {
        block.classList.remove("active");
        if (block.dataset.tab === key) {
            block.classList.add("active");
        };
    });
};

tabs.addEventListener("click", function (event) {
    const tab = event.target.closest("li");
    if (!tab) return;
    active(tab.dataset.tab);
});

active("profile");
document.addEventListener("DOMContentLoaded", () => {
    const newsData = [
        {
            id: 1,
            title: "Україна отримала новий пакет допомоги",
            description: "ЄС схвалив фінансову допомогу...",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Ukraine.svg/2560px-Flag_of_Ukraine.svg.png",
            category: "політика"
        },
        {
            id: 2,
            title: "Нова перемога української збірної",
            description: "Збірна України здобула перемогу...",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Soccer_ball.svg/1200px-Soccer_ball.svg.png",
            category: "спорт"
        },
        {
            id: 3,
            title: "В Україні стартував масштабний IT-форум",
            description: "У Києві відбувся один із найбільших IT-форумів.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Computer-screen-code-glitch-animation-gif-background-free.gif/1200px-Computer-screen-code-glitch-animation-gif-background-free.gif",
            category: "технології"
        }
    ];

    const newsContainer = document.getElementById("news-container");

    function renderNews(category = "all") {
        newsContainer.innerHTML = "";
        newsData
            .filter(news => category === "all" || news.category === category)
            .forEach(news => {
                const newsCard = document.createElement("div");
                newsCard.classList.add("news-card");
                newsCard.innerHTML = 
                    <img src="${news.image}" alt="Новина">
                    <h3>${news.title}</h3>
                    <p>${news.description}</p>
                ;
                newsCard.addEventListener("click", () => {
                    alert(Ви відкрили новину: ${news.title});
                });
                newsContainer.appendChild(newsCard);
            });
    }

    renderNews();

    document.querySelectorAll(".category").forEach(button => {
        button.addEventListener("click", () => {
            renderNews(button.dataset.category);
        });
    });
});
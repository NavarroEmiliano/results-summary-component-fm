(async function loadResults() {
  try {
    const response = await fetch("./data.json");

    if (!response.ok) throw new Error("Error loading data");

    const data = await response.json();

    const fragment = document.createDocumentFragment();
    const topicsContainer = document.querySelector(".summary__topics");

    topicsContainer.innerHTML = "";

    data.forEach((item) => {
      const topicDiv = document.createElement("div");
      topicDiv.className = `summary__topic summary__topic--${item.category.toLowerCase()}`;

      topicDiv.innerHTML = `
                <div class="summary__topic-name">
                    <img class="summary_topic-icon" src="${item.icon}" alt="${item.category}">
                    <span class="summary__topic-title">${item.category}</span>
                </div>
                <span class="summary__topic-score"><strong>${item.score}</strong>&nbsp;&nbsp;/ 100</span>
            `;

      fragment.appendChild(topicDiv);
    });

    topicsContainer.appendChild(fragment);
  } catch (error) {
    console.error("Error:", error);
  }
})();

document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector("form");
    let actions = {
        "google": "https://www.google.com/",
        "duckDuckGo": "https://duckduckgo.com/",
        "bing": "https://www.bing.com/search",
        "ask": "https://www.ask.com/web"
     };

    const setSearchEngine = () => {
        let engine = document.querySelector('[name=engine]:checked');
        let text = document.getElementById('line');
        console.log(text.value);
        if (engine === null || text.value.length == 0) {
            alert("Invalid input!");
            event.preventDefault();
        }
        let url = actions[engine.value];
        console.log(engine.value);
        form.setAttribute("action", url);
    };

    form.addEventListener('submit', setSearchEngine);
});
// your code here
const btn = document.getElementById("button");

const handleurl = () => {
    const name = document.getElementById("name").value;
    const year = document.getElementById("year").value;
    const url = document.getElementById("url");

    // Update the text of the h3 element with the appropriate query string
    url.textContent = `https://localhost:8080/?name=${encodeURIComponent(name)}&year=${encodeURIComponent(year)}`;
};

btn.addEventListener("click", handleurl);
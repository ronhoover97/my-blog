const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
console.log(blogs)
const resultContent = document.getElementById("result-content");

function displayResults(){
    resultContent.innerHTML = '';

    for(let i = 0; i < blogs.length; i++){
        console.log(blogs[i])

        const resultDiv = document.createElement("div")
        resultDiv.setAttribute("class", "resultDiv")
        resultDiv.innerHTML = `
        <h3 class="blogTitle">${blogs[i].title}</h3>
        <p class="blogContent">${blogs[i].content}</p>
        <p class="blogUsername">${blogs[i].username}</p>
        `

        resultContent.append(resultDiv)
    }
}
displayResults()
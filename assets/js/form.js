// const usernameInput = document.getElementById("username");
// const titleInput = document.getElementById("title");
// const contentInput = document.getElementById("content");
// const userFormEl = document.querySelector('#search-form');

// function createAndRenderBlog() {
//     preventDefault();
//     const blog = {
//         username: usernameInput.value,
//         title: titleInput.value,
//         content: contentInput.value,
//     };
//     const blogs = localStorage.getItem('blogs')
//     blogs.push(blog)
//     localStorage.setItem('blog', JSON.stringify(blogs));
//     }

// userFormEl.addEventListener('submit', createAndRenderBlog);

const usernameInput = document.getElementById("username");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const userFormEl = document.querySelector("#search-form");

function createAndRenderBlog(event) {
  event.preventDefault(); // prevent form submission

  const blog = {
    username: usernameInput.value,
    title: titleInput.value,
    content: contentInput.value,
  };
  if (!blog.username || !blog.title || !blog.content) {
    alert("Please enter all fields.");
    return;
  } else {
    let blogs = JSON.parse(localStorage.getItem("blogs")) || []; // Parse the string back to array
    blogs.push(blog);
    localStorage.setItem("blogs", JSON.stringify(blogs));
    location.href = "./blog.html";
  }
}

userFormEl.addEventListener("submit", createAndRenderBlog);

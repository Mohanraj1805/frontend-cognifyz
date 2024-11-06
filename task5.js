
async function fetchPosts() {
  try {
 
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

   
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

  
    const posts = await response.json();
    displayPosts(posts);
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}
function displayPosts(posts) {
  const postsContainer = document.getElementById("postsContainer");
  postsContainer.innerHTML = "";
  posts.forEach((post) => {
    const postDiv = document.createElement("div");
    postDiv.className = "post";

    postDiv.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;

    postsContainer.appendChild(postDiv);
  });
}

fetchPosts();

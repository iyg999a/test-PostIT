const feed = document.getElementById("postcontainer")

async function loadPosts() {
    const response = await fetch("/posts");

    const posts = await response.json()

    feed.innerHTML  = "";
    posts.forEach(post => {
            feed.innerHTML += `
                <div class="post">
                    <img src="${post.image}" alt="Post Image">
                    <p>${post.caption}</p>
                </div>
            `;
        });
}

loadPosts()
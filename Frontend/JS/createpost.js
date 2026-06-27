const form = document.getElementById("postform")

form.addEventListener("submit", async(e) =>{
    console.log("I am here")
    e.preventDefault();

    const formData = new FormData(form);

    const resposnse = await fetch("/create-post", {
        method : "POST",
        body : formData
    });

    const data = await resposnse.json();
    console.log(data)
    window.location.href = "feed.html";
})
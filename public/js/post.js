const newFormHandler = async (event) => {
  event.preventDefault();

  const body = document.querySelector("#comment-body").value.trim();

  if (body) {
    const id = event.target.getAttribute("user_id");
    const response = await fetch(`/post/${id}`, {
      method: "POST",
      body: JSON.stringify({ body }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      alert("comment added!");
    } else {
      alert("Failed to create post");
    }
  }
};

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute("data-id")) {
//     const id = event.target.getAttribute("data-id");

//     const response = await fetch(`/api/projects/${id}`, {
//       method: "DELETE",
//     });

//     if (response.ok) {
//       document.location.replace("/dashboard");
//     } else {
//       alert("Failed to delete post");
//     }
//   }
// };

document.querySelector(".new-comment-form").addEventListener("submit", newFormHandler);
// document.querySelector(".new-post-form").addEventListener("submit", newFormHandler);

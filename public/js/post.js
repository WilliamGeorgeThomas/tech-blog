const newFormHandler = async (event) => {
  event.preventDefault();

  const body = document.querySelector("#comment-body").value.trim();

  if (body) {
    const id = event.target.getAttribute("data-id");
    console.log(id);
    // const id = 5;
    const response = await fetch(`/api/post/${id}`, {
      method: "POST",
      body: JSON.stringify({ body }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      alert("comment added!");
      document.location.reload();
    } else {
      alert("Failed to add comment");
    }
  }
};

// const delButtonHandler = async (event) => {
// //   event.preventDefault();

//   if (event.target.hasAttribute("data-id")) {
//     const id = event.target.getAttribute("data-id");

//     const response = await fetch(`/api/post/${id}`, {
//       method: "DELETE",
//     });

//     if (response.ok) {
//       document.location.replace("/dashboard");
//     } else {
//       alert("Failed to delete post");
//     }
//   }
// };

document.querySelector(".new-comment-form").addEventListener("click", newFormHandler);

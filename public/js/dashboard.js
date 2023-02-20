const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#post-name").value.trim();
  const body = document.querySelector("#post-body").value.trim();

  if (title && body) {
    const id = event.target.getAttribute("user_id");
    const response = await fetch(`/dashboard`, {
      method: "POST",
      body: JSON.stringify({ title, body }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      // document.location.replace(`/post/${id}`);
      document.location.replace("/dashboard");

    } else {
      alert("Failed to create post");
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/post/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to delete post");
    }
  }
};


function revealForm() {
  document.querySelector(".new-post-form").classList.remove("hidden");
}

document.querySelector(".new-post-form").addEventListener("submit", newFormHandler);
document.querySelector(".post-list").addEventListener("click", delButtonHandler);
document.querySelector(".reveal-btn").addEventListener("click", revealForm);

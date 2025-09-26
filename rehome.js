document.addEventListener("DOMContentLoaded", () => {
    // --- Profile Collapse ---
    const profileCard = document.getElementById("profile-card");
    const profileToggle = document.getElementById("profile-toggle");

    if (profileToggle && profileCard) {
        profileToggle.addEventListener("click", () => {
            profileCard.classList.toggle("collapsed");
        });
    }

    // --- Post Creation ---
    const feedGrid = document.querySelector(".feed-grid");
    const createPostBtn = document.querySelector(".btn-primary"); // "Create a Story"

    if (createPostBtn && feedGrid) {
        createPostBtn.addEventListener("click", () => {
            const text = prompt("Enter your post text:");
            const imageUrl = prompt("Enter image URL (leave blank for text-only):");

            if (text || imageUrl) {
                const newPost = document.createElement("article");
                newPost.classList.add("post-card");
                if (imageUrl) {
                    newPost.style.backgroundImage = `url(${imageUrl})`;
                }

                newPost.innerHTML = `
                    <div class="post-content">
                        <div class="post-author">
                            <img src="https://picsum.photos/seed/user/50" alt="author">
                            <span>You</span>
                        </div>
                        <p class="post-text">${text || "📷 New image posted"}</p>
                        <div class="post-actions">
                            <button class="like-btn">❤️ Like</button>
                            <button class="comment-btn">💬 Comment</button>
                        </div>
                        <div class="comments"></div>
                    </div>
                `;

                feedGrid.prepend(newPost); // add new post at top
            }
        });
    }

    // --- Like & Comment Functionality ---
    document.body.addEventListener("click", (e) => {
        if (e.target.classList.contains("like-btn")) {
            e.target.textContent =
                e.target.textContent.includes("❤️")
                    ? "💔 Unlike"
                    : "❤️ Like";
        }

        if (e.target.classList.contains("comment-btn")) {
            const comment = prompt("Enter your comment:");
            if (comment) {
                const commentsDiv = e.target.closest(".post-content").querySelector(".comments");
                const newComment = document.createElement("p");
                newComment.textContent = `💬 ${comment}`;
                commentsDiv.appendChild(newComment);
            }
        }
    });

    // --- Navigation Between Tabs (Home, Explore, Alumni, etc.) ---
    const navLinks = document.querySelectorAll(".nav-link");
    const feedTitle = document.querySelector(".feed-title");

    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            // Remove active state from all links
            navLinks.forEach((l) => l.classList.remove("active"));
            link.classList.add("active");

            // Switch content dynamically
            const pageName = link.textContent.trim();
            feedTitle.textContent = `${pageName} Feed`;

            // Replace posts with dummy data per section
            feedGrid.innerHTML = "";
            for (let i = 1; i <= 4; i++) {
                const post = document.createElement("article");
                post.classList.add("post-card");
                post.style.backgroundImage = `url(https://picsum.photos/seed/${pageName}-${i}/400/250)`;
                post.innerHTML = `
                    <div class="post-content">
                        <div class="post-author">
                            <img src="https://picsum.photos/seed/user${i}/50" alt="author">
                            <span>${pageName} User ${i}</span>
                        </div>
                        <p class="post-text">${pageName} post ${i}</p>
                        <div class="post-actions">
                            <button class="like-btn">❤️ Like</button>
                            <button class="comment-btn">💬 Comment</button>
                        </div>
                        <div class="comments"></div>
                    </div>
                `;
                feedGrid.appendChild(post);
            }
        });
    });
});

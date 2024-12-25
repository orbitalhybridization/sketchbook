function filterPosts(category) {
    // Get all posts
    const posts = document.querySelectorAll('.post');
  
    // Loop through posts and hide or show them
    posts.forEach(post => {
      if (category === 'all') {
        post.style.display = 'block'; // Show all posts
      } else if (post.dataset.category.includes(category)) {
        post.style.display = 'block'; // Show posts in the selected category
      } else {
        post.style.display = 'none'; // Hide other posts
      }
    });
  
    // Optional: Highlight the active filter button
    const buttons = document.querySelectorAll('.filters button');
    buttons.forEach(btn => btn.classList.remove('active'));
    document
      .querySelector(`.filters button[onclick="filterPosts('${category}')"]`)
      .classList.add('active');
  }
  
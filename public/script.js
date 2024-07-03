document.addEventListener('DOMContentLoaded', function() {
    const fileUpload = document.getElementById('file-upload');
    const blogPosts = document.getElementById('blog-posts');
    const socialFeed = document.getElementById('social-feed');
    const fbToggle = document.getElementById('fb-toggle');
    const instaToggle = document.getElementById('insta-toggle');

    // Simulate blog post creation from uploaded file
    fileUpload.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const content = e.target.result;
                createBlogPost(file.name, content);
            };
            reader.readAsText(file);
        }
    });

    function createBlogPost(title, content) {
        const postElement = document.createElement('div');
        postElement.className = 'blog-post';
        postElement.innerHTML = `
            <h3>${title}</h3>
            <p>${content.substring(0, 200)}...</p>
            <button onclick="expandPost(this)">Read More</button>
        `;
        blogPosts.prepend(postElement);
    }

    // Simulate social media posts
    const socialPosts = [
        { platform: 'facebook', content: 'Check out our latest blog post!', image: 'https://picsum.photos/300/200?random=1' },
        { platform: 'instagram', content: 'Behind the scenes at our office #WorkLife', image: 'https://picsum.photos/300/300?random=2' },
        { platform: 'facebook', content: "We're excited to announce our new product launch!", image: 'https://picsum.photos/300/200?random=3' },
        { platform: 'instagram', content: 'Happy customers are the best customers #CustomerLove', image: 'https://picsum.photos/300/300?random=4' }
    ];

    function displaySocialPosts(platform) {
        socialFeed.innerHTML = '';
        socialPosts.filter(post => post.platform === platform).forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'social-post';
            postElement.innerHTML = `
                <img src="${post.image}" alt="${platform} post">
                <p>${post.content}</p>
            `;
            socialFeed.appendChild(postElement);
        });
    }

    fbToggle.addEventListener('click', function() {
        fbToggle.classList.add('active');
        instaToggle.classList.remove('active');
        displaySocialPosts('facebook');
    });

    instaToggle.addEventListener('click', function() {
        instaToggle.classList.add('active');
        fbToggle.classList.remove('active');
        displaySocialPosts('instagram');
    });

    // Initial display
    displaySocialPosts('facebook');

    // Simulate initial blog posts
    createBlogPost('Welcome to Our Blog', 'This is our first blog post. We\'re excited to share our thoughts and ideas with you...');
    createBlogPost('10 Tips for Success', 'Success doesn\'t come easy, but with these 10 tips, you\'ll be well on your way to achieving your goals...');
});

// Function to expand blog posts (to be called from HTML)
function expandPost(button) {
    const postContent = button.previousElementSibling;
    if (postContent.textContent.endsWith('...')) {
        postContent.textContent = postContent.textContent.slice(0, -3) + ' This is the full content of the blog post, which would typically be much longer and more detailed.';
        button.textContent = 'Show Less';
    } else {
        postContent.textContent = postContent.textContent.substring(0, 200) + '...';
        button.textContent = 'Read More';
    }
}
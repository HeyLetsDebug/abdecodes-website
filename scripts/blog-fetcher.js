// Fetch the JSON file
fetch('blogs/posts.json')
    .then(response => response.json())
    .then(data => {
        // Assuming `blogListContainer` is the container div in your HTML
        let blogListContainer = document.getElementById('blog-list');
        
        // Clear the container in case there's existing content
        blogListContainer.innerHTML = '';

        // `data` contains an array of blog entries
        data.forEach(entry => {
            // Create a blog item container
            let blogItem = document.createElement('a');
            blogItem.classList.add('blog-item'); // Example class for styling
            blogItem.href = entry.linktoblog;

            // Create image element
            let imageElement = document.createElement('img');
            imageElement.src = entry.imgsrc;
            imageElement.alt = entry.imgalttag;

            // Create title element
            let titleElement = document.createElement('h3');
            titleElement.textContent = entry.titleofblog;
            // Create publish date paragraph
            let publishDateElement = document.createElement('p');
            publishDateElement.classList.add('publish-date');
            publishDateElement.textContent = 'Published on: ' + entry.publishDate;

            // Create description paragraph
            let descriptionElement = document.createElement('p');
            descriptionElement.textContent = entry.description;

            // Create "Read More" paragraph
            let readMoreElement = document.createElement('p');
            readMoreElement.classList.add('readMore');
            readMoreElement.textContent = 'Click To Read More..';

            // Append image, title, description, publish date, and "Read More" to blog item
            blogItem.appendChild(imageElement);
            blogItem.appendChild(titleElement);
            blogItem.appendChild(publishDateElement);
            blogItem.appendChild(descriptionElement);
            blogItem.appendChild(readMoreElement);

            // Append blog item to blog list container
            blogListContainer.appendChild(blogItem);
        });
    })
    .catch(error => {
        console.error('Error fetching blogs:', error);
    }
    )
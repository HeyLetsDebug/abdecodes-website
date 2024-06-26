function includeHTML(filePath, container) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', filePath, true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        container.innerHTML = xhr.responseText;
      } else {
        console.error('Error fetching module:', filePath);
      }
    };
    xhr.send();
  }
  
  var headerContainer = document.getElementById('header-container');
  var footerContainer = document.getElementById('footer-container');
  var blogSidebar = document.querySelector('.blog-sidebar');

  if(document.location.pathname === "/")
  {
  includeHTML('includes/header.html', headerContainer);
  includeHTML('includes/footer.html', footerContainer);
  }
  else
  {
    includeHTML('../includes/header.html', headerContainer);
    includeHTML('../includes/footer.html', footerContainer);
    if(document.location.pathname.includes("/blogs/"))
    {
      includeHTML('../includes/sidebar.html', blogSidebar);
    }
  }

  document.body.addEventListener('click', function(event) {
    const target = event.target;

    if (target.matches('a[href^="#"]')) {
      event.preventDefault();
      if(document.location.pathname === "/")
      {
        const offset = window.innerWidth > 768 ? 90 : 0;
        var targetClicked = document.querySelector(target.getAttribute('href'));
        const targetOffset = targetClicked.offsetTop - offset;
        window.scrollTo({
          top: targetOffset,
          behavior: 'smooth'
        });
      }
      else
      {
        var sendTo = target.getAttribute('href');
        window.location.href = "/"+sendTo;
      }
    } else if (target.id === "logoMain") {
      event.stopPropagation();
      window.location.href = "/";
    }
  });
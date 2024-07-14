function includeHTML(filePath, container) {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', filePath, true)
  xhr.onload = function () {
    if (xhr.status === 200) {
      container.innerHTML = xhr.responseText
    } else {
      console.error('Error fetching module:', filePath)
    }
  }
  xhr.send()
}

var headerContainer = document.getElementById('header-container');
var footerContainer = document.getElementById('footer-container');
var blogSidebar = document.querySelector('.blog-sidebar');
var profilePhoto = document.querySelector(".aboutImageWrapper");
var aboutTitle = document.getElementById("aboutTitle");

if (document.location.pathname === '/') {
  includeHTML('includes/header.html', headerContainer)
  includeHTML('includes/footer.html', footerContainer)
} else {
  includeHTML('../includes/header.html', headerContainer)
  includeHTML('../includes/footer.html', footerContainer)
  if (document.location.pathname.includes('/blogs/')) {
    includeHTML('../includes/sidebar.html', blogSidebar)
  }
}

document.body.addEventListener('click', function (event) {
  const target = event.target

  if (target.matches('a[href^="#"]')) {
    event.preventDefault()
    if (document.location.pathname === '/') {
      const offset = window.innerWidth > 768 ? 110 : 0
      var targetClicked = document.querySelector(target.getAttribute('href'))
      const targetOffset = targetClicked.offsetTop - offset
      window.scrollTo({
        top: targetOffset,
        behavior: 'smooth',
      })
    } else {
      var sendTo = target.getAttribute('href')
      window.location.href = '/' + sendTo
    }
  } else if (target.id === 'logoMain') {
    event.stopPropagation()
    window.location.href = '/'
  }
})

// Header Scroll CSS & Animation

window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById('header-container').classList.add('sticky')
  } else {
    document.getElementById('header-container').classList.remove('sticky')
  }
}

document.body.addEventListener('click', function (event) {
  var e = event.target
  if (e.id == 'menu-toggle' || e.classList.contains('menu-line')) {
    var nav = document.getElementById('navigation')
    nav.classList.toggle('show')
  }
})

window.addEventListener('resize', profileMover())
function profileMover() {
  if (window.innerWidth <= 765) {
    profilePhoto.remove();
    aboutTitle.insertAdjacentElement("afterend",profilePhoto)
  } else {
    console.log('Window width is greater than 765px.')
  }
}
profileMover();
const toggleMenu = document.querySelector('.toggle-menu');
const closeBtn = document.querySelector('#close-btn');
const menuItems = document.querySelectorAll('.menu-item');
// for-top-nav
function openNav() {
  document.querySelector('.mobile-menu').classList.add('active');
  toggleMenu.classList.add('invisible');
  document.body.style.overflow = 'hidden';
}

toggleMenu.addEventListener('click', openNav);

function closeNav() {
  document.querySelector('.mobile-menu').classList.remove('active');
  toggleMenu.classList.remove('invisible');
  document.body.style.overflow = 'auto';
}

closeBtn.addEventListener('click', closeNav);

menuItems.forEach((item) => {
  item.addEventListener('click', closeNav);
});

// for scrolling effect //
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function scroll(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// the projectsss
const projects = [
  {
    name: 'Tonic',
    devInfo: 'Ishpaul',
    description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent, Lorem Ipsum is simply dummy text.",
    languages: ['html', 'css', 'javascript'],
    image: './assets/images/project-1.png',
    liveVersion: 'See Live',
    sourceLink: 'See Source',
  },

  {
    name: 'Multi-Post Stories',
    devInfo: 'Ishpaul',
    description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent, Lorem Ipsum is simply dummy text.",
    languages: ['html', 'css', 'javascript', 'React'],
    image: './assets/images/project-2.png',
    liveVersion: 'See Live',
    sourceLink: 'See Source',
  },

  {
    name: 'Tonic',
    devInfo: 'Ishpaul',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent, Lorem Ipsum is simply dummy text.",
    languages: ['html', 'css', 'javascript'],
    image: './assets/images/project-3.png',
    liveVersion: 'See Live',
    sourceLink: 'See Source',
  },

  {
    name: 'Multi-Post Stories',
    devInfo: 'Ishpaul',
    description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent, Lorem Ipsum is simply dummy text.",
    languages: ['html', 'css', 'javascript'],
    image: './assets/images/project-4.png',
    liveVersion: 'See Live',
    sourceLink: 'See Source',
  },
];

const projectSection = document.getElementById('project-section');

// for adding projects to the display
function addProjects(n) {
  const {
    name,
    devInfo,
    description,
    languages,
    image,
  } = projects[n];

  projectSection.innerHTML += `
<div class="project">
<img src=${image} alt="Screenshot-of-*project-name*">
<section class="project-body">
    <h3 class="project-name">
        ${name}
    </h3>
    <div class="developer-info">
        <h4 class="developer-name">
            ${devInfo}
        </h4>
        <ul>
            <li>● Back End Dev</li>
            <li>● 2022</li>
        </ul>
    </div>
    <p class="project-description">
        ${description}
    </p>
    <ul class="languages-used">
        <li class="language"> ${languages[0]}</li>
        <li class="language">${languages[1]}</li>
        <li class="language">${languages[2]}</li>
    </ul>
    <button  type="button" class="project${n}-link" >
        See Project
    </button>
</section>
</div>`;
}

// calling the addprojects function

for (let i = 0; i < projects.length; i += 1) {
  addProjects(i);
}

const seeProjectBtn1 = document.querySelector('.project0-link');// get-project btns
const seeProjectBtn2 = document.querySelector('.project1-link');// get-project btns
const seeProjectBtn3 = document.querySelector('.project2-link');// get-project btns
const seeProjectBtn4 = document.querySelector('.project3-link');// get-project btns
const overlay = document.querySelector('#overlay');// get overlay
const container = document.querySelector('.pop-up-window');// get the popup-window

// open-popup function
function openPopup(index) { // index for getting the project number
  const {
    name,
    devInfo,
    description,
    languages,
    image,
    liveVersion,
    sourceLink,
  } = projects[index];// array for convienience in picking keys from object

  // fill the popup container with html
  container.innerHTML = `
  <div class="pop-up-header">
  <a class="popup-close-btn">&times;</a>
  <h3 class="project-name">
    ${name}
  </h3>
  <div class="developer-info">
    <h4 class="developer-name">
        ${devInfo}
    </h4>
    <ul>
        <li>● Back End Dev</li>
        <li>● 2022</li>
    </ul>
  </div>
</div>
<div class="pop-up-body">
  <div class="images">
  <img src=${image} alt="Screenshot-of-*project-name*" class="big-img">
  </div>
  <div class="about-project left">
  <p class="project-description">
   ${description}  
  </p>
  <div class="right">
  <ul class="languages-used">
      <li class="language">${languages[0]}</li>
      <li class="language">${languages[1]}</li>
      <li class="language">${languages[2]}</li>
  </ul><hr>
  <div class="pop-up-btns">
  <button  type="button" class="pop-up-btn live-btn" >
      ${liveVersion} 
      <i class="bi bi-arrow-up-right-circle-fill"></i>
  </button>
  <button  type="button" class="pop-up-btn source-btn" >
      ${sourceLink}
      <i class="bi bi-github"></i>
  </button>
  </div>
  </div>
  </div?
</div>`;

  // then add class of active to them
  container.classList.add('active');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  // close-popup function
  const popupCloseBtn = document.querySelector('.popup-close-btn');// get the close btn
  popupCloseBtn.addEventListener('click', () => {
    // remove active from class
    container.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';// for turning the background scrolling effect off
  });
  // remove class active if user click outside the popup-window
  overlay.addEventListener('click', () => {
    container.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';// for turning the background scrolling effect off
  });
}

// calling open function if user clicks on see project btn
seeProjectBtn1.addEventListener('click', () => {
  openPopup(0);
});

seeProjectBtn2.addEventListener('click', () => {
  openPopup(1);
});

seeProjectBtn3.addEventListener('click', () => {
  openPopup(2);
});

seeProjectBtn4.addEventListener('click', () => {
  openPopup(3);
});

// form validation
const form = document.querySelector('form');// get the form
const username = document.getElementById('name');// get the name
const email = document.getElementById('email');// get the email
const message = document.getElementById('message');// get the message

// for setting the error message
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.errorMsg');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
};

// for setting the the success message
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.errorMsg');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

let submitPt = 0;// for calcuating the result should be 3

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();

  // for name validation
  if (usernameValue === '') {
    setError(username, 'Username is required');
    return;
  } if (usernameValue.split('').length > 30) {
    setError(username, 'Username should not exceed 30 characters');
    return;
  }
  setSuccess(username);
  submitPt += 1;

  // for email validation
  if (emailValue === '') {
    setError(email, 'Email is required');
    return;
  } if (emailValue !== emailValue.toLowerCase()) {
    setError(email, 'Email should be in lowercase');
    return;
  }
  setSuccess(email);
  submitPt += 1;

  // for message validation
  if (messageValue === '') {
    setError(message, 'Please add a message');
  } else if (messageValue.split('').length > 500) {
    setError(message, 'Message should be short and do not exceed 500 characters');
  } else {
    setSuccess(message);
    submitPt += 1;
  }
};

// the validation when the form is submitted
form.addEventListener('submit', (e) => {
  e.preventDefault();// prevent sumitting

  validateInputs();// run checks

  // deciding to submit or not
  if (submitPt === 3) {
    form.submit();
  } else {
    submitPt = 0;
  }
});

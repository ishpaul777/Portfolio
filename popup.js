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
      languages: ['html', 'css', 'javascript','React'],
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

  const seeProjectBtn1 = document.querySelector('.project1-link');//get-project btns 
  const seeProjectBtn2 = document.querySelector('.project2-link');//get-project btns
  const seeProjectBtn3 = document.querySelector('.project3-link');//get-project btns
  const seeProjectBtn4 = document.querySelector('.project4-link');//get-project btns
  const overlay = document.querySelector('#overlay');//get overlay
  const container = document.querySelector('.pop-up-window');//get the popup-window 
  
 
  
//open-popup function
function openPopup(index){//index for getting the project number
  const {
  name,
  devInfo,
  description,
  languages,
  image,
  liveVersion,
  sourceLink,
  } = projects[index];//array for convienience in picking keys from object

  //fill the popup container with html 
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
  <img src=${image} alt="Screenshot-of-*project-name*">
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
</div>`

//then add class of active to them
  container.classList.add('active');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden'

//close-popup function
  const popupCloseBtn = document.querySelector('.popup-close-btn');//get the close btn
    popupCloseBtn.addEventListener('click', () => {
    //remove active from class 
    container.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto'//for turning the background scrolling effect off
  });
  //remove class active if user click outside the popup-window
  overlay.addEventListener('click', () => {
    container.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto'//for turning the background scrolling effect off
  });
}

//calling open function if user clicks on see project btn 
seeProjectBtn1.addEventListener('click', () =>{
  openPopup(0)
});

seeProjectBtn2.addEventListener('click', () =>{
  openPopup(1)
});

seeProjectBtn3.addEventListener('click', () =>{
  openPopup(2)
});

seeProjectBtn4.addEventListener('click', () =>{
  openPopup(3)
});

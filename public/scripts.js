var projects = [
  {
    'name': 'D3 NYC',
    'className': 'd3',
    'link': 'https://d3-nyc.com',
    'desc': 'I built the entire D3 NYC website using React, and then processed it through Gatsby to create a static site. The project uses multiple, complex components, many of which have various states.',
    'langs': [
      'React',
      'Gatsby'
    ],
    'imgs': [

    ]
  },
  {
    'name': 'Spacious',
    'className': 'spacious',
    'link': 'https://www.spacious.com',
    'desc': 'I used Webflow CMS to build the Spacious site, which relies extensively on CSS grid for the modular and modern design.',
    'langs': [
      'Weblow'
     ],
    'imgs': [

    ]
  },
  {
    'name': 'Saturday Skin',
    'className': 'ss',
    'link': 'https://saturdayskin.com/',
    'desc': 'I worked with AngularJS and Node.JS to build Saturday Skin’s site, and used Mongoose and MongoDB for handling data. I also used Shopify cart API to enable the site to handle checkout and payment.',
    'langs': [
      'AngularJS',
      'Node.JS',
      'Mongoose',
      'MongoDB',
      'Shopify'
    ],
    'imgs': [

    ]
  },
  {
    'name': 'Jetblack Landing Pages',
    'className': 'jb',
    'link': './jetblack1/index.html',
    'desc': 'These were simple one-off holiday landing pages that I built for Jetblack using HTML, CSS, and JavaScript.',
    'langs': [
      'HTML',
      'CSS',
      'JavaScript'
    ],
    'imgs': [

    ]
  },
  {
    'name': 'FanDuel Landing Pages',
    'className': 'fd',
    'link': [
      './fanduel1/index.html',
      './fanduel2/index.html'
    ],
    'desc': 'For the 2019 NBA Playoffs, I built several landing pages for promotions that FanDuel ran with partner companies. These all use basic HTML, CSS, and JavaScript.',
    'langs': [
      'HTML',
      'CSS',
      'JavaScript'
    ],
    'imgs': [

    ]
  }
];

projects.forEach(project => {
  if (project.className === 'fd') {
    document.getElementsByClassName('project')[0].innerHTML += '<div class="' + project.className + '"><h4>' + project.name + '</h4><h5><a href="' + project.link[0] + '" target="_blank">1</a> | <a href="' + project.link[1] + '" target="_blank">2</a></h5><p>' + project.desc + '</p></div>'
  } else if (project.link !== '') {
    document.getElementsByClassName('project')[0].innerHTML += '<div class="' + project.className + '"><h4><a href="' + project.link + '" target="_blank">' + project.name + '</a></h4><p>' + project.desc + '</p></div>'
  } else {
    document.getElementsByClassName('project')[0].innerHTML += '<div class="' + project.className + '"><h4 class="' + project.className + '">' + project.name + '</h4><p>' + project.desc + '</p></div>'
  }
});

let togglePic = (active) => {
  if (active === 'me') {
    document.getElementsByClassName('me')[0].style.display = 'none';
    document.getElementsByClassName('boilermakers')[0].style.display = 'block';
  } else {
    document.getElementsByClassName('me')[0].style.display = 'block';
    document.getElementsByClassName('boilermakers')[0].style.display = 'none';
  }
}

// let winWid = window.innerWidth;
// let lis = document.getElementsByTagName('li');
//
// if (winWid < 480) {
//
//   for (let i = 0; i < lis.length - 1; i++) {
//     let text = lis[i].innerHTML.trim();
//     if (text === 'jQuery' || text === 'Rails') {
//       continue;
//     }
//     lis[i].innerHTML =  text + ', ';
//   }
// } else {
//   for (let i = 0; i < lis.length - 1; i++) {
//     let text = lis[i].innerHTML.trim();
//     if (text === 'jQuery' || text === 'Rails') {
//       continue;
//     }
//     lis[i].innerHTML =  text + ', ';
//   }
// }

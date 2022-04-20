const teachersSection = document.querySelector('#featured');

const teachersObject = [
  {
    name: 'Candi Lemoine',
    quote: 'JavaScript teacher at Udemy',
    paragraph:
      'She has been teaching JavaScript in Oxford University for the past 6 years, and started teaching on Udemy since 2020.',
  },

  {
    name: 'Dan Denney',
    quote: 'Web Designer, teaching from New York',
    paragraph: 'You can find some of his designs on Figma.',
  },

  {
    name: 'Darby Frey',
    quote: 'A CSS expert and guru, from Michigan',
    paragraph:
      'He is preparing our students from zero experience into advanced level in CSS.',
  },

  {
    name: 'Jennifer Jones',
    quote: 'Teaching full stack web development on Udemy',
    paragraph:
      'She is in this field in the past 15 years, she can give you all the knowledge you need.',
  },

  {
    name: 'Maya Bruck',
    quote: 'Command line expert',
    paragraph:
      'She is using the command line on a daily basis, she knows all the tricks you need to have.',
  },

  {
    name: 'Arman-Ghosh',
    quote: 'Frontend developer',
    paragraph:
      "He started his journey at Google, now he's teaching new comers here at our platform.",
  },
];

function createTeachers() {
  const teachersContainer = document.createElement('div');
  teachersContainer.setAttribute('id', 'teachers-container');

  for (let i = 1; i <= teachersObject.length; i += 1) {
    const teachersDiv = document.createElement('div');
    teachersDiv.setAttribute('class', 'teachers');

    const profileContainer = document.createElement('div');
    profileContainer.setAttribute('class', 'profile-container');

    const imageDiv = document.createElement('div');
    imageDiv.setAttribute('id', `img-div${i}`);

    const teacherInfo = document.createElement('div');
    teacherInfo.setAttribute('class', 'teacher-info');

    const teacherName = document.createElement('h3');
    teacherName.innerText = teachersObject[i - 1].name;

    const quote = document.createElement('blockquote');
    quote.innerText = `${teachersObject[i - 1].quote}`;

    const greyLine = document.createElement('div');
    greyLine.setAttribute('class', 'grey-line');

    const teacherParagraph = document.createElement('p');
    teacherParagraph.innerText = `${teachersObject[i - 1].paragraph}`;

    teacherInfo.appendChild(teacherName);
    teacherInfo.appendChild(quote);
    teacherInfo.appendChild(greyLine);
    teacherInfo.appendChild(teacherParagraph);

    profileContainer.appendChild(imageDiv);

    teachersDiv.appendChild(profileContainer);
    teachersDiv.appendChild(teacherInfo);

    teachersContainer.appendChild(teachersDiv);
  }
  teachersSection.appendChild(teachersContainer);
}

createTeachers();

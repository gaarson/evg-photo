
const defaultSections = [
  {
    number: '',
    type: 'intro',
    mainType: 'welcome',
    title: 'Some text',
    content: 'Another SomeText',
    to: 'one',
    photo: '/img/3.jpg',
  },
  {
    number: 'one',
    mainType: 'info',
    type: 'career',
    title: 'Some text',
    content: 'Another SomeText',
    to: 'two',
    photo: '/img/2.jpg',
  },
  {
    number: 'two',
    mainType: 'info',
    type: 'aboutMe',
    title: 'Some text',
    content: 'Another SomeText',
    to: 'three',
    photo: '/img/1.jpg',
  },
];

export const mainSections = (state = defaultSections, action) => {
  switch (action.type) {
    default: return state || [];
  }
};

export const mainPhotos = (state, action) => {
  switch (action.type) {
    default: return state || [];
  }
};

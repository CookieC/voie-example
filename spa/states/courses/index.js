import app from 'spa/app';

import CoursesService from 'spa/services/courses';

import CoursesLayout from './layout.vue';
import CoursesSelect from './select.vue';

app.add('courses', {
  parent: 'root',
  path: '/courses',
  redirect: 'courses.select',
  params: {
    q: null
  },
  enter: (ctx) => CoursesService.findAll().then(courses => {
    ctx.data.courses = courses;
  }),
  component: CoursesLayout
});

app.add('courses.select', {
  component: CoursesSelect
});

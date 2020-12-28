import '!style-loader!css-loader!sass-loader!./elevation.scss.stories.scss';

export default {
  title: 'elevation',
};

export const normal = () => ({
  template: `<div class="elevation">
  ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce(
    (pre, elevation) =>
      `${pre} <div class="elevation elevation-${elevation}"> elevation Level-${elevation}</div>`,
    ''
  )}</div>
  `,
});

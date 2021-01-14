import '!style-loader!css-loader!sass-loader!./colors.scss.stories.scss';

export default {
  title: 'colors',
};

export const normal = () => ({
  template: `<div class="color-root">
  ${Object.entries({
    black: '-',
    surface: 'カードなどコンテンツを配置する部分に',
    background: 'ページの背景色にcardやlistを区切る際など',
    disabled: '無効なボタンやリンクなどのカラー',
    error: '例外を表すカラー',
  }).reduce(
    (pre, [color, description]) =>
      `${pre} <div class="colors colors-${color}"><span class="label">${color}</span>: ${description}</div>`,
    ''
  )}</div>
  `,
});

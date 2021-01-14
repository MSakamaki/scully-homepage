import '!style-loader!css-loader!sass-loader!./fonts.stories.scss';

export default {
  title: 'fonts',
};

export const normal = () => ({
  template: `<div class="font-root">${Object.entries({
    'page-title': 'ページ全体のタイトル等に。 適度に使用してください',
    'board-title': 'タイトルなどに',
    headline: '記事のタグラインや小見出しや例外の見出しに',
    'story-bold': '本文のうち、太字で立たせたい場合',
    story: '記事や特集など、読み物の本文や例外の本文に',
    text: '詳細など、記事以外の本文',
    'small-text': '本文で小さく表記する必要性がある際',
    'in-title': 'サムネイルのタイトルなどに使用されます',
    note: '注釈',
    'note-bold': '注釈の強調文',
  }).reduce(
    (pre, [font, description]) => `
      ${pre} 
      <dl>
        <dt class="fonts-${font}">${font}</dt>
        <dd>${description}</dd>
      </dl>
      `,
    ''
  )}</div>`,
});

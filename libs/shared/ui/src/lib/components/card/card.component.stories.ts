import { CardComponent } from './card.component';

export default {
  title: 'CardComponent',
};

// export const primary = () => ({
//   moduleMetadata: {
//     imports: []
//   },
//   component: CardComponent,
//   props: {
//   }
// })

export const primary = () => ({
  moduleMetadata: {
    imports: [],
    declarations: [CardComponent],
  },
  template: `
    <wot-card>
      <h2>Blog Title Text</h2>
    </wot-card>`,
});

import { CardComponent } from './card.component';

export default {
  title: 'Card',
};

// export const primary = () => ({
//   moduleMetadata: {
//     imports: []
//   },
//   component: CardComponent,
//   props: {
//   }
// })

export const normal = () => ({
  moduleMetadata: {
    imports: [],
    declarations: [CardComponent],
  },
  template: `
    <wot-card>
    Sample Card
    </wot-card>`,
});

export const multipleSection = () => ({
  moduleMetadata: {
    imports: [],
    declarations: [CardComponent],
  },
  template: `
    <wot-card style="max-width:380px">
    <h2>Card Title</h2>
    <p>Move away from legacy solutions to the GraphQL native Headless CMS - and deliver omnichannel content API first.</p>
    <footer>Card Footer</footer>
    </wot-card>`,
});

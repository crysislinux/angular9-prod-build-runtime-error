import { trigger, transition, style, group, animate } from '@angular/animations';

export const animations = [
  trigger('expandIn', [
    transition(':enter', [
      style({
        overflow: 'hidden',
        height: 0,
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: 0,
        marginBottom: 0,
        opacity: 0
      }),
      group([
        animate('500ms cubic-bezier(0.23, 1, 0.32, 1)', style({
          height: '*', paddingTop: '*', paddingBottom: '*', marginTop: '*', marginBottom: '*', transform: 'translateZ(0)'
        })),
        animate('250ms cubic-bezier(0.23, 1, 0.32, 1)', style({ opacity: 1 }))
      ])
    ]),
  ]),
];

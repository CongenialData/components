import { TThemeFromFn, tuple } from '../theming';

export const skeletonTheme = () =>
  tuple([
    'Skeleton',
    {
      gradient: {
        default: {
          from: '#F0F0F0',
          to: '#F8F8F8',
        },
        translucent: {
          from: '#C1C1C1AB',
          to: '#F8F8F8AB',
        },
      },
      height: {
        default: '1rem',
        small: '0.5rem',
        medium: '1rem',
        large: '2rem',
      },
      width: {
        default: '6rem',
        small: '3rem',
        medium: '9rem',
        large: '18rem',
        full: '100%',
      },
    },
  ]);

export type SkeletonTheme = TThemeFromFn<typeof skeletonTheme>;

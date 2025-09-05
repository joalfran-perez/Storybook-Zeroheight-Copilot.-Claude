import { tokens } from './tokens';

export const theme = {
  ...tokens,
  components: {
    button: {
      variants: {
        primary: {
          backgroundColor: tokens.colors.primary.main,
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: tokens.colors.primary.dark,
          },
          '&:disabled': {
            backgroundColor: tokens.colors.primary.light,
            opacity: 0.6,
          },
        },
        secondary: {
          backgroundColor: tokens.colors.secondary.main,
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: tokens.colors.secondary.dark,
          },
          '&:disabled': {
            backgroundColor: tokens.colors.secondary.light,
            opacity: 0.6,
          },
        },
        outline: {
          backgroundColor: 'transparent',
          color: tokens.colors.primary.main,
          border: `1px solid ${tokens.colors.primary.main}`,
          '&:hover': {
            backgroundColor: tokens.colors.primary.main,
            color: '#FFFFFF',
          },
          '&:disabled': {
            borderColor: tokens.colors.primary.light,
            color: tokens.colors.primary.light,
            opacity: 0.6,
          },
        },
      },
      sizes: {
        small: {
          padding: `${tokens.spacing.xs} ${tokens.spacing.md}`,
          fontSize: tokens.typography.sizes.sm,
        },
        medium: {
          padding: `${tokens.spacing.sm} ${tokens.spacing.lg}`,
          fontSize: tokens.typography.sizes.md,
        },
        large: {
          padding: `${tokens.spacing.md} ${tokens.spacing.xl}`,
          fontSize: tokens.typography.sizes.lg,
        },
      },
    },
  },
};

export default theme;

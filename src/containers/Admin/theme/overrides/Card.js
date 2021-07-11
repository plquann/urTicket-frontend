export default function Card(theme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: theme.shape.borderRadiusMd,
          position: 'relative',
          zIndex: 0, // Fix Safari overflow: hidden with border radius
          background: '#191C24',
          boxShadow: 'none'
        }
      }
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: { variant: 'h6' },
        subheaderTypographyProps: { variant: 'body2' }
      },
      styleOverrides: {
        root: {
          padding: theme.spacing(3, 3, 0)
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: theme.spacing(3)
        }
      }
    }
  };
}

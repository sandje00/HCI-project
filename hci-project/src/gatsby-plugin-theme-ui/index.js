import { roboto } from '@theme-ui/presets'

export default {
  ...roboto,
  styles: {
    ...roboto.styles,
    h2: {
        ...roboto.styles.h2,
        fontSize: [3, 4, 5],
        color: "primary"
      },
  },
}
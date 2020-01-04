import { base } from '@theme-ui/presets'

export default {
  ...base,
  styles: {
    ...base.styles,
    h2: {
        ...base.styles.h2,
        fontSize: [3, 4, 5],
        color: "primary"
      },
  },
}
import { base } from '@theme-ui/presets'

export default {
  ...base,
  styles: {
    ...base.styles,
    h1: {
      ...base.styles.h1,
      fontSize: [3, 4, 5],
      color: "primary"
    },
    h2: {
      ...base.styles.h2,
      fontSize: [3, 4, 5],
      color: "primary"
    },
    h3: {
      ...base.styles.h3,
      fontSize: [2, 3, 4],
      color: "primary"
    },
    p: {
      ...base.styles.p,
      fontSize: [2, 3, 4],
      textAlign: "justify"
    }
  },
  colors: {
    primary: "#303030",
    secondary: "#c4c4c4",
    accent: "#ffb300",
    muted: "#828282"
  }
}
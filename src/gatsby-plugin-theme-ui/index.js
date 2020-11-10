export default {
  breakpoints: ["600px", "1024px", "1200px"],
  colors: {
    text: "#4c5966",
    background: "#fff",
    primary: "#2A9BDA",
    secondary: "#4c5966",
    tertiary: "#3b454f",
  },
  fonts: {
    body: "freight-sans-pro,'Helvetica Neue',Helvetica,Arial,sans-serif",
    heading: "Helia,'Helvetica Neue',Helvetica,Arial,sans-serif",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 300,
    heading: 600,
    bold: 400,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  contentWrap: {
    margin: "0 auto",
    maxWidth: 1200,
    padding: ["0", `0 1.0875rem`],
    fontFamily: "body",
    fontWeight: "body",
  },
  quote: {
    fontSize: [2, 3, 4],
    fontWeight: "bold",
    color: "white",
    backgroundColor: "tertiary",
    p: [3, 4],
    m: [3, 4],
    textAlign: "center",
  },
  factBox: {
    color: "primary",
    textAlign: "center",
    fontSize: "1.6rem",
    ".fancy-number": {
      fontSize: "4.4rem",
    },
  },
  avatar: {
    width: [128, 256],
    height: [128, 256],
    borderRadius: [64, 128],
    margin: "0 0 20px",
  },
  styles: {
    root: {
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      color: "text",
      letterSpacing: "0.1px",
    },
    a: {
      color: "red",
      bg: "blue",
      "&:link,&:visited": {
        color: "red",
        bg: "blue",
      },
    },
  },
  text: {
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
    },
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
}

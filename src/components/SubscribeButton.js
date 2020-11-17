import React from "react"

class SubscribeButton extends React.Component {
  componentDidMount() {
    const { title, imageUrl, feedUrl, itunesLink } = this.props

    if (typeof window === "undefined") {
      return
    }

    const dataKey = `podcastData-${feedUrl}`
    window[dataKey] = {
      title: title,
      subtitle: "",
      description: "",
      cover: imageUrl,
      feeds: [
        {
          type: "audio",
          format: "mp3",
          url: feedUrl,
          "directory-url-itunes": itunesLink,
        },
      ],
    }

    const script = document.createElement("script")
    script.async = true
    script.src = "https://cdn.podlove.org/subscribe-button/javascripts/app.js"

    script.setAttribute("class", "podlove-subscribe-button")
    script.setAttribute("data-language", "en")
    script.setAttribute("data-size", "big")
    script.setAttribute("data-json-data", dataKey)
    script.setAttribute("data-color", "#2A9BDA")
    script.setAttribute("data-format", "cover")
    script.setAttribute("data-style", "filled")

    this.span.appendChild(script)
  }

  render() {
    const { feedUrl } = this.props

    return (
      <span ref={(el) => (this.span = el)}>
        <noscript>
          <a href={feedUrl}>Subscribe to feed</a>
        </noscript>
      </span>
    )
  }
}

export default SubscribeButton

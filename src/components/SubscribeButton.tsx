/** @jsx jsx */

import { useEffect, useRef } from "react"
import { jsx } from "theme-ui"

const SubscribeButton = (props: { isSmall?: boolean }) => {
  const { isSmall } = props
  const feedUrl = "http://feed.booncon.com/bitsandpieces"

  if (typeof window === "undefined") {
    return <div></div>
  }

  const dataKey = `podcastData-${feedUrl}`
  window[dataKey] = {
    title: "bits & pieces",
    subtitle: "How to get things done & love your work.",
    description:
      "A show about why work is not a job, friendships and riding unicorns. Hosted by Lukas Jakob Hafner and Tobias Johannes.",
    cover:
      "https://booncon-blahh.s3-eu-west-1.amazonaws.com/bp-cover-shaded.jpg",
    feeds: [
      {
        type: "audio",
        format: "mp3",
        url: feedUrl,
        "directory-url-itunes":
          "https://podcasts.apple.com/us/podcast/bits-pieces/",
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
  script.setAttribute("data-format", isSmall ? "rectangle" : "cover")
  script.setAttribute("data-style", "filled")

  const span = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (span.current) {
      span.current.appendChild(script)
    }
  }, [])

  return (
    <span ref={span}>
      <noscript>
        <a href={feedUrl}>Subscribe to feed</a>
      </noscript>
    </span>
  )
}

export default SubscribeButton

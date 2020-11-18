/** @jsx jsx */

import { useEffect, useRef } from "react"
import { jsx } from "theme-ui"
import { Text, Box } from "@theme-ui/components"

export const formatDurationNicely = (seconds: number) => {
  var date = new Date(0)
  date.setSeconds(seconds) // specify value for SECONDS here
  return date.toISOString().substr(11, 8)
}

export const formatDate = function (timestamp: string) {
  // Create a date object from the timestamp
  var date = new Date(timestamp)

  // Create a list of names for the months
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  // return a formatted date
  return (
    months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()
  )
}

const EpisodeMeta = (props: {
  frontmatter: {
    season: number
    episodeNumber: number
    publicationDate: string
    duration: number
    categories: string[]
    excerpt: string
  }
}) => {
  const {
    season,
    episodeNumber,
    publicationDate,
    duration,
    categories,
    excerpt,
  } = props.frontmatter
  return (
    <Box>
      <Text>
        Season: <b>{season}</b>
        &nbsp;&nbsp;&nbsp;&nbsp;Episode: <b>{episodeNumber}</b>
        &nbsp;&nbsp;&nbsp;&nbsp;Date: <b>{formatDate(publicationDate)}</b>
        &nbsp;&nbsp;&nbsp;&nbsp; Duration:{" "}
        <b>{formatDurationNicely(duration)}</b>
        <br />
        Tags: <b>{categories.join(", ")}</b>
      </Text>
      <Text sx={{ marginTop: [1, 2], fontSize: [2, 3] }}>{excerpt}</Text>
    </Box>
  )
}

export default EpisodeMeta

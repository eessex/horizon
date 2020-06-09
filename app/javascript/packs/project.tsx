import { ProjectShow } from "apps/Project"
import React from "react"
import ReactDOM from "react-dom"

document.addEventListener("turbolinks:load", () => {
  const node = document.getElementById("project_data")
  const data = node && node.getAttribute("data")
  const props = (data && JSON.parse(data)) || {}

  ReactDOM.render(
    <ProjectShow project={props} />,
    document.getElementById("react-body"),
  )
})

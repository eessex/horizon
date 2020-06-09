import { BorderBox, Box, Sans } from "@artsy/palette"
import { Project, Stage } from "Typings"
import { CommitsMessage } from "apps/components/Stage/StageCommitsMessage"
import React from "react"
import { StageName } from "apps/components/Stage/StageName"
import { getColorFromSeverity } from "../helpers"

export const ProjectSummary: React.FC<{ project: Project }> = ({ project }) => {
  const borderColor = getColorFromSeverity(project.severity)

  return (
    <BorderBox flexDirection="column" borderColor={borderColor}>
      <Box>
        <Sans size="8" style={{ textTransform: "capitalize" }}>
          {project.name}
        </Sans>
        <Sans size="3">{project.description}</Sans>
      </Box>

      <Box pt={1}>
        {project.ordered_stages.map((stage: Stage, i: number) => {
          if (i === 0) {
            return null
          }
          const comparison = project.compared_stages[i - 1]
          return (
            <Box key={i} pt={1}>
              <StageName comparison={comparison} stage={stage} />
              <Box pl={30}>
                <CommitsMessage snapshot={comparison.snapshot} />
              </Box>
            </Box>
          )
        })}
      </Box>
    </BorderBox>
  )
}

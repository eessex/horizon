import { Box, Flex, Link, Sans, Tags } from "@artsy/palette"
import { Project, Stage, TagsList, Tags as TagsType } from "Typings"
import { find } from "lodash"
import { MainLayout } from "components/MainLayout"
import { ProjectSummary } from "components/ProjectSummary"
import React from "react"
import { StageWithComparison } from "./components/Stage/StageWithComparison"

export const ProjectShow: React.FC<{ project: Project }> = ({ project }) => {
  const isKubernetes = hasHokusai(project.ordered_stages)
  return (
    <MainLayout>
      <Box px={3} py={3} maxWidth={1080} mx="auto">
        <Box mb={1}>
          <Sans size="10" style={{ textTransform: "capitalize" }}>
            {project.name}
          </Sans>
          <Sans size="3">{project.description}</Sans>
          <img
            src={`https://circleci.com/gh/artsy/${project.name}.svg?style=svg`}
          />
          {project.git_remote && (
            <Box my={1}>
              <Sans size="3">
                <Link href={project.git_remote}>{project.git_remote}</Link>
              </Sans>
            </Box>
          )}
          <Flex my={1}>
            <Tags tags={formattedTags(project.tags)} />
          </Flex>

          {isKubernetes && (
            <Flex my={1}>
              <Tags tags={isKubernetes} />
            </Flex>
          )}
        </Box>

        <Box mb={1}>
          {project.ordered_stages.map((stage: Stage, i: number) => {
            const comparison =
              i > 1 ? project.compared_stages[i - 1] : undefined
            return (
              <StageWithComparison
                stage={stage}
                comparison={comparison}
                key={i}
              />
            )
          })}
        </Box>
      </Box>
      <ProjectSummary project={project} />
    </MainLayout>
  )
}

export const formattedTags = (tags: TagsType): TagsList => {
  return tags.map((tag) => ({
    href: `/projects?tag=${tag}`,
    name: tag,
  }))
}

export const hasHokusai = (stages: [Stage]): TagsList | undefined => {
  const stagesWithHokusai = find(stages, "hokusai")
  if (stagesWithHokusai) {
    return [
      {
        // FIXME: no view yet for projects using kubernetes
        href: "/",
        name: "kubernetes",
      },
    ]
  }
}

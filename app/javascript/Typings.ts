export interface Stage {
  name: string
}

export interface Snapshot {
  description: [string]
}

export interface ComparedStage {
  stages: [Stage]
  score: number
  snapshot: Snapshot
}

export type Tags = [string]

export interface Project {
  compared_stages: [ComparedStage]
  description: string
  git_remote: string
  id: string
  name: string
  ordered_stages: [Stage]
  severity: number
  tags: Tags
}

export type TagsList = {
  href: string
  name: string
}[]

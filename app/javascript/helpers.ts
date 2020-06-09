export const getColorFromSeverity = (severity: number): string | undefined => {
  if (severity > 10) {
    return "red100"
  } else if (severity > 1) {
    return "yellow100"
  }
}

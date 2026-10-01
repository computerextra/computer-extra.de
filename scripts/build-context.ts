import { execFileSync } from "node:child_process"

export type BuildEnvironment = "production" | "beta"

function detectBranch(): string {
  const environmentBrach =
    process.env.GITHUB_HEAD_REF ||
    process.env.GITHUB_REF_NAME ||
    process.env.CI_COMMIT_REF_NAME

  if (environmentBrach) {
    return environmentBrach
  }

  try {
    return execFileSync("git", ["branch", "--show-current"], {
      encoding: "utf-8",
    }).trim()
  } catch {
    return ""
  }
}
export const branch = detectBranch()

export const environment: BuildEnvironment =
  branch == "main" ? "production" : "beta"

export const isProduction = environment === "production"

export const publicBaseUrl = "https://computer-extra.de"
const betaBaseUrl = "https://beta.computer-extra.de"

export const deploymentBaseUrl = isProduction ? publicBaseUrl : betaBaseUrl

console.log(
  `Build context: branch=${branch || "unknwon"}, environment=${environment}`
)

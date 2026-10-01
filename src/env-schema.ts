import { z } from "zod"

export const clientEnvSchema = z.object({
  VITE_PUBLIC_POSTHOG_PROJECT_TOKEN: z.string().min(1),
  VITE_PUBLIC_POSTHOG_HOST: z.url(),
})

export type ClientEnv = z.infer<typeof clientEnvSchema>

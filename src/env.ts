import { clientEnvSchema } from "@/env-schema"
import { createEnv } from "@t3-oss/env-core"

export const env = createEnv({
  clientPrefix: "VITE_PUBLIC_",

  client: clientEnvSchema.shape,

  runtimeEnvStrict: {
    VITE_PUBLIC_POSTHOG_PROJECT_TOKEN: import.meta.env
      .VITE_PUBLIC_POSTHOG_PROJECT_TOKEN,
    VITE_PUBLIC_POSTHOG_HOST: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
  },

  emptyStringAsUndefined: true,
})

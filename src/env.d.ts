interface ImportMetaEnv {
  readonly POSTHOG_KEY: string;
  readonly POSTHOG_HOST: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

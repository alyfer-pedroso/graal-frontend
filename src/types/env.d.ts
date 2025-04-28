/// <reference types="vite/client" />

interface ImportMetaEnv {
  [key: string]: string;
}

interface ImportMeta {
  env: ImportMetaEnv;
}

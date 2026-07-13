/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_COMPANY_NAME: string;
  readonly VITE_EMAIL: string;
  readonly VITE_PHONE: string;
  readonly VITE_LOCATION: string;
  readonly VITE_FORM_ENDPOINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

/// <reference types="vite/client" />

import { ComponentCustomProperties } from "vue"

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $req: (method: string, url: string,data?: any, options?: object) => Promise<any>,
    $test: (str: string) => {}
  }
}
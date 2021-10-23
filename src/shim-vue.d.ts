/// <reference types="vite/client" />

import { ComponentCustomProperties, Component } from "vue"

declare module "*.vue" {
  const component: Component
  export default component
}

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $req: (method: string, url: string,data?: any, options?: object) => Promise<any>,
  }
}
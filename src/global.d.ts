declare var EngineWrapper : any
declare var dsbAdapter : any

declare interface Window {
  encrypt: (data: string) => string,
  decrypt: (data: string) => string
}
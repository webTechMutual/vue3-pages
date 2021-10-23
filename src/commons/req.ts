// var adapter = require("flyio/dist/npm/adapter/dsbridge")
// var EngineWrapper = require("flyio/dist/npm/engine-wrapper")
// var Fly = require("flyio/dist/npm/fly")
import 'dsbridge/dist/dsbridge'
import 'flyio/dist/adapter/dsbridge'
import 'flyio/dist/engine-wrapper'
import fly from 'flyio'
fly.engine = EngineWrapper(dsbAdapter)

import { Notify } from 'vant'

let ua = navigator.userAgent
let chrome = ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/)
let webview = !chrome && ua.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/) 
let debugCryto = false

fly.config.timeout = 60000
// fly.engine = webview ? EngineWrapper(dsbAdapter) : XMLHttpRequest
fly.engine = XMLHttpRequest

function req (method: string, url: string, params:any) : Promise<object | Error>{
  let body = webview || debugCryto  ? window.encrypt(JSON.stringify(params)) : params
  return fly.request(url, body, {
    method: method
  }).then((resp:any) => {
    let data = webview ? JSON.parse(window.decrypt(resp.data)) : resp.data
    if (data.code === 0) {
      return Promise.resolve(data.data)
    } else {
      return Promise.reject(data)
    }
  }).catch((error:any) => {
    let errorType = Object.prototype.toString.call(error).slice(7, -1)
    let data = errorType.indexOf('Error') > -1 ? error.response.data : error.data
    if (data) {
      Notify({ type: 'warning', message: '请求失败' })
      return Promise.reject(error)
    } else {
      Notify({ type: 'warning', message: error.msg || '网络错误！' })
    }
    return Promise.reject(error)
  })
}

export {
  req
}

export default {
  install: (app:any) => {
    app.provide('req', req)
    app.config.globalProperties.$req = req
  }
}


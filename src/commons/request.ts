var adapter = require("flyio/dist/npm/adapter/dsbridge")
var EngineWrapper = require("flyio/dist/npm/engine-wrapper")
var Fly = require("flyio/dist/npm/fly")

var dsEngine = EngineWrapper(adapter)
var fly = new Fly(window.dsBridge ? dsEngine : XMLHttpRequest)

export default fly

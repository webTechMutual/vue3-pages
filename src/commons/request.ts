// var adapter = require("flyio/dist/npm/adapter/dsbridge")
// var EngineWrapper = require("flyio/dist/npm/engine-wrapper")
// var Fly = require("flyio/dist/npm/fly")
import 'dsbridge/dist/dsbridge'
import 'flyio/dist/adapter/dsbridge'
import 'flyio/dist/engine-wrapper'
import fly from 'flyio'
fly.engine = EngineWrapper(dsbAdapter)
export default fly

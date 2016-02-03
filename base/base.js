// node base.js base0 39000 127.0.0.1:39000,127.0.0.1:39001
// node base.js base1 39001 127.0.0.1:39000,127.0.0.1:39001

var NAME = process.env.NAME || process.argv[2] || 'base'
var PORT = process.env.PORT || process.argv[3] || 39999
var BASES = (process.env.BASES || process.argv[4] || '').split(',')

require('sneeze')({
  isbase: true, 
  silent: false, 
  port: PORT, 
  bases: BASES
}).join({name: NAME})
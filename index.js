const foreach = require('guld-fs-foreach')
const spawn = require('guld-spawn').getSpawn()

async function strReplace (oldstr, newstr, args) {
  return foreach(args[0], async f => {
    if (f === '') return
    var resp = await spawn('sed', '', ['-i', `s/${oldstr}/${newstr}/g`, f], true)
    return resp
  }, args.slice(1))
}

module.exports = strReplace

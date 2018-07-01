const foreach = require('guld-fs-foreach')
const spawn = require('guld-spawn')

async function strReplace (oldstr, newstr, args) {
  return foreach(args[0], async f => {
    if (f === '') return
    return spawn('sed', '', ['-i', `s/${oldstr}/${newstr}/g`, f])
  }, args.slice(1))
}

module.exports = strReplace

const spawn = require('guld-spawn')
const { getJS } = require('guld-env')

async function strReplace (oldstr, newstr, args) {
  if (getJS().startsWith('node')) {
    var found = await spawn('find', '', [...args, '-type', 'f'])
    await Promise.all(found.split('\n').map(async f => {
      if (f === '') return
      return spawn('sed', '', ['-i', `s/${oldstr}/${newstr}/g`, f])
    }))
  } else throw new Error('This function only available in node for now.')
}

module.exports = strReplace

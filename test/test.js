/* eslint-env node, mocha */
const assert = require('chai').assert
const strReplace = require('../index.js')
const pify = require('pify')
const fs = pify(require('fs'))

describe('strReplace', function () {
  beforeEach(async function () {
    await fs.writeFile('./fixtures/pizza', 'ny')
    await fs.writeFile('./fixtures/depth/pizza', 'ny')
  })
  afterEach(async function () {
    await fs.writeFile('./fixtures/pizza', 'ny')
    await fs.writeFile('./fixtures/depth/pizza', 'ny')
  })
  it('non-recursive', async function () {
    await strReplace('ny', 'chi', ['fixtures', '-maxdepth', 1])
    var pizza = await fs.readFile('./fixtures/pizza', 'utf-8')
    assert.equal(pizza, 'chi')
    var deepizza = await fs.readFile('./fixtures/depth/pizza', 'utf-8')
    assert.equal(deepizza, 'ny')
  })
  it('recursive', async function () {
    await strReplace('ny', 'chi', ['fixtures'])
    var pizza = await fs.readFile('./fixtures/pizza', 'utf-8')
    assert.equal(pizza, 'chi')
    var deepizza = await fs.readFile('./fixtures/depth/pizza', 'utf-8')
    assert.equal(deepizza, 'chi')
  })
})

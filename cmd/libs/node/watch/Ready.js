/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2019, Ginkgo
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */

const print   = require('../Ginkgo').print
const Bus     = require('../Ginkgo').bus
const Display = require('../Display')

module.exports = title => true &&
  Display.title(title) &&
  print(' '.repeat(3) + '🎉 Yes! 環境已經就緒惹！' + Display.LN) &&
  print(' '.repeat(3) + '🚀 Go! Go! Go! 趕緊來開發囉！' + Display.LN) &&
  print(Display.LN) &&
  Bus.call('ready', true)

/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2019, Ginkgo
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */

const timeUnit = require('../Ginkgo').timeUnit
const print    = require('../Ginkgo').print
const Display  = require('../Display')
const Xterm    = require('../Xterm')

module.exports = (title, startAt, files) => {
  
  Display.title(title)
  print(' '.repeat(3) + '🎉 太棒惹，已經完成壓縮囉！' + Display.LN)
  
  let oriSize = files.map(t => t.size).reduce((a, b) => a + b)
  let minSize = require('fs').statSync(require('path').zip).size
  let minifyRate = (minSize / oriSize * 100).toFixed(2) + '%(' + (0 - ((oriSize - minSize) / oriSize * 100)).toFixed(2) + '%)'

  print(' '.repeat(3) + '💪 加入檔案數量' + Display.markSemicolon() + Xterm.color.gray('共' + files.length + ' 個', true) + Display.LN)
  print(' '.repeat(3) + '⏰ 壓縮耗費時間' + Display.markSemicolon() + Xterm.color.gray(timeUnit(startAt), true) + Display.LN)
  print(' '.repeat(3) + '📦 整體的壓縮率' + Display.markSemicolon() + Xterm.color.gray(minifyRate, true) + Display.LN)
  print(' '.repeat(3) + '🎁 您的檔案位置' + Display.markSemicolon() + Xterm.color.blue(require('path').zip, true).underline() + Display.LN)
    
  print(Display.LN)
  print(Display.LN)
}

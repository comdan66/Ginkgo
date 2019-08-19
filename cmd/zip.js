/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2019, Ginkgo
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */

const Path = require('path')

Path.root  = Path.resolve(__dirname, '..' + Path.sep) + Path.sep
Path.cmd   = Path.root + 'cmd'  + Path.sep
Path.yaml  = Path.cmd + 'deploy.yaml'
Path.zip   = Path.root + Path.root.split(Path.sep).map(t => t.trim()).filter(v => v.length).pop() + '.zip'

const Load = require('./libs/node/Ginkgo').load
const Zip  = Load('Ginkgo').loadZip

const startAt = new Date().getTime()

process.stdout.write('\x1b[2J')
process.stdout.write('\x1b[0f')

Load('Display').mainTitle('Ginkgo 打包工具')

Load('EnvCheck')('檢查環境',
  Zip('File').bind(null, '設定檔載入',
    Zip('Zip').bind(null, '壓縮檔案',
      Zip('Finish').bind(null, '壓縮完成', startAt))))

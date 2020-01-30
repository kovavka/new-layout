let path = require('path')
let fs = require('fs')
let svgDir = 'src/img/'
let outputDir = 'public'
let ignore = [
    /\sprite.svg$/
]

function walkSync(dir,  fileList = []) {
    fs.readdirSync(dir).forEach(file => {
        fileList = fs.statSync(path.join(dir, file)).isDirectory()
            ? walkSync(path.join(dir, file), fileList)
            : tryAddSvg(fileList, dir, file)

    })
    return fileList
}

function tryAddSvg(fileList, fileDir, file) {
    if (test(file)) {
        let relPath = path.join('../'+svgDir, file)
        let fileName = file.replace('\.svg', '')
        let fileInfo = {relPath: relPath, fileName: fileName}
        fileList.push(fileInfo)
    }

    return fileList
}

function test(file) {
    if (!/\.svg$/.test(file)) {
        return false
    }

    return ignore.every(rule => !rule.test(file))
}


function readFile(relPath) {
    return fs.readFileSync(path.join(__dirname, relPath),{ encoding: 'utf8' });
}

function getSymbolContent(file) {
    const {relPath, fileName} = file
    let fileContent = readFile(relPath)
    let viewBox = fileContent.match('<svg.*(viewBox=".*").*>')[1]

    let svgContent = fileContent.replace(new RegExp('<svg.*>'), '').replace(new RegExp('</svg>'), '')

    return `
<symbol ${viewBox} id="${fileName}">${svgContent}</symbol>`
}

function generateSvg() {
    let files = walkSync(svgDir)

    let symbols = files.map(getSymbolContent)

    let content = `<svg width="0" height="0">
${symbols.join('')}
</svg>
`

    fs.writeFile(`${outputDir}/sprite.svg`, content, function (err) {
        if (err) throw err;
        console.log('svg has generated');
    });
}

generateSvg()
const readline = require('readline-sync')
const robots = {
    text : require('./robots/text.js')
}

async function start() {
    const content = {}

    content.searchTerm = askAndReturnSeachTerm()
    content.prefix = askAndReturnPrefix()

    await robots.text(content)

    function askAndReturnSeachTerm() {
        return readline.question('Type a Wikipedia search term: ')
    }

    function askAndReturnPrefix() {
        const prefixes = ['Who is', 'What is', 'The history of']
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option: ')
        const selectedPRefixText = prefixes[selectedPrefixIndex]

        return selectedPRefixText
    }
    console.log(content)
}

start()
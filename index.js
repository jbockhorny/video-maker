const readline = require('readline-sync')
const robots = {
    text: require('./robots/text.js')
}

async function start() {
    const content = {}

    content.searchTerm = askAndReturnSeachTerm()
    content.prefix = askAndReturnPrefix()
    content.lang = askAndReturnLanguage()

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

    function askAndReturnLanguage() {
        const language = ['pt', 'en']
        const selectedLangIndex =
            readline.keyInSelect(language, 'choice Language: ')
        const selectedLangText = language[selectedLangIndex]

        return selectedLangText
    }
    console.log(content)
}

start()
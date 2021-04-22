const readline = require('readline-sync')
function start() {
    const content = {}

    content.searchTerm = askAndReturnSeachTerm()
    content.prefix = askAndReturnPrefix()

    function askAndReturnSeachTerm() {
        return readline.question('Type a Wikipedia search term: ')
    }

    function askAndReturnPrefix(){
     const prefixes = ['Who is', 'What is', 'The history of']
     const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one optio: ')
     const selectedPRefixText = prefixes[selectedPrefixIndex]

     return selectedPRefixText
    }
    console.log(content)
}
start()
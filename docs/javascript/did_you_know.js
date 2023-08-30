// A simple script that displays a random did you know message at the footer

const allMessages = [
    'Canto has ways to save time during curation, visit our <a href="https://pombase.github.io/canto_tutorial/productivity">productivity page</a>.',
    'You can submit high-throughput datasets of genetic and physical interactions to <a href="https://wiki.thebiogrid.org/doku.php/contribute">BioGrid</a>, and they will appear in PomBase.',
    'You can submit high-throughput annotations of GO, phenotype, modification, or gene expression data, visit our <a href="https://www.pombase.org/submit-data">data submission documentation</a>.',
    'You can submit sequence-linked data, and they will appear in PomBase genome browser. Visit our <a href="https://www.pombase.org/submit-data">data submission documentation</a>.'
]

const randomMessage = allMessages[Math.floor(Math.random() * allMessages.length)]

// Set the initial message

const footer = document.getElementsByClassName('md-footer-meta__inner')[0]

const message = document.createElement('p')
message.innerHTML = '<strong>Did you know?</strong> 🤔 ' + randomMessage

footer.appendChild(message)

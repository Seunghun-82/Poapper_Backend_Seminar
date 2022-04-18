const fs = require('fs');

let textbook = {
    "Name" : "Computer Organization and Design",
    "Writer" : ["David A. PatterSon", "John L. Hennessy"],
    "Page" : 1049,
    "Edition" : "RISC-V edition",
    "Chapter" : [
        {"name" : "Computer Abstractions and Technology"},
        {"name" : "Instructions: Language of the Computer"},
        {"name" : "Arithmetic for Computers"},
        {"name" : "The Processor"},
        {"name" : "Large and Fast: Exploiting Memory Hierarchy"}
    ]
}

let data = JSON.stringify(textbook);

const mytectbook = fs.writeFileSync('textbook.json', data);

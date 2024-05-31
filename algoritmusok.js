function removeFirstAndLast(string) {
    if (!string) return null;

    let parts = string.split(',');
    if (parts.length <= 2) return null;

    parts = parts.slice(1, -1);
    return parts.join(' ');
}

console.log('1. feladat:')
console.log(removeFirstAndLast(''))
console.log(removeFirstAndLast('1'))
console.log(removeFirstAndLast('A1,B2'))
console.log(removeFirstAndLast('1,2,3'))
console.log(removeFirstAndLast('1,2,3,4'))
console.log(removeFirstAndLast('A1,B2,C3,D4,E5'))
console.log(removeFirstAndLast('A,1,23,456,78,9,Z'))



function dnaStrand(dna) {
    const complements = { 'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C' };
    return dna.split('').map(nucleotide => complements[nucleotide]).join('');
}

console.log('\n2. feladat:')
console.log(dnaStrand("AAAA"))
console.log(dnaStrand("ATTGC"))
console.log(dnaStrand("GTAT"))
console.log(dnaStrand("TAGACAT"))
console.log(dnaStrand(""))


function deEmojify(emojiString) {
    const emojiMap = {
        ':)': '0', ':D': '1', '>:(': '2', '>:C': '3', ':/': '4',
        ':|': '5', ':O': '6', ';)': '7', '^.^': '8', ':(': '9'
    };

    if (!emojiString) return '';

    return emojiString.split('  ').map(emojiSequence => {
        let digits = emojiSequence.split(' ').map(emoji => emojiMap[emoji]).join('');
        return String.fromCharCode(parseInt(digits, 10));
    }).join('');
}

console.log('\n3. feladat:')
console.log(deEmojify(":D :) :/  :D :) :|"))
console.log(deEmojify(";) >(  :D :) :D  :D :) ^.^  :D :) ^.^  :D :D :D  >:C >(  :D :D :(  :D :D :D  :D :D :/  :D :) ^.^  :D :) :)  >:C >:C")) // "Hello world!"
console.log(deEmojify(":)"))
console.log(deEmojify(""))
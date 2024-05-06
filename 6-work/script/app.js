function vowel(str) { 

    const count = str.match(/[oybek]/gi).length;

    return count;
}

const string = prompt('Enter a string: ');

const result = vowel(string);

document.write(result);
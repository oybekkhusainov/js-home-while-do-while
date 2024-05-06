function countPotatoes(string) {
    let count = 0;

    let i = 0;

    do {

        if (string.slice(i, i + 8) === "potatoes") {

            count++;
        
        }

        i++;

    } 
    while (i + 8 <= string.length);

    return count;
}

const s = prompt("potatoes so'zini kiriting: ");

document.write(countPotatoes(s));
let shanba = 0;
let yakshanba = 0;

let Year = 0;
do {
    Year++;
    if (new Date(2024, 0, Year).getDay() === 6) {
        shanba++;
    }
     else if (new Date(2024, 0, Year).getDay() === 0) {
        yakshanba++;
    }    
} while (Year < 365 || (Year === 365 && new Date(2024, 0, 365).getDay() !== 6));

document.write("1Yilda ", shanba, "shanba" ,yakshanba, "  yakshanba bor ");
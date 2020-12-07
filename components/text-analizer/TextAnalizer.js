class TextAnalizer {
    constructor(text) {
        this.text = text; 
        this.abc = {
            en: {
                lowercase: 'qwertyuiopasdfghjklzxcvbnm',
                uppercase: 'QWERTYUIOPASDFGHJKLZXCVBNM'
            },
            lt: {
                lowercase: 'ąčęėįšųūž',
                uppercase: 'ĄČĘĖĮŠŲŪŽ'
            }
        };
        this.lowercaseEnabled = true;
        this.uppercaseEnabled = true;
        this.kalba = [''];
        this.finalAbc = '';

        this.addKalba('en');
    }
addKalba(newLang) {
    if (this.abc[newLang]) {
        this.kalba.push(newLang);

        let text = '';
        for (let lang of this.kalba){
            if (this.lowercaseEnabled) {
                text += this.abc[lang].lowercase;
            }
        
            if (this.uppercaseEnabled) {
                text += this.abc[lang].uppercase;
            }
        }
        this.finalAbc = text;
        console.log(this.finalAbc);
    } else {
        console.error(`Error: norima (${newLang}) kalba nerasta`);
    }
}

letterCount() {
    let count = 0;
    for (let letter of this.text) {
        if (this.finalAbc.includes(letter)) {
            count++;
           
        }
    }    
    return count;
}
}

export { TextAnalizer }
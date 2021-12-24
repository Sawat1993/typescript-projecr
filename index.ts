class Introduction {
    name: String;
    about: String;
    constructor(name: String, about: String) {
        this.name = name;
        this.about = about;
    }

    getDetails(): String {
        return `${this.name} - ${this.about}`
    }
}

console.log(new Introduction('Sawatantra', 'I like to play TT').getDetails());
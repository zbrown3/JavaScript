class Media {
    constructor(title, isCheckedOut) {
        this._title = title;
        this._isCheckedOut = isCheckedOut;
        this._ratings = [];
    }

    get title() {
        return this._title;
    }
    
    get isCheckedOut() {
        return this._isCheckedOut;
    }

    get ratings() {
        return this._ratings;
    }

    set isCheckedOut(checkedOut) {
        this._isCheckedOut = checkedOut
    }

    getAverageRating() {
        let ratingsTotal = 0;
        for (let i = 0; i < this.ratings.length; i++) {
            ratingsTotal += this.ratings[i];
        }
        return ratingsTotal / this.ratings.length;
    }

    toggleCheckOutStatus() {
        this.isCheckedOut ? this.isCheckedOut = false : this.isCheckedOut = true;
    }

    addRating(newRating) {
        this.ratings.push(newRating);
    }
}

class Book extends Media {
    constructor(author, title, pages, isCheckedOut) {
        super(title, isCheckedOut);
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }
}

class Movie extends Media {
    constructor(director, title, runTime, isCheckedOut) {
        super(title, isCheckedOut);
        this._director = director;
        this._runTime = runTime;
    }

    get director() {
        return this._director;
    }

    get runTime() {
        return this._runTime;
    }
}

class CD extends Media {
    constructor(artist, title, isCheckedOut, songs) {
        super(title, isCheckedOut);
        this._artist = artist;
        this._songs = songs;
    }

    get artist() {
        return this._artist;
    }

    get songs() {
        return this._songs;
    }
}


const testCD = new CD('Vybz Kartel', 'Adija Palmer', false, ['Please Mr Please', 'Touch a Button', 'Business']);
testCD.addRating(10);
testCD.addRating(7.5);
testCD.addRating(9.3);

console.log(testCD.getAverageRating());
testCD.toggleCheckOutStatus();
console.log(testCD.isCheckedOut);
console.log(testCD.songs);
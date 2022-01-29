class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
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
    set isCheckedOut(CheckedOut) {
        this._isCheckedOut = CheckedOut;
    }
    toggleCheckOutStatus() {
        if (this._isCheckedOut === true) {
            this._isCheckedOut = false;
        } else {
            this._isCheckedOut = true;
        }
    }
    getAverageRating() {
        let ratings = this._ratings;
        let sumRatings = ratings.reduce((accumulator,currentValue) => {
            return accumulator + currentValue;
        })
        return sumRatings / ratings.length;

    }
    addRatings(newRating) {
        this._ratings.push(newRating);
    }
}

class Book extends Media {
    constructor(author,title,pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get author() {
        return this._author;
    }
    get pages() {
        return  this._pages;
    }
}

class Movie extends Media {
    constructor(director,title,runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }
    get director() {
        return this._director;
    }
    get runTime() {
        return  this._runTime;
    }
}

const historyOfEverything = new Book('Bill Bryson','A Short History of Nearly Everything',544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRatings(4);
historyOfEverything.addRatings(5);
historyOfEverything.addRatings(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont','Speed',116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRatings(1);
speed.addRatings(1);
speed.addRatings(5);
console.log(speed.getAverageRating());

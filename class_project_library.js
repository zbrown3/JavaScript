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
}
const profootballtalk = new Media('PFTLive');
console.log(profootballtalk.isCheckedOut);
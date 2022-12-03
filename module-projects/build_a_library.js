// Parent class
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

  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  getAverageRating() {
    let ratingsTotal = this._ratings.reduce((acc, curr) => acc + curr);
    let averageRating = ratingsTotal / this._ratings.length;
    return averageRating.toFixed(2);
  }

  addRating(newRating) {
    if (newRating > 0 && newRating < 6) {
      this._ratings.push(newRating);
    } else {
      console.log('Error: Please input rating between 1 and 5 only!')
    }
  }
}

// Child class
class Book extends Media {
  constructor(author, title, pages) {
    super(title);
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

// Child class
class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
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

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
//console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(3);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
//console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 116);
//speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
//console.log(speed.getAverageRating());

// Child class
class CD extends Media {
  constructor(artist, title) {
    super(title);
    this._artist = artist;
    this._songTitles = [];
  }

  get artist() {
    return this._artist;
  }

  get songTitles() {
    return this._songTitles;
  }

  addSongTitles(songArray) {
    for (let song in songArray) {
      this._songTitles.push(songArray[song]);
    } 
  }

  // Shuffles playlist using Fisher-Yates algorithm | Project extension
  shuffle() {
    let shuffled = this._songTitles; // New array created so it doesn't mutate original array 
    var m = shuffled.length, t, i;

    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = shuffled[m];
      shuffled[m] = shuffled[i];
      shuffled[i] = t;
    }
    return shuffled;
  }
}

const stopTheCLocks = new CD('Oasis', 'Stop The Clocks');
//console.log(stopTheCLocks.artist);
const newSongs = ['Rock \'n\' Roll Star', 'Some Might Say - Edit', 'Talk Tonight', 'Lyla', 'The Importance of being Idle', 'Wonderwall', 'Side Away - Edit', 'Cigarettes & Alcohol', 'The Masterplan', 'Live Foreer', 'Acquiece', 'Supersonic', ' Half the World Away', 'Go Let It Out', 'Songbird', 'Morning Glory', 'Champagne Supernov', 'Dont\'t Look Back In Anger'];
stopTheCLocks.addSongTitles(newSongs);
stopTheCLocks.addRating(4);
stopTheCLocks.addRating(3);
stopTheCLocks.addRating(4);
//console.log(stopTheCLocks.songTitles);
//console.log(stopTheCLocks.shuffle());

// New class containing all child class | Project extension
class Catalog {
  constructor() {
    this._books = [];
    this._movies = [];
    this._cds = [];
  }

  get books() {
    return this._books;
  }
  
  get movies() {
    return this._movies;
  }

  get cds() {
    return this._cds;
  }

  addBook(bookInstance) {
    this._books.push(bookInstance);
  }

  addMovie(movieInstance) {
    this._movies.push(movieInstance);
  }

  addCd(cdInstance) {
    this._cds.push(cdInstance);
  }

  catalogList() {
    console.log(this._books);
    console.log(this._movies);
    console.log(this._cds);
  }
}

const newCatalog = new Catalog();
newCatalog.addBook(historyOfEverything);
//console.log(newCatalog.books);
newCatalog.addMovie(speed);
newCatalog.addCd(stopTheCLocks);
newCatalog.catalogList();
"use strict";
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
module.exports = { findTitles, findAuthors, findIDs, createBook }; //add all of your function names here that you need for the node mocha tests
*/
/*
o	createBook, which will take title, author, and libraryID as inputs.  It will create a new book object and add it to the library, 
which will be represented as a global array named libraryBooks.  createBook should return the newly created book.
o	findTitles, which will find all the book titles in libraryBooks and return them in an alphabetically ordered array.
o	findAuthors, which will find all the authors in libraryBooks and return them in an alphabetically ordered array.
o	findIDs, which will find all the libraryIDs in libraryBooks and return them in an alphabetically ordered array.
*/

let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];

/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
function showTitles() {

    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const titles = findTitles();

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    titles.sort();
    const titleString = titles.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = titleString;
}

/**
 * 
 * @return {object} array holding all titles as elements
 */
function findTitles() {
    let titles = [];

    for (const book of library) {
        titles.push(book.title);
    }
    titles.sort();

   // titles = ["Mockingjay: The Final Book of The Hunger Games", "The Road Ahead", "Walter Isaacson"];  //FIX THIS!!
    // implement this and other functions
    return titles;
}

/**
 * @returns {undefined} no return
 * Event handler for Add book button.  Creates and adds book to the library
 */
function addBook() {
    const title = document.getElementById("title"); //retrieves the book title from the title textbox
    console.log("title is: ", title.value);
    alert("title:  " + title.value);
    const author = document.getElementById("author");
    const newID = library.length + 5000;  // hack to get a unique id for now
    const newBook = createBook(title.value, author.value, newID);
    library.push(newBook);


    //finish the implementation -- get the author, create a book object, and add to the library array
}

/**
 * 
 * @returns {Array} find all  authors in libraryBooks and return them in alphabetically ordered array.
 */
function findAuthors() {
    const authorArr = [];
    for (const book of library) {
        authorArr.push(book.author);
    }
    authorArr.sort();

    return authorArr;
}

/**
 * 
 * @returns {Array} find all the libraryIDs in libraryBooks and return them in an alphabetically ordered array.
*/
function findIDs() {
    const idArr = [];
    for (const book of library) {
        idArr.push(book.libraryID);
    }
    idArr.sort();
    return idArr;
}

/**
 * will take title, author, and libraryID as inputs.  It will create a new book object and return it
 * @param {String} title is book title
 * @param {String} author is book author
 * @param {number} libraryID is unique id of book
 * @returns {book}  the newly created book.
 */
function createBook(title, author, libraryID) {
    const newbook = { title, author, libraryID };
    return newbook;
}


// get text from input field 

// store text in object {link : name}
    // class
// store object in array

// render
// display text on screen
    // map each object in the array to a li element and append removal button to li



const inputArray = [];
const linkInput = document.querySelector("#input1");
const nameInput = document.querySelector("#input2");
const inputObject = {
    linkInput: nameInput
};


function addInput() {
    
    inputArray.push(inputObject);

}

class Bookmark {
    constructor(link, name) {
        this.link = link;
        this.name = name;
    }

    addInput = () {

    }

    render = function () {
        const li = document.createElement("li");
        li.textContent = input.value;

        return li;
    }

}

const button = document.querySelector("button");
button.addEventListener("click", new Bookmark);






// const input = document.querySelector("#input1");

// list.append(li); 

// let b = new Bookmark();



// removing - think of what to filter 
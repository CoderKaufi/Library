let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;


}

function addBookToLibrary(title, author, pages, read){
    myLibrary.push(new Book(title, author, pages, read));
    loopTroughBooks();
}

function loopTroughBooks(){
            bookDiv = document.createElement("div");
            bookDiv.setAttribute("id", "book")
            libraryGrid.appendChild(bookDiv);
            
            
            bookAttributes  = [myLibrary.slice(-1)[0].title,myLibrary.slice(-1)[0].author, myLibrary.slice(-1)[0].pages
            ,myLibrary.slice(-1)[0].read]
            for(let j = 0; j < bookAttributes.length; j++){
                
                p = document.createElement("div");
                if(bookAttributes[j]===true){
                    p.setAttribute("class", "read");
                    p.textContent = "read";
                }else if(bookAttributes[j] ===false){
                    p.setAttribute("class", "read")
                    p.textContent = "not read"
                }else{
                    p.textContent = bookAttributes[j];
                }
                bookDiv.appendChild(p);
                
            }
            deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete book"
            bookDiv.appendChild(deleteButton);
            deleteButtons.push(deleteButton);
            readButton = document.createElement("button");
            readButton.textContent = "Read?";
            bookDiv.appendChild(readButton);
            readButtons.push(readButton);
        }

function bookForm(){
    
    form = document.createElement("form");
    form.setAttribute("class", "newBookForm")
    newBookDiv.appendChild(form);

    title = document.createElement("input");
    title.setAttribute("id","title")
    title.setAttribute("placeholder", "Title of the book")
    form.appendChild(title);

    author = document.createElement("input");
    author.setAttribute("id","author")
    author.setAttribute("placeholder", "Author");
    form.appendChild(author);

    pages = document.createElement("input");
    pages.setAttribute("type","number");
    pages.setAttribute("id","pages")
    pages.setAttribute("min", "1")
    pages.setAttribute("placeholder","number of pages")
    form.appendChild(pages);

    readHolder = document.createElement("div");
    form.appendChild(readHolder)
    label = document.createElement("label");
    label.setAttribute("for", "#read")
    label.textContent = "Read the book?";
    readHolder.appendChild(label)
    read = document.createElement("input");
    read.setAttribute("type", "checkbox");
    read.setAttribute("id","read")
    
    readHolder.appendChild(read);
    
    
}


deleteButtons = [];
readButtons = [];
newBookDiv = document.createElement("div");
newBookDiv.setAttribute("class", "newBookDiv")
document.body.appendChild(newBookDiv);
newBook = document.createElement("button");
newBook.textContent = "New Book";
newBookDiv.appendChild(newBook);
libraryGrid = document.createElement("div");
libraryGrid.setAttribute("class", "libraryGrid")
document.body.appendChild(libraryGrid);
bookForm();

newBook.addEventListener("click", click=>{
    if(document.getElementById("title").value === "" || document.getElementById("author").value ===""
    || document.getElementById("pages").value === "" ||  document.getElementById("read").checked ===""
    ){
        alert("You have to enter details about the book!")
    }
    else{
        addBookToLibrary(document.getElementById("title").value,
        document.getElementById("author").value,
        document.getElementById("pages").value,
        document.getElementById("read").checked)
    }
        deleteButtons.forEach(deleteButton => {
            deleteButton.addEventListener("click", click=>{
                libraryGrid.removeChild(deleteButton.parentElement)
        })
        readButtons.forEach(readButton=>{
            readButton.onclick = ()=>{
                if(readButton.parentElement.querySelector(".read").textContent === "read"){
                    readButton.parentElement.querySelector(".read").textContent = "not read";
                }else{
                    readButton.parentElement.querySelector(".read").textContent = "read";
                }
        }
            
        })
            
        });
})


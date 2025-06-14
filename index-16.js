const BOOKS_URL = 'https://684a7ac1165d05c5d358e0ab.mockapi.io/books';
const LIBRARY = 'https://684a7ac1165d05c5d358e0ab.mockapi.io/library'

class Book {
async checkUsername(title){
    const res=await fetch('https://684a7ac1165d05c5d358e0ab.mockapi.io/books').then(res=>res.json());
    for(let item of res){
      if(item.title==title){
        return true
      }
    }
    return false
  }
async create(title, description, genre) {
    const check=await this.checkUsername(title)
    if(!check){
      const res = await fetch(BOOKS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, genre }),
    });
    console.log(`Kitob yaratildi: ${title}`)
    }else{
      console.log(`${title} bunday kitob bor!`);
      return
    }
    
  }
async getAllBooks() {
    const res = await fetch(BOOKS_URL).then(res=>res.json());
    for(let item of res){
      console.log(item);
    }
  }

async getById(id) {
    const res = await fetch(BOOKS_URL);
    const data=await res.json();
    for(let item of data){
      if(item.id==id){
        console.log(item);
      }
    }
  }
}

class Author {
  constructor(name) {
    this.name = name;
    this.id = null;
    this.books = [];
  }

  async createUser() {
    const res = await fetch(AUTHORS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: this.name, books: [] }),
    });

    const data = await res.json();
    this.id = data.id;
    this.books = data.books;
    console.log(`Muallif yaratildi: ${this.name} (ID: ${this.id})`);
  }

  async addBook(book_id) {
    if (!this.id) {
      console.error("Muallif hali yaratilmagan.");
      return;
    }

    try {
      const book = await Book.getById(book_id);
      if (!book || !book.id) {
        console.error("Kitob topilmadi!");
        return;
      }

      if (this.books.includes(book_id)) {
        console.log("Bu kitob allaqachon muallifda mavjud.");
        return;
      }

      this.books.push(book_id);

      await fetch(`${AUTHORS_URL}/${this.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: this.name, books: this.books }),
      });

      console.log(`Kitob muallifga qo‘shildi: ${book.title}`);

    } catch (err) {
      console.error('Xatolik:', err);
    }
  }

  async getBooks() {

  }
}

(async () => {
  const books=new Book()
  const author = new Author();

  // books.create("Harry Potter", "Fantasy", "Drama");
  // books.create("Jonni Dep", "Fantastik Comedy", "Comedy")
  // await books.getAllBooks()
  // await books.getById(2)

  // await author.getBooks();
  
})();

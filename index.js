const BASE_URL = 'https://684a7ac1165d05c5d358e0ab.mockapi.io/library';
const AUTHORS_URL = `${BASE_URL}/library`;
const BOOKS_URL = `${BASE_URL}/library`;

class Book {
  static async create(title, description, genre) {
    const res = await fetch(BOOKS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, genre }),
    });
    const data = await res.json();
    console.log(`Kitob yaratildi: ${data.title}`);
    return data;
  }

  static async getAllBooks() {
    const res = await fetch(BOOKS_URL);
    return await res.json();
  }

  static async getById(id) {
    const res = await fetch(`${BOOKS_URL}/${id}`);
    return await res.json();
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
    if (!this.books.length) {
      console.log("Muallifda hali kitoblar yo‘q.");
      return;
    }

    console.log(` ${this.name} kitoblari:`);
    for (const id of this.books) {
      try {
        const book = await Book.getById(id);
        console.log(`- ${book.title} | ${book.genre}`);
      } catch (err) {
        console.log(`Kitob ID ${id} topilmadi.`);
      }
    }
  }
}

(async () => {
  const author = new Author("Stiv Jobs");
  await author.createUser();

  const book1 = await Book.create("Stiv Jobs", "Drama", "Drama");
  const book2 = await Book.create("Jonni Dep", "Fantastik Comedy", "Comedy");

  await author.addBook(book1.id);
  await author.addBook(book2.id);

  await author.getBooks();
})();

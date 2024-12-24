// Dados de livros iniciais
const books = [
  { title: "Livro A", author: "Autor A", year: 2020 },
  { title: "Livro B", author: "Autor B", year: 2018 },
  { title: "Livro C", author: "Autor C", year: 2022 },
];

// Renderizar livros na biblioteca
function displayBooks() {
  const library = document.getElementById("library");
  library.innerHTML = ""; // Limpa a exibição

  books.forEach((book) => {
    const bookElement = document.createElement("div");
    bookElement.className = "book";
    bookElement.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Autor:</strong> ${book.author}</p>
      <p><strong>Ano:</strong> ${book.year}</p>
    `;
    library.appendChild(bookElement);
  });
}

// Filtrar livros
document.getElementById("searchBar").addEventListener("input", (event) => {
  const query = event.target.value.toLowerCase();
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query)
  );
  displayFilteredBooks(filteredBooks);
});

function displayFilteredBooks(filteredBooks) {
  const library = document.getElementById("library");
  library.innerHTML = "";

  filteredBooks.forEach((book) => {
    const bookElement = document.createElement("div");
    bookElement.className = "book";
    bookElement.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Autor:</strong> ${book.author}</p>
      <p><strong>Ano:</strong> ${book.year}</p>
    `;
    library.appendChild(bookElement);
  });
}

// Inicializar exibição
displayBooks();

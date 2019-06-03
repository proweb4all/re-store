export default class BookstoreService {
  getBooks() {
    return [
        { id: 1, title: "Хроники Амбера", author: "Роджер Желязны",
          price: 40,
          coverImage: 'https://www.onthebus.com.ua/wa-data/public/shop/products/26/65/6526/images/21111/21111.200x0.jpg' },
        { id: 2, title: "Чапаев и Пустота", author: "Виктор Пелевин",
          price: 30,
          coverImage: 'https://a.wattpad.com/cover/171667617-256-k616153.jpg' },
    ];
  }
}

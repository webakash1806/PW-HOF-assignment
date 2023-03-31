let book = [
    { author: 'shanu', title: 'sherlock holmes', year: '2009' },
    { author: 'lucky', title: 'merchant of venice', year: '2012' },
    { author: 'sonal', title: 'the portrait', year: '2009' },
    { author: 'harivansh', title: 'the great india', year: '2010' },
    { author: 'peter', title: 'story behind statue of unity', year: '2010' },
    { author: 'shyam', title: 'taj mahal', year: '2009' }
]

book.filter(books => books.year < 2010).map(books => {
    const c = { author: books.author.toUpperCase(), title: books.title.toUpperCase(), year: books.year }
    console.log(c);
})
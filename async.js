function getData(data) {
    return new Promise((resolve, reject) => {
        console.log('veriler alınmaya çalışılıyor...');

        if (data) {
            resolve('verilen alındı')
        } else {
            reject('veriler alınamadı')
        }
    })
}

function cleanData(recivedData) {
    return new Promise((resolve, reject) => {
        console.log('veriler alınmaya çalışıyor..')

        if (recivedData) {
            resolve('veriler düzenlendi')
        } else {
            reject('veriler düzenlenemedi')
        }
    })

}

/*getData(true)
.then(result =>{
    console.log(result);
    return cleanData(false)
}).then(result=>{
    console.log(result);
}).catch(error =>{
    console.log(error);
})*/

// Async -  Await

// async function processData() {
//     try {
//         const recivedData = await getData(true);
//         console.log(recivedData);
//         const cleanedData = await cleanData(true);
//         console.log(cleanData);

//     } catch (error) {
//         console.log(error);
//     }
// }
// processData();

const books = [
    { name: "Kitap 1", yazar: "Yazar 1" },
    { name: "Kitap 2", yazar: "Yazar 2" },
    { name: "Kitap 3", yazar: "Yazar 3" },
  ];
  
  const listBooks = () => {
    books.map((book) => console.log(book.name));
  };
  
  const addBook = (newBook) => {
    const promise1 = new Promise((resolve, reject) => {
      books.push(newBook);
    //   resolve(books);
      reject("Bir Hata Oluştu....");
    });
    return promise1;
  };
  
//   addBook({ name: "Kitap 4", yazar: "Yazar 4" })
//     .then((res) => {
//       console.log("YENİ LİSTE : ");
//       listBooks();
//     })
//     .catch((err) => {
//       console.log(err);
//     });

async function showBooks() {
    try{
        await addBook({ name: "Kitap 12", yazar: "Yazar 12" })
        listBooks();
    }catch(error){
        console.log(error)
    }
    
}
showBooks();
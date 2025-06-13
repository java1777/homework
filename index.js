const url = 'https://684a7ac1165d05c5d358e0ab.mockapi.io/products';


async function getProduct() {
  try {
    const res = await fetch(url);
    const users = await res.json();
    console.log(users);
  } catch (error) {
    console.log('Error on fetching product', error);
  }
}

async function getproductById(id2) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    for(let item of data){
      if(item.id==id2){
        console.log(item);
      }
    }
  } catch (error) {
    console.log('Error on fetching post by ID', error);
  }
}
async function addProduct() {
  try {
    const newProducts = {
      createdAt: Date.now(),
      name: 'apple222',
      price: 100,
    }
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(newProducts)
    });
    await getProduct();
  } catch (error) {
    console.log('Error on add product', error);
  }
}
// await getProduct()
// await getproductById(3)
await addProduct()

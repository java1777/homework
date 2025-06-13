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
    const res = await fetch(`${url}/${id2}`);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log('Error on fetching product by ID', error);
  }
}

async function addProduct() {
  try {
    const newProduct = {
      createdAt: Date.now(),
      name: 'apple222',
      price: 100,
    };
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(newProduct)
    });
    await getProduct();
  } catch (error) {
    console.log('Error on adding product', error);
  }
}

async function updateProduct(id, updatedData) {
  try {
    const res = await fetch(`${url}/${id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedData)
    });
    const updatedProduct = await res.json();
    console.log('Product updated:', updatedProduct);
    await getProduct();
  } catch (error) {
    console.log('Error on updating product', error);
  }
}

async function removeProduct(id) {
  try {
    const res = await fetch(`${url}/${id}`, {
      method: 'DELETE'
    });
    if (res.ok) {
      console.log(`Product with ID ${id} removed.`);
      await getProduct();
    } else {
      console.log(`Failed to remove product with ID ${id}`);
    }
  } catch (error) {
    console.log('Error on deleting product', error);
  }
}

await getProduct();
await getproductById(3);
await addProduct();
await updateProduct(1, { name: "Updated Apple", price: 120 });
await removeProduct(1);

export function getMaisVendidos() {
    return fetch('http://localhost:5000/products')
      .then(data => data.json())
  }

export function getRecomendados() {
  return fetch('http://localhost:5000/products')
    .then(data => data.json())
}

export async function getProduct(id) {
  return await fetch(`http://localhost:5000/products/${id}`)
    .then(data => data.json())
}

export function getCategories(){
  return fetch(`http://localhost:5000/categories`)
    .then(data => data.json())
}

export function getProductsByCategory(id){
  return fetch(`http://localhost:5000/products/category/${id}`)
    .then(data => data.json())
}
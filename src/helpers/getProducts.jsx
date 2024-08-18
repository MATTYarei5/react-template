async function getProducts(setProducts) {
  await fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then((data) => console.log(data))
    .then((data) => setProducts(data))
  
}
        
    // } catch (error) {
    //   console.error('Error fetching products:', error);
    //   return;
    // };
  // };

  export default getProducts;
import { useState, useEffect } from "react";

const Products = ({
  valToSearch
}: {
  valToSearch: string
}) => {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((res) => {
        const productsFromResponse = res.products;
        console.log(productsFromResponse);
        setProducts(productsFromResponse);
      })
    ;
  }, []);

  useEffect(() => {
    const filteredProductsToShow = products.filter(({title}: {title: string}) => title.includes(valToSearch));
    
    setProducts(filteredProductsToShow);
  }, [valToSearch]);
  
  return (
    <div>
      {
        products &&
        products.map(({id, title}: {id: number, title: string}) => (
          <div key={id}>{title}</div>
        ))
      }
    </div>
  )
};

export default Products;
import { useState, useEffect } from "react"

export const Products = () => {

    const [prod, setProd] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(d => d.json())
            .then((res) => {
                console.log(res)
                setProd(res)
            })
    }, [])
    console.log(prod)

    return (
        // <p>hello world</p>
        <>
            {
                prod.map((e, i) =>
                    <div index={i}>
                        <img src={e.image} alt="im" />
                        <p>{e.title}</p>
                        <p>{e.category}</p>
                        <p>{"Rs." + e.price}</p>
                    </div>
                )
            }
        </>
    )
}
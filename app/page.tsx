import Image from "next/image";
import Link from "next/link";

export default async function Home() {
 const {products} = await fetch('https://dummyjson.com/products').then((res) => res.json())
  return (
    <main className="grid grid-cols-4 gap-4 justify-center justify-items-center p-10">
    {
      products && products.map((product:any)=>{
        return <Link key={product.id} href={`/products/${product.id}`}>
        <div className="rounded-lg h-full border border-1 py-4 border-gray-200 flex flex-col">
        <Image src={product.thumbnail} width={700} height={400} alt="product" />
        
        <div className="mx-4 flex flex-col justify-between h-full">
          <div>
            <h1 className="mt-4 text-2xl font-serif">{product.title}</h1>
            <p className="mt-2 font-mono text-base">{product.description}</p>
          </div>
          <div>
          <div className="flex justify-between mt-4">
          <span>${product.price}</span>
          <span>{product.stock} Available</span>
          </div>
        </div>
        </div>
        </div>
        </Link>
      })
    }

   
    </main>
  );
}

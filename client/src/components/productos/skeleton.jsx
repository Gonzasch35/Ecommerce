import { Link } from "react-router-dom";

export default function Skeleton({category = true, cantidad = 4}){

  const cards = (num) => {
    
    let cod = []
    
    for (let i = 0; i < num; i++) {
      cod.push(
        <div className="w-72 h-96 rounded-lg bg-white p-3 shadow animate-pulse">
            <div className="w-full h-56 rounded-lg object-cover object-center bg-gray-200">
             
          </div>
          <a>
            <p className="my-4 pl-4 h-12 rounded-lg bg-gray-300 text-gray-200 select-none"></p>
          </a>
          <p className="mb-4 text-xl rounded-lg bg-gray-300 text-gray-200 select-none">a</p>
      </div>
      )
    }

    return cod;
  }

  return(
    <section className="flex flex-col ">
      {
        category? <h1 className="text-2xl text-center mt-10">No existen productos para esta categoria</h1> : ""
      }

       <div className="mb-20 flex gap-16  mt-10 justify-center flex-wrap">
          
        {
          cards(cantidad).map((e)=> e )
        }  
          
      </div>
    </section>
  )
}

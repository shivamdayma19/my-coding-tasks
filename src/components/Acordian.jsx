import { useState } from "react";

const Acordian = () => {
    const [open, setOpen] = useState(null) ;

    const data =[
        {title : "items-1" , content : "this is a content for item - 1 "},
        {title : "items-2" , content : "this is a content for item - 1 "},
        {title : "items-3" , content : "this is a content for item - 1 "},
    ]
    return (
        <div>
          {data.map((item, i) => (
            <div key={i}>
              <button onClick={() => setOpen(open === i ? null : i)}>
                {item.title}
              </button>

              {open === i && (
                <p>{item.content}</p>
              )}
            </div>
          ))}
        </div>
    )
}

export default Acordian;
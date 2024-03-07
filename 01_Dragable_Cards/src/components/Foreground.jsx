import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {

    const ref = useRef(null);
    const data = [
        {
            desc: "hi! my name is Anish and this is a Dragable Card.",
            fileSize: "10mb",
            close: false,
            tag: { isOpen: true, tagColor: "red", tagTitle: "Download" }
        },
        {
            desc: "hi! my name is Anish and this is a Dragable Card.",
            fileSize: "9mb",
            close: true,
            tag: { isOpen: true, tagColor: "green", tagTitle: "Download Now" }
        },
        {
            desc: "hi! my name is Anish and this is a Dragable Card.",
            fileSize: "9mb",
            close: false,
            tag: { isOpen: true, tagColor: "green", tagTitle: "Download" }
        },
        {
            desc: "hi! my name is Anish and this is a Dragable Card.",
            fileSize: "10mb",
            close: true,
            tag: { isOpen: true, tagColor: "red", tagTitle: "Upload" }
        },
        {
            desc: "Just a Dragable Card.....",
            fileSize: ".1mb",
            close: true,
            tag: { isOpen: false, tagColor: "red", tagTitle: "Upload" }
        }
    ];
    return (
        <div ref={ref} className='fixed top-0 left-0 bg-slate-800/200 z-[3] w-full h-full flex flex-wrap gap-10'> 
            {
                data.map((item, index) => (
                    <Card refrence={ref} data={item} />
                ))}
        </div>
    )
}

export default Foreground

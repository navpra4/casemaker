"use client"

import { CaseColor } from "@prisma/client"
import { useRef, useState } from "react"
import { AspectRatio } from "./ui/aspect-ratio"

const PhonePreview = ({croppedImageUrl, color}:{
    croppedImageUrl: string
    color: CaseColor
}) => {

    const ref = useRef<HTMLDivElement>(null)
    const [renderedDimension, setRenderedDimension] = useState({
        height: 0,
        width: 0
    })

    return (
        <AspectRatio ref={ref} ratio={3000/2001} className=" relative">
            <div className=" absolute z-20 scale-[1.0352] " style={{
                left:renderedDimension.width/2 - renderedDimension.width/(1216 / 121),
                top: renderedDimension.height/6.22,
            }}>
                <img width={renderedDimension.width/(3000/637)} className=" phone-skew relative z-20 rounded-t-[15px] rounded-b-[10px] md:rounded-t-[30px] md:rounded-b-[20px]"/>
            </div>
        </AspectRatio>
    )
}

export default PhonePreview
"use server"

import { db } from "@/db"
import { CaseColor, CaseMaterial, PhoneModel, caseFinish } from "@prisma/client"

export type SaveConfigArgs = {
    color: CaseColor
    finish: caseFinish
    material: CaseMaterial
    model: PhoneModel
    configId: string
}

export async function saveConfig({
    color,
    finish,
    material,
    model,
    configId,
}:SaveConfigArgs){
    await db.configuration.update({
        where: {id: configId},
        data:{
            color,finish,material,model
        }
    })
}
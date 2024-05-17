import asyncHandler from "express-async-handler";
import {prisma} from '../config/prismaConfig.js';

export const createResidency = asyncHandler(async (req, res) => {

    console.log(req.body);
    try {
        const residency = await prisma.residency.create({data: req.body});
        res.send({
            message: "Residency created successfully",
            residency
        })

    } catch (err) {
        if(err.code === "P2002") {
            throw new Error(" A residency with adress alread there");
        }
        throw new Error(err.message);
    }

});

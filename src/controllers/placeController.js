import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

//CRIAÇÃO DE LOCAIS
export const postCreatePlace = async (req, res) => {
    const { name, description, address, type, rating } = req.body
    try {
        const createPlace = await prisma.place.create({
            data: { name, description, address, type, rating }
        })
        res.status(201).json(createPlace)
    } catch (error) {
        res.status(500).json({
            message: "erro ao criar local!",
            error: error.message
        })
    }
}

//RETORNA TODOS OS LOCAIS
export const getAllPlaces = async (req, res) => {
    const allPlaces = await prisma.place.findMany()
    res.status(200).json(allPlaces)
}

//FILTRA LOCAIS POR TIPO
export const getPlacesByType = async (req, res) => {
    const { type } = req.query
    try {
        const byType = await prisma.place.findMany({
            where: { type }
        })
        res.status(200).json(byType)
    } catch (error) {
        res.status(500).json({
            message: "erro ao filtrar local!",
            error: error.message
        })
    }
}

//ATUALIZA UM LOCAL
export const putUpdatePlace = async (req, res) => {
    const id = parseInt(req.params.id)
    const { name, description, address, type, rating } = req.body
    try {
        const updatePlace = await prisma.place.update({
            where: { id },
            data: {
                name, description, address, type, rating
            }
        })
        res.status(200).json(updatePlace)
    } catch (error) {
        res.status(500).json({
            message: "erro ao atualizar local!",
            error: error.message
        })
    }
}

//ROTA PARA DELETAR LOCAL
export const deletePlace = async (req, res) => {
    const id = parseInt(req.params.id)
    try {
        const deletePlace = await prisma.place.delete({ where: { id } })
        res.status(200).json(deletePlace)
    }
    catch (error) {
        res.status(500).json({
            message: "erro ao deletar local!",
            error: error.message
        })
    }
}
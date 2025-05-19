import { createPlaces, DeletePlace, returnPlaces, returnPlacesByType, updatePlaces } from "../services/placeService.js";
import bcrypt from 'bcrypt'
//CRIAÇÃO DE LOCAIS
export const postCreatePlace = async (req, res) => {
    const { name, description, address, type, rating } = req.body
    try {
        const createPlace = await createPlaces(name, description, address, type, rating)
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
    try {
        const allPlaces = await returnPlaces()
        if (allPlaces.length === 0) {
            return res.status(401).json({ message: "nenhum local cadastrado!" })
        }
        res.status(200).json(allPlaces)
    } catch (error) {
        res.status(500).json({
            message: "erro ao retornar locais!",
            error: error.message
        })
    }
}

//FILTRA LOCAIS POR TIPO
export const getPlacesByType = async (req, res) => {
    const { type } = req.query
    try {
        const byType = await returnPlacesByType(type)

        if (byType.length === 0) {
            return res.status(401).json({ message: `nenhum local com tipo '${type}' foi encontrado!` })
        }
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

    if (!name && !description && !address && !type && !rating) {
        return res.status(401).json({ message: "é necessário atualizar ao menos um campo!" })
    }
    try {
        const updatePlace = await updatePlaces(id, name, description, address, type, rating)
        res.status(200).json(updatePlace)
    } catch (error) {
        res.status(500).json({
            message: "erro ao atualizar local!",
            error: error.message
        })
    }
}

//DELETA LOCAL
export const deletePlace = async (req, res) => {
    const id = parseInt(req.params.id)
    try {
        const deletePlace = await DeletePlace(id)
        res.status(200).json(deletePlace)
    }
    catch (error) {
        res.status(500).json({
            message: "erro ao deletar local!",
            error: error.message
        })
    }
}
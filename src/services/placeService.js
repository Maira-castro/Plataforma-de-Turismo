import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

//CRIAÇÃO DE LOCAIS
export async function createPlaces(name, description, address, type, rating) {
    const newPlace = await prisma.place.create({
            data: { name, description, address, type, rating }
        })
    return newPlace
}

//RETORNA TODOS OS LOCAIS
export async function returnPlaces() {
    const returnPlaces = await prisma.place.findMany()
    return returnPlaces
}

//FILTRA LOCAIS POR TIPO
export async function returnPlacesByType(type) {
    const places = await prisma.place.findMany({
           where: {type}
    })
    return places
}

//ATUALIZA UM LOCAL
export async function updatePlaces( id, name, description, address, type, rating) {
    const updatePlaces = await prisma.place.update({
            where: { id },
            data: {
                name, description, address, type, rating
            }
        })
        return updatePlaces
}

//DELETA LOCAL
export async function DeletePlace(id) {
    const DeletePlace = await prisma.place.delete({ where: { id } })
    return DeletePlace
}
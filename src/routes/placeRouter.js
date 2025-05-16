import express from 'express'
import { deletePlace, getAllPlaces, getPlacesByType, postCreatePlace, putUpdatePlace } from '../controllers/placeController.js'
const router = express.Router()

router.post("/places",postCreatePlace)
router.get("/places",getAllPlaces)
router.get("/search",getPlacesByType)
router.put("/places/:id",putUpdatePlace)
router.delete("/places/:id",deletePlace)
export default router

import express from 'express'
import { deletePlace, getAllPlaces, getPlacesByType, postCreatePlace, putUpdatePlace } from '../controllers/placeController.js'
import { authenticate, authorizeAdmin } from '../utils/auth.js'
import { validate } from '../middleware/validate.js'
import { CreatePlaceSchema, UpdatePlaceSchema } from '../schemas/placeSchema.js'
const router = express.Router()

router.post("/places",authenticate,authorizeAdmin,validate(CreatePlaceSchema),postCreatePlace)
router.get("/places",authenticate,getAllPlaces)
router.get("/search",authenticate,getPlacesByType)
router.put("/places/:id",authenticate,authorizeAdmin,validate(UpdatePlaceSchema),putUpdatePlace)
router.delete("/places/:id",authenticate,authorizeAdmin,deletePlace)
export default router

import { Router } from "express";
import { UserController } from "../controllers/"
const router: Router = Router();

router.get('/:userId', UserController.findUserById);
router.post('/', UserController.createUser);
router.put('/:userId', UserController.updateUser);
router.delete('/:userId', UserController.deleteUser);
export default router;
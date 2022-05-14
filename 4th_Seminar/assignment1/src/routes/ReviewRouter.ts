import { Router } from "express";
import ReviewController from "../controllers/ReviewController";
import { body } from "express-validator";

const router: Router = Router();

router.post(
  "/movies/:movieId",
  [
    body("title").notEmpty(),
    body("content").notEmpty(),
    body("writer").notEmpty(),
  ],
  ReviewController.create
);

router.get("/movies/:movieId", ReviewController.getOne);

export default router;

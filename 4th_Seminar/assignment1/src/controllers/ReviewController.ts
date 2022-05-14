import express, { Request, Response } from "express";
import { validationResult } from "express-validator";
import { ReviewCreateDto } from "../interfaces/review/ReviewCreateDto";
import message from "../modules/responseMessage";
import statusCode from "../modules/statusCode";
import util from "../modules/util";
import ReviewService from "../services/ReviewService";

/**
 * @route POST /review/movies/:movieId
 * @desc Create Review
 * @access Public
 */
const create = async (req: Request, res: Response) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, message.NULL_VALUE));
  }

  const reviewCreateDto: ReviewCreateDto = req.body;
  const { movieId } = req.params;

  try {
    const data = await ReviewService.create(movieId, reviewCreateDto);

    return res
      .status(statusCode.CREATED)
      .send(util.success(statusCode.CREATED, message.CREATE_REVIEW_SUCCESS));
  } catch (error) {
    console.log(error);
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        util.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          message.INTERNAL_SERVER_ERROR
        )
      );
  }
};

/**
 * @route GET /review/movies/:movieId
 * @desc GET Review
 * @access Public
 */
const getOne = async (req: Request, res: Response) => {
  const { movieId } = req.params;

  try {
    const reviews = await ReviewService.getOne(movieId);

    return res
      .status(statusCode.OK)
      .send(util.success(statusCode.OK, message.GET_REVIEW_SUCCESS));
  } catch (error) {
    console.log(error);
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        util.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          message.INTERNAL_SERVER_ERROR
        )
      );
  }
};

export default {
  create,
  getOne,
};

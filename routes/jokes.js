import express from 'express';
import Joke from '../models/Joke.js';
import { nanoid } from 'nanoid';

const router = express.Router();

/**
 * Exercise 1
 * Create a GET /joke route, that returns all jokes.
 */
router.get('/', async (req, res, next) => {
  const jokes = await Joke.find()
  res.json(jokes);
});

/**
 * Exercise 2
 * Create a GET /joke/:id route, that returns the joke for the given id.
 */

router.get('/:id', (req, res, next) => {
  // const { id } = req.params;
  // const joke = jokes.find(joke => joke.id === id);

  // if (joke) {
  //   res.json(joke.joke);
  // } else {
  //   next();
  // }
});

/**
 * Exercise 3
 * Create a POST /joke route, that adds a new joke to the array.
 */
router.post('/', (req, res, next) => {
  // const newJoke = req.body;
  // newJoke.id = nanoid();
  // jokes.push(newJoke);

  // res.json({
  //   insertedAt: newJoke.id,
  // });
});

/**
 * Exercise 4
 * Create a PATCH /joke/:id route, that updates the joke for the given id.
 */

router.patch('/:id', (req, res, next) => {
  // const { id } = req.params;
  // const jokeIndex = jokes.findIndex(joke => joke.id === id);
  // jokes[jokeIndex] = {
  //   ...jokes[jokeIndex],
  //   ...req.body,
  //   id,
  // };

  // let joke = jokes.find((joke) => joke.id === id);
  // joke = {
  //   ...joke,
  //   ...req.body,
  //   id,
  // };

  // res.json({
  //   updatedId: id,
  // });
  // console.log(jokeIndex);
});

/**
 * Exercise 5
 * Create a DELETE /joke/:id route, that deletes the joke for the given id.
 */

router.delete('/:id', (req, res, next) => {
  // const { id } = req.params;
  // jokes = jokes.filter(joke => joke.id !== id);

  // res.json({
  //   deletedId: id,
  // });
});

export default router;

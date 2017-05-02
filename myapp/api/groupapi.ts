import * as express from 'express';
import WeightClass from '../model/weightclass';

let router = express.Router();

router.get('/', (req, res) => {
  WeightClass.find().then((weightclasses) => res.json(weightclasses));
});

router.post('/', (req, res) => {
  let newWC = new WeightClass();
  newWC.pounds = req.body.pounds;
  newWC.save().then((createdWC) => res.json(createdWC));
});

router.get('/:id', (req, res) => {
  WeightClass.findOne({_id: req.params.id})
    .then((foundWC) => res.json(foundWC));
});

router.delete('/:id', (req, res) => {
  WeightClass.remove({_id: req.params.id})
    .then((deletedWC) => res.json(deletedWC));
});

router.post('/:id', (req, res) => {
  WeightClass.findById(req.params.id).then((foundWC) => {
    foundWC.pounds = req.body.pounds;
    foundWC.save().then((updedWC) => res.json(updedWC));
  });
});

export defualt router;

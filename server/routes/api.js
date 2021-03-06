'use strict';
const express = require('express');
const router = express.Router();
const ApiController = require('../controllers').Api;

router.route('/walks/search')
  .post(ApiController.getFilteredWalks);

router.route('/walks/fetch')
  .get(ApiController.getWalkersWalks);

router.route('/walks/create')
  .post(ApiController.createWalk);

router.route('/signup/owner')
  .post(ApiController.saveDog);

router.route('/signup/walker')
  .post(ApiController.saveWalker);

router.route('/walks/destroy')
  .delete(ApiController.destroyWalk);

router.route('/profile/owner')
  .get(ApiController.getOwnerProfile);

router.route('/profile/dog')
  .get(ApiController.getDogProfile);

router.route('/profileupdate/owner')
  .post(ApiController.updateOwnerProfile);

router.route('/profile/walker')
  .get(ApiController.getWalkerProfile);

router.route('/profileupdate/walker')
  .post(ApiController.updateWalkerProfile);

router.route('/')
  .get((req, res) => {
    res.status(200).send('Hello World!');
  })
  .post((req, res) => {
    console.log('in the correct route');
    res.status(201).send({ data: 'Posted!' });
  });

router.route('/signup/payment/stripeid')
  .get(ApiController.getAndSaveStripeID);

router.route('/signup/payment/tokenizecard')
  .get((req, res) => {
    res.render('cardtoken.ejs');
  });

router.route('/signup/payment/savecardtoken') //post request from the ejs file
  .post(ApiController.getAndsaveCardToken);

router.route('/walks/payment')
  .post(ApiController.processPayment);

router.route('/walks/refund')
  .post(ApiController.cancelBookedWalk);

router.route('/walks/getOwnerInfo')
  .get((req, res) => {
    res.status(200).send(req.user);
  });

router.route('/walkhistory/current')
  .get(ApiController.getCurrentWalk);

router.route('/walkhistory/upcoming')
  .get(ApiController.getUpcomingWalks);

router.route('/walkhistory/past')
  .get(ApiController.getPastWalk);

router.route('/walkhistory/cancel')
  .post(ApiController.cancelBookedWalk);

router.route('/walks/getDogInfo')
  .get(ApiController.getDogInfo);

router.route('/walks/track')
  .get(ApiController.fetchGeolocations)
  .post(ApiController.saveWalkGeolocation);

router.route('/walks/rating')
  .get(ApiController.fetchRating)
  .post(ApiController.addRating);

router.route('/walks/averagerating')
  .post(ApiController.calculateAverageRating);

router.route('/messages/write')
  .post(ApiController.writeMessages);

router.route('/messages/senders')
  .get(ApiController.fetchChatDetails);

router.route('/walks/trackRealTime')
  .get(ApiController.fetchLatestGeolocations);


router.route('/messages/fetch')
  .post(ApiController.fetchMessages);

module.exports = router;

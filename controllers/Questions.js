'use strict';

var utils = require('../utils/writer.js');
var Questions = require('../service/QuestionsService');

module.exports.addQuestions = function addQuestions (req, res, next) {
  var questionsItem = req.swagger.params['questionsItem'].value;
  Questions.addQuestions(questionsItem)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteQuestions = function deleteQuestions (req, res, next) {
  var questionsItem = req.swagger.params['questionsItem'].value;
  Questions.deleteQuestions(questionsItem)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchQuestions = function searchQuestions (req, res, next) {
  var skip = req.swagger.params['skip'].value;
  var limit = req.swagger.params['limit'].value;
  console.log('xxxxx')
  Questions.searchQuestions(skip,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateQuestions = function updateQuestions (req, res, next) {
  var questionsItem = req.swagger.params['questionsItem'].value;
  Questions.updateQuestions(questionsItem)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

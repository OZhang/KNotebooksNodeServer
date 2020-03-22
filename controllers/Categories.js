'use strict';

var utils = require('../utils/writer.js');
var Categories = require('../service/CategoriesService');

module.exports.addCategory = function addCategory (req, res, next) {
  var categoryItem = req.swagger.params['categoryItem'].value;
  Categories.addCategory(categoryItem)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCategory = function deleteCategory (req, res, next) {
  var questionsItem = req.swagger.params['questionsItem'].value;
  Categories.deleteCategory(questionsItem)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchCategory = function searchCategory (req, res, next) {
  var skip = req.swagger.params['skip'].value;
  var limit = req.swagger.params['limit'].value;
  Categories.searchCategory(skip,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCategory = function updateCategory (req, res, next) {
  var categoryItem = req.swagger.params['categoryItem'].value;
  Categories.updateCategory(categoryItem)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

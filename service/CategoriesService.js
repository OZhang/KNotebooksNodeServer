'use strict';


/**
 * adds questions
 * Adds an item to the system
 *
 * categoryItem Category category item to add (optional)
 * no response value expected for this operation
 **/
exports.addCategory = function(categoryItem) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * delete category
 * delete an item
 *
 * questionsItem Category Questions item to delete (optional)
 * no response value expected for this operation
 **/
exports.deleteCategory = function(questionsItem) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * searches categories
 * By passing in the appropriate options, you can search for available inventory in the system 
 *
 * skip Integer number of records to skip for pagination (optional)
 * limit Integer maximum number of records to return (optional)
 * returns List
 **/
exports.searchCategory = function(skip,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "_rev" : "_rev",
  "name" : "name",
  "_id" : "_id"
}, {
  "_rev" : "_rev",
  "name" : "name",
  "_id" : "_id"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * update category
 * Update an item
 *
 * categoryItem Category Questions item to add (optional)
 * no response value expected for this operation
 **/
exports.updateCategory = function(categoryItem) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


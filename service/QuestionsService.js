'use strict';


/**
 * adds questions
 * Adds an item to the system
 *
 * questionsItem Question Questions item to add (optional)
 * no response value expected for this operation
 **/
exports.addQuestions = function(questionsItem) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * delete question
 * delete an item
 *
 * questionsItem Question Questions item to delete (optional)
 * no response value expected for this operation
 **/
exports.deleteQuestions = function(questionsItem) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * searches questions
 * By passing in the appropriate options, you can search for available inventory in the system 
 *
 * skip Integer number of records to skip for pagination (optional)
 * limit Integer maximum number of records to return (optional)
 * returns List
 **/
exports.searchQuestions = function(skip,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "half" : "half",
  "photoUrls" : [ "photoUrls", "photoUrls" ],
  "solution" : "solution",
  "question" : "doggie",
  "subject" : "subject",
  "grade" : "grade",
  "_rev" : "_rev",
  "_id" : "_id",
  "category" : {
    "_rev" : "_rev",
    "name" : "name",
    "_id" : "_id"
  },
  "tags" : [ {
    "_rev" : "_rev",
    "name" : "name",
    "_id" : "_id"
  }, {
    "_rev" : "_rev",
    "name" : "name",
    "_id" : "_id"
  } ],
  "status" : "solved"
}, {
  "half" : "half",
  "photoUrls" : [ "photoUrls", "photoUrls" ],
  "solution" : "solution",
  "question" : "doggie",
  "subject" : "subject",
  "grade" : "grade",
  "_rev" : "_rev",
  "_id" : "_id",
  "category" : {
    "_rev" : "_rev",
    "name" : "name",
    "_id" : "_id"
  },
  "tags" : [ {
    "_rev" : "_rev",
    "name" : "name",
    "_id" : "_id"
  }, {
    "_rev" : "_rev",
    "name" : "name",
    "_id" : "_id"
  } ],
  "status" : "solved"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * update questions
 * Update an item
 *
 * questionsItem Question Questions item to add (optional)
 * no response value expected for this operation
 **/
exports.updateQuestions = function(questionsItem) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


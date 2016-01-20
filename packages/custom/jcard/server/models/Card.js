'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


/**
 * Card Schema
 */
var CardSchema = new Schema({
  titleText: {
    type: String,
    required: true,
    trim: true
  },
  headerText: {
    type: String,
    required: true,
    trim: true
  },
  bodyText: {
    type: String,
    required: true,
    trim: true
  },
  link: {
    type: String,
    required: true,
    trim: true
  }
});

/**
 * Validations
 */
CardSchema.path('headerText').validate(function(title) {
  return !!title;
}, 'Title cannot be blank');

CardSchema.path('bodyText').validate(function(bodyText) {
  return !!bodyText;
}, 'bodyText cannot be blank');

CardSchema.path('link').validate(function(link) {
  return !!link;
}, 'link cannot be blank');
/**
 * Statics
 */
CardSchema.statics.load = function(id, cb) {
  this.findOne({
    _id: id
  }).populate('headerText', 'title headerText').exec(cb);
};

mongoose.model('Card', CardSchema);
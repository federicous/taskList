/**
 * Article.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
     title: {
       type: 'string'
     },
     body: {
       type: 'string'
     },
     date: {
       type: 'string'
     }
   },
   beforeValidate: function(values, cb){
    // values.title = values.article.title;
    // values.body = values.article.body;
    // delete values.article;
    console.log('THESE_VALUES');
    console.log(values);
    cb();
   }
};

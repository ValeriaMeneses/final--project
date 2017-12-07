const { Model } = require('objection');

class Notes extends Model {
  static get tableName () {
    return 'notes';
  }
  static get relationMapping () {
    const CV = require('./CV.js');
    return {
      cv: Model.HasOneRelation,
      modelClass: CV,
      join:{
        from: 'notes.curriculumsId',
        to: 'curriculums.id'
      }

    }
  }
}

module.exports = Notes

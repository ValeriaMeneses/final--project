const { Model } = require('objection');

class CV extends Model {
  static get tableName () {
    return 'curriculums';
  }

  static get relationMapping () {
    const Notes = require('./Notes.js');
    return {
      notes: Model.BelongsToOneRelation,
      modelClass: Notes,
      join:{
        from: 'curriculums.id',
        to: 'notes.curriculumsId'
      }

    }
  }


}
module.exports = CV;

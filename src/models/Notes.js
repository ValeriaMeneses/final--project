const { Model } = require('objection');

class Notes extends Model {
  static get tableName () {
    return 'notes';
  }
  static get relationMappings () {
    const CV = require('./CV.js');
    return {
      curriculums:{
        relation: Model.BelongsToOneRelation,
        modelClass: CV,
        join:{
          from: 'notes.curriculumsId',
          to: 'curriculums.id'
        }
      }
  }
}
}

module.exports = Notes

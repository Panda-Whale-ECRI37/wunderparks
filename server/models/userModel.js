const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const userSchema = new Schema(
//   {
//     name: { type: String, required: true },
//     parksVisited: {},
//   },
//   { minimize: false }
// );


const userSchema = new Schema(
  {
    name: {type: String, required: true},
    username: { type: String, required: true },
    password: {type: String, required: true},
    parksVisited: [ String ],
    trips: [], //array of trip objects [{parkCode: 'brca', date: Date string?, activitiesDone: [activities], notes: string}],

  },
  { minimize: false }
);

module.exports = mongoose.model('user', userSchema);

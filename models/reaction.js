const { Schema, model } = require('mongoose');

const reactionSchema = new Schema (
{
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        minlength: 1,
        maxkength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        //NEED TO FIND A DATE THINGY
        // Use a getter
    },
},
{
    toJSON: {

      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

const Reaction = model('Reaction', reactionSchema);
module.exports = Reaction;
const { Schema, model, Types } = require('mongoose');

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
          maxlength: 280,
      },
      username: {
          type: String,
          required: true,
      },
      createdAt: {
          type: Date,
          //NEED TO FIND A DATE THINGY
          // Use a getter
          get: () => new Date(),
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

const thoughtSchema = new Schema (
{
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    createdAt: {
        type: Date,
        //NEED TO FIND A DATE THINGY
        get: () => new Date(),
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema],
},
{
    toJSON: {

      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema
  .virtual('reactionCount')
  .get(function () {
    return this.reactions.length;
  });

const Thought = model('thought', thoughtSchema);
module.exports = Thought;
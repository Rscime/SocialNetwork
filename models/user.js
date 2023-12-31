const { Schema, model, Types } = require('mongoose');

const userSchema = new Schema(
{
    username: {
        type: String, 
        unique: true, 
        required: true, 
        trimmed: true
    },
    email: {
        type: String, 
        unique: true, 
        required: true, 
        match: /.+\@.+\..+/
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought',
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Friend',
        },
    ],
},
{
    toJSON: {

      virtuals: true,
    },
    id: false,
  }
);

//?? review this
userSchema
  .virtual('friendCount')
  .get(function () {
    return this.friends.length;
  });

const User = model('user', userSchema);
module.exports = User;
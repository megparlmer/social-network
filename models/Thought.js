const { Schema, model, Types } = require('mongoose');

const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: formatCreatedAt,
    },
});

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: formatCreatedAt,
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [ReactionSchema],
});

function formatCreatedAt(timestamp) {
    return timestamp.toDateString();
};

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.friends.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
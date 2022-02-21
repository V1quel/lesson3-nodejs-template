const Sequelize = require('sequelize');

// Initialize local database file
const sequelize = new Sequelize({
  logging: false,
  dialect: 'sqlite',
  storage: './db/chat.sqlite',
});

// Initialize chat table with text field "message"
const Chat = sequelize.define('chats', {
  message: {
    // Message field is a string
    type: Sequelize.TEXT,
    // Disallows creating chat entries without a message
    allowNull: false,
  },
}, {
  timestamps: true,
});

// Re-export sequelize database synchronization method
exports.sync = (options) => sequelize.sync(options);

exports.Chat = Chat;

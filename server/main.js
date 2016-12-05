import { Meteor } from 'meteor/meteor';



twoFactor.sendCode = (user, code) => {
  console.log(`Authentication code for '${user.username}' user is: ${code}`);
};



twoFactor.validateLoginAttempt = (options) => {
  console.log('logging attempt!');
  console.log(options);
    return true;


}

// Gives us an account to test with
Meteor.startup(() => {
  if (Meteor.users.find().count() === 0) {
    Accounts.createUser({
      username: 'example',
      password: 'password'
    });
  }
});

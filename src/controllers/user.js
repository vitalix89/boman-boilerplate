import { RootController, permissions, rules } from 'boman';
import _ from 'lodash';
import { narcoOnly } from '../rules';

@RootController
class UserController {
  @permissions([narcoOnly])
  createUser(email) {
    return this.models.User.create({ email });
  }
  getUsers() {
    return this.models.User.find({});
  }
  getUser(id) {
    return this.models.User.findOne({ _id: id });
  }
}

export default UserController;

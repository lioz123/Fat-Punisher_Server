import {updateUser,createUser,getUserById,getUsers} from '../use-cases';
import createUpdateUser from './updateUser';
import createCreateUser from './createUser';
import createGetUserById from './getUserById';
import createGetMany from './getUsers';

const update = createUpdateUser(updateUser);
const create = createCreateUser(createUser);
const getById = createGetUserById(getUserById);
const getMany = createGetMany(getUsers);



export {update,create,getById,getMany};
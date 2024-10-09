"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUserById = exports.getUsers = exports.createUser = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const User_1 = __importDefault(require("../models/User"));
// Create a new user
const createUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = yield User_1.default.create(userData);
        return newUser;
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.createUser = createUser;
// Get all users
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield User_1.default.find();
        return users;
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.getUsers = getUsers;
// Get user by ID
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        throw new Error('Invalid user ID');
    }
    try {
        const user = yield User_1.default.findById(id);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.getUserById = getUserById;
// Update user by ID
const updateUser = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.default.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.updateUser = updateUser;
// Delete user by ID
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.default.findByIdAndDelete(id);
        if (!user) {
            throw new Error('User not found');
        }
        return { message: 'User deleted successfully' };
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.deleteUser = deleteUser;

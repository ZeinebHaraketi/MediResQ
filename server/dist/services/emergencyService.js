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
exports.deleteEmergency = exports.updateEmergency = exports.getEmergencyById = exports.getEmergencies = exports.createEmergency = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Emergency_1 = __importDefault(require("../models/Emergency"));
// Create a new emergency
const createEmergency = (emergencyData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newEmergency = yield Emergency_1.default.create(emergencyData);
        return newEmergency;
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.createEmergency = createEmergency;
// Get all emergencies
const getEmergencies = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const emergencies = yield Emergency_1.default.find().populate('patient').populate('hospitalAssigned');
        return emergencies;
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.getEmergencies = getEmergencies;
// Get emergency by ID
const getEmergencyById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        throw new Error('Invalid emergency ID');
    }
    try {
        const emergency = yield Emergency_1.default.findById(id).populate('patient').populate('hospitalAssigned');
        if (!emergency) {
            throw new Error('Emergency not found');
        }
        return emergency;
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.getEmergencyById = getEmergencyById;
// Update emergency by ID
const updateEmergency = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const emergency = yield Emergency_1.default.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
        if (!emergency) {
            throw new Error('Emergency not found');
        }
        return emergency;
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.updateEmergency = updateEmergency;
// Delete emergency by ID
const deleteEmergency = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const emergency = yield Emergency_1.default.findByIdAndDelete(id);
        if (!emergency) {
            throw new Error('Emergency not found');
        }
        return { message: 'Emergency deleted successfully' };
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.deleteEmergency = deleteEmergency;

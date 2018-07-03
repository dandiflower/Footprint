const mongoose = require("mongoose");
const Schema = monoose.schema;

const userSchema = new Schema({
    firstName: {
        type: String, 
        required: true
    },
    lastName: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        lowercase: true, 
        unique: true, 
        required: [true, "can't be blank"], 
        match: [/\S+@\S+\.\S+/, 'is invalid'], 
        index: true},
    zipCode: {
        type: Number
    },
    numPeopleInHome: {
        type: Number
    },
    numVehicles: {
        type: Number
    },
    heatSource: {
        naturalGas: {
            type: Boolean,
            default: false
        },
        electricity: {
            type: Boolean,
            default: false  
        },
        fuelOil: {
            type: Boolean,
            default: false
        },
        propane: {
            type: Boolean,
            default: false
        } 
    },
    avgWeeklyMiles: {
        type: Number,
        default: 2019
    },
    monthlyGasBill: {
        type: Number,
        default: 0
    },
    monthlyElectricBill: {
        type: Number,
        default: 0
    },
    montlyFuelBill: {
        type: Number,
        default: 0
    },
    monthlyPropaneBill: {
        type: Number,
        default: 0
    },
    // dollar value
    avgWasteEmission: {
        type: Number,
    },
    recyclingCans: {
        type: Boolean,
        default: false
    },
    recyclingPlastics: {
        type: Boolean,
        default: false
    },
    recyclingGlass: {
        type: Boolean,
        default: false
    },
    recyclingNewspapers: {
        type: Boolean,
        default: false
    },
    recyclingMagazines: {
        type: Boolean,
        default: false
    }
})

const User = mongoose.model("User", userSchema);

module.exports = User;
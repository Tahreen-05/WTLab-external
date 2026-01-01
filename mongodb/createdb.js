const { create } = require("domain");
const mongoose = require("mongoose");
//connecting to mongodb
mongoose.connect("mongodb://localhost:27017/studentdatabase")
    .then(() => {
        console.log("Mongodb connected successfully");
    })
    .catch((err) => console.error(err));
//defining schema
const StudentSchema = new mongoose.Schema({
    name: String,
    id: Number,
    Department: String
});
//model
const Students = mongoose.model("student", StudentSchema);
const createCollection = async () => {
    try {
        const student = new Students({
            name: "mehar",
            id: 101,
            Department: 'CSE'
        });
        await student.save();
        console.log("Student collection created successfully");
        mongoose.connection.close();
    }
    catch (err) {
        console.error(err);
    }
};
createCollection();
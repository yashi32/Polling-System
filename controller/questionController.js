const mongoose = require('mongoose');

const Question=require('../models/question');
const Option=require('../models/option');

//addQuestion Controller
module.exports.addQuestion = function(req,res){
    // Add Question to Database
    console.log("hi");
    Question.create(req.body, function(err, question){
        if(err){
            console.error(err);
            return  res.redirect('/');
        }
        return  res.json({question, data:{"message": "Question Created Sucessfully!"}});
    });
};



module.exports.viewQuestion= async function(req,res){

    let question= await Question.findById(req.params.id)
    .populate('options')

    return res.json({question:question});
}


module.exports.delQuestion = async function(req,res){
    try {
        let question= await Question.findById(req.params.id);
        question.remove();
        await Option.deleteMany({question:req.params.id});
        
        return res.json({
            message: "Question and Associated Options Deleted Sucessfully!",
        });
    } catch (error) {
        console.log(err);
        return res.json({
            message: "Internal Server Error!",
        });
    }
};
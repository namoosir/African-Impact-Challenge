const Entrepreneur = require('../models/entrepreneur');
const Instructor = require('../models/instructor');
const Partner = require('../models/partner');
const Company = require('../models/company');
const User = require('../models/user');
const Modules = require('../models/modules');



const create_module = async (req, res) => {

    const module = new Modules({
        name: req.body.name,
        user: req.params.id,
        assignments: [],
        content: []
    });


    const refModule = await module.save();

    res.status(200).json(refModule);
}

const get_recent_modules = async (req, res) => {

    const modules = await Modules.find({}).sort('-date');
    const result = modules.slice(0, 10);
    var ans = [];
   
    for (const module of result) {
       var populated = await myPop(module, "user").then(function(result) {
        return result 
     }) 
      
     ans.push(populated)
  
    };  
  
    const sentModules = ans;
  
    res.status(200).json(sentModules);
}
  
async function myPop(module, field) {
    let itemPopulated = await module.populate(field).execPopulate();
    return itemPopulated
}

const delete_module = async (req, res) => {
    moduleid = req.body.id;
    await Modules.deleteOne({_id: moduleid});
}

module.exports = {
    create_module,
    get_recent_modules,
    delete_module
}
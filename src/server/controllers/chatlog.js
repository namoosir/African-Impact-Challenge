const Entrepreneur = require("../models/entrepreneur");
const Instructor = require("../models/instructor");
const Partner = require("../models/partner");
const Company = require("../models/company");
const User = require("../models/user");
const Modules = require("../models/modules");
const Assignments = require("../models/assignments");
const Chatlog = require("../models/chatlog");

const save_chat_log = async (req, res) => {

    reqUsers = [req.body.user1, req.body.user2]
    reqUsers.sort();
    reqUsers = reqUsers.toString();

    //do users even exist?

    found = await Chatlog.findOne({usersid: reqUsers}).then(x=> {return x});

    if(found==null){
        const chatlog = new Chatlog({
            usersid: reqUsers,
            user1: req.body.user1,
            user2: req.body.user2,
            chatlogs: [{message: req.body.msg, userid: req.body.msgUser, date:req.body.date}],
          });
          console.log(req.body.date);
          const refchatlog = await chatlog.save();
          res.status(200).json(refchatlog);
    } 
    else{
        newlog = found.chatlogs;
        newlog = newlog.concat([{message: req.body.msg, userid: req.body.msgUser, date:req.body.date}]);
        Chatlog.findByIdAndUpdate(found.id, {chatlogs: newlog}).then((x) =>
             {
                res.status(200).json(x);
              }
          );
      }
}

const get_chat_log = async (req, res) => {

    reqUsers = [req.params.user1, req.params.user2]
    reqUsers.sort();
    reqUsers = reqUsers.toString();

    console.log("MDSKFLDKS");
    //do users even exist?
    found = await Chatlog.findOne({usersid: reqUsers}).then(x=> {return x});

    if(found==null){
        res.sendStatus(404)
    } 
    else{
        res.send(found)
    }
}

module.exports = {
    save_chat_log,
    get_chat_log
  };
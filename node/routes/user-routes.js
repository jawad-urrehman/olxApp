var express  = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

var User = require('../model/user-model');

router.post('/',function(req,res,next){
        user = new User({
            UserName:req.body.UserName,
            email:req.body.email,
            password:req.body.password,
            phone:req.body.phone
        });

        user.save(function(err,docs){
            if(err){
                res.json(err);
            }
            else{
                 
                res.json({msg:"user added success"});
            }
        });
});

router.delete('/:id',function(req,res,next){
    User.remove({_id:req.params.id},function(err,docs){
            if(err){
                    res.json(err);
            }
            else{
                    res.json({msg:"delete successfully"})
            }
    });
});


router.post('/login',function(req,res,err){
    User.findOne({email:req.body.email},function(err,docs){
        if(err){
            res.send(err);
        }
        else
        if(!docs){
            let msg = 'Invalid Email'
            res.status(401).send({msg:msg})
        }
        else
        if(docs.password!= req.body.password){
            let msg = "inavlid Password"
            res.status(401).send({msg:msg})
        }
        else{
            let token = jwt.sign({user:docs},'secret',{expiresIn:7200});
            let userId = docs._id;
            res.status(201).send({token:token,userId:userId});
        }
        
    })
});
    



router.get('/',function(req,res,next){
    User.find(function(err,docs){
        if (err){
            throw err;
        }
        else{
            res.json(docs);
        }
    })
})




router.get('/:id',function(req,res,next){
    User.findById({_id:req.params.id},function(err,docs){
        if(err){
            res.json(err);
        }
        else{
            res.json(docs);
        }
    });
});

module.exports = router;
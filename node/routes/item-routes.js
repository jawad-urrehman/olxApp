var express  = require('express');
var router = express.Router();

var Item = require('../model/item-model');

router.post('/',(req,res,next)=>{
        item = new Item({
            name:req.body.name,
            category:req.body.category,
            image:req.body.image,
            discription:req.body.discription,
            address:req.body.address,
            userId:req.body.userId,
            price:req.body.price
        });

        item.save(function(err,docs){
            if(err){
                res.json(err);
            }
            else{
                res.json({msg:"item added success"});
            }
        });
});


router.get('/',function(req,res,next){
    Item.find(function(err,docs){
        if(err){
            res.json(err);
        }
        else{
            res.json(docs);
        }
    })
});

router.delete('/:id',function(req,res,next){
        Item.remove({_id:req.params.id},function(err,docs){
                if(err){
                        res.json(err);
                }
                else{
                        res.json({msg:"delete successfully"})
                }
        });
});

router.get('/category/:cat',function(req,res,next){
    Item.find({category:req.params.cat},function(err,docs){
        if(err){
            res.json(err)
        }
        else{
            res.json(docs);
        }
    })
})


router.get('/user/:id',function(req,res,next){
    Item.find({userId:req.params.id},function(err,docs){
        if(err){
            res.json(err)
        }
        else{
            res.json(docs);
        }
    })
})


router.get('/:id',function(req,res,next){
    Item.findById({_id:req.params.id},function(err,docs){
        if(err){
            res.json(err)
        }
        else{
            res.json(docs);
        }
    })
})


module.exports = router;

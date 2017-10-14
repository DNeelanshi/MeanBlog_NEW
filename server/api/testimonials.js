var Testimonial = require('../models/testimonials');

// Posts API
module.exports = function(apiRouter){
	// get all posts
	apiRouter.get('/testimonials', function(req, res){
		Testimonial.find({}, function(err, posts){
			if (err) res.send(err);
			res.json(posts);
		});
	});


	// add a post
	apiRouter.post('/testimonials', function(req, res){
		var post = new Testimonial();
		post.name = req.body.name;
		post.image = req.body.image;
		post.description = req.body.description;
 		post.save(function(err, post){
			if(err) res.send(err);
				res.json(post);
			})
	});

	// // get a single post
	// apiRouter.get('/posts/:id', function(req, res){
	// 	Post.findById(req.params.id, function(err, post){
	// 		if (err) res.send(err);

	// 		res.json(post);
	// 	});
	// });
        // get a single post
	apiRouter.post('/edittestimonial', function(req, res) {
		console.log(req.body);
        Testimonial.findById({'_id': req.body.path}, function(err, testimonial) {
            if (err)
                res.send(err);

            res.json(testimonial);
        });
    });
//        

	// update a post
	apiRouter.post('/edittestID', function(req, res) {
        console.log('hello!!');
        Testimonial.findById({'_id': req.body._id}, function(err, testimonial) {
            if (err)
                res.send(err);
            // user.id=req.body.id;
            testimonial.name = req.body.name;
            testimonial.image = req.body.image;
            testimonial.description=req.body.description;
            
            testimonial.save(function(err) {
                if (err)
                    res.send(err);
                res.json(' updated successfully!');
            })

        });
    });
	// delete a post
	apiRouter.post('/deletetestimonials', function(req, res) {
        Testimonial.remove({
            _id: req.body.id
        }, function(err, user) {
            if (err)
                res.send(err);
            res.json({message: 'Post deleted!'});
        })
    });

};
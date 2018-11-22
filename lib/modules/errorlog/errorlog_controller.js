// app.get('/get',
// exports.getError = function (err, req, res, next) {
//     res.status(500)
//     res.render('error', { error: err })
//   })
//   app.get('/forbidden', function(req, res, next) {
//     res.status(500);
//     res.render('error', { error: err })
//     next(err);
//   });



// //   function checkIfPaidSubscriber (req, res, next) {
// //     if (!req.user.hasPaid) {
// //       // continue handling this request
// //       next('route')
// //     }
// //     else{
// //       next();
// //     }
// //   }, function getPaidContent (req, res, next) {
// //     PaidContent.find(function (err, doc) {
// //       if (err) return next(err)
// //       res.json(doc)
// //     })
// //   })



// //   function errorHandler (err, req, res, next) {
// //     res.status(500)
// //     res.render('error', { error: err })
// //   }

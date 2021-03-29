  const fs = require('fs');
  const carbone = require('carbone');

  var data = JSON.parse(fs.readFileSync('data.json'));
  var options = {
  					lang: "ru"
				};  

  carbone.render('templates/contract_onetime.odt', data, options, function(err, result){
    if (err) {
      return console.log(err);
    }
    fs.writeFileSync('contract_onetime_result.odt', result);
  });

/*
Decoupling
-----------

Legacy CGI:

```
GET /cgi-bin/user.php?action=create&user1=jollen&user2=hellen&user3=paul
GET /cgi-bin/user.php?action=delete&userId=123456
```

RESTful:

```
POST http://192.168.1.100:3000/users   - { username: 'jollen' }
POST http://192.168.1.100:3000/users   - { username: 'hellen' }
POST http://192.168.1.100:3000/users   - { username: 'paul' }
DELETE http://192.168.1.100:6000//users/123456
```
*/

var request = require('superagent');

request
  .post('/api/pet')
  .send({ name: 'Manny', species: 'cat' }) // sends a JSON post body 
  .set('X-API-Key', 'foobar')
  .set('Accept', 'application/json')
  .end(function(err, res){
    // Calling the end function will send the request 
  });









```javascript
// Incorrect usage of $inc operator in MongoDB
db.collection('myCollection').updateOne({fieldName: 'value'}, {$inc: {counter: '1'}});
```
const AWS = require('aws-sdk')
AWS.config.update({
  region: 'us-east-1',
  endpoint: 'http://localhost:8000'
})

// CRUD table with Document Client (abstraction)
const documentClient = new AWS.DynamoDB.DocumentClient();

const mac = "4548aabb0001"
const serviceType = 4
const createdAt = "2021-08-21T14:11:18.000Z"
const companyId = 1
const collectorProvId = 1
const rssi = -93
const raw = "03EF048DD6018F04"

var params = {
  TableName: 'hdr',
  Item: {
    PK: `IOT#${mac}#${serviceType}`,
    SK: `DATE#${createdAt}`,
    companyId: companyId,
    collectorProvId: collectorProvId,
    mac: mac,
    rssi: rssi,
    raw: raw,
    createdAt: createdAt,    
  }
};

documentClient.put(params, function (err, data) {
  if (err) console.log(err);
  else console.log(data);
});
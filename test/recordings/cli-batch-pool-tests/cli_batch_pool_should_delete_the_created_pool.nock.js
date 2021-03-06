// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '6e0b24a6-2bef-4598-9bd3-f87e9700e24c',
    name: 'Windows Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test1';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test1.westus.batch.azure.com';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://test1.westus.batch.azure.com:443')
  .delete('/pools/xplatCreatedPool?api-version=2016-02-01.3.0&timeout=30')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '8a6360a5-bce6-42bf-88d5-bed377e57d11',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'f954d577-a226-4ac3-a128-a3ad9435c863',
  dataserviceversion: '3.0',
  date: 'Fri, 20 May 2016 05:36:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test1.westus.batch.azure.com:443')
  .delete('/pools/xplatCreatedPool?api-version=2016-02-01.3.0&timeout=30')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '8a6360a5-bce6-42bf-88d5-bed377e57d11',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'f954d577-a226-4ac3-a128-a3ad9435c863',
  dataserviceversion: '3.0',
  date: 'Fri, 20 May 2016 05:36:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://test1.westus.batch.azure.com:443')
  .get('/pools/xplatCreatedPool?api-version=2016-02-01.3.0&timeout=30')
  .reply(404, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.Container.errors/@Element\",\"code\":\"PoolNotFound\",\"message\":{\r\n    \"lang\":\"en-US\",\"value\":\"The specified pool does not exist.\\nRequestId:65a41f13-4745-4a69-8c46-ccf03a6df0f8\\nTime:2016-05-20T05:36:40.5823861Z\"\r\n  }\r\n}", { 'content-length': '326',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '65a41f13-4745-4a69-8c46-ccf03a6df0f8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'ac5039f9-f203-4be1-84eb-ea2d9df583f4',
  dataserviceversion: '3.0',
  date: 'Fri, 20 May 2016 05:36:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test1.westus.batch.azure.com:443')
  .get('/pools/xplatCreatedPool?api-version=2016-02-01.3.0&timeout=30')
  .reply(404, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.Container.errors/@Element\",\"code\":\"PoolNotFound\",\"message\":{\r\n    \"lang\":\"en-US\",\"value\":\"The specified pool does not exist.\\nRequestId:65a41f13-4745-4a69-8c46-ccf03a6df0f8\\nTime:2016-05-20T05:36:40.5823861Z\"\r\n  }\r\n}", { 'content-length': '326',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '65a41f13-4745-4a69-8c46-ccf03a6df0f8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'ac5039f9-f203-4be1-84eb-ea2d9df583f4',
  dataserviceversion: '3.0',
  date: 'Fri, 20 May 2016 05:36:40 GMT',
  connection: 'close' });
 return result; }]];
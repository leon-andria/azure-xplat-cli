// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'cffbd00f-9edf-41f9-8f74-4a6ec260dcb8',
    name: 'VM Depot Main Subscription',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'australiasoutheast';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/cffbd00f-9edf-41f9-8f74-4a6ec260dcb8/resourceGroups/xplatTstCntnGCreate2277/providers/Microsoft.ContainerService/containerServices/xplatContainer4527?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/cffbd00f-9edf-41f9-8f74-4a6ec260dcb8/providers/Microsoft.ContainerService/locations/australiasoutheast/operations/314bd90c-c4ff-4865-ad1a-017f2ecc22e4?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/cffbd00f-9edf-41f9-8f74-4a6ec260dcb8/providers/Microsoft.ContainerService/locations/australiasoutheast/operations/314bd90c-c4ff-4865-ad1a-017f2ecc22e4?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dc134d16-ae4a-49e1-a51d-08fb379b718a_131085877756572085',
  'x-ms-request-id': '314bd90c-c4ff-4865-ad1a-017f2ecc22e4',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '33e861ba-4f0e-4983-bc90-46804a1cb153',
  'x-ms-routing-request-id': 'SOUTHINDIA:20160601T122419Z:33e861ba-4f0e-4983-bc90-46804a1cb153',
  date: 'Wed, 01 Jun 2016 12:24:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/cffbd00f-9edf-41f9-8f74-4a6ec260dcb8/resourceGroups/xplatTstCntnGCreate2277/providers/Microsoft.ContainerService/containerServices/xplatContainer4527?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/cffbd00f-9edf-41f9-8f74-4a6ec260dcb8/providers/Microsoft.ContainerService/locations/australiasoutheast/operations/314bd90c-c4ff-4865-ad1a-017f2ecc22e4?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/cffbd00f-9edf-41f9-8f74-4a6ec260dcb8/providers/Microsoft.ContainerService/locations/australiasoutheast/operations/314bd90c-c4ff-4865-ad1a-017f2ecc22e4?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dc134d16-ae4a-49e1-a51d-08fb379b718a_131085877756572085',
  'x-ms-request-id': '314bd90c-c4ff-4865-ad1a-017f2ecc22e4',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '33e861ba-4f0e-4983-bc90-46804a1cb153',
  'x-ms-routing-request-id': 'SOUTHINDIA:20160601T122419Z:33e861ba-4f0e-4983-bc90-46804a1cb153',
  date: 'Wed, 01 Jun 2016 12:24:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/cffbd00f-9edf-41f9-8f74-4a6ec260dcb8/providers/Microsoft.ContainerService/locations/australiasoutheast/operations/314bd90c-c4ff-4865-ad1a-017f2ecc22e4?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-06-01T12:24:18.8769735+00:00\",\r\n  \"endTime\": \"2016-06-01T12:24:19.0175967+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"314bd90c-c4ff-4865-ad1a-017f2ecc22e4\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dc134d16-ae4a-49e1-a51d-08fb379b718a_131085877756572085',
  'x-ms-request-id': '1ea4f822-6fda-46d9-9d11-22145337e5c9',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14966',
  'x-ms-correlation-request-id': 'deeb0e84-9888-4c1a-9680-14402debb83d',
  'x-ms-routing-request-id': 'SOUTHINDIA:20160601T122450Z:deeb0e84-9888-4c1a-9680-14402debb83d',
  date: 'Wed, 01 Jun 2016 12:24:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/cffbd00f-9edf-41f9-8f74-4a6ec260dcb8/providers/Microsoft.ContainerService/locations/australiasoutheast/operations/314bd90c-c4ff-4865-ad1a-017f2ecc22e4?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-06-01T12:24:18.8769735+00:00\",\r\n  \"endTime\": \"2016-06-01T12:24:19.0175967+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"314bd90c-c4ff-4865-ad1a-017f2ecc22e4\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dc134d16-ae4a-49e1-a51d-08fb379b718a_131085877756572085',
  'x-ms-request-id': '1ea4f822-6fda-46d9-9d11-22145337e5c9',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14966',
  'x-ms-correlation-request-id': 'deeb0e84-9888-4c1a-9680-14402debb83d',
  'x-ms-routing-request-id': 'SOUTHINDIA:20160601T122450Z:deeb0e84-9888-4c1a-9680-14402debb83d',
  date: 'Wed, 01 Jun 2016 12:24:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/cffbd00f-9edf-41f9-8f74-4a6ec260dcb8/resourceGroups/xplatTstCntnGCreate2277/providers/Microsoft.ContainerService/containerServices/xplatContainer22031?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/cffbd00f-9edf-41f9-8f74-4a6ec260dcb8/providers/Microsoft.ContainerService/locations/australiasoutheast/operations/89c80eea-4290-4e6c-88aa-8a5a62f77c68?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/cffbd00f-9edf-41f9-8f74-4a6ec260dcb8/providers/Microsoft.ContainerService/locations/australiasoutheast/operations/89c80eea-4290-4e6c-88aa-8a5a62f77c68?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dc134d16-ae4a-49e1-a51d-08fb379b718a_131085877756572085',
  'x-ms-request-id': '89c80eea-4290-4e6c-88aa-8a5a62f77c68',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '4ae0de59-1fb6-4301-99d9-97f104ed653a',
  'x-ms-routing-request-id': 'SOUTHINDIA:20160601T122451Z:4ae0de59-1fb6-4301-99d9-97f104ed653a',
  date: 'Wed, 01 Jun 2016 12:24:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/cffbd00f-9edf-41f9-8f74-4a6ec260dcb8/resourceGroups/xplatTstCntnGCreate2277/providers/Microsoft.ContainerService/containerServices/xplatContainer22031?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/cffbd00f-9edf-41f9-8f74-4a6ec260dcb8/providers/Microsoft.ContainerService/locations/australiasoutheast/operations/89c80eea-4290-4e6c-88aa-8a5a62f77c68?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/cffbd00f-9edf-41f9-8f74-4a6ec260dcb8/providers/Microsoft.ContainerService/locations/australiasoutheast/operations/89c80eea-4290-4e6c-88aa-8a5a62f77c68?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dc134d16-ae4a-49e1-a51d-08fb379b718a_131085877756572085',
  'x-ms-request-id': '89c80eea-4290-4e6c-88aa-8a5a62f77c68',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '4ae0de59-1fb6-4301-99d9-97f104ed653a',
  'x-ms-routing-request-id': 'SOUTHINDIA:20160601T122451Z:4ae0de59-1fb6-4301-99d9-97f104ed653a',
  date: 'Wed, 01 Jun 2016 12:24:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/cffbd00f-9edf-41f9-8f74-4a6ec260dcb8/providers/Microsoft.ContainerService/locations/australiasoutheast/operations/89c80eea-4290-4e6c-88aa-8a5a62f77c68?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-06-01T12:24:51.1811555+00:00\",\r\n  \"endTime\": \"2016-06-01T12:24:51.2905425+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"89c80eea-4290-4e6c-88aa-8a5a62f77c68\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dc134d16-ae4a-49e1-a51d-08fb379b718a_131085877756572085',
  'x-ms-request-id': 'acf91e23-4488-4a25-bbbd-4a8cf609a28c',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14899',
  'x-ms-correlation-request-id': 'd53342f5-ba07-4cfc-9066-bb483f025422',
  'x-ms-routing-request-id': 'SOUTHINDIA:20160601T122522Z:d53342f5-ba07-4cfc-9066-bb483f025422',
  date: 'Wed, 01 Jun 2016 12:25:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/cffbd00f-9edf-41f9-8f74-4a6ec260dcb8/providers/Microsoft.ContainerService/locations/australiasoutheast/operations/89c80eea-4290-4e6c-88aa-8a5a62f77c68?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-06-01T12:24:51.1811555+00:00\",\r\n  \"endTime\": \"2016-06-01T12:24:51.2905425+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"89c80eea-4290-4e6c-88aa-8a5a62f77c68\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dc134d16-ae4a-49e1-a51d-08fb379b718a_131085877756572085',
  'x-ms-request-id': 'acf91e23-4488-4a25-bbbd-4a8cf609a28c',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14899',
  'x-ms-correlation-request-id': 'd53342f5-ba07-4cfc-9066-bb483f025422',
  'x-ms-routing-request-id': 'SOUTHINDIA:20160601T122522Z:d53342f5-ba07-4cfc-9066-bb483f025422',
  date: 'Wed, 01 Jun 2016 12:25:21 GMT',
  connection: 'close' });
 return result; }]];
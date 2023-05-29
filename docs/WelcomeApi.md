# TempApi.WelcomeApi

All URIs are relative to *https://83.212.100.226:4001/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createwelcome**](WelcomeApi.md#createwelcome) | **POST** /welcome | Creates the data
[**deletewelcome**](WelcomeApi.md#deletewelcome) | **DELETE** /welcome/{welcomeId} | Delete the element
[**getAllwelcome**](WelcomeApi.md#getAllwelcome) | **GET** /welcome/getAll | Get all the data
[**getByParamswelcome**](WelcomeApi.md#getByParamswelcome) | **GET** /welcome/getByParams | Get all the data based on user query
[**getwelcome**](WelcomeApi.md#getwelcome) | **GET** /welcome/{welcomeId} | Get the element
[**updatewelcome**](WelcomeApi.md#updatewelcome) | **PUT** /welcome/{welcomeId} | Updates the element



## createwelcome

> Welcome createwelcome(welcome)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.WelcomeApi();
let welcome = new TempApi.Welcome(); // Welcome | data to be created
apiInstance.createwelcome(welcome, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **welcome** | [**Welcome**](Welcome.md)| data to be created | 

### Return type

[**Welcome**](Welcome.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletewelcome

> deletewelcome(welcomeId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.WelcomeApi();
let welcomeId = "welcomeId_example"; // String | the Id parameter
apiInstance.deletewelcome(welcomeId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **welcomeId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllwelcome

> [Welcome] getAllwelcome()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.WelcomeApi();
apiInstance.getAllwelcome((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Welcome]**](Welcome.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getByParamswelcome

> [Welcome] getByParamswelcome(filter)

Get all the data based on user query

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.WelcomeApi();
let filter = "filter_example"; // String | the query based on which the search is performed
apiInstance.getByParamswelcome(filter, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| the query based on which the search is performed | 

### Return type

[**[Welcome]**](Welcome.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getwelcome

> Welcome getwelcome(welcomeId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.WelcomeApi();
let welcomeId = "welcomeId_example"; // String | the Id parameter
apiInstance.getwelcome(welcomeId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **welcomeId** | **String**| the Id parameter | 

### Return type

[**Welcome**](Welcome.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatewelcome

> Welcome updatewelcome(welcomeId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.WelcomeApi();
let welcomeId = "welcomeId_example"; // String | the Id parameter
let opts = {
  'welcome': new TempApi.Welcome() // Welcome | data to be updated
};
apiInstance.updatewelcome(welcomeId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **welcomeId** | **String**| the Id parameter | 
 **welcome** | [**Welcome**](Welcome.md)| data to be updated | [optional] 

### Return type

[**Welcome**](Welcome.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


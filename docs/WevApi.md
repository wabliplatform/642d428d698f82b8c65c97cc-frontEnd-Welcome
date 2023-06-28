# TempApi.WevApi

All URIs are relative to *https://83.212.100.226:4001/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createwev**](WevApi.md#createwev) | **POST** /wev | Creates the data
[**deletewev**](WevApi.md#deletewev) | **DELETE** /wev/{wevId} | Delete the element
[**getAllwev**](WevApi.md#getAllwev) | **GET** /wev/getAll | Get all the data
[**getByParamswev**](WevApi.md#getByParamswev) | **GET** /wev/getByParams | Get all the data based on user query
[**getwev**](WevApi.md#getwev) | **GET** /wev/{wevId} | Get the element
[**updatewev**](WevApi.md#updatewev) | **PUT** /wev/{wevId} | Updates the element



## createwev

> Wev createwev(wev)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.WevApi();
let wev = new TempApi.Wev(); // Wev | data to be created
apiInstance.createwev(wev, (error, data, response) => {
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
 **wev** | [**Wev**](Wev.md)| data to be created | 

### Return type

[**Wev**](Wev.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletewev

> deletewev(wevId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.WevApi();
let wevId = "wevId_example"; // String | the Id parameter
apiInstance.deletewev(wevId, (error, data, response) => {
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
 **wevId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllwev

> [Wev] getAllwev()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.WevApi();
apiInstance.getAllwev((error, data, response) => {
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

[**[Wev]**](Wev.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getByParamswev

> [Wev] getByParamswev(filter)

Get all the data based on user query

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.WevApi();
let filter = "filter_example"; // String | the query based on which the search is performed
apiInstance.getByParamswev(filter, (error, data, response) => {
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

[**[Wev]**](Wev.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getwev

> Wev getwev(wevId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.WevApi();
let wevId = "wevId_example"; // String | the Id parameter
apiInstance.getwev(wevId, (error, data, response) => {
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
 **wevId** | **String**| the Id parameter | 

### Return type

[**Wev**](Wev.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatewev

> Wev updatewev(wevId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.WevApi();
let wevId = "wevId_example"; // String | the Id parameter
let opts = {
  'wev': new TempApi.Wev() // Wev | data to be updated
};
apiInstance.updatewev(wevId, opts, (error, data, response) => {
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
 **wevId** | **String**| the Id parameter | 
 **wev** | [**Wev**](Wev.md)| data to be updated | [optional] 

### Return type

[**Wev**](Wev.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


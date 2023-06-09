/**
 * TempApi
 * This is a sample openApi document
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: lampralexandros@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Wev from '../model/Wev';

/**
* Wev service.
* @module api/WevApi
* @version 1.0.0
*/
export default class WevApi {

    /**
    * Constructs a new WevApi. 
    * @alias module:api/WevApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createwev operation.
     * @callback module:api/WevApi~createwevCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Wev} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates the data
     * @param {module:model/Wev} wev data to be created
     * @param {module:api/WevApi~createwevCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Wev}
     */
    createwev(wev, callback) {
      let postBody = wev;
      // verify the required parameter 'wev' is set
      if (wev === undefined || wev === null) {
        throw new Error("Missing the required parameter 'wev' when calling createwev");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Wev;
      return this.apiClient.callApi(
        '/wev', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deletewev operation.
     * @callback module:api/WevApi~deletewevCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the element
     * @param {String} wevId the Id parameter
     * @param {module:api/WevApi~deletewevCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deletewev(wevId, callback) {
      let postBody = null;
      // verify the required parameter 'wevId' is set
      if (wevId === undefined || wevId === null) {
        throw new Error("Missing the required parameter 'wevId' when calling deletewev");
      }

      let pathParams = {
        'wevId': wevId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/wev/{wevId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllwev operation.
     * @callback module:api/WevApi~getAllwevCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Wev>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all the data
     * @param {module:api/WevApi~getAllwevCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Wev>}
     */
    getAllwev(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Wev];
      return this.apiClient.callApi(
        '/wev/getAll', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getByParamswev operation.
     * @callback module:api/WevApi~getByParamswevCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Wev>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all the data based on user query
     * @param {String} filter the query based on which the search is performed
     * @param {module:api/WevApi~getByParamswevCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Wev>}
     */
    getByParamswev(filter, callback) {
      let postBody = null;
      // verify the required parameter 'filter' is set
      if (filter === undefined || filter === null) {
        throw new Error("Missing the required parameter 'filter' when calling getByParamswev");
      }

      let pathParams = {
      };
      let queryParams = {
        'filter': filter
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Wev];
      return this.apiClient.callApi(
        '/wev/getByParams', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getwev operation.
     * @callback module:api/WevApi~getwevCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Wev} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the element
     * @param {String} wevId the Id parameter
     * @param {module:api/WevApi~getwevCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Wev}
     */
    getwev(wevId, callback) {
      let postBody = null;
      // verify the required parameter 'wevId' is set
      if (wevId === undefined || wevId === null) {
        throw new Error("Missing the required parameter 'wevId' when calling getwev");
      }

      let pathParams = {
        'wevId': wevId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Wev;
      return this.apiClient.callApi(
        '/wev/{wevId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updatewev operation.
     * @callback module:api/WevApi~updatewevCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Wev} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the element
     * @param {String} wevId the Id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/Wev} opts.wev data to be updated
     * @param {module:api/WevApi~updatewevCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Wev}
     */
    updatewev(wevId, opts, callback) {
      opts = opts || {};
      let postBody = opts['wev'];
      // verify the required parameter 'wevId' is set
      if (wevId === undefined || wevId === null) {
        throw new Error("Missing the required parameter 'wevId' when calling updatewev");
      }

      let pathParams = {
        'wevId': wevId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Wev;
      return this.apiClient.callApi(
        '/wev/{wevId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}

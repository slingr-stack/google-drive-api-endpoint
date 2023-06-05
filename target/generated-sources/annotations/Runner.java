package io.slingr.endpoints.googledrive;

import io.slingr.endpoints.Endpoint;
import io.slingr.endpoints.framework.IHttpEndpoint;
import io.slingr.endpoints.framework.IRunner;
import io.slingr.endpoints.framework.RegisteredFunction;
import io.slingr.endpoints.framework.RegisteredWebService;
import io.slingr.endpoints.framework.annotations.classes.FunctionResponseType;
import io.slingr.endpoints.framework.annotations.classes.MethodAccessorType;
import io.slingr.endpoints.framework.annotations.classes.MethodParameterType;
import io.slingr.endpoints.framework.annotations.classes.WebServiceResponseType;
import io.slingr.endpoints.services.rest.RestMethod;
import java.lang.Boolean;
import java.lang.Class;
import java.lang.Exception;
import java.lang.IllegalStateException;
import java.lang.Override;
import java.lang.String;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Class used to initialize and run the endpoint.
 *
 * <p>Created by <b>Slingr</b> on Jun 2, 2023.
 */
public final class Runner extends IRunner {
  private static final Logger logger = LoggerFactory.getLogger(Endpoint.class);

  /**
   * Entry point of the endpoint.
   *
   * @param args command line arguments.
   */
  public static void main(final String[] args) throws Exception {
    // extract command line parameters
    final String configurationFile = extractArgument("configurationFile", args);
    final String defaultWebServiceUri = extractArgument("defaultWebServiceUri", args);

    // start endpoint configuration
    new Runner().startEndpoint(configurationFile, defaultWebServiceUri);
  }

  @Override
  public GoogleDriveEndpoint createEndpoint() {
    return new GoogleDriveEndpoint();
  }

  @Override
  public GoogleDriveEndpoint startEndpoint(final Endpoint endpointInstance,
      final String configurationFile, final String defaultWebServiceUri) throws Exception {

    // start endpoint configuration
    if(endpointInstance == null) {
      throw new IllegalStateException("Invalid endpoint object");
    }
    if(!(endpointInstance instanceof GoogleDriveEndpoint)) {
      throw new IllegalStateException("Invalid endpoint instance: expected ["+GoogleDriveEndpoint.class.getName()+"], current ["+endpointInstance.getClass().getName()+"]");
    }
    final GoogleDriveEndpoint endpoint = (GoogleDriveEndpoint) endpointInstance;
    endpoint.configure(configurationFile);

    // check endpoint type
    final String endpointType = "googledrive";
    if(!endpointType.equals(endpoint.definitions().getType())) {
      throw new IllegalStateException(String.format("Invalid the defined endpoint name [%s] on endpoint instead to use the value of definitions [%s]", endpointType, endpoint.definitions().getType()));
    }

    // set web service uri
    if(StringUtils.isNotBlank(defaultWebServiceUri)) {
      endpoint.properties().setDefaultWebServicesUri(defaultWebServiceUri);
    }

    // configure properties and methods
    boolean accessible;
    Field field;
    final Class clazz = GoogleDriveEndpoint.class;

    // HTTP functions and events are initialized.

    // APP LOGGER > FIELD [appLogs]
    try {
      field = clazz.getDeclaredField("appLogs");
      accessible = field.isAccessible();
      field.setAccessible(true);
      field.set(endpoint, endpoint.appLogs());
      field.setAccessible(accessible);
    } catch (Exception ex) {
      logger.info("Exception when try to set [endpoint.appLogs()] on [appLogs]: "+ex.getMessage());
      throw ex;
    }

    // ENDPOINT CONFIGURATION > FIELD [configuration]
    try {
      field = clazz.getDeclaredField("configuration");
      accessible = field.isAccessible();
      field.setAccessible(true);
      field.set(endpoint, endpoint.properties().getEndpointConfiguration());
      field.setAccessible(accessible);
    } catch (Exception ex) {
      logger.info("Exception when try to set [endpoint.properties().getEndpointConfiguration()] on [configuration]: "+ex.getMessage());
      throw ex;
    }

    // PROPERTY [serviceAccountEmail] > FIELD [serviceAccountEmail]
    try {
      field = clazz.getDeclaredField("serviceAccountEmail");
      accessible = field.isAccessible();
      field.setAccessible(true);
      field.set(endpoint, endpoint.properties().getEndpointConfiguration().string("serviceAccountEmail"));
      field.setAccessible(accessible);
    } catch (Exception ex) {
      logger.info("Exception when try to set [endpoint.properties().getEndpointConfiguration().string(\"serviceAccountEmail\")] on [serviceAccountEmail]: "+ex.getMessage());
      throw ex;
    }

    // DATA STORE [googleAccessToken] > FIELD [googleAccessToken]
    try {
      field = clazz.getDeclaredField("googleAccessToken");
      accessible = field.isAccessible();
      field.setAccessible(true);
      field.set(endpoint, endpoint.dataStore("googleAccessToken"));
      field.setAccessible(accessible);
    } catch (Exception ex) {
      logger.info("Exception when try to set [endpoint.dataStore(\"googleAccessToken\")] on [googleAccessToken]: "+ex.getMessage());
      throw ex;
    }

    // FUNCTIONS
    final Method function = Endpoint.class.getDeclaredMethod("internalRegisterFunction", RegisteredFunction.class, Boolean.class);
    function.setAccessible(true);

    // FUNCTION [_post] > JAVA METHOD [post]
    function.invoke(endpoint, new RegisteredFunction("_post", "post", MethodParameterType.REQUEST, FunctionResponseType.JSON, MethodAccessorType.PUBLIC), Boolean.TRUE);

    // FUNCTION [_head] > JAVA METHOD [defaultHeadRequest]
    function.invoke(endpoint, new RegisteredFunction("_head", "defaultHeadRequest", MethodParameterType.REQUEST, FunctionResponseType.JSON, MethodAccessorType.PUBLIC, IHttpEndpoint.class), Boolean.FALSE);

    // FUNCTION [_options] > JAVA METHOD [defaultOptionsRequest]
    function.invoke(endpoint, new RegisteredFunction("_options", "defaultOptionsRequest", MethodParameterType.REQUEST, FunctionResponseType.JSON, MethodAccessorType.PUBLIC, IHttpEndpoint.class), Boolean.FALSE);

    // FUNCTION [_get] > JAVA METHOD [get]
    function.invoke(endpoint, new RegisteredFunction("_get", "get", MethodParameterType.REQUEST, FunctionResponseType.JSON, MethodAccessorType.PUBLIC), Boolean.TRUE);

    // FUNCTION [_put] > JAVA METHOD [put]
    function.invoke(endpoint, new RegisteredFunction("_put", "put", MethodParameterType.REQUEST, FunctionResponseType.JSON, MethodAccessorType.PUBLIC), Boolean.TRUE);

    // FUNCTION [_delete] > JAVA METHOD [delete]
    function.invoke(endpoint, new RegisteredFunction("_delete", "delete", MethodParameterType.REQUEST, FunctionResponseType.JSON, MethodAccessorType.PUBLIC), Boolean.TRUE);

    // FUNCTION [_patch] > JAVA METHOD [defaultPatchRequest]
    function.invoke(endpoint, new RegisteredFunction("_patch", "defaultPatchRequest", MethodParameterType.REQUEST, FunctionResponseType.JSON, MethodAccessorType.PUBLIC, IHttpEndpoint.class), Boolean.FALSE);

    // FUNCTIONS (END)
    function.setAccessible(false);

    // WEB SERVICES
    final Method webService = Endpoint.class.getDeclaredMethod("internalRegisterWebService", RegisteredWebService.class);
    webService.setAccessible(true);

    // WEB SERVICE [/] > JAVA METHOD [defaultWebhookProcessor]
    webService.invoke(endpoint, new RegisteredWebService("/~pu", RestMethod.PUT, "/", "defaultWebhookProcessor", MethodParameterType.REQUEST, WebServiceResponseType.RESPONSE, MethodAccessorType.PUBLIC, IHttpEndpoint.class));

    // WEB SERVICE [/] > JAVA METHOD [defaultWebhookProcessor]
    webService.invoke(endpoint, new RegisteredWebService("/~pa", RestMethod.PATCH, "/", "defaultWebhookProcessor", MethodParameterType.REQUEST, WebServiceResponseType.RESPONSE, MethodAccessorType.PUBLIC, IHttpEndpoint.class));

    // WEB SERVICE [/] > JAVA METHOD [defaultWebhookProcessor]
    webService.invoke(endpoint, new RegisteredWebService("/~de", RestMethod.DELETE, "/", "defaultWebhookProcessor", MethodParameterType.REQUEST, WebServiceResponseType.RESPONSE, MethodAccessorType.PUBLIC, IHttpEndpoint.class));

    // WEB SERVICE [/] > JAVA METHOD [defaultWebhookProcessor]
    webService.invoke(endpoint, new RegisteredWebService("/~op", RestMethod.OPTIONS, "/", "defaultWebhookProcessor", MethodParameterType.REQUEST, WebServiceResponseType.RESPONSE, MethodAccessorType.PUBLIC, IHttpEndpoint.class));

    // WEB SERVICE [/] > JAVA METHOD [defaultWebhookProcessor]
    webService.invoke(endpoint, new RegisteredWebService("/~po", RestMethod.POST, "/", "defaultWebhookProcessor", MethodParameterType.REQUEST, WebServiceResponseType.RESPONSE, MethodAccessorType.PUBLIC, IHttpEndpoint.class));

    // WEB SERVICE [/] > JAVA METHOD [defaultWebhookProcessor]
    webService.invoke(endpoint, new RegisteredWebService("/~ge", RestMethod.GET, "/", "defaultWebhookProcessor", MethodParameterType.REQUEST, WebServiceResponseType.RESPONSE, MethodAccessorType.PUBLIC, IHttpEndpoint.class));

    // WEB SERVICE [/] > JAVA METHOD [defaultWebhookProcessor]
    webService.invoke(endpoint, new RegisteredWebService("/~he", RestMethod.HEAD, "/", "defaultWebhookProcessor", MethodParameterType.REQUEST, WebServiceResponseType.RESPONSE, MethodAccessorType.PUBLIC, IHttpEndpoint.class));

    // WEB SERVICES (END)
    webService.setAccessible(false);

    // finished start process
    final Method startMethod = Endpoint.class.getDeclaredMethod("finishedStart");
    startMethod.setAccessible(true);
    startMethod.invoke(endpoint);
    startMethod.setAccessible(false);
    return endpoint;
  }
}

package com.rncodetest;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

public class ServiceKey extends ReactContextBaseJavaModule {
  private static ReactApplicationContext reactContext;
  ServiceKey(ReactApplicationContext context) {
    super(context);
    reactContext = context;
  }
  @Override
  public String getName() {
    return "ServiceKey";
  }
  @ReactMethod
  public void get(Promise promise) {
    String serviceKey = getReactApplicationContext().getString(R.string.service_key);
    if (!BuildConfig.DEBUG) {
      serviceKey= getReactApplicationContext().getString(R.string.service_key_prod);
    }
    promise.resolve(serviceKey);
  }
}
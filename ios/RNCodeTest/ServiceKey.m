#import "ServiceKey.h"
#import "React/RCTLog.h"

@implementation ServiceKey

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(get:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject){
  NSString *serviceKey = [[NSBundle mainBundle] objectForInfoDictionaryKey:@"SERVICE_KEY"];
//  #if PRODUCTION
//    serviceKey = @"le475jUm1D"
//  #endif
  RCTLogInfo(@"Service Key: %@", serviceKey);
  resolve(serviceKey);
};

@end

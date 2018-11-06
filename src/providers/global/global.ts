import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Optimizely from '@optimizely/optimizely-sdk';


var datafile = '{"version": "4", "rollouts": [], "typedAudiences": [], "anonymizeIP": false, "projectId": "12083260699", "variables": [], "featureFlags": [], "experiments": [{"status": "Running", "key": "ionic_example", "layerId": "12031084840", "trafficAllocation": [{"entityId": "11918106606", "endOfRange": 5000}, {"entityId": "12067881261", "endOfRange": 10000}], "audienceIds": [], "variations": [{"variables": [], "id": "12067881261", "key": "var_a"}, {"variables": [], "id": "11918106606", "key": "var_b"}], "forcedVariations": {}, "id": "11997875199"}], "audiences": [], "groups": [], "attributes": [], "botFiltering": false, "accountId": "9732730004", "events": [{"experimentIds": ["11997875199"], "id": "12078821068", "key": "eventHappened"}], "revision": "2"}';

var optlyClient = Optimizely.createInstance({
     datafile: datafile
});


/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalProvider {
//this is a global variable
  public url = "http://172.16.137.17/";

  public decisionEngine = optlyClient;

  public userID = 'user_12'


}

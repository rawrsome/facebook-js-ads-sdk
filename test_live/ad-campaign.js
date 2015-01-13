if (typeof require === 'function') {
  var FacebookAdsApi = require('./../src/api.js');
  var testData = require('./test-data.js');
  require('chai').should();
} else {
  var testData = FbApiAssets.tests.testData;
}

describe('AdCampaign', function() {
  'use strict';

  // it('reads', readTest);
  // it('creates', createsTest);
  // it('validates', validatesTest);
  // it('updates', updatesTest);
  // it('deletes', deletesTest);
  // it('archives', archivesTest);

  function readTest(done) {
    var api = FacebookAdsApi(testData.token);
    var adCampaign = new api.AdCampaign(testData.campaign_id);
    adCampaign.read()
      .then(function() {
        adCampaign.name.should.be.ok;
        done();
      })
      .catch(done);
  };

  function createsTest(done) {
    var api = FacebookAdsApi(testData.token);
    var adCampaign = new api.AdCampaign({name: 'sdk\'s test ad campaign'}, testData.account_id);
    adCampaign.create()
      .then(function() {
        adCampaign.id.should.be.ok;
        done();
      })
      .catch(done);
  };

  function validatesTest(done) {
    var api = FacebookAdsApi(testData.token);
    var adCampaign = new api.AdCampaign({name: 'sdk\'s validation test ad campaign'}, testData.account_id);
    adCampaign.validate()
      .then(function(data) {
        data.success.should.be.true;
        done();
      })
      .catch(done);
  };

  function updatesTest(done) {
    var api = FacebookAdsApi(testData.token);
    var adCampaign = new api.AdCampaign(testData.campaign_id, testData.account_id);
    var now = new Date();
    adCampaign.name = now;
    adCampaign.update()
      .then(function(data) {
        data.success.should.be.true;
        done();
      })
      .catch(done);
  };

  function deletesTest(done) {
    var api = FacebookAdsApi(testData.token);
    var adCampaign = new api.AdCampaign({name: 'sdk\'s test ad campaign'}, testData.account_id);
    adCampaign.create()
      .then(function() {
        adCampaign.delete()
          .then(function(data) {
            data.success.should.be.true;
            done();
          });
      })
      .catch(done);
  };

  function archivesTest(done) {
    var api = FacebookAdsApi(testData.token);
    var adCampaign = new api.AdCampaign({name: 'sdk\'s test ad campaign'}, testData.account_id);
    adCampaign.create()
      .then(function() {
        adCampaign.archive()
          .then(function(data) {
            data.success.should.be.true;
            done();
          });
      })
      .catch(done);
  };

});

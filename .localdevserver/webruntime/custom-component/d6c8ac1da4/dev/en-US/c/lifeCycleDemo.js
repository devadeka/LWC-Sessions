Webruntime.define('lwc/lifeCycleDemo', ['lwc'], function (lwc) { 'use strict';

    function tmpl($api, $cmp, $slotset, $ctx) {
      return [];
    }

    var _tmpl = lwc.registerTemplate(tmpl);
    tmpl.stylesheets = [];
    tmpl.stylesheetTokens = {
      hostAttribute: "lwc-lifeCycleDemo_lifeCycleDemo-host",
      shadowAttribute: "lwc-lifeCycleDemo_lifeCycleDemo"
    };

    class LifeCycleDemo extends lwc.LightningElement {
      constructor() {
        super();
        console.log("Constructor Called");
      }

      connectedCallback() {
        console.log("Component Connected Callback is called");
      }

      renderedCallback() {
        console.log("Component Rendered Callback is called");
      }

      disconnectedCallback() {
        console.log("Component Disconnected Callback is called");
      }

    }

    var lifeCycleDemo = lwc.registerComponent(LifeCycleDemo, {
      tmpl: _tmpl
    });

    return lifeCycleDemo;

});

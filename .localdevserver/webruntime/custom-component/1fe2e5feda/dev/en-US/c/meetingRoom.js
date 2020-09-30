Webruntime.define('lwc/meetingRoom', ['lwc'], function (lwc) { 'use strict';

  function stylesheet(hostSelector, shadowSelector, nativeShadow) {
    return ".lgc-bg" + shadowSelector + " {background-color: rgb(242, 242, 242);}\n.lgc-bg-inverse" + shadowSelector + " {background-color: rgb(22, 50, 92);}\n";
  }
  var _implicitStylesheets = [stylesheet];

  function tmpl($api, $cmp, $slotset, $ctx) {
    const {
      s: api_slot,
      h: api_element
    } = $api;
    return [$cmp.showRoomInfo ? api_element("div", {
      classMap: {
        "slds-var-p-around_medium": true,
        "lgc-bg": true
      },
      key: 2
    }, [api_slot("roomInfo", {
      attrs: {
        "name": "roomInfo"
      },
      key: 0
    }, [], $slotset), api_slot("", {
      key: 1
    }, [], $slotset)]) : null];
  }

  var _tmpl = lwc.registerTemplate(tmpl);
  tmpl.slots = ["roomInfo", ""];
  tmpl.stylesheets = [];

  if (_implicitStylesheets) {
    tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
  }
  tmpl.stylesheetTokens = {
    hostAttribute: "lwc-meetingRoom_meetingRoom-host",
    shadowAttribute: "lwc-meetingRoom_meetingRoom"
  };

  class MeetingRoom extends lwc.LightningElement {
    constructor(...args) {
      super(...args);
      this.showRoomInfo = false;
    } //since a boolean, always set to false


  }

  lwc.registerDecorators(MeetingRoom, {
    publicProps: {
      showRoomInfo: {
        config: 0
      }
    }
  });

  var meetingRoom = lwc.registerComponent(MeetingRoom, {
    tmpl: _tmpl
  });

  return meetingRoom;

});

Webruntime.define('lwc/publicMethodChild', ['lwc'], function (lwc) { 'use strict';

    function stylesheet(hostSelector, shadowSelector, nativeShadow) {
      return "\n" + (nativeShadow ? (":host {display: block;}") : (hostSelector + " {display: block;}")) + "\n";
    }
    var _implicitStylesheets = [stylesheet];

    function tmpl($api, $cmp, $slotset, $ctx) {
      const {
        t: api_text,
        h: api_element,
        d: api_dynamic,
        gid: api_scoped_id,
        b: api_bind,
        k: api_key,
        i: api_iterator
      } = $api;
      const {
        _m0,
        _m1,
        _m2,
        _m3
      } = $ctx;
      return [api_element("fieldset", {
        attrs: {
          "aria-required": $cmp.required
        },
        key: 9
      }, [api_element("legend", {
        className: $cmp.computedLegendClass,
        key: 1
      }, [$cmp.required ? api_element("abbr", {
        classMap: {
          "slds-required": true
        },
        attrs: {
          "title": $cmp.i18n.required
        },
        key: 0
      }, [api_text("*")]) : null, api_dynamic($cmp.label)]), api_element("div", {
        classMap: {
          "slds-form-element__control": true
        },
        key: 7
      }, api_iterator($cmp.transformedOptions, function (option) {
        return api_element("span", {
          classMap: {
            "slds-checkbox": true
          },
          key: api_key(6, option.value)
        }, [api_element("input", {
          attrs: {
            "type": "checkbox",
            "name": $cmp.name,
            "id": api_scoped_id(option.id)
          },
          props: {
            "checked": option.isChecked,
            "value": option.value,
            "disabled": $cmp.disabled
          },
          key: 2,
          on: {
            "click": _m0 || ($ctx._m0 = api_bind($cmp.handleClick)),
            "change": _m1 || ($ctx._m1 = api_bind($cmp.handleChange)),
            "focus": _m2 || ($ctx._m2 = api_bind($cmp.handleFocus)),
            "blur": _m3 || ($ctx._m3 = api_bind($cmp.handleBlur))
          }
        }, []), api_element("label", {
          classMap: {
            "slds-checkbox__label": true
          },
          attrs: {
            "for": api_scoped_id(option.id)
          },
          key: 5
        }, [api_element("span", {
          classMap: {
            "slds-checkbox_faux": true
          },
          key: 3
        }, []), api_element("span", {
          classMap: {
            "slds-form-element__label": true
          },
          key: 4
        }, [api_dynamic(option.label)])])]);
      })), $cmp._helpMessage ? api_element("div", {
        classMap: {
          "slds-form-element__help": true
        },
        attrs: {
          "id": api_scoped_id("helptext"),
          "data-helptext": true
        },
        key: 8
      }, [api_dynamic($cmp._helpMessage)]) : null])];
    }

    var _tmpl = lwc.registerTemplate(tmpl);
    tmpl.stylesheets = [];

    if (_implicitStylesheets) {
      tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
    }
    tmpl.stylesheetTokens = {
      hostAttribute: "lightning-checkboxGroup_checkboxGroup-host",
      shadowAttribute: "lightning-checkboxGroup_checkboxGroup"
    };

    var labelRequired = 'required';

    function assert(condition, message) {
      {
        if (!condition) {
          throw new Error(message);
        }
      }
    }

    function classListMutation(classList, config) {
      Object.keys(config).forEach(key => {
        if (typeof key === 'string' && key.length) {
          if (config[key]) {
            classList.add(key);
          } else {
            classList.remove(key);
          }
        }
      });
    }

    /**
    A string normalization utility for attributes.
    @param {String} value - The value to normalize.
    @param {Object} config - The optional configuration object.
    @param {String} [config.fallbackValue] - The optional fallback value to use if the given value is not provided or invalid. Defaults to an empty string.
    @param {Array} [config.validValues] - An optional array of valid values. Assumes all input is valid if not provided.
    @return {String} - The normalized value.
    **/
    function normalizeString(value, config = {}) {
      const {
        fallbackValue = '',
        validValues,
        toLowerCase = true
      } = config;
      let normalized = typeof value === 'string' && value.trim() || '';
      normalized = toLowerCase ? normalized.toLowerCase() : normalized;

      if (validValues && validValues.indexOf(normalized) === -1) {
        normalized = fallbackValue;
      }

      return normalized;
    }
    /**
    A boolean normalization utility for attributes.
    @param {Any} value - The value to normalize.
    @return {Boolean} - The normalized value.
    **/

    function normalizeBoolean(value) {
      return typeof value === 'string' || !!value;
    }

    const isIE11 = isIE11Test(navigator);
    const isChrome = isChromeTest(navigator);
    const isSafari = isSafariTest(navigator); // The following functions are for tests only

    function isIE11Test(navigator) {
      // https://stackoverflow.com/questions/17447373/how-can-i-target-only-internet-explorer-11-with-javascript
      return /Trident.*rv[ :]*11\./.test(navigator.userAgent);
    }
    function isChromeTest(navigator) {
      // https://stackoverflow.com/questions/4565112/javascript-how-to-find-out-if-the-user-browser-is-chrome
      return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    }
    function isSafariTest(navigator) {
      // via https://stackoverflow.com/questions/49872111/detect-safari-and-stop-script
      return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    }

    /**
     * Set an attribute on an element, if it's a normal element
     * it will use setAttribute, if it's an LWC component
     * it will use the public property
     *
     * @param {HTMLElement} element The element to act on
     * @param {String} attribute the attribute to set
     * @param {Any} value the value to set
     */
    function smartSetAttribute(element, attribute, value) {
      if (element.tagName.match(/^LIGHTNING/i)) {
        attribute = attribute.replace(/-\w/g, m => m[1].toUpperCase());
        element[attribute] = value ? value : null;
      } else if (value) {
        element.setAttribute(attribute, value);
      } else {
        element.removeAttribute(attribute);
      }
    }

    /**
     * @param {HTMLElement} element Element to act on
     * @param {Object} values values and attributes to set, if the value is
     *                        falsy it the attribute will be removed
     */

    function synchronizeAttrs(element, values) {
      if (!element) {
        return;
      }

      const attributes = Object.keys(values);
      attributes.forEach(attribute => {
        smartSetAttribute(element, attribute, values[attribute]);
      });
    }
    /**
     * Get the actual DOM id for an element
     * @param {HTMLElement|String} el The element to get the id for (string will just be returned)
     *
     * @returns {String} The DOM id or null
     */

    function getRealDOMId(el) {
      if (el && typeof el === 'string') {
        return el;
      } else if (el) {
        return el.getAttribute('id');
      }

      return null;
    }

    /**
     Creates a debounced function that delays invoking `func` until after
     `delay` milliseconds have elapsed since the last time the debounced
     function was invoked.
     @function debounce
     @param {Function} func - The function to debounce
     @param {Number} delay - The number of milliseconds to delay
     @param {Object} options - The options object
     @param {Boolean} options.leading - Specify invoking on the leading edge of the timeout
     @return {Function} - debounced function
     **/

    function debounce(func, delay, options) {
      const _options = options || {};

      let invokeLeading = _options.leading;
      let timer;
      return function debounced() {
        const args = Array.prototype.slice.apply(arguments);

        if (invokeLeading) {
          func.apply(this, args);
          invokeLeading = false;
        }

        clearTimeout(timer); // eslint-disable-next-line @lwc/lwc/no-async-operation

        timer = setTimeout(function () {
          func.apply(this, args);
          invokeLeading = _options.leading; // reset for next debounce sequence
        }, delay);
      };
    }

    var labelBadInput = 'Enter a valid value.';

    var labelPatternMismatch = 'Your entry does not match the allowed pattern.';

    var labelRangeOverflow = 'The number is too high.';

    var labelRangeUnderflow = 'The number is too low.';

    var labelStepMismatch = 'Your entry isn\'t a valid increment.';

    var labelTooLong = 'Your entry is too long.';

    var labelTooShort = 'Your entry is too short.';

    var labelTypeMismatch = 'You have entered an invalid format.';

    var labelValueMissing = 'Complete this field.';

    const constraintsSortedByPriority = ['customError', 'badInput', 'patternMismatch', 'rangeOverflow', 'rangeUnderflow', 'stepMismatch', 'tooLong', 'tooShort', 'typeMismatch', 'valueMissing'];
    const defaultLabels = {
      badInput: labelBadInput,
      customError: labelBadInput,
      patternMismatch: labelPatternMismatch,
      rangeOverflow: labelRangeOverflow,
      rangeUnderflow: labelRangeUnderflow,
      stepMismatch: labelStepMismatch,
      tooLong: labelTooLong,
      tooShort: labelTooShort,
      typeMismatch: labelTypeMismatch,
      valueMissing: labelValueMissing
    };

    function resolveBestMatch(validity) {
      let validityState;

      if (validity && validity.valid === false) {
        validityState = 'badInput';
        constraintsSortedByPriority.some(stateName => {
          if (validity[stateName] === true) {
            validityState = stateName;
            return true;
          }

          return false;
        });
      }

      return validityState;
    }

    function computeConstraint(valueProvider, constraint) {
      const provider = valueProvider[constraint];

      if (typeof provider === 'function') {
        return provider();
      }

      if (typeof provider === 'boolean') {
        return provider;
      }

      return false;
    } // We're doing the below to avoid exposing the constraintsProvider in the ValidityState


    function newValidityState(constraintsProvider) {
      class ValidityState {
        get valueMissing() {
          return computeConstraint(constraintsProvider, 'valueMissing');
        }

        get typeMismatch() {
          return computeConstraint(constraintsProvider, 'typeMismatch');
        }

        get patternMismatch() {
          return computeConstraint(constraintsProvider, 'patternMismatch');
        }

        get tooLong() {
          return computeConstraint(constraintsProvider, 'tooLong');
        }

        get tooShort() {
          return computeConstraint(constraintsProvider, 'tooShort');
        }

        get rangeUnderflow() {
          return computeConstraint(constraintsProvider, 'rangeUnderflow');
        }

        get rangeOverflow() {
          return computeConstraint(constraintsProvider, 'rangeOverflow');
        }

        get stepMismatch() {
          return computeConstraint(constraintsProvider, 'stepMismatch');
        }

        get customError() {
          return computeConstraint(constraintsProvider, 'customError');
        }

        get badInput() {
          return computeConstraint(constraintsProvider, 'badInput');
        }

        get valid() {
          return !(this.valueMissing || this.typeMismatch || this.patternMismatch || this.tooLong || this.tooShort || this.rangeUnderflow || this.rangeOverflow || this.stepMismatch || this.customError || this.badInput);
        }

      }

      return new ValidityState();
    }

    function buildSyntheticValidity(constraintProvider) {
      return Object.freeze(newValidityState(constraintProvider));
    }
    function getErrorMessage(validity, labelMap) {
      const key = resolveBestMatch(validity);

      if (key) {
        return labelMap[key] ? labelMap[key] : defaultLabels[key];
      }

      return '';
    }
    class FieldConstraintApi {
      constructor(inputComponentProvider, constraintProviders) {
        assert(typeof inputComponentProvider === 'function');
        this._inputComponentProvider = inputComponentProvider;
        this._constraintsProvider = Object.assign({}, constraintProviders);

        if (!this._constraintsProvider.customError) {
          this._constraintsProvider.customError = () => typeof this._customValidityMessage === 'string' && this._customValidityMessage !== '';
        }
      }

      get validity() {
        if (!this._constraint) {
          this._constraint = buildSyntheticValidity(this._constraintsProvider);
        }

        return this._constraint;
      }

      checkValidity() {
        const isValid = this.validity.valid;

        if (!isValid) {
          if (this.inputComponent) {
            this.inputComponent.dispatchEvent(new CustomEvent('invalid', {
              cancellable: true
            }));
          }
        }

        return isValid;
      }

      reportValidity(callback) {
        const valid = this.checkValidity(); // the input might have been removed from the DOM by the time we query it

        if (this.inputComponent) {
          this.inputComponent.classList.toggle('slds-has-error', !valid);

          if (callback) {
            callback(this.validationMessage);
          }
        }

        return valid;
      }

      setCustomValidity(message) {
        this._customValidityMessage = message;
      }

      get validationMessage() {
        return getErrorMessage(this.validity, {
          customError: this._customValidityMessage,
          badInput: this.inputComponent.messageWhenBadInput,
          patternMismatch: this.inputComponent.messageWhenPatternMismatch,
          rangeOverflow: this.inputComponent.messageWhenRangeOverflow,
          rangeUnderflow: this.inputComponent.messageWhenRangeUnderflow,
          stepMismatch: this.inputComponent.messageWhenStepMismatch,
          tooShort: this.inputComponent.messageWhenTooShort,
          tooLong: this.inputComponent.messageWhenTooLong,
          typeMismatch: this.inputComponent.messageWhenTypeMismatch,
          valueMissing: this.inputComponent.messageWhenValueMissing
        });
      }

      get inputComponent() {
        if (!this._inputComponentElement) {
          this._inputComponentElement = this._inputComponentProvider();
        }

        return this._inputComponentElement;
      }

    }

    const VARIANT = {
      STANDARD: 'standard',
      LABEL_HIDDEN: 'label-hidden',
      LABEL_STACKED: 'label-stacked',
      LABEL_INLINE: 'label-inline'
    };
    /**
    A variant normalization utility for attributes.
    @param {Any} value - The value to normalize.
    @return {Boolean} - The normalized value.
    **/

    function normalizeVariant(value) {
      return normalizeString(value, {
        fallbackValue: VARIANT.STANDARD,
        validValues: [VARIANT.STANDARD, VARIANT.LABEL_HIDDEN, VARIANT.LABEL_STACKED, VARIANT.LABEL_INLINE]
      });
    }

    const proto = {
      add(className) {
        if (typeof className === 'string') {
          this[className] = true;
        } else {
          Object.assign(this, className);
        }

        return this;
      },

      invert() {
        Object.keys(this).forEach(key => {
          this[key] = !this[key];
        });
        return this;
      },

      toString() {
        return Object.keys(this).filter(key => this[key]).join(' ');
      }

    };
    function classSet(config) {
      if (typeof config === 'string') {
        const key = config;
        config = {};
        config[key] = true;
      }

      return Object.assign(Object.create(proto), config);
    }

    const i18n = {
      required: labelRequired
    }; // needed so it works in all browsers, all tests

    const DEBOUNCE_PERIOD = 200;
    /**
     * A checkbox group that enables selection of single or multiple options.
     */

    class LightningCheckboxGroup extends lwc.LightningElement {
      /**
       * Text label for the checkbox group.
       *
       * @type {string}
       * @required
       */

      /**
       * Array of label-value pairs for each checkbox.
       *
       * @type {list}
       * @required
       */

      /**
       * Optional message to be displayed when no checkbox is selected
       * and the required attribute is set.
       *
       * @type {string}
       */

      /**
       * The name of the checkbox group.
       *
       * @type {string}
       * @required
       */
      constructor() {
        super();
        this.label = void 0;
        this.options = void 0;
        this.messageWhenValueMissing = void 0;
        this.name = void 0;
        this._helpMessage = void 0;
        this._disabled = void 0;
        this._required = void 0;
        this._value = void 0;
        this.itemIndex = 0; // TODO: Change to use InteractingState instead

        this.debouncedShowIfBlurred = debounce(() => {
          if (!this.containsFocus) {
            this.showHelpMessageIfInvalid();
          }
        }, DEBOUNCE_PERIOD);
      }

      synchronizeA11y() {
        const inputs = this.template.querySelectorAll('input');
        Array.prototype.slice.call(inputs).forEach(input => {
          synchronizeAttrs(input, {
            'aria-describedby': this.computedUniqueHelpElementId
          });
        });
      }

      connectedCallback() {
        this.classList.add('slds-form-element');
        this.updateClassList();
      }

      updateClassList() {
        classListMutation(this.classList, {
          'slds-form-element_stacked': this.variant === VARIANT.LABEL_STACKED,
          'slds-form-element_horizontal': this.variant === VARIANT.LABEL_INLINE
        });
      }

      renderedCallback() {
        this.synchronizeA11y();
      }
      /**
       * The list of selected checkboxes.
       * Each array entry contains the value of a selected checkbox.
       * The value of each checkbox is set in the options attribute.
       *
       * @type {string[]}
       * @required
       */


      get value() {
        return this._value;
      }

      set value(value) {
        this._value = value;
      }
      /**
       * If present, the checkbox group is disabled.
       * Checkbox selections can't be changed for a disabled checkbox group.
       * @type {boolean}
       * @default false
       */


      get disabled() {
        return this._disabled || false;
      }

      set disabled(value) {
        this._disabled = normalizeBoolean(value);
      }
      /**
       * If present, at least one checkbox must be selected.
       * @type {boolean}
       * @default false
       */


      get required() {
        return this._required || false;
      }

      set required(value) {
        this._required = normalizeBoolean(value);
      }
      /**
       * The variant changes the appearance of the checkbox group.
       * Accepted variants include standard, label-hidden, label-inline, and label-stacked.
       * This value defaults to standard.
       * Use label-hidden to hide the label but make it available to assistive technology.
       * Use label-inline to horizontally align the label and checkbox group.
       * Use label-stacked to place the label above the checkbox group.
       * @type {string}
       * @default standard
       */


      get variant() {
        return this._variant || VARIANT.STANDARD;
      }

      set variant(value) {
        this._variant = normalizeVariant(value);
        this.updateClassList();
      }

      get i18n() {
        return i18n;
      }

      get transformedOptions() {
        const {
          options,
          value
        } = this;

        if (Array.isArray(options)) {
          return options.map(option => ({
            label: option.label,
            value: option.value,
            id: `checkbox-${this.itemIndex++}`,
            isChecked: value.indexOf(option.value) !== -1
          }));
        }

        return [];
      }
      /**
       * Represents the validity states that an element can be in, with respect to constraint validation.
       * @type {object}
       */


      get validity() {
        return this._constraint.validity;
      }
      /**
       * Returns the valid attribute value (Boolean) on the ValidityState object.
       * @returns {boolean} Indicates whether the checkbox group meets all constraint validations.
       */


      checkValidity() {
        return this._constraint.checkValidity();
      }
      /**
       * Displays the error messages and returns false if the input is invalid.
       * If the input is valid, reportValidity() clears displayed error messages and returns true.
       * @returns {boolean} - The validity status of the input fields.
       */


      reportValidity() {
        // required to make sure the sync happens after the render
        return this._constraint.reportValidity(message => {
          this._helpMessage = message;
        });
      }
      /**
       * Sets a custom error message to be displayed when the checkbox value is submitted.
       * @param {string} message - The string that describes the error. If message is an empty string, the error message
       * is reset.
       */


      setCustomValidity(message) {
        this._constraint.setCustomValidity(message);
      }
      /**
       * Displays an error message if the checkbox value is required and no option is selected.
       */


      showHelpMessageIfInvalid() {
        this.reportValidity();
      }

      get computedUniqueHelpElementId() {
        const helpElement = this.template.querySelector('[data-helptext]');
        return getRealDOMId(helpElement);
      }
      /**
       * Sets focus on the first checkbox input element.
       */


      focus() {
        const firstCheckbox = this.template.querySelector('input');

        if (firstCheckbox) {
          firstCheckbox.focus();
        }
      }

      handleFocus() {
        this.containsFocus = true;
        this.dispatchEvent(new CustomEvent('focus'));
      }

      handleBlur() {
        this.containsFocus = false;
        this.debouncedShowIfBlurred();
        this.dispatchEvent(new CustomEvent('blur'));
      }

      handleClick(event) {
        // Fixes an issue for firefox / safari of not focusing on a checkbox on a click.
        // Maybe it makes sense to fix it in lightning-input and use lightning-input so it's consistent
        if (this.template.activeElement !== event.target) {
          event.target.focus();
        }
      }

      handleChange(event) {
        event.stopPropagation(); // Stop input element from propagating event up and instead propagate from checkbox group

        const checkboxes = this.template.querySelectorAll('input');
        const value = Array.from(checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
        this._value = value; // the change event needs to propagate to elements outside of the light-DOM, hence making it composed.

        this.dispatchEvent(new CustomEvent('change', {
          detail: {
            value
          },
          composed: true,
          bubbles: true,
          cancelable: true
        }));
      }

      get _constraint() {
        if (!this._constraintApi) {
          this._constraintApi = new FieldConstraintApi(() => this, {
            valueMissing: () => !this.disabled && this.required && this.value.length === 0
          });
        }

        return this._constraintApi;
      }

      get computedLegendClass() {
        const classnames = classSet('slds-form-element__legend slds-form-element__label');
        return classnames.add({
          'slds-assistive-text': this.variant === VARIANT.LABEL_HIDDEN
        }).toString();
      }

    }

    LightningCheckboxGroup.delegatesFocus = true;

    lwc.registerDecorators(LightningCheckboxGroup, {
      publicProps: {
        label: {
          config: 0
        },
        options: {
          config: 0
        },
        messageWhenValueMissing: {
          config: 0
        },
        name: {
          config: 0
        },
        value: {
          config: 3
        },
        disabled: {
          config: 3
        },
        required: {
          config: 3
        },
        variant: {
          config: 3
        },
        validity: {
          config: 1
        }
      },
      publicMethods: ["checkValidity", "reportValidity", "setCustomValidity", "showHelpMessageIfInvalid", "focus"],
      track: {
        _helpMessage: 1,
        _disabled: 1,
        _required: 1,
        _value: 1
      }
    });

    var _lightningCheckboxGroup = lwc.registerComponent(LightningCheckboxGroup, {
      tmpl: _tmpl
    });

    function tmpl$1($api, $cmp, $slotset, $ctx) {
      const {
        b: api_bind,
        c: api_custom_element,
        t: api_text,
        d: api_dynamic,
        h: api_element
      } = $api;
      const {
        _m0
      } = $ctx;
      return [api_custom_element("lightning-checkbox-group", _lightningCheckboxGroup, {
        props: {
          "name": "Checkbox Group",
          "label": "Checkbox Group",
          "options": $cmp.options,
          "value": $cmp.value
        },
        key: 0,
        on: {
          "change": _m0 || ($ctx._m0 = api_bind($cmp.handleChange))
        }
      }, []), api_element("p", {
        key: 1
      }, [api_text("Selected Values are: "), api_dynamic($cmp.selectedValues)])];
    }

    var _tmpl$1 = lwc.registerTemplate(tmpl$1);
    tmpl$1.stylesheets = [];
    tmpl$1.stylesheetTokens = {
      hostAttribute: "lwc-publicMethodChild_publicMethodChild-host",
      shadowAttribute: "lwc-publicMethodChild_publicMethodChild"
    };

    class PublicMethodChild extends lwc.LightningElement {
      constructor(...args) {
        super(...args);
        this.value = ["option1"];
        this.options = [{
          label: "Red",
          value: "red"
        }, {
          label: "Blue",
          value: "blue"
        }, {
          label: "Green",
          value: "green"
        }, {
          label: "White",
          value: "white"
        }, {
          label: "Black",
          value: "black"
        }];
      }

      selectCheckbox(checkboxValue) {
        const selectedCheckbox = this.options.find(checkbox => checkbox.value === checkboxValue);
        console.log("cbVal", checkboxValue);
        console.log("sVal", selectedCheckbox);

        if (selectedCheckbox) {
          this.value = selectedCheckbox.value;
          return "Checkbox found";
        }

        return "No checkbox found";
      }

    }

    lwc.registerDecorators(PublicMethodChild, {
      publicMethods: ["selectCheckbox"],
      track: {
        value: 1
      },
      fields: ["options"]
    });

    var publicMethodChild = lwc.registerComponent(PublicMethodChild, {
      tmpl: _tmpl$1
    });

    return publicMethodChild;

});

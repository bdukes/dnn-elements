import { Host, h } from '@stencil/core';
/**
 * @slot - The label for the checkbox.
 * @slot checkedicon - Allows overriding the default checked icon.
 * @slot uncheckedicon - Allows overriding the unchecked icon.
 * @slot intermediateicon - If intermadiate state is used, allows overriding its icon.
 */
export class DnnCheckbox {
  constructor() {
    this.checked = "unchecked";
    this.useIntermediate = false;
    this.value = undefined;
  }
  changeState() {
    if (!this.useIntermediate) {
      switch (this.checked) {
        case "checked":
          this.checked = "unchecked";
          break;
        case "unchecked":
        case "intermediate":
          this.checked = "checked";
          break;
        default:
          break;
      }
      this.checkedchange.emit(this.checked);
      return;
    }
    switch (this.checked) {
      case "checked":
        this.checked = "intermediate";
        break;
      case "intermediate":
        this.checked = "unchecked";
        break;
      case "unchecked":
        this.checked = "checked";
        break;
      default:
        break;
    }
    this.checkedchange.emit(this.checked);
  }
  render() {
    return (h(Host, null, h("button", { class: `icon ${this.checked}`, onClick: () => this.changeState() }, h("div", { class: "unchecked" }, h("slot", { name: "uncheckedicon" }, h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 0 24 24", width: "24px", fill: "#000000" }, h("path", { d: "M0 0h24v24H0z", fill: "none" }), h("path", { d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" })))), h("div", { class: "checked" }, h("slot", { name: "checkedicon" }, h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 0 24 24", width: "24px", fill: "#000000" }, h("path", { d: "M0 0h24v24H0z", fill: "none" }), h("path", { d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" })))), h("div", { class: "intermediate" }, h("slot", { name: "intermediateicon" }, h("svg", { class: "undefined", xmlns: "http://www.w3.org/2000/svg", "enable-background": "new 0 0 24 24", height: "24px", viewBox: "0 0 24 24", width: "24px", fill: "#000000" }, h("g", null, h("rect", { fill: "none", height: "24", width: "24" })), h("g", null, h("g", null, h("g", null, h("path", { d: "M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M17,13H7v-2h10V13z" })))))))), h("label", { htmlFor: this.el.id, onClick: () => this.changeState() }, h("slot", null))));
  }
  static get is() { return "dnn-checkbox"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["dnn-checkbox.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["dnn-checkbox.css"]
    };
  }
  static get properties() {
    return {
      "checked": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "\"checked\" | \"unchecked\" | \"intermediate\"",
          "resolved": "\"checked\" | \"intermediate\" | \"unchecked\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Defines if the checkbox is checked (true) or unchecked (false) or in an intermediate state (undefined)"
        },
        "attribute": "checked",
        "reflect": false,
        "defaultValue": "\"unchecked\""
      },
      "useIntermediate": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Defines if clicking the checkbox will go through the intermediate state between checked and unchecked (tri-state)"
        },
        "attribute": "use-intermediate",
        "reflect": false,
        "defaultValue": "false"
      },
      "value": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The value for this checkbox (not to be confused with its checked state)."
        },
        "attribute": "value",
        "reflect": false
      }
    };
  }
  static get events() {
    return [{
        "method": "checkedchange",
        "name": "checkedchange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Fires up when the checkbox checked property changes."
        },
        "complexType": {
          "original": "\"checked\" | \"unchecked\" | \"intermediate\"",
          "resolved": "\"checked\" | \"intermediate\" | \"unchecked\"",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "el"; }
}
//# sourceMappingURL=dnn-checkbox.js.map

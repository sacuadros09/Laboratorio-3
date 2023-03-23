"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attribute = void 0;
var Attribute;
(function (Attribute) {
    Attribute["name"] = "name";
    Attribute["image"] = "image";
})(Attribute = exports.Attribute || (exports.Attribute = {}));
class MyProfile extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            image: null,
            name: null,
        };
        return Object.keys(attrs);
    }
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, _, newValue) {
        switch (propName) {
            case Attribute.image:
                break;
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="./index.css">
                <section>
                <h1>${this.name}</h1>
                <img src=${this.image}/>
                </section>
                `;
        }
    }
}
customElements.define("my-profile", MyProfile);
exports.default = MyProfile;

export var propiedad;
(function (propiedad) {
    propiedad["titulo"] = "titulo";
    propiedad["image"] = "image";
})(propiedad || (propiedad = {}));
class featured extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            image: null,
            titulo: null,
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
                <img src="${this.image}" >
                <h2>${this.titulo}</h2>
                </section>
                `;
        }
    }
}
customElements.define("my-featured", featured);
export default featured;

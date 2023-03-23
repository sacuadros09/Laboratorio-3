export var prop;
(function (prop) {
    prop["price"] = "price";
    prop["image"] = "image";
    prop["titulo"] = "titulo";
})(prop || (prop = {}));
class digital extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            image: null,
            price: null,
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
            case prop.price:
                this.price = newValue ? Number(newValue) : undefined;
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
                <img src="${this.image}">
                <h2>${this.titulo}</h2>
                <p>${this.price}</p>
                </section>
                `;
        }
    }
}
customElements.define("my-digital", digital);
export default digital;

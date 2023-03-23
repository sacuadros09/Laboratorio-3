export enum prop {
    "price" = "price",
    "image" = "image",
    "titulo" = "titulo"

}

class digital extends HTMLElement {
    price?: number;
    image?: string;
    titulo?: string;
    
    static get observedAttributes() {
        const attrs: Record<prop, null> = {
        
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
    
    attributeChangedCallback(
        propName: prop,
        _: string | undefined,
        newValue: string | undefined
        ) {
            switch (propName) {
                case prop.price:
                    this.price =newValue ? Number(newValue) : undefined;
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
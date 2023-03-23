export enum propi {
    "titulo" = "titulo",
    "image" = "image",
    "description" = "description",
    
}

class newsdigital extends HTMLElement {
    titulo?: string;
    image?: string;
    description?: string;
    
    static get observedAttributes() {
        const attrs: Record<propi, null> = {
        
            image: null,
            titulo: null,
            description: null,
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
        propName: propi,
        _: string | undefined,
        newValue: string | undefined
        ) {
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
                <h1>News</h1>
                <img src="${this.image}">
                <p>${this.titulo}</p>
                <p>${this.description}</p>
                </section>
                `;
            }
        }
    }
    
customElements.define("my-newsdigital", newsdigital);
export default newsdigital;
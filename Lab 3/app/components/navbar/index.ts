export enum Attribute {
    "name" = "name",
    "uid" = "uid",
    "city" = "city",
}

class navbar extends HTMLElement {
    name?: string;
    uid?: number;
    city?: string;
    
    static get observedAttributes() {
        const attrs: Record<Attribute, null> = {
            city: null,
            uid: null,
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
    
    attributeChangedCallback(
        propName: Attribute,
        _: string | undefined,
        newValue: string | undefined
        ) {
            switch (propName) {
                case Attribute.uid:
                this.uid = newValue ? Number(newValue) : undefined;
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
                <div class"content">
            <nav class="navbar">
                <a href="#" class="navbar-brand"><img class="Rima" src="https://yt3.googleusercontent.com/ytc/AL5GRJXQ_ZwqS4HKyKWBfrsKocRrtsqfQG_0fTTphtlzVw=s900-c-k-c0x00ffffff-no-rj" alt=""></a>
                <div class="navbar-search">
                <form>
                    <input type="text" placeholder="Search Games, Hardware,news,etc">
                    
                </form>
                </div>
                <div class="navbar-menu">
                <ul>
                    <li><button><a href="#">Support</a></button></li>
                    <li><button><a href="#">Wish List</a></button></li>
                    <li><button><a href="#">Cart</a></button></li>
                    <li><button><a href="#">Log in/Sing in </a></button></li>
                    <li><a href="#">Configuración</a></li>
                </ul>
                </div>
            </nav>
        </div>

                `;
            }
        }
    }
    
customElements.define("nav-bar", navbar);
export default navbar;
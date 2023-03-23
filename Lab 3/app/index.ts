import "./components/export.js";
import dbsdata from "./dbs.js"
import Charactersdata from "./charactersdata.js"
import DNRdata from "./dnr.js"
import Featureddata from "./featured.js"
import Newsdata from "./news.js"

import profile, { Attribute } from "./components/character/index.js";
import featured, { propiedad } from "./components/featured/index.js";
import bestsale, { attribute } from "./components/bestS/index.js";
import dnr, {prop} from "./components/DNR/index.js"
import newsdigital, { propi } from "./components/news/index.js"


class AppContainer extends HTMLElement {

    character: profile[]=[];
    featured: featured[]=[];
    dbs:bestsale[]=[];
    dnr:dnr[]=[];
    news: newsdigital[]=[];

    constructor() {
        super();
        this.attachShadow({ mode: "open" });


            Charactersdata.forEach((user) => {
                const profileCard = this.ownerDocument.createElement(
                    "my-figure"
                    ) as profile;
                    profileCard.setAttribute(Attribute.name, user.name);
                    profileCard.setAttribute(Attribute.image, user.image);
                    
                    this.character.push(profileCard);
                });

            Featureddata.forEach((person) => {
                const card = this.ownerDocument.createElement(
                    "my-featured"
                    ) as featured;
                    card.setAttribute(propiedad.titulo, person.title);
                    card.setAttribute(propiedad.image, person.image);
                    this.featured.push(card);
                });

            dbsdata.forEach((person) => {
                const cards = this.ownerDocument.createElement(
                    "best-sale"
                    ) as bestsale;
                    cards.setAttribute(attribute.titulo, person.title);
                    cards.setAttribute(attribute.image, person.image);
                    cards.setAttribute(attribute.price, person.price);
                    this.dbs.push(cards);
                 });


            DNRdata.forEach((person) => {
                const target = this.ownerDocument.createElement(
                    "my-digital"
                    ) as dnr;
                     target.setAttribute(prop.titulo, person.title);
                     target.setAttribute(prop.image, person.image);
                     target.setAttribute(prop.price, person.price);
                     this.dnr.push(target);
                 });
            Newsdata.forEach((person) => {
                const persons = this.ownerDocument.createElement(
                    "my-newsdigital"
                    ) as newsdigital;
                     persons.setAttribute(propi.titulo, person.title);
                     persons.setAttribute(propi.image, person.image);
                     persons.setAttribute(propi.description, person.description);
                    this.news.push(persons);
                });
                 
        }

        
        connectedCallback() {
            this.render();
        }
        
        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML += ``;
                
                this.character.forEach((profile) => {
                    this.shadowRoot?.appendChild(profile);
                });
                this.featured.forEach((profile) => {
                    this.shadowRoot?.appendChild(profile);
                });
                this.dbs.forEach((profile) => {
                    this.shadowRoot?.appendChild(profile);
                });
                this.dnr.forEach((profile) => {
                    this.shadowRoot?.appendChild(profile);
                });
                this.news.forEach((profile) => {
                    this.shadowRoot?.appendChild(profile);
                });
            }
        }
    }
    
customElements.define("app-container", AppContainer);
export class CarouselItem {
    src: string;
    alt: string;
    active: boolean;
    
    constructor(source: string, altText: string) {
        this.src = source;
        this.alt = altText;
        this.active = false;
    }
  
}
  
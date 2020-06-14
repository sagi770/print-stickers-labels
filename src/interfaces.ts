export interface Stickers {
    orderID: string;
    date: string;
    quantity: string;
    material: string;
    chainLength: string;
    line1: string;
    line2: string;
    image: string;
    gift: boolean;
    fast: boolean;
}

export interface MaterialObject {
    [param: string]: string;
  }
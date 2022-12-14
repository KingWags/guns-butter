import { Exchange } from "./Exchange";
import { Item } from "./Item";
import { Receipt } from "./Receipt";
export declare class Econ {
    exchanges: Exchange[];
    exchangeCount: number;
    itemCount: number;
    receipts: Receipt[];
    constructor();
    addExchange(exchange: Exchange): void;
    add(itemID: string, price: number, traderID: string, orderType: string, expirationDate: Date): Boolean;
    createItem(itemID: string, price: number, traderID: string, order: string, expirationDate: Date): Item;
    getReceipts(): Receipt[];
    calcBids(): void;
    calcAsks(): void;
    getBids(): number[];
    getAsks(): number[];
    logBuyOrders(): void;
    logSellOrders(): void;
    logReport(): void;
}

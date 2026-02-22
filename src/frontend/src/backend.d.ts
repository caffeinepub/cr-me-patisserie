import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface ShopOpening {
    date: Time;
    description: string;
    location: string;
}
export interface Product {
    name: string;
    description: string;
    imageUrl: string;
    price: bigint;
}
export interface backendInterface {
    addBakingTip(tip: string): Promise<void>;
    addTestimonial(testimonial: string): Promise<void>;
    getBakingTips(): Promise<Array<string>>;
    getProducts(): Promise<Array<Product>>;
    getShopOpenings(): Promise<Array<ShopOpening>>;
    getTestimonials(): Promise<Array<string>>;
}

import ICurrency from "../currency/ICurrency";

export interface IMoney {
    
    Convert (otherMoney: IMoney) : IMoney;

    Add (otherMoney: IMoney) : IMoney;

    Subtract (otherMoney: IMoney) : IMoney;

    

    // Combine (left: IMoney, right: IMoney);
}
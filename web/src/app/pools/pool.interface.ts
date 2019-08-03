import { BigNumber } from 'ethers/utils';

export interface PoolInterface {
    getBalance(tokenSymbol: string, wallet: string): Promise<BigNumber>;
    interest(tokenSymbol: string): Promise<number>;
    deposit(tokenSymbol: string, amount: BigNumber);
    withdraw(tokenSymbol: string, amount: BigNumber);
}

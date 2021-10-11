/** @format */
import { Account } from "./account";

/**
 * Responsible for the creation of base entities
 */
class EntityFactoryBase {

  /**
   * Creates an empty Account entity.
   * @param userId the user who owns this account.
   * @returns an empty Account.
   */
  createAccount(userId: string): Account {
    return {
      bank: undefined,
      name: undefined,
      userId,
      description: undefined,
      balance: undefined,
    };
  }

}

export const EntityFactory = new EntityFactoryBase();

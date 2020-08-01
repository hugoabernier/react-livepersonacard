
export interface ILivePersonaCardUser {
  /**
    * The display name for the current user.
    *
    * @remarks
    * Example: `"John Doe"`
    */
  displayName: string;
  /**
   * The email address for the current user.
   *
   * @remarks
   * Example: `"example@contoso.com"`
   */
  email: string;
  /**
   * Returns if the current user is an anonymous guest.
   */
  isAnonymousGuestUser?: boolean;
  /**
   * Returns true if the current user is an external guest.
   */
  isExternalGuestUser?: boolean;
  /**
   * The login name for current user.
   *
   * @remarks
   * Example: on-premise user: `"domain\user"`, online user: `"user@domain.com"`
   */
  loginName?: string;
}

module.exports = [{"type":"category","label":"Auth","link":{"type":"doc","id":"arm/swagger-authentication/auth"},"items":[{"type":"doc","id":"arm/swagger-authentication/login","label":"Logs in the user with a username/ password and returns a JWT and refresh token.","className":"api-method post"},{"type":"doc","id":"arm/swagger-authentication/login-with-username","label":"Logs in the user with just a username and returns a JWT and refresh token.","className":"api-method post"},{"type":"doc","id":"arm/swagger-authentication/refresh","label":"Using a refresh token, get a new JWT.","className":"api-method post"},{"type":"doc","id":"arm/swagger-authentication/login-with-legacy-credentials","label":"Allows authentication via legacy EmHub/ AzureAD system.","className":"api-method post"},{"type":"doc","id":"arm/swagger-authentication/login-via-sso-cookie","label":"When authenticated via an external IDP for SSO, the authentication service will return  a short-lived cookie called SsoToken that can be used to fetch a valid JWT and refresh  token from the system.","className":"api-method get"}]},{"type":"category","label":"ChangeLogs","link":{"type":"doc","id":"arm/swagger-authentication/change-logs"},"items":[{"type":"doc","id":"arm/swagger-authentication/schedule-users-change-log","label":"Schedules new User Management Change Logs job.","className":"api-method post"}]},{"type":"category","label":"Customer","link":{"type":"doc","id":"arm/swagger-authentication/customer"},"items":[{"type":"doc","id":"arm/swagger-authentication/get-customer","label":"GetCustomer","className":"api-method get"},{"type":"doc","id":"arm/swagger-authentication/list","label":"Lists accounts in the system with some rudimentary searching and sorting functionality.","className":"api-method get"},{"type":"doc","id":"arm/swagger-authentication/modify-customer","label":"Updates the specified account with the provided metadata.","className":"api-method put"},{"type":"doc","id":"arm/swagger-authentication/create-customer","label":"Creates a new account in the system.","className":"api-method post"},{"type":"doc","id":"arm/swagger-authentication/set-legacy-account-id","label":"Links customer and legacy account.  This endpoint is mainly used by AuthSync process, when new customer and account are created.","className":"menu__list-item--deprecated api-method post"},{"type":"doc","id":"arm/swagger-authentication/enable-access-contexts","label":"Enables access contexts for the customer.","className":"api-method patch"},{"type":"doc","id":"arm/swagger-authentication/disable-access-contexts","label":"Disables access contexts for the customer.","className":"api-method patch"},{"type":"doc","id":"arm/swagger-authentication/are-access-contexts-enabled","label":"Determines if access contexts are enabled for specified customer.","className":"api-method get"},{"type":"doc","id":"arm/swagger-authentication/get-customer-info","label":"Get information for a customer. Used by the  client service.","className":"api-method get"}]},{"type":"category","label":"Impersonation","link":{"type":"doc","id":"arm/swagger-authentication/impersonation"},"items":[{"type":"doc","id":"arm/swagger-authentication/get-accounts-for-impersonation","label":"List of eligible accounts for impersonation","className":"api-method get"},{"type":"doc","id":"arm/swagger-authentication/get-customer-user-details-v-2","label":"Gets a list of user details for a given customer for Impersonation.  <param name=\"customerId\">Identifier of the customer.</param><param name=\"search\"></param>","className":"api-method get"},{"type":"doc","id":"arm/swagger-authentication/impersonate","label":"Provides an access token to act on behal of the impersonated user.","className":"api-method post"}]},{"type":"category","label":"License","link":{"type":"doc","id":"arm/swagger-authentication/license"},"items":[{"type":"doc","id":"arm/swagger-authentication/list","label":"Lists all licensed modules for the specified customer (account)","className":"api-method get"},{"type":"doc","id":"arm/swagger-authentication/set","label":"Sets/ creates the licensing for a module for the specified customer (account)","className":"api-method post"}]},{"type":"category","label":"SelfService","link":{"type":"doc","id":"arm/swagger-authentication/self-service"},"items":[{"type":"doc","id":"arm/swagger-authentication/register-user","label":"Allows a previously non-existent user to register with a new account, mainly used  to sign up for a free trial.","className":"api-method post"},{"type":"doc","id":"arm/swagger-authentication/user-exists","label":"If the username currently exists in our data store, return true.  Otherwise, return false.","className":"api-method post"},{"type":"doc","id":"arm/swagger-authentication/company-exists","label":"If the company name currently exists in our data store, return true.  Otherwise, return false.","className":"api-method post"},{"type":"doc","id":"arm/swagger-authentication/set-password","label":"With the provided token and new password, allows a user to set/ create their password.  This will also set their account as having their email address confirmed.","className":"api-method post"},{"type":"doc","id":"arm/swagger-authentication/change-password","label":"With the provided old and new passwords, allows a user to change their password.","className":"api-method post"},{"type":"doc","id":"arm/swagger-authentication/register-coworker","label":"Registers a coworker at the same company as the authenticated user.  If the user's token  has expired, you can \"re-register\" the user using this method to generate a new token.","className":"api-method post"},{"type":"doc","id":"arm/swagger-authentication/get-legacy-credential","label":"Returns the company credential used for legacy operations within the Access Analyzer,  encrypted with the provided shared secret key.  This communication should always go over TLS.","className":"api-method post"}]},{"type":"category","label":"Service","link":{"type":"doc","id":"arm/swagger-authentication/service"},"items":[{"type":"doc","id":"arm/swagger-authentication/get-legacy-account-id","label":"Returns legacy account identifier by provided customer identifier, for a service account","className":"api-method get"},{"type":"doc","id":"arm/swagger-authentication/get-customer-id","label":"Gets identifier of customer by its legacy ID, for a service account","className":"api-method get"},{"type":"doc","id":"arm/swagger-authentication/generate-password-reset-token","label":"Generates PasswordReset token for specified user.","className":"api-method get"}]},{"type":"category","label":"Signature","link":{"type":"doc","id":"arm/swagger-authentication/signature"},"items":[{"type":"doc","id":"arm/swagger-authentication/pgp-sign","label":"PgpSign","className":"api-method post"}]},{"type":"category","label":"Sso","link":{"type":"doc","id":"arm/swagger-authentication/sso"},"items":[{"type":"doc","id":"arm/swagger-authentication/authenticate-via-saml-2","label":"Entry point for SAML2 SSO authentication.  If the OID is registered in the system, should redirect  the user to the registered IDP for authentication.","className":"api-method get"},{"type":"doc","id":"arm/swagger-authentication/create-saml-2-identity-provider","label":"Creates a reference to an external identity provider for the SAML2 protocol.  Only one external  identity provider can be used per customer.","className":"api-method post"},{"type":"doc","id":"arm/swagger-authentication/modify-saml-2-identity-provider","label":"Modify/ update a previously registered SAML2 SSO IDP.","className":"api-method patch"},{"type":"doc","id":"arm/swagger-authentication/delete-sso-idp","label":"Permanently removes a registered SAML2 SSO IDP.  This should only be used when changing the IDP  for the customer to something else, otherwise disable the IDP via M:ErpMaestro.AuthenticationServices.Controllers.SsoController.ModifySaml2IdentityProvider(ErpMaestro.AuthenticationServices.Client.Models.ModifySaml2IdentityProviderModel).","className":"api-method delete"},{"type":"doc","id":"arm/swagger-authentication/add-user-to-sso","label":"Associates a user with a customer's IDP and allows the claim type to be  specified or updates a previous association.  Tenancy checking is NOT performed  in the authentication service; this should be done before the service calls the endpoint.","className":"api-method post"},{"type":"doc","id":"arm/swagger-authentication/remove-user-from-sso","label":"Removes an association of an SSO user from a customer.","className":"api-method delete"}]},{"type":"category","label":"System","link":{"type":"doc","id":"arm/swagger-authentication/system"},"items":[{"type":"doc","id":"arm/swagger-authentication/register-user","label":"Allows a system admin to register a previously non-existent user with a new account.  Mainly used for ARM free trials.","className":"api-method post"},{"type":"doc","id":"arm/swagger-authentication/confirm-email","label":"Allows a system admin to confirm a user's email.","className":"api-method patch"},{"type":"doc","id":"arm/swagger-authentication/onboard-emhub-user","label":"Adds EmHub user information to Auth Service.","className":"menu__list-item--deprecated api-method post"},{"type":"doc","id":"arm/swagger-authentication/update-emhub-user","label":"Updates user information from EmHub.","className":"menu__list-item--deprecated api-method post"},{"type":"doc","id":"arm/swagger-authentication/change-emhub-user-password","label":"Updates user password by information from EmHub.","className":"api-method post"}]},{"type":"category","label":"SystemSettings","link":{"type":"doc","id":"arm/swagger-authentication/system-settings"},"items":[{"type":"doc","id":"arm/swagger-authentication/get-legacy-account-id-by-customer-id","label":"Returns legacy account identifier by provided customer identifier","className":"api-method get"},{"type":"doc","id":"arm/swagger-authentication/get-customer-id-by-account-id","label":"Gets identifier of customer by its legacy ID.","className":"api-method get"}]},{"type":"category","label":"TenancyCheck","link":{"type":"doc","id":"arm/swagger-authentication/tenancy-check"},"items":[{"type":"doc","id":"arm/swagger-authentication/does-user-belong-to-any-of-customers","label":"Determines if user belongs to any of specified customers.","className":"api-method post"}]},{"type":"category","label":"User","link":{"type":"doc","id":"arm/swagger-authentication/user"},"items":[{"type":"doc","id":"arm/swagger-authentication/list","label":"List","className":"api-method get"},{"type":"doc","id":"arm/swagger-authentication/create","label":"Creates a new user in the system under the specified customer (account).  Note that this does not set a password for the account.  Please see the associated endpoint   for setting a password for a user.","className":"menu__list-item--deprecated api-method post"},{"type":"doc","id":"arm/swagger-authentication/setup-user","label":"Confirms the email and sets a user's password.","className":"api-method post"},{"type":"doc","id":"arm/swagger-authentication/request-password-reset","label":"Requests a password reset.","className":"api-method get"},{"type":"doc","id":"arm/swagger-authentication/reset-password","label":"Changes password using Reset token.","className":"api-method post"},{"type":"doc","id":"arm/swagger-authentication/change-my-password","label":"Changes the password for the current user.","className":"api-method post"},{"type":"doc","id":"arm/swagger-authentication/change-sys-job-password-handler","label":"Changes the password for the specified sysJob user.","className":"api-method post"},{"type":"doc","id":"arm/swagger-authentication/get-user","label":"Get a user from the system by id.","className":"menu__list-item--deprecated api-method get"},{"type":"doc","id":"arm/swagger-authentication/soft-delete","label":"Soft deletes the specified user.","className":"api-method delete"},{"type":"doc","id":"arm/swagger-authentication/update","label":"Updates the metadata of the specified user.","className":"menu__list-item--deprecated api-method patch"},{"type":"doc","id":"arm/swagger-authentication/get-user-customers","label":"Gets the assigned customers for the specified user.","className":"api-method get"},{"type":"doc","id":"arm/swagger-authentication/get-current-user-customers","label":"Gets the assigned customers for the currently logged in user.","className":"api-method get"},{"type":"doc","id":"arm/swagger-authentication/get-current-user","label":"Gets the current user.","className":"api-method get"},{"type":"doc","id":"arm/swagger-authentication/get-current-customer","label":"Gets the current customers","className":"api-method get"},{"type":"doc","id":"arm/swagger-authentication/get-user","label":"Get a user from the system by id.","className":"api-method get"},{"type":"doc","id":"arm/swagger-authentication/get-by-username","label":"Get a user from the system by username.","className":"menu__list-item--deprecated api-method get"},{"type":"doc","id":"arm/swagger-authentication/get-by-username","label":"Get a user from the system by username.","className":"api-method get"},{"type":"doc","id":"arm/swagger-authentication/list-by-customer","label":"Retrieves a list of users assigned to the specified account.","className":"api-method get"},{"type":"doc","id":"arm/swagger-authentication/is-service-user","label":"Checks if user is a service user. Mainly serves Gaia to EmHub communication,   to be able to validate the user account is service account while performing sync.","className":"api-method get"},{"type":"doc","id":"arm/swagger-authentication/update-sys-admin-permissions","label":"Updates isSysAdmin permission of provided user.","className":"api-method post"}]},{"type":"category","label":"UserCustomer","link":{"type":"doc","id":"arm/swagger-authentication/user-customer"},"items":[{"type":"doc","id":"arm/swagger-authentication/relate-user-and-customer","label":"Adds new relationship between user and customer. Allows change \"IsAdmin\" flag for existing relationship.","className":"api-method post"},{"type":"doc","id":"arm/swagger-authentication/update-user-and-customer","label":"Updates relationship between user and customer.","className":"api-method post"},{"type":"doc","id":"arm/swagger-authentication/unbind-user-and-customer","label":"Removes relationship between user and customer.","className":"api-method post"}]},{"type":"category","label":"UserPortability","link":{"type":"doc","id":"arm/swagger-authentication/user-portability"},"items":[{"type":"doc","id":"arm/swagger-authentication/export-users","label":"Exports users for specified customer.","className":"api-method get"},{"type":"doc","id":"arm/swagger-authentication/import-users","label":"Schedules new job to import users.","className":"api-method post"}]},{"type":"category","label":"UserRole","link":{"type":"doc","id":"arm/swagger-authentication/user-role"},"items":[{"type":"doc","id":"arm/swagger-authentication/get-user-roles-by-customer","label":"Gets Customer to User Roles list","className":"api-method get"}]}];
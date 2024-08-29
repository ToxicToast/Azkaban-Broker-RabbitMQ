export enum AuthTopics {
  REGISTER = 'azkaban_auth_register',
  REGISTER_ATTEMPT = 'azkaban_auth_register_attempt',
  REFRESH = 'azkaban_auth_refresh',
  LOGIN = 'azkaban_auth_login',
  LOGIN_ATTEMPT = 'azkaban_auth_login_attempt',
  FORGOT_PASSWORD = 'azkaban_auth_forgotpassword',
  //
  ACTIVATE = 'azkaban_auth_activate',
  DEACTIVATE = 'azkaban_auth_deactivate',
  DELETE = 'azkaban_auth_delete',
  //
  VERSION = 'azkaban_auth_version',
}

class Api {
  static baseUrl = process.env.REACT_APP_PLANTS_API_URL;
  static timeout = process.env.REACT_APP_PLANTS_API_TIMEOUT;
  static AUTH_TOKEN = '/api-token-auth/';
  static PLANTS = '/plants';
  static CATEGORIES = '/categories';
  static ROOMS = '/rooms';
}

export default Api;
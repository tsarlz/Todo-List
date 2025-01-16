const baseUrl = 'http://127.0.0.1:8000/api/';

export const ApiEndpoint = {
  Todo: {
    myTodo: `${baseUrl}todos`, // Get, Add, Show, Update, Delete Todo
  },
  Auth: {
    register: `${baseUrl}register`,
    login: `${baseUrl}login`,
  },
};

export const LocalData = {
  token: 'auth_token',
};

export type UserData = {
  firstname: string;
  lastname: string;
  username: string;
};

export type LoginResponse = {
  access_token: string;
  expiresIn: number;
} & UserData;

export type ResponseError = {
  statusCode: number;
  error: string;
  message: string;
};

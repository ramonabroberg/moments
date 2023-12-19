import { rest } from "msw";

const baseURL = "https://drf-api-rb-b449fd56fdb1.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 5,
        username: "user2",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 5,
        profile_image:
          "https://res.cloudinary.com/dpk2gl3yf/image/upload/v1/media/../default_profile_annvtv",
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];

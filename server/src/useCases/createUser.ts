import Joi from "joi";
import { PrismaClient } from "@prisma/client";
import { encrypt } from "../utils/bcrypt";

type UserPayload = {
  name: string;
  email: string;
  gender?: "male" | "female" | "others";
  password: string;
};

const schema = Joi.object({
  email: Joi.string().trim().email().required(),
  name: Joi.string().trim().required(),
  password: Joi.string().trim().required(),
  gender: Joi.allow("male", "female", "others", "").optional(),
}).required();

export default function makeCreateUser(database: PrismaClient) {
  return async function createUser({
    name,
    email,
    gender,
    password,
  }: UserPayload) {
    return new Promise(async (resolve, reject) => {
      try {
        const { error } = schema.validate({ name, email, gender, password });

        if (error) {
          return reject(error);
        }
        const encryptedPassword = await encrypt(password);
        const user = await database.user.create({
          data: {
            name,
            email,
            gender,
            password: encryptedPassword,
          },
          select: {
            id: true,
            email: true,
            name: true,
            gender: true,
            created_at: true,
          },
        });

        return resolve(user);
      } catch (error) {
        reject(error);
      }
    });
  };
}

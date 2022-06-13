import Joi from "joi";
import { PrismaClient } from "@prisma/client";
import { encrypt } from "../utils/bcrypt";

type UserPayload = {
  id: string;
  name?: string;
  email?: string;
  gender?: "male" | "female" | "others";
  password?: string;
};

const schema = Joi.object({
  id: Joi.string().trim().required(),
  email: Joi.string().allow('').trim().email().optional(),
  name: Joi.string().allow('').trim().optional(),
  password: Joi.string().allow('').trim().optional(),
  gender: Joi.allow("male", "female", "others", "").optional(),
}).required();

export default function makeUpdateUser(database: PrismaClient) {
  return async function updateUser({
    id,
    name,
    email,
    gender,
    password,
  }: UserPayload) {
    return new Promise(async (resolve, reject) => {
      try {
        const { error } = schema.validate({
          id,
          name,
          email,
          gender,
          password,
        });

        if (error) {
          return reject(error);
        }
      
        if (password) {
          password = await encrypt(password);
        }

        const isAvailable = await isAvailableEmail({ id, email, database });
        if (!isAvailable) {
          return reject({ message: "Email already exists!" });
        }

        const user = await database.user.findFirst({
          where: { id },
        });

        if (!user) {
          return reject({ message: "User not found" });
        }

        const userUpdated = await database.user.update({
          where: { id },
          data: {
            name: name ? name : user.name,
            email: email ? email : user.email,
            gender: gender ? gender : user.gender,
            password: password ? password : user.password,
          },
          select: {
            id: true,
            email: true,
            name: true,
            gender: true,
            created_at: true,
          },
        });

        return resolve(userUpdated);
      } catch (error) {
        reject(error);
      }
    });
  };
}

const isAvailableEmail = async ({
  id,
  email,
  database,
}: {
  id: string;
  email?: string;
  database: PrismaClient;
}) => {
  if (!email) {
    return true;
  }
  const user = await database.user.findFirst({
    where: {
      NOT: { id },
      email,
    },
  });
  if (user) {
    return false;
  }
  return true;
};

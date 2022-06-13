import { Router } from "express";
import { database } from "../../database";
import makeCreateUser from "../../useCases/createUser";
import makeUpdateUser from "../../useCases/updateUser";
import Joi from "joi";

const router = Router();

router.post("/", async (request, response) => {
  try {
    const createUser = makeCreateUser(database);
    const user = await createUser(request.body);
    return response.json(user);
  } catch (error) {
    if (Joi.isError(error)) {
      return response.status(409).json(error);
    }
    return response.status(500).json(error);
  }
});

router.get("/", async (request, response) => {
  try {
    const users = await database.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        gender: true,
        created_at: true,
      },
    });

    return response.json(users);
  } catch (error) {
    return response.status(500).json(error);
  }
});

router.put("/update", async (request, response) => {
  try {
    const updateUser = makeUpdateUser(database);
    const userUpdated = await updateUser(request.body);

    return response.json(userUpdated);
  } catch (error) {
    if (Joi.isError(error)) {
      return response.status(409).json(error);
    }
    return response.status(500).json(error);
  }
});

router.delete("/", async (request, response) => {
  try {
    const { id } = request.body;

    if (!id) {
      return response.status(409).json({ message: "Field id is required!" });
    }

    const user = await database.user.findFirst({
      where:{id}
    })

    if (!user) {
      return response.status(409).json({ message: "User not found!" });
    }

    await database.user.delete({
      where: { id },
    });

    return response.json("");
  } catch (error) {
    return response.status(500).json(error);
  }
});

export default router;

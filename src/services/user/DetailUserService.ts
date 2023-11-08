import db from "../../prisma";
class DetailUserService {
  async execute(user_id: string) {
    const user = await db.user.findFirst({
      where: {
        id: user_id,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return user;
  }
}

export { DetailUserService };

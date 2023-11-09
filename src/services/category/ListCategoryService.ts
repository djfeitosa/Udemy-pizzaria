import db from "../../prisma";

class ListCategoryService {
    async execute() {
        const category = await db.category.findMany({
            select: {
                id: true,
                name: true
            }
        })
        return category;
    }
}

export { ListCategoryService };


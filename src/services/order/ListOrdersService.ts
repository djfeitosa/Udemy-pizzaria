import db from "../../prisma";

export class ListOrdersService {
    async execute() {
        const orders = await db.order.findMany({
            where: {
                draft: false,
                status: false,
            },
            orderBy: {
                create_at: "desc",
            },
        });
        return orders;
    }
}

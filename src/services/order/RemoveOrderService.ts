import db from "../../prisma";

interface OrderRequest {
    order_id: string;
}

export class RemoveOrderService {
    async execute({ order_id }) {
        const order = await db.order.delete({
            where: {
                id: order_id,
            },
        });
        return order;
    }
}

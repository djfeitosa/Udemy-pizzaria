import db from "../../prisma";

interface OrderRequest {
    order_id: string;
}

export class SendOrderService {
    async execute({ order_id }: OrderRequest) {
        const order = await db.order.update({
            where: {
                id: order_id,
            },
            data: {
                draft: false,
            },
        });

        return order;
    }
}

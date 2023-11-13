import db from "../../prisma";

interface ItemRequest {
    item_id: string;
}

export class RemoveItemService {
    async execute({ item_id }: ItemRequest) {
        const order = await db.item.delete({
            where: {
                id: item_id,
            },
        });
        return order;
    }
}

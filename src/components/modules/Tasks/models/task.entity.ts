import { User } from "@/components/modules/Users/models/user.entity";
export default class Task {
    id: number;

    name: string;

    description: string;

    status: number;

    userId: number;

    user: User[];

    constructor(data: any = {}) {
        this.id = data.id;
        this.name = data.name;
        this.description = data.description
        this.status = data.status
        this.userId = data.userId;
        this.user = data.user;
    }
}

import { TodoService } from "./todo.service";
import { CreateTodoDTO, UpdateTodoDTO } from "./todo.dto";
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    create(todoPayload: CreateTodoDTO): Promise<{
        IDTODO: number;
        TITLE: string;
        DESCRIPTION: string;
    }>;
    update(todoPayload: UpdateTodoDTO): Promise<{
        IDTODO: number;
        TITLE: string;
        DESCRIPTION: string;
    }>;
    destroy(id: number): Promise<{
        IDTODO: number;
        TITLE: string;
        DESCRIPTION: string;
    }>;
    list(): Promise<{
        IDTODO: number;
        TITLE: string;
        DESCRIPTION: string;
    }[]>;
    retrieve(id: number): Promise<{
        IDTODO: number;
        TITLE: string;
        DESCRIPTION: string;
    }>;
}

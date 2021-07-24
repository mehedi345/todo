export type TTodo = {
    text: string;
    complete: boolean;
}

export type toggleTodo = (selectedTodo : TTodo) => void;

export type addTodo = (newTodo: string) => void;
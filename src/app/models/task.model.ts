export type TaskStatus = 'pendiente' | 'en progreso' | 'Listo' 
export type TasksPriority = 'baja' | 'media' | 'urgente' 

export interface Task {
    id: string;
    titulo: string; 
    descripcion: string;
    fechaCreacion: string;
    fechaLimite: string;
    estado: TaskStatus;
    Prioridad: TasksPriority;
    categoria: string;
    completada: boolean;
}
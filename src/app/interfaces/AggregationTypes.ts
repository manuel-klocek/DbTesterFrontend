export interface Changes {
    changedKeys: string[],
    new: Object[],
    timestamp: number
}

export interface ChangeCards {
    keys: string[],
    values: any[],
    changedKeys: string[],
    deletedKeys?: string[],
    timestamp: number
}

export interface Change {
    key: string,
    value: any
}
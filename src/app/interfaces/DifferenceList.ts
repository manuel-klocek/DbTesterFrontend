export interface DifferenceItem {
    field: string
    expected: string
    got: string
}

export interface DifferenceArray {
    list: DifferenceItem[]
}
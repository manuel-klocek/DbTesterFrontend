export interface DifferenceItem {
    expected: string
    got: string
}

export interface DifferenceArray {
    list: DifferenceItem[]
}
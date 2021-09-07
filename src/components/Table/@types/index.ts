import { Grouping, Sorting } from '@devexpress/dx-react-grid'
import React from 'react'


export type TablePropsType = {
    loading?: boolean
    columns: Array<any>
    rows: Array<any>
    defaultGrouping?: Array<Grouping>
    defaultSorting?: Array<Sorting>
    onSelectionChange?: (selection: Array<any>, setSelection: React.Dispatch<React.SetStateAction<any[]>>) => void
    showPaging?: boolean
    defaultColumnWidth?: number
    onAdd?: () => void
    onRefresh?: () => void
    highlightRow?: boolean
    showSelectionColumn?: boolean
    selectByRowClick?: boolean
    showSelectAll?: boolean
    selectedRows?: Array<any>
    showTableEditColumn?: boolean
    showDeleteRow?: boolean
    onRowDelete?: (rows: Array<number>) => void
}


export interface TableColumn<T> {
    name: keyof T | string;
    title: string;
    getCellValue?: (row: any) => string
    format?: (value: any) => string
    width?: number
}

export type TableContentType = {
    row: any
    column: any
}
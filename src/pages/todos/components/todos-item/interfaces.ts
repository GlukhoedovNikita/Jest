import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface TodosItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    className?: string,
    _id: number,
    title: string,
    body: string,
}

import React from "react"

type MarginSizes = '1' | '2' | '3' | '4' | '5' | '6'

interface Props {
    marginBottom?: MarginSizes
    marginTop?: MarginSizes
    marginLeft?: MarginSizes
    marginRight?: MarginSizes
}
export const Spacer = ({ marginBottom, marginLeft, marginRight, marginTop }: Props) => {
    return <div className={`${marginBottom ? `mb-${marginBottom}`: ''}  ${marginTop ? `mt-${marginTop}`: ''}  ${marginLeft ? `ml-${marginLeft}`: ''} ${marginRight ? `mr-${marginRight}`: ''}`} />
}
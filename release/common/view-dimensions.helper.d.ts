export interface ViewDimensions {
    width: number;
    height: number;
    xOffset: number;
}
export declare function calculateViewDimensions({width, height, margins, showXAxis, showYAxis, xAxisHeight, yAxisWidth, showXLabel, showYLabel, showLegend, legendPosition, legendType, columns}: {
    width: any;
    height: any;
    margins: any;
    showXAxis?: boolean;
    showYAxis?: boolean;
    xAxisHeight?: number;
    yAxisWidth?: number;
    showXLabel?: boolean;
    showYLabel?: boolean;
    showLegend?: boolean;
    legendPosition?: string;
    legendType?: string;
    columns?: number;
}): ViewDimensions;

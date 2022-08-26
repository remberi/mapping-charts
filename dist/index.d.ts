interface Item {
    name: string;
    width: number | 100;
    height: number | 20;
    color: string;
    target: string;
    start: string;
    end: string;
}
interface Element {
    list: Array<Item>;
    distance: number;
    title: string;
    gap: number | 100;
}
interface MappingChartsProps {
    elements: Array<Element>;
}
declare const MappingCharts: (props: MappingChartsProps) => JSX.Element;
export default MappingCharts;

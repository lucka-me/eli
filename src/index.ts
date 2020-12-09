type PartialStyle = Partial<CSSStyleDeclaration>;

type EliOptions<K extends keyof HTMLElementTagNameMap> = Omit<Partial<HTMLElementTagNameMap[K]>, 'style'> & {
    style?: PartialStyle;
    [name: string]: any;
};

/**
 * Build an element
 * @param tag Tag name of the element, will be passed to `createElement`
 * @param options Attributes of the elements
 * @param children Child elements
 */
export function eli<K extends keyof HTMLElementTagNameMap>(
    tag: K, options?: EliOptions<K>, children?: Array<HTMLElement | SVGElement | string>
): HTMLElementTagNameMap[K] {
    const element = document.createElement(tag);
    if (options) {
        for (const [key, value] of Object.entries(options)) {
            if (key === 'style') {
                for (const [styleKey, styleValue] of Object.entries(value as PartialStyle)) {
                    (element.style as any)[styleKey] = styleValue;
                }
            } else if (key === 'dataset') {
                for (const [dataKey, dataValue] of Object.entries(value as DOMStringMap)) {
                    element.dataset[dataKey] = dataValue;
                }
            } else {
                (element as any)[key] = value;
            }
        }
    }
    if (children) element.append(...children);
    return element;
}
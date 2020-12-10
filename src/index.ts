/**
 * Partial `style`, all properties are optional
 */
type PartialStyle = Partial<CSSStyleDeclaration>;

/**
 * Partial element interface, all properties are optional.
 * 
 * The `style` is replaced with a partial one.  
 * Supports any attributes not included in the original interface, like ARIA.
 */
type EliOptions<K extends keyof HTMLElementTagNameMap> = Omit<Partial<HTMLElementTagNameMap[K]>, 'style'> & {
    style?: PartialStyle;
    [name: string]: any;
};

/**
 * Build an element
 * @param tag Tag name of the element, will be passed to `createElement`, required
 * @param options Attributes of the elements, optional
 * @param children Child elements or strings, optional
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
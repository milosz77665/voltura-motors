import type { Directive } from "vue";

type FixOrphansDirective = Directive<HTMLElement, string[] | undefined>;

declare module "vue" {
  export interface ComponentCustomProperties {
    vFixOrphans: FixOrphansDirective;
  }
}

const ELEMENTS_TO_FIX = ["P", "H1", "H2", "H3", "H4", "H5", "H6", "STRONG", "SPAN"];
const ORPHAN_REGEX = /((?<=\s|^)|^\s+)([aiouwz])(\s+|$)/gi;

const fixOrphans = ((el, { value: customElements }) => {
  const elementsToFix = customElements !== undefined ? customElements : ELEMENTS_TO_FIX;

  const treeWalker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, (node) =>
    node.parentElement && elementsToFix.includes(node.parentElement.nodeName)
      ? NodeFilter.FILTER_ACCEPT
      : NodeFilter.FILTER_SKIP
  );

  while (treeWalker.nextNode()) {
    const node = treeWalker.currentNode;
    if (node.textContent && node.textContent?.trim().length > 0) {
      node.textContent = node.textContent.replace(ORPHAN_REGEX, "$2\u00A0");
    }
  }
}) satisfies FixOrphansDirective;

export default fixOrphans;

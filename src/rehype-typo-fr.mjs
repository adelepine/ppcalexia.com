// Typographie française : espaces insécables avant : ; ! ? » et après «
// (évite qu'un signe de ponctuation se retrouve seul en début de ligne)
export default function rehypeTypoFr() {
  const fix = (t) =>
    t.replace(/ ([:;!?»])/g, ' $1').replace(/« /g, '« ');
  const walk = (node) => {
    if (node.type === 'text') node.value = fix(node.value);
    if (node.tagName === 'code' || node.tagName === 'pre') return;
    (node.children || []).forEach(walk);
  };
  return (tree) => walk(tree);
}

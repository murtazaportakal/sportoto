/** Keep the immediate saved preview on the same model as the published snapshot. */
function embedBrowserModel(html,model) {
  const marker=/<script type="application\/json" id="initial-model">[\s\S]*?<\/script>/;
  if(!marker.test(html))throw new Error('Missing saved-model marker in browser shell');
  const json=JSON.stringify(model).replace(/</g,'\\u003c');
  return html.replace(marker,()=>'<script type="application/json" id="initial-model">'+json+'</script>');
}
module.exports={embedBrowserModel};

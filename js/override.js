window.addEventListener('load', function() {
	console.log(document.body.innerText);
		function getTextNodesIn(elem, opt_fnFilter) {
		  var textNodes = [];
		  if (elem) {
		    for (var nodes = elem.childNodes, i = nodes.length; i--;) {
		      var node = nodes[i], nodeType = node.nodeType;
		      if (nodeType == 3) {
		        if (!opt_fnFilter || opt_fnFilter(node, elem)) {
		          textNodes.push(node);
		        }
		      }
		      else if (nodeType == 1 || nodeType == 9 || nodeType == 11) {
		        textNodes = textNodes.concat(getTextNodesIn(node, opt_fnFilter));
		      }
		    }
		  }
		  return textNodes;
		}

		var menu = document;
		getTextNodesIn(menu, function(textNode, parent) {
			var t = textNode.nodeValue;
			var v = t.replace(/(bitcoin|ethereum|dogecoin|monero|litecoin)/ig, "monopolpenger");
			if (t !== v) textNode.nodeValue = v;
		});
});

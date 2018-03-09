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
		function replaceEm() {
			var menu = document;
			getTextNodesIn(menu, function(textNode, parent) {
				var t = textNode.nodeValue;
				var v = t.replace(/(bitcoin|ethereum|dogecoin|monero|litecoin)/ig, "monopoly money");
				v = v.replace(/(crypto( ?currency)? ?market)/ig, "pretend money market");
				v = v.replace(/(crypto ?wave)/ig, "pretend money bubble");
				v = v.replace(/(crypto ?currency)/ig, "pretend money");
				v = v.replace(/(crypto ?coin)/ig, "play coin");
				if (t !== v) textNode.nodeValue = v;
			});

		}
		setTimeout(replaceEm, 0);
		setTimeout(replaceEm, 2000);


});

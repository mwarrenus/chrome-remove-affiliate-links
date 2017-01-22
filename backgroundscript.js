function remove_affiliate_links( details ) {
	if ( details.url.match( /[?&]tag=[\w-]+/ ) != null) {
		return {
			redirectUrl: details.url.replace( /([?&]tag=[\w-]+)/, '' )
		};
	}
}

chrome.webRequest.onBeforeRequest.addListener( remove_affiliate_links, { urls: ["*://www.amazon.com/*", "*://www.amazon.co.uk/*", "*://amazon.com/*", "*://amazon.co.uk/*", "*://smile.amazon.com/*"] }, ["blocking"] );

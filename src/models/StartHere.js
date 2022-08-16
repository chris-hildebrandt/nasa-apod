// set up the api and get the router and urls figured out, then create your model by navagating to the api in your browser to see what the data looks like and what you want to capture for your objects.

// for api search queries, you need to use a params: instead of string interpolating the ? it should look like:
// async getItemBySearch(searchTerm) {
// const res = await api.get('/search/etc', {params: {query: searchTerm}})
// }
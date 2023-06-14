function generate() {
	console.log('prénom généré')
}
// we created a function called generate. We haven't exported it yet so NodeJS doesn't know it can be used..

module.exports = generate
// we tell NodeJS to export this function because we will need to use it in other files.
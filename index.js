const { program } = require('commander');
require('colors');

const { listContacts, getContactById, removeContact, addContact } = require('./src/contacts');

program
	.option("-a, --action <type>", "choose action")
	.option("-i, --id <type>", "user id")
	.option("-n, --name <type>", "user name")
	.option("-e, --email <type>", "user email")
	.option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const options = program.opts();

async function invokeAction() {
	switch (options.action) {
		case 'list':
			console.log(await listContacts());
			break;
		case 'get':
			console.log(await getContactById(options.id));
			break;
		case 'remove':
			console.log(await removeContact(options.id));
			break;
		case 'add':
			console.log(await addContact(options.name, options.email, options.phone));
			break;
		default:
			console.log('Invalid action'.red);
	}
}

invokeAction().then();

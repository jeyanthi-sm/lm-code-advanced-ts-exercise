import { addUserToServer } from "../../../api/add_user_to_server";
import { states } from "../../../states/states";
import { clear, print, printNewLine, prompt } from "../../../ui/console";
import { User } from "../../../../../server/src/types/posts.types"; 
export async function addUser() {
	clear("yes");

	const id = await prompt("What userId shall we add? ");
	const name = await prompt("What is the user Name? ");
	const newUser:User = { id:id, name:name,creationDate:new Date()}
	printNewLine();

	print(`📨 Adding User "${id} ${name}"...`);
    const success = await addUserToServer(newUser);

	if (success === true) print("🥳 User Added successfully!");
	else print("😵 User NOT received.");

	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	return states.MENU;
}

import { addUserToServer } from "../../../api/add_user_to_server";
import { states } from "../../../states/states";
import { clear, print, printNewLine, prompt } from "../../../ui/console";

export async function addUser() {
	clear("yes");

	const user = await prompt("Which user shall we add? ");

	printNewLine();
	print(`📨 Adding User "${user}"...`);
    const success = await addUserToServer(user);

	if (success === true) print("🥳 User Added successfully!");
	else print("😵 User NOT received.");

	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	return states.MENU;
}

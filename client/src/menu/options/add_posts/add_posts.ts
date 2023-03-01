import { states } from "../../../states/states";
import { clear, print, printNewLine, prompt } from "../../../ui/console";
import { Post, User } from "../../../../../server/src/types/posts.types"; 
import { addUserToServer } from "../../../api/add_user_to_server";
import { addPostsToServer } from "../../../api/add_posts_to_server";
export async function addPosts() {
	clear("yes");


	const id = await prompt("What is the postId shall we add? ");
	const title = await prompt("What is the post title? ");
    const text = await prompt("Enter the text");
    const author = await prompt("Enter the Author");

    const userId = await prompt("What userId shall we add? ");
	const name = await prompt("What is the user Name? ");
	
    const newUser:User = { id:id, name:name,creationDate:new Date()}

    const newPost:Post = { id:id, title:title,text:text, author:newUser}

    printNewLine();

	print(`📨 Adding User "${id} ${name}"...`);
    const userSuccess = await addUserToServer(newUser);

	if (userSuccess === true) print("🥳 User Added successfully!");
	else print("😵 User NOT received.");

    print(`📨 Adding Post "${id} ${title} ${text} ${author} "...`);
    const postSuccess = await addPostsToServer(newPost);

	if (postSuccess === true) print("🥳 Post Added successfully!");
	else print("😵 Post NOT received.");

	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	return states.MENU;
}

import { print, prompt } from "../ui/console";
import { baseUrl } from "./base_url";
import { User, Post } from "../../../server/src/types/posts.types";
import { addUser } from "../menu/options/add_user/add_user";

export async function addPostsToServer(inputPost: Post) {
   

    try {
		const result = await fetch(baseUrl + "/api/posts/add/", {
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({ post: inputPost }),
		});

       
        
		const json = await result.json();

		const { success } = json;

		return success;
	} catch (e) {
		console.error(e);
		return false;
	}
}

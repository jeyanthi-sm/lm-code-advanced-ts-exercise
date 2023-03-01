import { print, prompt } from "../ui/console";
import { baseUrl } from "./base_url";
import { User } from "../../../server/src/types/posts.types";

export async function addUserToServer(inputUser: User) {
	try {
		const result = await fetch(baseUrl + "/api/users/add/", {
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({ user: inputUser }),
		});

       
        
		const json = await result.json();

		const { success } = json;

		return success;
	} catch (e) {
		console.error(e);
		return false;
	}
}

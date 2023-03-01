import { User } from "../types/posts.types";
let currentUsers:User[] = [
	{
		id: "1",
		name: "Spicy Hotfish",
		creationDate: new Date(),
	},
	{
		id: "2",
		name: "Sally-Anne Writerperson",
		creationDate: new Date(),
	},
	{
		id: "3",
		name: "Jimmy Alias",
		creationDate: new Date(),
	},
	{
		id: "4",
		name: 'Steve "The Hoop" Hooper',
		creationDate: new Date(),
	}, 
];
export function getAllUsers(): User[] {
	// in the absence of a true Model layer, our service can simply return a hard-coded array of users

	return currentUsers;
}
currentUsers = getAllUsers();
export function addUser(inputUser:User): boolean {
	// in the absence of a true Model layer, our service can simply return a hard-coded array of users
    currentUsers.push(inputUser);
	console.log([...currentUsers], inputUser)
	//return [...getAllUsers(), inputUser];
	console.log(inputUser);
	console.log(currentUsers);
    currentUsers.push(inputUser);
    return true;
}
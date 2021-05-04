import { connection } from "..";

//ponto de interrogação = pode ou não vim na chamada da minha função
export default async function updateUser(
    id: string,
    name?: string,
    nickname?: string,
    email?: string
){
    if(name){
        await connection.raw(`
        UPDATE to_do_list_users
        SET name = '${name}'
        WHERE id = '${id}';
        `)
    }
    if(nickname){
        await connection.raw(`
        UPDATE to_do_list_users
        SET nickname = '${nickname}'
        WHERE id = '${id}';
        `)
    }
    if(email){
        await connection.raw(`
        UPDATE to_do_list_users
        SET email = '${email}'
        WHERE id = '${id}';
        `)
    }
}
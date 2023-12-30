import { google } from 'googleapis';
/**
 * 
 * @param {Number} number
 * @param {String} userId
 */
export async function getRecentMail(userId, number) {
    const res =  await fetch(`https://gmail.googleapis.com/gmail/v1/users/${userId}/messages?maxResults=${number}`)
    const { messages } = await res.json();
    return messages;
}
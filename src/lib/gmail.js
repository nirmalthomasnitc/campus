export function getRecentMail(uid, num) {
    return fetch(`https://gmail.googleapis.com/gmail/v1/users/me/messages/?maxResults=${num}`).then(res => res.json())
}
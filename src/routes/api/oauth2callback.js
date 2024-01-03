export default function(req, res) {
    console.log('oauth2callback')
    res.redirect('/auth/success');
}
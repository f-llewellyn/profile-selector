var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/f-llewellyn/profile-selector.git', // Update to point to your repository  
        user: {
            name: 'Finn Llewellyn', // update to use your name
            email: 'llewellynfinn@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)
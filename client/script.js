document.getElementById('contactForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const submitBtn = event.target.querySelector('.submit-btn');
    const messageBox = document.getElementById('messageBox');

    submitBtn.classList.add('loading');
    submitBtn.textContent = 'sending...';

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const data = { name, email, message };

    try {
        const response = await fetch('https://contact-form-omega-three.vercel.app/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        submitBtn.classList.remove('loading');

        if (response.ok) {
            messageBox.textContent = 'message sent! catch you soon :3';
            messageBox.className = 'message success show';
            submitBtn.textContent = 'sent! ✨';

            document.getElementById('contactForm').reset();

            setTimeout(() => {
                submitBtn.textContent = 'send it! ✨';
            }, 2500);
        } else {
            throw new Error('Failed to send');
        }
    } catch (error) {
        submitBtn.classList.remove('loading');
        submitBtn.textContent = 'send it! ✨';
        messageBox.textContent = 'oof, something broke... try again? :3';
        messageBox.className = 'message error show';
    }

    setTimeout(() => {
        messageBox.classList.remove('show');
    }, 4500);
});
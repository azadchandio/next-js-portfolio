import PushBullet from 'pushbullet';

export async function POST(req) {
  try {
    const data = await req.json();
    
    // Initialize Pushbullet with your API key
    const pusher = new PushBullet(process.env.PUSHBULLET_API_KEY);
    
    // Create the notification message
    const message = `
      New Contact Form Submission:
      
      Name: ${data.firstname} ${data.lastname}
      Email: ${data.email}
      Phone: ${data.phone}
      Service: ${data.service}
      Message: ${data.message}
    `;
    
    // Send the notification
    await pusher.note({}, 'New Contact Form Submission', message);
    
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return new Response(JSON.stringify({ error: 'Failed to process request' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
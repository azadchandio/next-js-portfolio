import PushBullet from 'pushbullet';

export async function POST(req) {
  console.log('🟢 Contact form submission received');
  
  try {
    const data = await req.json();
    console.log('📝 Form data received:', data);

    // Check if we have the API key
    const apiKey = process.env.PUSHBULLET_API_KEY;
    if (!apiKey) {
      console.error('❌ PUSHBULLET_API_KEY is not set in environment variables');
      throw new Error('Pushbullet API key is not configured');
    }
    console.log('🔑 Pushbullet API key found');

    // Initialize Pushbullet
    const pusher = new PushBullet(apiKey);
    console.log('✅ Pushbullet initialized');
    
    // Create the notification message
    const message = `
      New Contact Form Submission:
      
      Name: ${data.firstname} ${data.lastname}
      Email: ${data.email}
      Phone: ${data.phone}
      Service: ${data.service}
      Message: ${data.message}
    `;
    console.log('📨 Preparing to send message:', message);
    
    try {
      // Send the notification with error handling
      const pushResponse = await pusher.note({}, 'New Contact Form Submission', message);
      console.log('✅ Pushbullet notification sent successfully:', pushResponse);
      
      return new Response(JSON.stringify({ 
        success: true,
        message: 'Contact form submitted and notification sent'
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (pushError) {
      console.error('❌ Pushbullet notification failed:', pushError);
      throw pushError; // Re-throw to be caught by outer try-catch
    }
    
  } catch (error) {
    console.error('❌ Error processing contact form:', error);
    console.error('Error details:', {
      name: error.name,
      message: error.message,
      stack: error.stack
    });
    
    return new Response(JSON.stringify({ 
      error: 'Failed to process request',
      details: error.message
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
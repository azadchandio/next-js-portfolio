import PushBullet from 'pushbullet';

export async function GET() {
  try {
    const pusher = new PushBullet(process.env.PUSHBULLET_API_KEY);
    const testMessage = 'Test notification from portfolio website';
    
    console.log('🔄 Sending test notification...');
    const response = await pusher.note({}, 'Test Notification', testMessage);
    console.log('✅ Test notification sent:', response);
    
    return new Response(JSON.stringify({ success: true, response }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('❌ Test notification failed:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
} 
import { NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'crypto';

const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET;

// Fonction pour obtenir l'access token PayPal
async function getPayPalAccessToken() {
  const authResponse = await fetch('https://api.paypal.com/v2/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`).toString('base64')}`,
    },
    body: 'grant_type=client_credentials',
  });

  const data = await authResponse.json();
  return data.access_token;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { productId, amount, currency, customerName, customerEmail } = body;

    const accessToken = await getPayPalAccessToken();
    const transactionId = randomUUID();

    const orderData = {
      intent: 'CAPTURE',
      purchase_units: [{
        reference_id: transactionId,
        amount: {
          currency_code: currency || 'USD',
          value: amount.toString(),
        },
        payee: {
          email_address: customerEmail,
        },
      }],
    };

    const response = await fetch('https://api.paypal.com/v2/checkout/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      body: JSON.stringify(orderData),
    });

    const order = await response.json();

    return NextResponse.json({
      success: true,
      data: {
        orderId: order.id,
        approvalUrl: order.links?.find((link: any) => link.rel === 'approve')?.href,
      },
    });
  } catch (error) {
    console.error('Erreur PayPal:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur lors de la création du paiement PayPal' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ 
    message: 'Endpoint PayPal pour l\'initiation de paiement' 
  });
}
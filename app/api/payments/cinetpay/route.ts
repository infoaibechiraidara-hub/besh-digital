import { NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'crypto';

const CINETPAY_API_KEY = process.env.CINETPAY_API_KEY;
const CINETPAY_SELLER_KEY = process.env.CINETPAY_SELLER_KEY;
const CINETPAY_SITE_ID = process.env.CINETPAY_SITE_ID;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { productId, amount, currency, customerName, customerEmail, method } = body;

    const transactionId = randomUUID();

    // Réponse pour CinetPay
    const cinetPayResponse = {
      api_key: CINETPAY_API_KEY,
      site_id: CINETPAY_SITE_ID,
      transaction_id: transactionId,
      amount: amount.toString(),
      currency: currency || 'XOF',
      customer_name: customerName,
      customer_email: customerEmail,
      notify_url: `${process.env.NEXT_PUBLIC_APP_URL}/api/webhooks/cinetpay`,
      return_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout/cancel`,
      payment_method: method,
    };

    return NextResponse.json({
      success: true,
      data: cinetPayResponse,
    });
  } catch (error) {
    console.error('Erreur CinetPay:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur lors de la création du paiement' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ 
    message: 'Endpoint CinetPay pour l\'initiation de paiement Mobile Money' 
  });
}
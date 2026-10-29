export interface CinetPayPayment {
  api_key: string;
  site_id: string;
  transaction_id: string;
  amount: number;
  currency: string;
  customer_name: string;
  customer_email: string;
  return_url: string;
  cancel_url: string;
  notify_url: string;
  payment_method?: string;
}

export async function createCinetPayPayment(params: {
  productId: string;
  amount: number;
  currency?: string;
  customerName: string;
  customerEmail: string;
  method?: string;
}): Promise<{ paymentUrl: string; transactionId: string }> {
  const apiKey = process.env.CINETPAY_API_KEY!;
  const siteId = process.env.CINETPAY_SITE_ID!;
  const notifyUrl = process.env.NEXT_PUBLIC_APP_URL + '/api/webhooks/cinetpay';
  const returnUrl = process.env.NEXT_PUBLIC_APP_URL + '/checkout/success';
  const cancelUrl = process.env.NEXT_PUBLIC_APP_URL + '/checkout/cancel';

  const transactionId = crypto.randomBytes(16).toString('hex');

  const paymentData: CinetPayPayment = {
    api_key: apiKey,
    site_id: siteId,
    transaction_id: transactionId,
    amount: amount,
    currency: currency || 'XOF',
    customer_name: params.customerName,
    customer_email: params.customerEmail,
    return_url: returnUrl,
    cancel_url: cancelUrl,
    notify_url: notifyUrl,
    payment_method: params.method,
  };

  // Dans un cas réel, on enverrait une requête à l'API CinetPay
  // Pour cet exemple, on génère l'URL de paiement directement
  const paymentUrl = `https://pay.cinetpay.com/v3/index.php?api_key=${apiKey}&site_id=${siteId}&transaction_id=${transactionId}&amount=${amount}&currency=${currency || 'XOF'}`;

  return { paymentUrl, transactionId };
}

// Validation du webhook CinetPay
export function validateCinetPayWebhook(headers: Headers, body: string): boolean {
  const apiKey = process.env.CINETPAY_API_KEY!;
  const expectedSignature = crypto
    .createHmac('sha256', apiKey)
    .update(body)
    .digest('hex');
  
  const receivedSignature = headers.get('X-CinetPay-Signature') || '';
  
  return crypto.timingSafeEqual(
    Buffer.from(receivedSignature, 'hex'),
    Buffer.from(expectedSignature, 'hex')
  );
}

// Modes de paiement disponibles
export const PAYMENT_METHODS = {
  ORANGE_MONEY_CI: 'ORANGE_MONEY',
  ORANGE_MONEY_SN: 'ORANGE_MONEY',
  WAVE: 'WAVE_MOBILE',
  MTN_CI: 'MTN_MOBILE_MONEY',
  MTN_MN: 'MTN_MOBILE_MONEY',
  PAYPAL: 'PAYPAL',
  CARTE_CREDIT: 'CB',
};

// Fonction utilitaire crypto
import crypto from 'crypto';
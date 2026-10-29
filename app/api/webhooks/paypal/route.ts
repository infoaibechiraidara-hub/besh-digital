import { NextRequest, NextResponse } from 'next/server';

// Webhook PayPal pour recevoir les notifications de paiement
export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    const { event_type, resource } = payload;

    // Vérifier le type d'événement
    if (event_type === 'PAYMENT.CAPTURE.COMPLETED') {
      const { id, amount, payer } = resource;

      console.log('Paiement PayPal complété:', {
        captureId: id,
        amount: amount.value,
        currency: amount.currency_code,
        payerEmail: payer.email_address,
      });

      // Ici, vous devriez:
      // 1. Vérifier la validité du webhook avec PayPal
      // 2. Mettre à jour la base de données avec le statut du paiement
      // 3. Générer le lien de téléchargement sécurisé
      // 4. Envoyer un email de confirmation avec le lien de téléchargement
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Erreur webhook PayPal:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ 
    message: 'Webhook PayPal - POST requis pour recevoir les notifications' 
  });
}